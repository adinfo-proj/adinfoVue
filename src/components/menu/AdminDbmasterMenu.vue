<template>
  <div>
    <div class="headerLogo" @click="DBMenuBar(2)">
      <router-link to="MENU_08250" ><img :src="$store.state.logo" alt=""></router-link>
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
        if(this.menuSelect == '1' ) { 
          this.$router.push({ path : "MENU_08150" }) 
        } 
        else if(this.menuSelect == '2') { 
          this.$router.push({ path : "MENU_08250" }) 
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

  .headerLogo a img{

    width: auto;
    height: 74px;
  }
</style>