<template>
  <div>
    <div class="headerLogo" @click="DBMenuBar(2)">
      <router-link to="MENU_08201" ><img src="../../assets/images/header_logo_2.png" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li v-bind:class="{on : 1 == $store.state.menuSelect}">
          <a href="javascript:void(0)" @click="DBMenuBar(1)" >
            <i class="icon-file-text"></i>
            캠페인
          </a>
          <ul class="subManu">
            <li @click="DbSubMenu('102')"  v-bind:class="{subOn : '102' == $store.state.subMenuSelect}">
              <router-link to="MENU_08102">
                캠페인 등록
              </router-link>
            </li>
            <li @click="DbSubMenu('101')"  v-bind:class="{subOn : '101' == $store.state.subMenuSelect}">
              <router-link to="MENU_08101">
                캠페인 목록
              </router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 3 == $store.state.menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(3)">
            <i class="icon-free-transform"></i>
            랜딩페이지
          </a>
          <ul class="subManu">
            <li @click="DbSubMenu('302')"  v-bind:class="{subOn : '302' == $store.state.subMenuSelect}">
              <router-link to="MENU_08302">
                랜딩페이지 제작
              </router-link>
            </li>
            <li @click="DbSubMenu('301')"  v-bind:class="{subOn : '301' == $store.state.subMenuSelect}">
              <router-link to="MENU_08301">
                 랜딩페이지 목록
              </router-link>
            </li>
            <li @click="DbSubMenu('303')"  v-bind:class="{subOn : '303' == $store.state.subMenuSelect}">
              <router-link to="MENU_08303">
                외부 어드민 계정 설정
              </router-link>
            </li>
            <li @click="DbSubMenu('304')"  v-bind:class="{subOn : '304' == $store.state.subMenuSelect}">
              <router-link to="MENU_08304">
                 외부 도메인 연결 설정
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="DBMenuBar(2)" v-bind:class="{on : 2 == $store.state.menuSelect}">
          <router-link to="MENU_08201">
            <i class="icon-user"></i>
            수집 DB 집계
          </router-link>
        </li>
        <li v-bind:class="{on : 4 == $store.state.menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(4)">
            <i class="icon-stats"></i>
            API 연동
          </a>
          <ul  class="subManu">
            <li @click="DbSubMenu('402')"  v-bind:class="{subOn : '402' == $store.state.subMenuSelect}">
              <router-link to="MENU_08402">
                API 전송 등록
              </router-link>
            </li>
            <li @click="DbSubMenu('405')"  v-bind:class="{subOn : '405' == $store.state.subMenuSelect}">
              <router-link to="MENU_08405">
                 API 수신 등록
              </router-link>
            </li>
            <li @click="DbSubMenu('401')"  v-bind:class="{subOn : '401' == $store.state.subMenuSelect}">
              <router-link to="MENU_08401">
                 API 목록
              </router-link>
            </li>
            <li @click="DbSubMenu('404')"  v-bind:class="{subOn : '404' == $store.state.subMenuSelect}">
              <router-link to="MENU_08404">
                 API 전송 결과
              </router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 7 == $store.state.menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(7)">
            <i class="icon-bubble-text"></i>
            고객센터
          </a>
          <ul class="subManu">
            <li @click="DbSubMenu('701')"  v-bind:class="{subOn : '701' == $store.state.subMenuSelect}">
              <router-link to="MENU_08701">
                공지사항
              </router-link>
            </li>
            <li @click="DbSubMenu('702')"  v-bind:class="{subOn : '702' == $store.state.subMenuSelect}">
              <router-link to="MENU_08702">
                문의하기
              </router-link>
            </li>
            <li @click="DbSubMenu('703')"  v-bind:class="{subOn : '703' == $store.state.subMenuSelect}">
              <router-link to="MENU_08703">
                기능 개선 요청
              </router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 9 == $store.state.menuSelect}">
          <a  href="javascript:void(0)" @click="DBMenuBar(9)">
            <i class="icon-bubble-text"></i>
            내정보
          </a>
          <ul class="subManu">
            <li @click="DbSubMenu('901')"  v-bind:class="{subOn : '901' == $store.state.subMenuSelect}">
              <router-link to="MENU_08901">
                회원정보
              </router-link>
            </li>
            <!-- <li @click="DbSubMenu('902')"  v-bind:class="{subOn : '902' == $store.state.subMenuSelect}">
              <router-link to="MENU_08902">
                결제내역
              </router-link>
            </li> -->
          </ul>
        </li>
        <li @click="DBMenuBar(999)" v-bind:class="{on : 999 == $store.state.menuSelect}">
          <router-link to="MENU_08999">
            <i class="icon-store"></i>
            요금제
          </router-link>
        </li>
      </ul>
      <div class="manual">
        <a href="files/디비마스터_매뉴얼_v3.pdf" download><i class="icon-download11"></i>매뉴얼 다운로드</a>
      </div>
    </div>
  </div>
</template>

<script>
  // import $              from 'jquery';
  export default {
    data() {
      return {
          menuSelect : this.$store.state.menuSelect
        , subMenuSelect:  this.$store.state.subMenuSelect
      }
    },
    // mounted(){
    //   $(".headerNav>ul>li>a").click(
    //     function(){
    //       $(".headerNav ul li ul").css({display:'none'})
    //       $(this).parent().find('ul').delay(100).slideDown(300)
    //     }
    //   )
    // },
    methods:{
        DBMenuBar(pos) {
        if(sessionStorage.getItem("menuSelect") !=null){
          this.$store.state.menuSelect = pos;
        }
        if(this.$store.state.menuSelect == '2' || this.$store.state.menuSelect == '5' || this.$store.state.menuSelect == '6' || this.$store.state.menuSelect == '999') {
          this.$store.state.subMenuSelect = ''
          // let page = "MENU_08"+ this.menuSelect + '01'
        }
        else{ 
          this.$store.state.subMenuSelect = `${pos}01`
          let page = "MENU_08"+ this.$store.state.subMenuSelect
          this.$router.push({ path : page })
        }

        sessionStorage.setItem("menuSelect"   ,    this.$store.state.menuSelect);
        sessionStorage.setItem("subMenuSelect", this.$store.state.subMenuSelect);
      },
      DbSubMenu(pos) {
        this.$store.state.subMenuSelect = pos;
        sessionStorage.setItem("subMenuSelect", this.$store.state.subMenuSelect);
        
      }
      

    },
    created() {
      this.$store.state.menuSelect    = sessionStorage.getItem("menuSelect");
      this.$store.state.subMenuSelect = sessionStorage.getItem("subMenuSelect");

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

  .headerNav .manual{
    padding: 20px;
  }
  .headerNav .manual a{
    display: block;
    padding: 12px 18px;
    width: 100%;
    background: #fff;
    text-align: center;
    color: #2b2b2b;
    letter-spacing: -0.35px;
    line-height: 1.65;
    font-size: 14px;
    font-weight: 700;
  }
  .headerNav .manual a i{
    display: inline-block;
    background: #000;
    padding: 3px;
    color: #fff;
    font-weight: 700;
    margin-right: 12px;
  }
    
</style>