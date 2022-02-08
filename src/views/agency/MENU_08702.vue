<template>
	<div class="container">
		<div id="menu08701">
			<div class="tableBox noticeTop">
				<h1>문의사항</h1>
				<p>궁금하신 사항이 있으시다면 언제든지 문의해주시기 바랍니다. 신속하고 친절하게 답변드리겠습니다.</p>
				<!-- 나중에 != =>  == 으로 바꿔야함 -->
				<!-- <div class="btnBox" v-if="$store.state.adGradeCd != '01'"> -->
				<div class="btnBox">
					<button @click="WriteNotice()">문의사항 작성하기</button>
				</div>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="noticeNum"   >번호</th>
							<th class="noticeNm"    >제목</th>
							<th class="noticeWriter">작성자</th>
							<th class="noticeDate"  >작성일</th>
							<th class="noticeOpen"  >조회수</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(contentsList, index) in contentsListObj" :key="index">
							<th class="noticeNum">{{contentsList.seqNo}}</th>
							<td class="noticeNm" @click="GoNoticeCont(contentsList.seqNo)">
								{{contentsList.title}}</td>
							<td class="noticeWriter">{{contentsList.clntNm}}</td>
							<td class="noticeDate">{{contentsList.createDt}}</td>
							<td class="noticeOpen">{{contentsList.readCount}}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
              <td class="dataBtn" colspan="8">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn" 
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getNotifyTitleList(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
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
					contentsListObj: ''
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
      getNotifyTitleList(selectPage, firstSel) {
        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.dbSelectData = null;
				this.curPage = selectPage;

        axios.get("http://api.adinfo.co.kr:30000/notice/titlelist",
        {
          params: {
              seqNo     : 9999999999
						, curPage   : selectPage
						, rowCount  : this.selectRowCount
						, groupTp   : '01'
						, useTp     : 'R'
						, dataOnly  : 'Y'
          }
        })
        .then(response => 
				{
          this.contentsListObj = response.data[1];

          //------------------------------------------------------------------------------
          // 페이지 정보 조회
          //------------------------------------------------------------------------------
					{
            let arrGab = [];
            let pageUpPage = 0;

            // 전체 페이지의 수를 확인한다.
            this.curRunTotalPages = Math.ceil(response.data[0][0].rowTotalCount / this.selectRowCount);

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
					}
				})
			},
			GoNoticeCont(index) {
				this.$router.push({ 
					name : 'MENU_08702_2', 
					params: { index: index }
				})
			},
			WriteNotice(){
				this.$router.push({ 
					name : 'MENU_08702_3', 
					// params: { index: index } 
				})
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "문의하기";

			this.getNotifyTitleList(1, true);
		}
	}
</script>

<style scoped>
	#menu08701 .noticeTop {
		background: #fff;
		padding: 21px;
	}
	#menu08701 .noticeTop p,
	#menu08701 .prevBox p {
		color: #444;
	}
	#menu08701 .noticeTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}
	#menu08701 .noticeTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}
	#menu08701 .btnBox {
		text-align: right;
	}
	#menu08701 .btnBox button{
		padding: 10px 15px;
		border-radius: 10px;
		border: none;
		font-weight: 700;
		color: #fff;
		background: #999;
	}
	#menu08701 th,
	#menu08701 td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}
	#menu08701 .noticeNum {
		width: 7%;
	}
	#menu08701 .noticeNm {
		width: 63%;
	}
	#menu08701 td.noticeNm {
		text-align: left;
		padding-left: 30px;
		cursor: pointer;
	}
	#menu08701 .noticeWriter,
	#menu08701 .noticeDate,
	#menu08701 .noticeOpen  {
		width: 10%;
	}
	#menu08701 thead {
		border-bottom: 1px solid #5c5c5c;
	}
	#menu08701 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}
	#menu08701 thead tr th:last-child:after{
		display: none;
	}
	#menu08701 tbody tr{
		border-bottom: 1px solid #ececec;
	}
	#menu08701 tbody span{
		display: inline-block;
		width: 80px;
	}
	#menu08701 tfoot ul,
	#menu08701 tfoot ul li {
		display: inline-block;
	}
	#menu08701 tfoot span {
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
	#menu08701 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}
	#menu08701 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}
	#menu08701 tfoot ul li.on:after {
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