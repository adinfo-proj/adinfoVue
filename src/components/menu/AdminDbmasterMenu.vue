<template>
  <div>
    <div class="headerLogo" @click="DBMenuBar(2)">
      <router-link to="MENU_08250" ><img src="../../assets/images/header_logo_2.png" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li @click="DBMenuBar(1)" v-bind:class="{on : 1 == menuSelect}">
          <router-link to="MENU_08150">
            <i class="icon-layers"></i>
            캠페인 정보
          </router-link>
        </li>

        <li @click="DBMenuBar(2)" v-bind:class="{on : 2 == menuSelect}">
          <router-link to="MENU_08250">
            <i class="icon-layers"></i>
            수집 DB
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