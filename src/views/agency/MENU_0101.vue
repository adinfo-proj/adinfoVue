<template>
	<div class="container">
		<div class="campanignSearch">
			<select name="camName" id="camName">
				<option value="">캠페인명 1</option>
				<option value="">캠페인명 2</option>
				<option value="">캠페인명 3</option>
			</select>
      <input type="radio" name="searchDay" id="searchAllDay" class="searchSubDate" checked> <label for="searchAllDay">전체</label>
      <input type="radio" name="searchDay" id="searchToday" class="searchSubDate"> <label for="searchToday">오늘</label>
      <input type="radio" name="searchDay" id="searchYesterday" class="searchSubDate"> <label for="searchYesterday">어제</label>
      <input type="radio" name="searchDay" id="searchThreeDay" class="searchSubDate"> <label for="searchThreeDay">3일</label>
      <input type="radio" name="searchDay" id="searchSevenDay" class="searchSubDate"> <label for="searchSevenDay">7일</label>		
      <input type="date" id="searchStartDate1"  v-model="serchDataDt"> ~ 
      <input type="date" id="searchEndDate1" v-model="serchDataDt02">
		</div>
		<div class="dailyDataBox">
			<div class="dailyDataMiddle">
				<h2 class="dataEm">
          {{"00"}}
				</h2>
				<p>
					참여 마케터의 수
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"50건 / 1000건"}}
				</h2>
				<p>
					당일 DB 접수
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2 class="dataEm">
				{{"710건 (71%)"}}
				</h2>
        
				<p>
					유효 DB 건수 
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2>
				{{"290건 (10%)"}}
				</h2>
				<p>
					무효 DB 건수
				</p>
			</div>
      <div class="dailyDataMiddle">
				<h2 class="dataEm">
					{{"100건 (10%)"}}
				</h2>
				<p>
					중복 DB 건수
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					광고 노출 량
				</p>
				<div class="dailyFake">
					<p>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						광고 노출 량     
					</p>
				</div>
			</div>
		</div>
		<div class="dailyDataBox">
      <div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					클릭율
				</p>
				<div class="dailyFake">
					<p>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						클릭율
					</p>
				</div>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					접수율
				</p>
				<div class="dailyFake">
					<p>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						접수율
					</p>
				</div>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					2차 전환율
				</p>
				<div class="dailyFake">
					<p>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						2차 전환율
					</p>
				</div>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					캠페인전체
				</p>
				<div class="dailyFake">
					<p>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						캠페인전체
					</p>
				</div>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					해당 캠페인 중복여부
				</p>
				<div class="dailyFake">
					<p>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						해당 캠페인 중복여부
					</p>
				</div>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					ROAS/ROI
				</p>
				<div class="dailyFake">
					<p>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="5.999" viewBox="0 0 46 5.999">
              <path id="Ellipse_4" data-name="Ellipse 4" d="M1492,235a3,3,0,1,1,3,3A3,3,0,0,1,1492,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1482,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1472,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1462,235Zm-10,0a3,3,0,1,1,3,3A3,3,0,0,1,1452,235Z" transform="translate(-1452 -232)" fill="#d0d0d0"/>
						</svg>
					</p>
					<p>
						ROAS/ROI
					</p>
				</div>
			</div>
		</div>
		<div class="dailyDataSub">
      <div class="dailyDataTop">
        <div class="dailyTab">
          <div class="dailyTabBtn" @click="DailyTabBtn(0)" v-bind:class="{on : 0 == divSelect}">DB 유입 현황</div>
          <div class="dailyTabBtn" @click="DailyTabBtn(1)" v-bind:class="{on : 1 == divSelect}">대행사 DB 지표</div>
          <div class="dailyTabBtn" @click="DailyTabBtn(2)" v-bind:class="{on : 2 == divSelect}">마케터 기준 DB 지표</div>
        </div>
        <div class="dailyEx">
          <button>
            엑셀 다운로드
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="12" viewBox="0 0 11 12">
              <image id="icon" width="11" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAABHNCSVQICAgIfAhkiAAAAGxJREFUKFNj/P//PwM6eBzjBhJklF2yC0WKcSgrhnoK5CFGIAZ7EEozAD0KYjPAPQhUDOJjBg1EE0gDhmJ0DWCFGIpBAlDTYRrgJsI0MD6Kdv0PcxNMMchKZDbUoP8oitFMh1uPohgjvnEIAACmsll1nvDKAQAAAABJRU5ErkJggg=="/>
            </svg>
          </button>
          <select name="" id="">
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="30">30개</option>
            <option value="50">50개</option>
            <option value="100">100개</option>
          </select>
        </div>
      </div>
			<div class="dailySub">
				<table class="dailySubTable" v-bind:class="{on : 0 == divSelect}">
					<thead>
						<tr>
							<th class="dailyNum">번호</th>
							<th class="dailyName">캠페인명</th>
							<th class="maketerCode">마케터 코드</th>
							<th class="inTime">유입 시간</th>
							<th class="inIP">접수 IP</th>
							<th class="dbState">DB상태</th>
							<th class="dbPrice">단가</th>
							<th class="inData">고객입력 정보</th>
						</tr>
					</thead>
					<tbody>
						<tr class="viewTr" v-bind:class="{dbSelect : 0 == dbSelectData}">
							<th class="dailyNum">10</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(0)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 0 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 1 == dbSelectData}">
							<th class="dailyNum">9</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(1)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 1 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 2 == dbSelectData}">
							<th class="dailyNum">8</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(2)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 2 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 3 == dbSelectData}">
							<th class="dailyNum">7</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(3)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 3 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 4 == dbSelectData}">
							<th class="dailyNum">6</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(4)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 4 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 5 == dbSelectData}">
							<th class="dailyNum">5</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(5)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 5 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 6 == dbSelectData}">
							<th class="dailyNum">4</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(6)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 6 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 7 == dbSelectData}">
							<th class="dailyNum">3</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(7)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 7 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 8 == dbSelectData}">
							<th class="dailyNum">2</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(8)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 8 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 9 == dbSelectData}">
							<th class="dailyNum">1</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(9)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 9 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
					</tbody>
          <tfoot>
            <tr>
              <td class="dataBtn" colspan="8">
                <a href="javascript:void(0)" class="pageleft"><i class="fas fa-angle-left"></i></a>
                <a href="javascript:void(0)" class="pageBtn">1</a>
                <a href="javascript:void(0)" class="pageBtn">2</a>
                <a href="javascript:void(0)" class="pageBtn">3</a>
                <a href="javascript:void(0)" class="pageBtn">4</a>
                <a href="javascript:void(0)" class="pageBtn">5</a>
                <a href="javascript:void(0)" class="pageright"><i class="fas fa-angle-right"></i></a>
              </td>
            </tr>
          </tfoot>

				</table>
        <table class="dailySubTable" v-bind:class="{on : 1 == divSelect}">
					<thead>
						<tr>
							<th class="dailyNum">번호</th>
							<th class="dailyName">캠페인명</th>
							<th class="maketerCode">마케터 코드</th>
							<th class="inTime">유입 시간</th>
							<th class="inIP">접수 IP</th>
							<th class="dbState">DB상태</th>
							<th class="dbPrice">단가</th>
							<th class="inData">고객입력 정보</th>
						</tr>
					</thead>
					<tbody>
						<tr class="viewTr" v-bind:class="{dbSelect : 10 == dbSelectData}">
							<th class="dailyNum">10</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(10)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 10 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 11 == dbSelectData}">
							<th class="dailyNum">9</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(11)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 11 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 12 == dbSelectData}">
							<th class="dailyNum">8</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(12)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 12 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 13 == dbSelectData}">
							<th class="dailyNum">7</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(13)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 13 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 14 == dbSelectData}">
							<th class="dailyNum">6</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(14)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 14 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 15 == dbSelectData}">
							<th class="dailyNum">5</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(15)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 15 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 16 == dbSelectData}">
							<th class="dailyNum">4</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(16)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 16 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 17 == dbSelectData}">
							<th class="dailyNum">3</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(17)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 17 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 18 == dbSelectData}">
							<th class="dailyNum">2</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(18)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 18 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 19 == dbSelectData}">
							<th class="dailyNum">1</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(19)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 19 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
					</tbody>
          <tfoot>
            <tr>
              <td class="dataBtn" colspan="8">
                <a href="javascript:void(0)" class="pageleft"><i class="fas fa-angle-left"></i></a>
                <a href="javascript:void(0)" class="pageBtn">1</a>
                <a href="javascript:void(0)" class="pageBtn">2</a>
                <a href="javascript:void(0)" class="pageBtn">3</a>
                <a href="javascript:void(0)" class="pageBtn">4</a>
                <a href="javascript:void(0)" class="pageBtn">5</a>
                <a href="javascript:void(0)" class="pageright"><i class="fas fa-angle-right"></i></a>
              </td>
            </tr>
          </tfoot>

				</table>
        <table class="dailySubTable" v-bind:class="{on : 2 == divSelect}">
					<thead>
						<tr>
							<th class="dailyNum">번호</th>
							<th class="dailyName">캠페인명</th>
							<th class="maketerCode">마케터 코드</th>
							<th class="inTime">유입 시간</th>
							<th class="inIP">접수 IP</th>
							<th class="dbState">DB상태</th>
							<th class="dbPrice">단가</th>
							<th class="inData">고객입력 정보</th>
						</tr>
					</thead>
					<tbody>
						<tr class="viewTr" v-bind:class="{dbSelect : 20 == dbSelectData}">
							<th class="dailyNum">10</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(20)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 20 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 21 == dbSelectData}">
							<th class="dailyNum">9</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(21)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 21 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 22 == dbSelectData}">
							<th class="dailyNum">8</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(22)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 22 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 23 == dbSelectData}">
							<th class="dailyNum">7</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(23)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 23 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 24 == dbSelectData}">
							<th class="dailyNum">6</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(24)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 24 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 25 == dbSelectData}">
							<th class="dailyNum">5</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(25)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 25 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 26 == dbSelectData}">
							<th class="dailyNum">4</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(26)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 26 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 27 == dbSelectData}">
							<th class="dailyNum">3</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(27)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 27 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 28 == dbSelectData}">
							<th class="dailyNum">2</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(28)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 28 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="viewTr" v-bind:class="{dbSelect : 29 == dbSelectData}">
							<th class="dailyNum">1</th>
							<td class="dailyName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"  @click="dbData(29)"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : 29 == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>1a52wd222</td>
                          <th>이름</th>
                          <td>홍길동</td>
                          <th>나이</th>
                          <td>38세</td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td>여성</td>
                          <th>전화번호</th>
                          <td colspan="3">010-1234-5678</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td>기타내용</td>
                          <th>기타2</th>
                          <td>기타내용</td>
                          <th>기타3</th>
                          <td>기타내용</td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
					</tbody>
          <tfoot>
            <tr>
              <td class="dataBtn" colspan="8">
                <a href="javascript:void(0)" class="pageleft"><i class="fas fa-angle-left"></i></a>
                <a href="javascript:void(0)" class="pageBtn">1</a>
                <a href="javascript:void(0)" class="pageBtn">2</a>
                <a href="javascript:void(0)" class="pageBtn">3</a>
                <a href="javascript:void(0)" class="pageBtn">4</a>
                <a href="javascript:void(0)" class="pageBtn">5</a>
                <a href="javascript:void(0)" class="pageright"><i class="fas fa-angle-right"></i></a>
              </td>
            </tr>
          </tfoot>

				</table>
			</div>
		</div>
	</div>
