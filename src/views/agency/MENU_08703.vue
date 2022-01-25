<template>
	<div class="container">
		<div id="menu08703">
			<div class="tableBox techTop">
				<h1>기능 개선 요청</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="techNum"   >번호</th>
							<th class="techNm"    >제목</th>
							<th class="techWriter">작성자</th>
							<th class="techDate"  >작성일</th>
							<th class="techOpen"  >조회수</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(techList, index) in techListObj" :key="index">
							<th class="techNum">{{techList.seqNo}}</th>
							<td class="techNm" @click="GoTechCont(techList.seqNo)">
								{{techList.title}}</td>
							<td class="techWriter">{{techList.clntNm}}</td>
							<td class="techDate">{{techList.createDt}}</td>
							<td class="techOpen">{{techList.readCount}}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<button @click="WriteTech()">기능 개선 요청</button>
							</td>
						</tr>
						<tr>
              <td class="dataBtn" colspan="5">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getTechTitleList(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn" 
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getTechTitleList(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getTechTitleList(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
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
					techListObj: ''
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
      getTechTitleList(selectPage, firstSel) {
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

        axios.get("http://api.adinfo.co.kr:30000/inprove/titlelist",
        {
          params: {
              seqNo: 9999999999
						, curPage   : selectPage
						, rowCount  : this.selectRowCount
          }
        })
        .then(response => 
				{
          this.techListObj = response.data;

          //------------------------------------------------------------------------------
          // 페이지 정보 조회
          //------------------------------------------------------------------------------
          axios.get("http://api.adinfo.co.kr:30000/GetInproveForAllPageCount",
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

			GoTechCont(index) {
				this.$router.push({ 
					name : 'MENU_08703_2', 
					params: { index: index }
				})
			},
			WriteTech(){
				this.$router.push({ 
					name : 'MENU_08703_3', 
				})
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "기능 개선 요청하기";

			this.getTechTitleList(1, true);
		}
	}
</script>

<style scoped>

	#menu08703 .techTop {
		background: #fff;
		padding: 21px;
	}

	#menu08703 .techTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08703 .techTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08703 th,
	#menu08703 td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}


	#menu08703 .techNum {
		width: 7%;
	}

	#menu08703 .techNm {
		width: 63%;
	}

	#menu08703 td.techNm {
		text-align: left;
		padding-left: 30px;
		cursor: pointer;
	}

	#menu08703 .techWriter,
	#menu08703 .techDate,
	#menu08703 .techOpen  {
		width: 10%;
	}

	#menu08703 thead {
		border-bottom: 1px solid #5c5c5c;
	}

	#menu08703 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08703 thead tr th:last-child:after{
		display: none;
	}

	#menu08703 tbody tr{
		border-bottom: 1px solid #ececec;
	}
	
	#menu08703 tfoot tr:first-child td{
		text-align: right;
	}

	#menu08703 tfoot tr:first-child td button {
		padding: 12px 24px;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		background: #393939;
	}



	#menu08703 tbody span{
		display: inline-block;
		width: 80px;
	}


	#menu08703 tfoot ul,
	#menu08703 tfoot ul li {
		display: inline-block;
	}

	#menu08703 tfoot span {
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

	#menu08703 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}

	#menu08703 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}

	#menu08703 tfoot ul li.on:after {
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