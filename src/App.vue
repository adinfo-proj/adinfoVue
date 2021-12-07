<template>
  <div id="app">
    <div id="nav">
      <admin-menu     v-if="this.$store.state.userLevel == '01'">1</admin-menu>
      <ad-excute-menu v-if="this.$store.state.userLevel == '02'">2</ad-excute-menu>
      <sponser-menu   v-if="this.$store.state.userLevel == '03'">3</sponser-menu>
      <marketer-menu  v-if="this.$store.state.userLevel == '04'">4</marketer-menu>
    </div>
    <div id="sectionHeader">
      {{ this.$store.state.headerTopTitle }} <span> > {{ this.$store.state.headerMidTitle }}</span>
    </div>
    <div id="sectionBody">
      <router-view />
    </div>
  </div>
</template>
<script>
  import AdminMenu from './components/menu/AdminMenu'
  import AdExcuteMenu from './components/menu/AdExcuteMenu'
  import SponserMenu from './components/menu/SponserMenu'
  import MarketerMenu from './components/menu/MarketerMenu'
  
  export default {
    components: {
        AdminMenu
      , AdExcuteMenu
      , SponserMenu
      , MarketerMenu
    },
    data() {
      return {
      }
    }    
  }
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #666;
    font-family: 'Nanum Gothic';
    font-size: 12px;
  }
  
  a {
    text-decoration: none;
    color: #666;
  }

  ul {
    list-style: none;
  }
  
  #app {
    font-family:'NanumBarunGothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 1400px;
    height: 100%;
  }

  #nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    border-right: solid 1px #e5e5e5;
    background: #fff;
    z-index: 99;
  }

  .headerLogo {
    width: 100%;
    height: 98px;
    text-align: center;
    padding: 28.2px;
    border-bottom: solid 1px #e5e5e5;
  }

  .headerLogo a {
    font-size: 32.9px;
  }

  .headerNav {
    padding: 25px 0 0 20px;
  }

  .headerNav > ul > li {
    padding-bottom: 27px;
  }

  .headerNav > ul > li > ul {
    padding: 5px 0 5px 30px ;
    /* display: none; */
  }

  .headerNav > ul > li > ul > li {
    padding-top: 12px;
  }

  .headerNav > ul > li > a {
    font-weight: 700;
    font-size: 16px;
    color: #373737;
  }

  .headerNav > ul > li > ul > li > a {
    color: #6a6969;
    letter-spacing: -0.3px;
    font-weight: 700;
  }

  .headerNav > ul > li.on > a, 
  .headerNav > ul > li > ul > li.on > a {
    color: #e25b45;
  }

  .headerNav > ul > li.on > ul {
    display: block;
  }

  .headerNav svg {
    margin-right: 4px;
  }

  #sectionHeader,
  #sectionBody {
    margin-left: 200px;
    border-right: solid 1px #e5e5e5;
    width: 1400px;
  }

  #sectionHeader {
    padding: 24px 20px 17px;
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    border-bottom: solid 1px #e5e5e5;
  }

  #sectionHeader span {
    font-weight: normal;
    margin-left: 5px;
  }

  .container {
    height: 100%;
    background: #F6F6F6;
    padding: 20px;
    border-bottom: solid 1px #e5e5e5;
  }
</style>