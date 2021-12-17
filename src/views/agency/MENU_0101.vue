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
      <input type="date" id="searchStartDate1"> ~ 
      <input type="date" id="searchEndDate1">
		</div>
		<div class="searchDataBox">
			<div class="serachDataMiddle">
				<h2 class="dataEm">
          {{"00"}}
				</h2>
				<p>
					참여 마케터의 수
				</p>
			</div>
			<div class="serachDataMiddle">
				<h2>
					{{"50건 / 1000건"}}
				</h2>
				<p>
					당일 DB 접수
				</p>
			</div>
			<div class="serachDataMiddle">
				<h2 class="dataEm">
				{{"710건 (71%)"}}
				</h2>
        
				<p>
					유효 DB 건수 
				</p>
			</div>
			<div class="serachDataMiddle">
				<h2>
				{{"290건 (10%)"}}
				</h2>
				<p>
					무효 DB 건수
				</p>
			</div>
      <div class="serachDataMiddle">
				<h2 class="dataEm">
					{{"100건 (10%)"}}
				</h2>
				<p>
					중복 DB 건수
				</p>
			</div>
			<div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					광고 노출 량
				</p>
				<div class="serachFake">
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
		<div class="searchDataBox">
      <div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					클릭율
				</p>
				<div class="serachFake">
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
			<div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					접수율
				</p>
				<div class="serachFake">
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
			<div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					2차 전환율
				</p>
				<div class="serachFake">
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
			<div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					캠페인전체
				</p>
				<div class="serachFake">
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
			<div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					해당 캠페인 중복여부
				</p>
				<div class="serachFake">
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
			<div class="serachDataMiddle">
				<h2>
					{{"000"}}
				</h2>
				<p>
					ROAS/ROI
				</p>
				<div class="serachFake">
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
		<div class="searchDataSub">
      <div class="searchDataTop">
        <div class="searchTab">
          <div class="searchTabBtn on">DB 유입 현황</div>
          <div class="searchTabBtn">대행사 DB 지표</div>
          <div class="searchTabBtn">마케터 기준 DB 지표</div>
        </div>
        <div class="searchEx">
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
			<div class="searchSub">
				<table class="searchSubTable">
					<thead>
						<tr>
							<th class="searchNum">번호</th>
							<th class="searchName">캠페인명</th>
							<th class="maketerCode">마케터 코드</th>
							<th class="inTime">유입 시간</th>
							<th class="inIP">접수 IP</th>
							<th class="dbState">DB상태</th>
							<th class="dbPrice">단가</th>
							<th class="inData">고객입력 정보</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th class="searchNum">10</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">9</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">8</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">7</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">6</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">5</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">4</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">3</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">2</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
            <tr>
							<th class="searchNum">1</th>
							<td class="searchName">모아만 의원</td>
							<td class="maketerCode">011125144</td>
							<td class="inTime">2021-11-11 12:05:55</td>
							<td class="inIP">221.545.1.111</td>
							<td class="dbState"><img src="" alt="대기"></td>
							<td class="dbPrice">250,000원</td>
							<td class="inData">승인 대기중</td>
						</tr>
            <tr class="hidetr">
              <td colspan="8">
                <h6>고객 기본정보</h6>
                <div class="basicData">
                  <div class="dataBox">
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
              </td>
            </tr>
					</tbody>
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
		
			}
		},
		methods: {

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

  .searchDataBox {
    margin-top: 10px;
    width: 100%;
    height: 81px;
    display: flex;
    justify-content: space-between;
  }

  .searchDataBox .serachDataMiddle {
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

  .searchDataBox .serachDataMiddle h2,
  .searchDataBox .serachDataMiddle p {
    color: #222;
  }

  .searchDataBox .serachDataMiddle h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .searchDataBox .serachDataMiddle h2.dataEm {
    color: #e25b45;
  }

  .searchDataBox .serachDataMiddle p {
    font-size: 14px;
  }

  .searchDataBox .serachDataMiddle .serachFake {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ddd;
    padding: 17px;
  }

  .searchDataBox .serachDataMiddle .serachFake p {
    margin-bottom: 13px;
    color: #929292;
  }

  .searchDataSub .searchDataTop {
    margin-top: 20px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .searchDataSub .searchTab {
    height: 100%;
  }

  .searchDataSub .searchTab .searchTabBtn {
    float: left;
    height: 100%;
    background: #e7e7e7;
    text-align: center;
    margin-right: 10px;
    padding: 18.3px 24.3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
  }

  .searchDataSub .searchTab .searchTabBtn.on {
    font-weight: 700;
    color: #e25b45;
    background: #fff;
  }

  .searchDataSub .searchEx button {
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

  .searchDataSub .searchEx select {
    width: 76px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-weight: 700;
  }

  .searchDataSub .searchSub table {
    width: 100%;
    text-align: center;
  }

  .searchDataSub .searchSub table th,
  .searchDataSub .searchSub table td {
    padding: 15px 18px;
  }

  .searchDataSub .searchSub table .searchNum {
    width: 65px;
  }

  .searchDataSub .searchSub .hidetr{
    display: none;
  }



</style>
