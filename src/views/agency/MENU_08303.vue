<template>
  <div class="container">
    <div id="menu08303">
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
            <td>
              현재상태 불러오기
            </td>
          </tr>
          <tr>
            <th>
              DB확인 페이지 ID명
            </th>
            <td>
              <span>
                123456
              </span>
              <button>아이디 만들기</button>
            </td>
          </tr>
          <tr>
            <th>
              외부 접속 비밀번호 
            </th>
            <td>
              <input type="password" name="" id=""> * 최소 8자 이상 13자 이내 (영문 , 숫자 ,특수문자 조합 사용)
            </td>
          </tr>
          <tr>
            <th>
              비밀번호 확인
            </th>
            <td>
              <input type="password" name="" id="">
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
        <button>등록</button>
        <button>변경</button>
        <button>삭제</button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

#menu08303 {
  width: 900px;
}

#menu08303 .tableBox td input,
#menu08303 .tableBox td select{
  border: 1px solid #e5e5e5;
  margin: 0 5px;
  height: 100%;
  padding: 5px;
  width: 200px;
}

</style>