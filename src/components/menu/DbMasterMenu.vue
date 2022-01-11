<template>
  <div>
    <div class="headerLogo">
      <router-link to="MENU_0801"><img src="../../assets/images/header_logo_2.png" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li @click="MenuBar(0)" v-bind:class="{on : 0 == menuSelect}">
          <router-link to="MENU_0801">
            <i class="icon-layers"></i>
            캠페인 목록
          </router-link>
        </li>
        <li @click="MenuBar(1)" v-bind:class="{on : 1 == menuSelect}">
          <router-link to="MENU_0802">
            <i class="icon-layers"></i>
            랜딩페이지 제작
          </router-link>
        </li>
        <li @click="MenuBar(2)" v-bind:class="{on : 2 == menuSelect}">
          <router-link to="MENU_0803">
            <i class="icon-layers"></i>
            DB확인
          </router-link>
        </li>
        <li @click="MenuBar(3)" v-bind:class="{on : 3 == menuSelect}">
          <router-link to="MENU_0804">
            <i class="icon-layers"></i>
            고객센터
          </router-link>
        </li>
        <li @click="MenuBar(6)" v-bind:class="{on : 6 == menuSelect}">
          <router-link to="MENU_0807">
            <i class="icon-layers"></i>
            TEST page
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
          menuSelect : 0
      }
    },
    methods:{
        MenuBar(pos) {
        this.menuSelect = pos;
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
    width: 1400px;
  }
</style>