<template>
  <div class="container">
    <div id="menu08303">
      <div class="flex">
        <div class="left">
          <div class="tableBox">
            <table>
              <tr>
                <th>
                  페이지 목록
                </th>
                <td>
                  <select v-model="campSelect" @change="getLandingPageLst(campSelect)">
                    <option value="-1">선택하세요</option>
                    <option v-for="(campaignNameList, index) in campaignNameListObj"
                      :key="index" 
                      :value="campaignNameList.caId"
                      >{{ campaignNameList.name }}
                    </option>
                  </select>
                  <select v-model="landSelect" @change="getLandingPageOne(landSelect)">
                    <option value="-1">선택하세요</option>
                    <option v-for="(landingData, index) in landingDataObj"
                      :key="index" 
                      :value="landingData.pgId"
                      >{{ landingData.name }}
                    </option>
                  </select>
                </td>
              </tr>

              <tr>
                <th>
                  DB확인 페이지 ID명
                </th>
                <td class="idBox pad">
                  <span>
                    {{idComment}}
                  </span>
                </td>
              </tr>
              <tr>
                <th>
                  외부 접속 비밀번호 
                </th>
                <td>
                  <input type="text" name="" id="" v-model="passWd">
                </td>
              </tr>
              <tr>
                <th>
                  조회가능 일시
                </th>
                <td>
                  <input type="date" name="" id="" v-model="srtDt"> ~ <input type="date" name="" id="" v-model="endDt">
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </table>
          </div>
          <div class="btnBox">
            <button class="clear" @click="CreateClearClntId()">초기화</button>
            <button class="submit" @click="CreateExternalClntId()">만들기</button>
            <button class="modify">변경</button>
            <button class="del">삭제</button>
          </div>
        </div>
        <div class="right">
          ddddd
        </div>
      </div>
      <div class="tableBox adminData">
        <table>
          <thead>
            <tr>
              <th class="admNo">번호</th>
              <th class="admStart">등록일시</th>
              <th class="admCamp">캠페인 명</th>
              <th class="admLand">랜딩페이지 명</th>
              <th class="admId">ID</th>
              <th class="admPw">PW</th>
              <th class="admAccess">최종접속일시</th>
              <th class="admEnd">만기일(예정)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stUserList, index) in stUserListObj"
              :key="index"
            >
              <th class="admNo">{{index+1}}</th>
              <td class="admStart">{{stUserList.createDt}}</td>
              <td class="admCamp">{{stUserList.caNm}}</td>
              <td class="admLand">{{stUserList.pgNm}}</td>
              <td class="admId">{{stUserList.externalClntId}}</td>
              <td class="admPw">{{stUserList.externalClntPw}}</td>
              <td class="admAccess">추후 제공 예정</td>
              <td class="admEnd">{{stUserList.endDt}}</td>
            </tr>
          </tbody>
          <tfoot>
						<tr>
							<td class="dataBtn" colspan="8">
								<span class="pageleft" v-if="pageCount.length > 0" @click="getClntUser(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								
                <ul  class="pageNum">
                  <li class="pageBtn" 
                    v-bind:class="{on : (indexPage) == curPage}" 
                    v-for="(indexPage, index) in pageCount" :key="index" 
                    @click="getClntUser(pageCount[0] + index, false)"
                  >
                    {{indexPage}}
                  </li>
                </ul>

								<span class="pageright" v-if="pageCount.length > 0" @click="getClntUser(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
							</td>
						</tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
					campSelect					: "-1"
				, campaignNameListObj : ''
				, landSelect					: "-1"
				, landingDataObj			: ''
        , landingDataOne      : ''
				, sendUrl             : ''
				, encrypt             : ''
        , postBack            : ''
				, used								: ''
        , landStatus          : ''
				, stAskValue          : []
				, stAskListObj        : []
				, stAskList           : []
        , stUserListObj       : ''
        , passWd              : ''
        , srtDt               : ''
        , endDt               : ''
        , idComment           : '만들기 클릭 후 아이디는 자동으로 생성됩니다.'
        , pwComment           : ''

				, pageCount             : []
				, selectRowCount        : 10
				, curRunTotalPages      : 0
        , curPage               : 0
			}
		},
		methods: {
			//******************************************************************************
			// 캠페인 목록
			//******************************************************************************
			getCampaignNameLst(campSelect) {
        if(campSelect == "-1") {
          this.landSelect = "-1";
          return;
        }
				axios.get("http://api.adinfo.co.kr:30000/GetCampaignNameLst", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
					}
				})
				.then(response => {
					this.campaignNameListObj = response.data;
          //this.getLandingPageLst();
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 랜딩페이지 목록
			//******************************************************************************
			getLandingPageLst() {
        if(this.campSelect == "-1") {
          this.landSelect = "-1";
//          return;
        }
        axios.get("http://api.adinfo.co.kr:30000/GetLandingListForMbAdCaCode",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , mkId: this.$store.state.mbId
            , caId: this.campSelect
            , useTp: '00'
          }
        })
        .then(response => {
					this.landingDataObj = response.data;

          this.getClntUser(1, true);

          // if(this.landingDataObj.length > 0) {
          //   this.landSelect = response.data[0].pgId;
          //   this.getLandingPageOne(this.landSelect);
          // }
          // else
          //   this.landSelect = -1;
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// 랜딩페이지 단건 조회
			//******************************************************************************
			getLandingPageOne() {
        // if(this.landSelect == "-1")
        //   return;

        axios.get("http://api.adinfo.co.kr:30000/GetLandingListOne",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , caId: this.campSelect
            , pgId: this.landSelect
          }
        })
        .then(response => {
          this.landingDataOne = response.data;

          if(response.data.useTp == "00") {
            this.landStatus = '랜딩페이지 사용 가능';
          }
          else if(response.data.useTp == "01") {
            this.landStatus = '랜딩페이지 이용 정지';
          }
          else if(response.data.useTp == "02") {
            this.landStatus = '랜딩페이지 이용 정료';
          }
          else { // if(response.data.useTp == "03") {
            this.landStatus = '';
            return;            
          }
        })
        .catch(error => {
          console.log(error);
        })
			},
      //******************************************************************************
      // 신규사용자 등록
      //******************************************************************************
      CreateExternalClntId() {
        if(this.campSelect == "-1" || this.landSelect == "-1") {
          alert("캠페인과 랜딩페이지 정보를 선택해주세요.");
          return;
        }

        if(this.passWd == "" || this.passWd == null) {
          alert("등록하실 외부 접속 비밀번호를 입력해주세요.");
          return;
        }

        let lAdSrtDt = this.srtDt.replace(/-/gi,"", (match) => {
          return '' + match + '';
        });
        let lAdEndDt = this.endDt.replace(/-/gi,"", (match) => {
          return '' + match + '';
        });

        let data = {
            mbId        : this.$store.state.mbId
          , adId        : this.$store.state.adId
          , caId        : this.campSelect
          , mkId        : this.$store.state.adId
          , pgId        : this.landSelect
          , clntId      : this.$store.state.clntId
          , status      : '00'  // 00:생성, 01:일시정지, 02:삭제
          , externalPw  : this.passWd
          , srtDt       : lAdSrtDt
          , endDt       : lAdEndDt
          , description : ''
        };


        const frm = new FormData();
        frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));
        axios.post("http://api.adinfo.co.kr:30000/CreExternalUser", frm, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {

          if( response.data.status == true) {
            this.idComment = response.data.externalClntId + " / " + response.data.externalClntPw;

            this.campSelect = "-1";
            this.landSelect = "-1";
            this.passWd = '';
          }
          else {
            this.idComment = '';
          }

          // alert(response.data.message);
          // if( response.data.status == true) {
          //   window.open(response.data.landingUrl);
          //   this.InitForm();
          //   this.$router.push({ path : "MENU_08301" });
          // }
        })
        .catch(error => {
          console.log(error);
        })
      },
			//******************************************************************************
			// 사용자 목록 조회
			//******************************************************************************
			getClntUser(selectPage, firstSel) {
        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.curPage = selectPage;

        axios.get("http://api.adinfo.co.kr:30000/GetExternalUserList",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , caId: this.campSelect
            , pgId: this.landSelect
            , status: '00'
          }
        })
        .then(response => {
          console.log(response);
          this.stUserListObj = response.data[1];
          // this.landingDataOne = response.data;

          //--------------------------------------------------------------------
          // 페이지처리 시작
          //--------------------------------------------------------------------
          {
            let arrGab     = [];
            let pageUpPage = 0;

            // 전체 페이지의 수를 확인한다.
            this.curRunTotalPages = Math.ceil(response.data[0][0].rowTotalCount / this.selectRowCount);

            // 페이지가 10개 이하이면...
            if( this.curRunTotalPages < 10) {
              for(let i = 0; i < this.curRunTotalPages; i++) {
                arrGab.push(i+1);
              }
              this.pageCount = arrGab;
            }
            else {
              //--------------------------------------------------------------------
              // 10페이지 이하면 10으로 나눴을때 0이 되어 따로 처리함.
              //--------------------------------------------------------------------
              let pageCut = Math.floor((selectPage) / 10) * 10;

              if( (selectPage % 10) != 0 ) {
                let nLoop = 0;
                for(let i = pageCut; i < this.curRunTotalPages; i++) {
                  if( (nLoop+pageUpPage) >= 10 + pageUpPage)
                    break;
                  arrGab.push( i + 1 );
                  nLoop++;
                }

                this.pageCount = arrGab;
              }
            }
          }
        })
        .catch(error => {
          console.log(error);
        })
			},
    },
		created() {
			this.$store.state.headerTopTitle = "랜딩페이지";
			this.$store.state.headerMidTitle = "외부 DB확인 설정";
			this.getCampaignNameLst();

      this.getClntUser(1, true);
		}
  }
