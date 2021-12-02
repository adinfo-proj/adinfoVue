<template>
    <div>
      <input type="checkbox" v-model='isAllChecked' value="" @click="allCheck" >전체체크
      <input type="checkbox" v-model='checkedValues' value="1" @change="clickFunc" :true-value="yes" :false-value="no" >1
      <input type="checkbox" v-model='checkedValues' value="2"  @change="clickFunc">2
      <input type="checkbox" v-model='checkedValues' value="3"  @change="clickFunc">3
    </div>
</template>
 
<script>
export default {
    props:['removeValue'],
    data(){
        return{
            checkedValues:[],
            isAllChecked:false
        }
    },
    methods: {
        clickFunc(event) {
          for(let i=0; i<this.checkedValues.length;i++){
            if(this.checkedValues[i] !== event.target.value){
            console.log(this.checkedValues[i])
            this.checkedValues.splice(i,1);
            }
          }
        },
        allCheck(){
            if(!this.isAllChecked){
                for(let i=1; i<4; i++){
                    this.checkedValues.push(i)
                }
               this.isAllChecked = true;
            }else{
                 this.checkedValues=[]
 
                this.isAllChecked  = false;
            }
             this.$emit('checkClick',this.checkedValues)
        }
    },
    computed:{
         
    }
}
</script>
 
<style>
 
</style>