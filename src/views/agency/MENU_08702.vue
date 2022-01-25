<template>
	<div class="container">
		<div id="menu08702">
			<div class="tableBox boardTop">
				<h1>문의사항</h1>
				<p>궁금하신 사항이 있으시다면 언제든지 문의해주시기 바랍니다. 신속하고 친절하게 답변드리겠습니다.</p>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="boardNum"   >번호</th>
							<th class="boardNm"    >제목</th>
							<th class="boardWriter">작성자</th>
							<th class="boardDate"  >작성일</th>
							<th class="boardOpen"  >조회수</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(boardList, index) in boardListObj" :key="index">
							<th class="boardNum">{{boardList.seqNo}}</th>
							<td class="boardNm" @click="GoBoardCont(boardList.seqNo)">
								{{boardList.title}}</td>
							<td class="boardWriter">{{boardList.clntNm}}</td>
							<td class="boardDate">{{boardList.createDt}}</td>
							<td class="boardOpen">{{boardList.readCount}}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<button @click="WriteBoard()">문의하기</button>
							</td>
						</tr>
						<tr>
              <td class="dataBtn" colspan="5">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getBoardTitleList(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn" 
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getBoardTitleList(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getBoardTitleList(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
              </td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>

	</div>
</template>

<script>
	import axios          from "axios";

	export default {
		data() {
			return {
					boardListObj: ''
				, selectRowCount: 10
				, curRunTotalPages: 0
				, pageCount: []
				, selectPage: 0
			}
		},
		methods: {
			//******************************************************************************
			// 공지사항 목록조회하기.
			//******************************************************************************
      getBoardTitleList(selectPage, firstSel) {
				console.log("selectPage : " + selectPage);
				console.log("firstSel   : " + firstSel);

        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.dbSelectData = null;
				this.curPage = selectPage;

        axios.get("http://api.adinfo.co.kr:30000/ask/titlelist",
        {
          params: {
              seqNo: 9999999999
						, curPage   : selectPage
						, rowCount  : this.selectRowCount
          }
        })
        .then(response => 
				{
          this.boardListObj = response.data;

          //------------------------------------------------------------------------------
          // 페이지 정보 조회
          //------------------------------------------------------------------------------
          axios.get("http://api.adinfo.co.kr:30000/GetAskForAllPageCount",
          {
            params: {
              useTp : '0'
            }
          })
          .then(response => 
					{
            let arrGab = [];
            let pageUpPage = 0;

            // 전체 페이지의 수를 확인한다.
            this.curRunTotalPages = Math.ceil(response.data.rowTotalCount / this.selectRowCount);

            // 페이지가 10개 이하이면...
            if( this.curRunTotalPages < 10) 
						{
              for(let i = 0; i < this.curRunTotalPages; i++) 
							{
                arrGab.push(i+1);
              }
              this.pageCount = arrGab;
              return;
            }

            //--------------------------------------------------------------------
            // 10페이지 이하면 10으로 나눴을때 0이 되어 따로 처리함.
            //--------------------------------------------------------------------
            let pageCut = Math.floor((selectPage) / 10) * 10;

            if( (selectPage % 10) == 0 ) 
						{
              return;
            }

            let nLoop = 0;
            for(let i = pageCut; i < this.curRunTotalPages; i++) 
						{
              if( (nLoop+pageUpPage) >= 10 + pageUpPage)
                break;
              arrGab.push(i+1);
              nLoop++;
            }

            this.pageCount = arrGab;
					})
					.catch(error => 
					{
						console.log(error);
					})
				})
			},

			GoBoardCont(index) {
				this.$router.push({ 
					name : 'MENU_08702_2', 
					params: { index: index }
				})
			},
			WriteBoard(){
				this.$router.push({ 
					name : 'MENU_08702_3', 
				})
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "문의하기";

			this.getBoardTitleList(1, true);
		}
	}
</script>




<style scoped>

	#menu08702 .boardTop {
		background: #fff;
		padding: 21px;
	}

	#menu08702 .boardTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08702 .boardTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08702 th,
	#menu08702 td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}


	#menu08702 .boardNum {
		width: 7%;
	}

	#menu08702 .boardNm {
		width: 63%;
	}

	#menu08702 td.boardNm {
		text-align: left;
		padding-left: 30px;
		cursor: pointer;
	}

	#menu08702 .boardWriter,
	#menu08702 .boardDate,
	#menu08702 .boardOpen  {
		width: 10%;
	}

	#menu08702 thead {
		border-bottom: 1px solid #5c5c5c;
	}

	#menu08702 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08702 thead tr th:last-child:after{
		display: none;
	}

	#menu08702 tbody tr{
		border-bottom: 1px solid #ececec;
	}

	#menu08702 tbody span{
		display: inline-block;
		width: 80px;
	}

	#menu08702 tfoot tr:first-child td{
		text-align: right;
	}

	#menu08702 tfoot tr:first-child td button {
		padding: 12px 24px;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		background: #393939;
	}


	#menu08702 tfoot ul,
	#menu08702 tfoot ul li {
		display: inline-block;
	}

	#menu08702 tfoot span {
		display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    font-size: 13px;
    padding: 5px 5px;
    text-align: left;
		cursor: pointer;
	}

	#menu08702 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}

	#menu08702 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}

	#menu08702 tfoot ul li.on:after {
    clear: both;
    position: absolute;
    height: 1px;
    width: 100%;
    content: "";
    bottom: -1px;
    left: 0;
    background: #666;
	}




</style>