</template>
<script>

  export default {
		// 
		data() {
			return {
          serchDataDt: this.$DateAdd(0) 
        , serchDataDt02: this.$DateAdd(0)
        , divSelect: 0
        , dbSelectData: null
			}
		},
		methods: {
      DailyTabBtn(pos) {
        this.divSelect = pos;
        this.dbSelectData = null;
      }
      , dbData(pos) {
        if(this.dbSelectData == pos){
          this.dbSelectData = null;
          return;
        }

        this.dbSelectData = pos;
      }
		},
		created() {
			this.$store.state.headerTopTitle = "데이터 센터";
			this.$store.state.headerMidTitle = "일자별 통계";
		}
	}
</script>

<style>

  .campanignSearch {
    height: 35px;
    width: 100%;
  }

  .campanignSearch select {
    height: 100%;
    width: 256px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 9px 18px;
    margin-right: 5px;
    font-weight: 700;
  }

  .campanignSearch input[type="radio"] {
    display: none;
  }

  .campanignSearch input[type="radio"] + label {
    display: inline-block;
    width: 47px;
    height: 100%;
    text-align: center;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    margin-right: 5px;
    padding: 10px;
    font-weight: 700;
  }


  .campanignSearch input[type="radio"]:checked + label {
    color: #e25b45;
    border-color: #e25b45;
  }


  .campanignSearch input[type="date"] {
    width: 210px;
    height: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 10px 16px;
    margin: 0 5px;
  }

  .dailyDataBox {
    margin-top: 10px;
    width: 100%;
    height: 81px;
    display: flex;
    justify-content: space-between;
  }

  .dailyDataBox .dailyDataMiddle {
    width: 218px;
    height: 81px;
    position: relative;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 17px;
    text-align: center;
    overflow: hidden;
  }

  .dailyDataBox .dailyDataMiddle h2,
  .dailyDataBox .dailyDataMiddle p {
    color: #222;
  }

  .dailyDataBox .dailyDataMiddle h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .dailyDataBox .dailyDataMiddle h2.dataEm {
    color: #e25b45;
  }

  .dailyDataBox .dailyDataMiddle p {
    font-size: 14px;
  }

  .dailyDataBox .dailyDataMiddle .dailyFake {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ddd;
    padding: 17px;
  }

  .dailyDataBox .dailyDataMiddle .dailyFake p {
    margin-bottom: 13px;
    color: #929292;
  }

  .dailyDataSub .dailyDataTop {
    margin-top: 20px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dailyDataSub .dailyTab {
    height: 100%;
  }

  .dailyDataSub .dailyTab .dailyTabBtn {
    float: left;
    height: 100%;
    background: #e7e7e7;
    text-align: center;
    margin-right: 10px;
    padding: 18.3px 24.3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  .dailyDataSub .dailyTab .dailyTabBtn.on {
    font-weight: 700;
    color: #e25b45;
    background: #fff;
  }

  .dailyDataSub .dailyEx button {
    width: 139px;
    height: 33px;
    background: #fff;
    border: 1px solid #e25b45;
    color: #e25b45;
    border-radius: 10px;
    font-weight: 700;
    margin-right: 5px;
    margin-top: 1px;
  }

  .dailyDataSub .dailyEx select {
    width: 76px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-weight: 700;
  }

  .dailyDataSub .dailySub{
    border-radius: 10px;
    border-top-left-radius: 0px;
    background: #fff;
    overflow: hidden;
  }

  .dailyDataSub .dailySub .dailySubTable {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    display: none;
  }

  .dailyDataSub .dailySub .dailySubTable.on {
    display: table;
  }

  .dailyDataSub .dailySub table th,
  .dailyDataSub .dailySub table td {
    padding: 15px 18px;
  }

  .dailyDataSub .dailySub table tbody .dbState {
    padding: 9px 18px;
  }

  .dailyDataSub .dailySub table thead th {
    position: relative;
    border-bottom: 1px solid #5c5c5c;
  }

  .dailyDataSub .dailySub table tbody tr {
    border-bottom: 1px solid #ececec;
  }

  .dailyDataSub .dailySub table .dailyNum {
    width: 65px;
  }

  .dailyDataSub .dailySub table .dailyName {
    width: 155px;
  }


  .dailyDataSub .dailySub table .inTime {
    width: 197px;
  }

  .dailyDataSub .dailySub table .inTime {
    width: 197px;
  }

  .dailyDataSub .dailySub table .inData {
    width: 315px;
  }

  .dailyDataSub .dailySub table .inData i {
    float: right;
    cursor: pointer;
  }

  .dailyDataSub .dailySub table thead th:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }


  .dailyDataSub .dailySub table thead th:last-child:after {
		display: none;
	}


  .dailyDataSub .dailySub .hidetr {
    display: none;
    width: 100%;
  }

  .dailyDataSub .dailySub .hidetr .padNone {
    padding: 0;
  }

  .dailyDataSub .dailySub .dbSelect{
    position: relative;
  }

  .dailyDataSub .dailySub .dbSelect::after{
    position: absolute;
    width: 1357px;
    height: 272.5px;
    content: "";
    border: 1px solid #8e8e8e;
    left: 0;
    top: -0.5px;
  }

  .dailyDataSub .dailySub .dbSelect i{
    transform: rotate(180deg);
    color: #e25b45;
    position: relative;
    z-index: 999;
  }

  

  .dailyDataSub .dailySub .hidetr.dbSubSelect {
    display: table-row;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox {
    display: flex;
    justify-content: space-between;
    background: #f6f6f6;
    padding: 19px 21px;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox .basicData div {
    width: 743px;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox .payData div {
    width: 555px;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox .basicData div,
  .dailyDataSub .dailySub .hidetr .dbDataBox .payData div {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    margin-top: 9px;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox .basicData table,
  .dailyDataSub .dailySub .hidetr .dbDataBox .payData table {
    border-collapse: collapse;
    border: solid 1px #e5e5e5;
    border-style: hidden;
  } 


  .dailyDataSub .dailySub .hidetr .dbDataBox h6,
  .dailyDataSub .dailySub .hidetr .dbDataBox th,
  .dailyDataSub .dailySub .hidetr .dbDataBox td {
    text-align: left;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox th,
  .dailyDataSub .dailySub .hidetr .dbDataBox td {
    border: 1px solid #e5e5e5;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox th {
    padding: 12px 0px 12px 16px;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox td {
    padding: 13px 11px;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox h6 {
    padding: 0 10px;
    position: relative;
    font-size: 14px;
    color: #444;
  }

  .dailyDataSub .dailySub .hidetr .dbDataBox h6:before{
    clear: both;
    width: 2px;
    height: 13px;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #444;
  }


  .dailyDataSub .dailySub .hidetr .basicData th {
    width: 72px;;
  }

  .dailyDataSub .dailySub .hidetr .basicData td {
    width: 175px;
  }


  .dailyDataSub .dailySub .hidetr .payData th {
    width: 92px;;
  }

  .dailyDataSub .dailySub .hidetr .payData td {
    width: 184.5px;
  }


  .dailyDataSub .dailySub table tfoot td {
    padding: 30px 0 74px 0;
    text-align: center;
  }

  .dailyDataSub .dailySub table tfoot td .fas {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    font-size: 20px;
    padding: 2px 7px;
    transform: translateY(2px);
  }

  .dailyDataSub .dailySub table tfoot td a {
    display: inline-block;
    margin: 0 10px;
  }


  

</style>
