<template>
  <div>
    <div class="headerLogo" @click="DBMenuBar(2)">
      <router-link to="MENU_08201" ><img src="../../assets/images/header_logo_2.png" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li v-bind:class="{on : 1 == menuSelect}">
          <a href="javascript:void(0)" @click="DBMenuBar(1)" >
            <i class="icon-file-text"></i>
            캠페인
          </a>
          <ul>
            <li @click="DbSubMenu('102')"  v-bind:class="{subOn : '102' == subMenuSelect}">
              <router-link to="MENU_08102">
                캠페인 등록
              </router-link>
            </li>
            <li @click="DbSubMenu('101')"  v-bind:class="{subOn : '101' == subMenuSelect}">
              <router-link to="MENU_08101">
                캠페인 목록
              </router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 3 == menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(3)">
            <i class="icon-free-transform"></i>
            랜딩페이지
          </a>
          <ul>
            <li @click="DbSubMenu('302')"  v-bind:class="{subOn : '302' == subMenuSelect}">
              <router-link to="MENU_08302">
                랜딩페이지 제작
              </router-link>
            </li>
            <li @click="DbSubMenu('301')"  v-bind:class="{subOn : '301' == subMenuSelect}">
              <router-link to="MENU_08301">
                 랜딩페이지 목록
              </router-link>
            </li>
            <!-- <li @click="DbSubMenu('303')"  v-bind:class="{subOn : '303' == subMenuSelect}">
              <router-link to="MENU_08303">
                외부 어드민 계정 설정
              </router-link>
            </li> -->
            <li @click="DbSubMenu('304')"  v-bind:class="{subOn : '304' == subMenuSelect}">
              <router-link to="MENU_08304">
                 외부 도메인 연결 설정
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="DBMenuBar(2)" v-bind:class="{on : 2 == menuSelect}">
          <router-link to="MENU_08201">
            <i class="icon-layers"></i>
            수집 DB
          </router-link>
        </li>

        <li v-bind:class="{on : 4 == menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(4)">
            <i class="icon-stats"></i>
            API 연동
          </a>
          <ul>
            <li @click="DbSubMenu('402')"  v-bind:class="{subOn : '402' == subMenuSelect}">
              <router-link to="MENU_08402">
                API 등록
              </router-link>
            </li>
            <li @click="DbSubMenu('401')"  v-bind:class="{subOn : '401' == subMenuSelect}">
              <router-link to="MENU_08401">
                 API 목록
              </router-link>
            </li>
            <li @click="DbSubMenu('404')"  v-bind:class="{subOn : '404' == subMenuSelect}">
              <router-link to="MENU_08404">
                 API 전송 결과
              </router-link>
            </li>
          </ul>
        </li>
        <!-- <li @click="DBMenuBar(5)" v-bind:class="{on : 5 == menuSelect}">
          <router-link to="MENU_08501">
            <i class="icon-picture1"></i>
            랜딩 샘플 보기
          </router-link>
        </li>
        <li @click="DBMenuBar(6)" v-bind:class="{on : 6 == menuSelect}">
          <router-link to="MENU_08501">
            <i class="icon-brush"></i>
            랜딩 제작 의뢰
          </router-link>
        </li> -->
        <li v-bind:class="{on : 7 == menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(7)">
            <i class="icon-bubble-text"></i>
            고객센터
          </a>
          <ul>
            <li @click="DbSubMenu('701')"  v-bind:class="{subOn : '701' == subMenuSelect}">
              <router-link to="MENU_08701">
                공지사항
              </router-link>
            </li>
            <li @click="DbSubMenu('702')"  v-bind:class="{subOn : '702' == subMenuSelect}">
              <router-link to="MENU_08702">
                문의하기
              </router-link>
            </li>
            <li @click="DbSubMenu('703')"  v-bind:class="{subOn : '703' == subMenuSelect}">
              <router-link to="MENU_08703">
                기능 개선 요청
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="DBMenuBar(9)" v-bind:class="{on : 9 == menuSelect}">
          <router-link to="MENU_08901">
            <i class="icon-user"></i>
            내정보
          </router-link>
        </li>
        <li @click="DBMenuBar(999)" v-bind:class="{on : 999 == menuSelect}">
          <router-link to="MENU_08999">
            <i class="icon-store"></i>
            요금제
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          menuSelect : 2
        , subMenuSelect  : ''
      }
    },
    methods:{
        DBMenuBar(pos) {
        this.menuSelect = pos;
        if(this.menuSelect == '2' || this.menuSelect == '5' || this.menuSelect == '6' || this.menuSelect == '9' || this.menuSelect == '999') {
          this.subMenuSelect = ''
          // let page = "MENU_08"+ this.menuSelect + '01'
        }
        else{
          this.subMenuSelect = `${pos}01`
          let page = "MENU_08"+ this.subMenuSelect
          this.$router.push({ path : page })

        }
      }
      , DbSubMenu(pos) {
        this.subMenuSelect = pos;
        
      }
      

    }
  }
</script>
<style scoped>
  #sectionHeader {
    padding: 5px 20px 11px;
    border-bottom: solid 1px #707070;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #sectionHeader, #sectionBody {
    margin-left: 200px;
    border-right: solid 1px #e5e5e5;
  }
</style>