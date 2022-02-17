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
                  <select name="" id="">
                    <option value="0" disabled>캠페인 목록</option>
                  </select>
                  <select name="" id="">
                    <option value="0" disabled>랜딩페이지 목록</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  랜딩페이지 상태
                </th>
                <td class="pad">
                  현재상태 불러오기
                </td>
              </tr>
              <tr>
                <th>
                  DB확인 페이지 ID명
                </th>
                <td class="idBox pad">
                  <span>
                    만들기 클릭 후 아이디는 자동으로 생성됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th>
                  외부 접속 비밀번호 
                </th>
                <td>
                  <input type="text" name="" id="">
                </td>
              </tr>
              <tr>
                <th>
                  조회가능 일시
                </th>
                <td>
                  <input type="date" name="" id=""> ~ <input type="date" name="" id="">
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </table>
          </div>
          <div class="btnBox">
            <button class="submit">만들기</button>
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
            <tr>
              <th class="admNo">번호</th>
              <td class="admStart">등록일시</td>
              <td class="admCamp">캠페인 명</td>
              <td class="admLand">랜딩페이지 명</td>
              <td class="admId">ID</td>
              <td class="admPw">PW</td>
              <td class="admAccess">최종접속일시</td>
              <td class="admEnd">만기일(예정)</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="8">
                <span class="pageleft"><i class="icon-chevron-left1"></i></span>
								<ul class="pageNum">
									<li class="on">
                    1
									</li>
                  <li>
                    2
									</li>
								</ul>
                <span class="pageright"><i class="icon-chevron-right1"></i></span>
              </td>
            </tr>
          </tfoot>

          <!-- <tfoot v-if="LandingListObj.length > 0">
            <tr>
              <td class="dataBtn" colspan="8">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getLandingLst(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul class="pageNum">
									<li class="pageBtn" 
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getLandingLst(pageCount[0] + index, false)"
									>
                    {{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getLandingLst(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
              </td>
            </tr>
					</tfoot> -->
        </table>
      </div>
    </div>
  </div>
</template>

<script>

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