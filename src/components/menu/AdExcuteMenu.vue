<template>
  <div>
    <div class="headerLogo">
      <router-link to="/">회원사<img src="" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li @click="MenuBar(0)" v-bind:class="{on : 0 == menuSelect}">
          <router-link to="MENU_0000">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <defs>
                <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 14 14">
                  <image width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjEzOjE1KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjEzOjE1KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxMzoxNSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNTUxMGI0MS1iZjUwLTkzNDctODRjOC0yYjcwMjdiZjUxYjIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZmNhYmY1NS03NjM5LTg1NDctODNlZi0wY2U1ZjU0NWU4NTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzM3M2JmZC0yZmMxLTBhNDItOGUyZS03YWUxZDAxZmRiYjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMzM3M2JmZC0yZmMxLTBhNDItOGUyZS03YWUxZDAxZmRiYjMiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTM6MTUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTU1MTBiNDEtYmY1MC05MzQ3LTg0YzgtMmI3MDI3YmY1MWIyIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjEzOjE1KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+o+QcEAAAATRJREFUKJGd0r0rhWEYBvCfc15SGORjUAadmV0hf4DNJJOyKOrYJRkUC4PllDKhlM1ISaf8AbIYGE6diFgokRje+63H6qqnnvt6rvvrue+WWq0mwSCqmMZAcE2cYAeNQlhKnJZQj8cvTMb5Cq4emj+Oc5GpjHG84D3OS3Dl0MxBFuWtYhSfOMQHNiLoBzowgjZc4SyLKNt4COEPFnEd9jC2IrPQVjNMYSzptRf3iX0fXIEj1DN0YzZ5qGDeX1SisgLdJf9Ehlcc4Cm4WezhLezO4HbC7sNCCaeYSYI9Yyixh4IrMIPTLCJd4lg+mgrO0YJv+QI8oV8+92VMZPKtWMcNunAbGVbRjjX0yFfvEStoFJ+zL59VM/prjfudfK7FnHdDK0tq35RvTTUcL4JvRgujkiX/BV7/Sw0sZZJqAAAAAElFTkSuQmCC"/>
                </pattern>
              </defs>
              <rect id="DashBoardIcon" width="14" height="14" rx="7" fill="url(#pattern)"/>
            </svg>
            DASHBOARD
          </router-link>
        </li>
        <li v-bind:class="{on : 1 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(1)" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            데이터 센터
          </a>
          <ul>
            <li @click="SubMenu('0101')"  v-bind:class="{subOn : '0101' == subMenuSelect}" >
              <router-link  to="MENU_0101">DB 집계 정보</router-link>
            </li>
            <li  @click="SubMenu('0102')"  v-bind:class="{subOn : '0102' == subMenuSelect}" >
              <router-link  to="MENU_0102">DB 통계 정보</router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 2 == menuSelect}">
          <a href="#javascript:void(0)" @click="MenuBar(2)" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            캠페인 관리
          </a>
          <ul>
            <li @click="SubMenu('0201')"  v-bind:class="{subOn : '0201' == subMenuSelect}" >
              <router-link to="MENU_0201">캠페인 목록</router-link>
            </li>
            <li @click="SubMenu('0202')"  v-bind:class="{subOn : '0202' == subMenuSelect}" >
              <router-link to="MENU_0202">신규 캠페인 등록</router-link>
            </li>
            <li @click="SubMenu('0203')"  v-bind:class="{subOn : '0203' == subMenuSelect}" >
              <router-link to="MENU_0203">캠페인 변경 내역</router-link>
            </li>
            <li @click="SubMenu('0204')"  v-bind:class="{subOn : '0204' == subMenuSelect}" >
              <router-link to="MENU_0204">자동 충전</router-link>
            </li>
            <li @click="SubMenu('0205')"  v-bind:class="{subOn : '0205' == subMenuSelect}" >
              <router-link to="MENU_0205">문자 발송 서비스</router-link>
            </li>
            <li @click="SubMenu('0206')"  v-bind:class="{subOn : '0206' == subMenuSelect}" >
              <router-link to="MENU_0206">캠페인 홍보자료 관리</router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 3 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(3)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            POSTBACK 관리
          </a>
          <ul>
            <li @click="SubMenu('0301')"  v-bind:class="{subOn : '0301' == subMenuSelect}" >
              <router-link to="MENU_0301">POSTBACK 등록 현황</router-link>
            </li>
            <li @click="SubMenu('0302')"  v-bind:class="{subOn : '0302' == subMenuSelect}" >
              <router-link to="MENU_0302">POSTBACK 등록 처리</router-link>
            </li>
            <li @click="SubMenu('0303')"  v-bind:class="{subOn : '0303' == subMenuSelect}" >
              <router-link to="MENU_0303">POSTBACK 데이터 조회</router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 4 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(4)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            광고비 관리
          </a>
          <!-- <ul>
            <li><router-link to="MENU_0401">사용 내역</router-link></li>
            <li><router-link to="MENU_0402">현금/카드 내역</router-link></li>
            <li><router-link to="MENU_0403">후불 정산 내역</router-link></li>
            <li><router-link to="MENU_0404">결제 계좌 / 카드 관리</router-link></li>
            <li><router-link to="MENU_0405">CPS 정산 관리</router-link></li>
            <li><router-link to="MENU_0406">환불 신청/취소</router-link></li>
          </ul> -->
        </li>
        <li v-bind:class="{on : 5 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(5)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            광고주 관리
          </a>
          <ul>
            <li @click="SubMenu('0501')"  v-bind:class="{subOn : '0501' == subMenuSelect}" >
              <router-link to="MENU_0501">광고주 권한 설정</router-link>
              </li>
            <li @click="SubMenu('0502')"  v-bind:class="{subOn : '0502' == subMenuSelect}" >
              <router-link to="MENU_0502">광고주 페이지 설정</router-link>
              </li>
            <li @click="SubMenu('0503')"  v-bind:class="{subOn : '0503' == subMenuSelect}" >
              <router-link to="MENU_0503">광고주 항목 설정</router-link>
              </li>
            <li @click="SubMenu('0504')"  v-bind:class="{subOn : '0504' == subMenuSelect}" >
              <router-link to="MENU_0504">광고주 연동 설정</router-link>
              </li>
          </ul>
        </li>
        <li v-bind:class="{on : 6 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(6)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            마케터 관리
          </a>
        </li>
        <li v-bind:class="{on : 7 == menuSelect}" >
          <a href="javascript:void(0)" @click="MenuBar(7)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
              <image id="MenuIcon" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNlQxMDoxODo0NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowYmNmODgxNS1lODczLTEzNGMtOWIxZC00NDQ4MjZmMzMwY2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDQxNjgzOC04ZjY5LWViNGItOWE1Mi0wNGIzNDBkMzFiM2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDYzZDY3YS04ODBhLTMwNGQtYTZiNi0yYzQxODY4NzRhM2EiIHN0RXZ0OndoZW49IjIwMjEtMTItMTZUMTA6MTg6NDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjZjg4MTUtZTg3My0xMzRjLTliMWQtNDQ0ODI2ZjMzMGNkIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTE2VDEwOjE4OjQ3KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Dln3gAAAThJREFUKJGF0q1LpFEcxfHP3B2EFQWTwuZFQZwiBrNBi8Fo2GgxTF0Ei0WUBVEEwWkTDGITLJrEP0DLYJCFtQgbDIJaRNDwHGR2EPbCgfuc+z2/5+3UWq2WnlXHD6znehUHeO2GSk9gCXfYw7doL95SmI9gH5r4i10Mo79rYH+83TBN9NXxByP40vvMPetrtI2Vgnlc4PE/QWEuMF9whRlM4wzPnwSeczYd9qqggQFcYw6TOMZTdBxvLswAGgWz6Kg++xBusJCBjexvcrYadrZgC1MYjLkW6DYaitcJM4WtghrusYKJvFMHm1En3kSYe9Tq2E/4F35n+g6WuwIP2X/HT7wV1Q+9xCnaGA24ET3Ea4e5RLPgJXcdwzlOcIjx6DDeeZh9vHx0T1XitqrQiziKv6kq/T8lfwfPHU0CWYYFNwAAAABJRU5ErkJggg=="/>
            </svg>
            캠페인 그룹 관리
          </a>
        </li>
        <li>
          <router-link to="TEST_etc.vue">test</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          menuSelect : 0
        , subMenuSelect: ''
      }
    },
    methods:{
        MenuBar(pos) {
        this.menuSelect = pos;
        if(this.menuSelect == 0) {
          this.subMenuSelect = ''
        }
        else if(this.menuSelect >= 1){
          this.subMenuSelect = `0${pos}01`
          let page = "MENU_"+ this.subMenuSelect
          this.$router.push({ path : page })

        }
      }
      , SubMenu(pos) {
        this.subMenuSelect = pos;
      }
    }
  }
</script>