</script>

<style scoped>

  #menu08303 .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  #menu08303 .flex .left {
    width: 800px;
  }

  #menu08303 .flex .left .tableBox {
    margin-bottom: 10px;
  }

  #menu08303 .flex .left .tableBox td input,
  #menu08303 .flex .left .tableBox td select{
    border: 1px solid #e5e5e5;
    margin: 0 5px;
    height: 100%;
    padding: 5px;
    width: 200px;
  }

  #menu08303 .flex .left .tableBox td.pad {
    padding-left: 15px;
  }



  #menu08303 .flex .left .tableBox td input[type="date"] {
    height: 29px;
  }

  #menu08303 .flex .left .btnBox {
    text-align: center;
  }

  #menu08303 .flex .left .btnBox button {
    font-weight: 700;
    margin: 0 5px;
    width: 92px;
    height: 31px;
    color: #fff;
    border-radius: 10px;
    border: none;
  }

  #menu08303 .flex .left .btnBox .clear {
    background: #686868;
  }

  #menu08303 .flex .left .btnBox .submit {
    background: #e25b45;
  }

  #menu08303 .flex .left .btnBox .modify {
    color: #e25b45;
    border: 1px solid #e25b45;
    background: #fff;
  }

  #menu08303 .flex .left .btnBox .del {
    background: #000;
  }

  #menu08303 .adminData th,
  #menu08303 .adminData td {
    border: none;
    padding: 15px 18px;
    text-align: center;
    border: none;
    position: relative;
  }

  #menu08303 .adminData thead {
    border-bottom: 1px solid #5c5c5c;
  }

  #menu08303 .adminData thead th::after {
    clear: both;
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  #menu08303 .adminData tbody tr {
    border-bottom: 1px solid #ececec;
  }

  #menu08303 .adminData thead th:last-child::after{
    display: none;
  }

  #menu08303 .adminData .admNo {
    width: 5%;
  }

  #menu08303 .adminData .admStart,
  #menu08303 .adminData .admId,
  #menu08303 .adminData .admPw,
  #menu08303 .adminData .admEnd {
    width: 10%;
  }



  #menu08303 .adminData .admCamp,
  #menu08303 .adminData .admLand {
    width: 20%;
  }
  #menu08303 .adminData .admAccess{
    width: 15%;
  }


  #menu08303 tfoot ul,
  #menu08303 tfoot ul li {
    display: inline-block;
  }
  #menu08303 tfoot span {
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
  #menu08303 tfoot ul li {
    margin: 0 10px;
    cursor: pointer;
  }
  #menu08303 tfoot ul li.on {
    font-weight: 900;
    position: relative;
  }
  #menu08303 tfoot ul li.on:after {
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