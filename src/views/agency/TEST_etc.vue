<template>
    <div>
        <div >
            {{file_name}}
        </div>
        <label for="myFile">이미지 등록하기 <i class="fas fa-plus"></i></label> 
        <input type="file" accept="image/*" id="myFile" class="upload_hidden" 
        :v-model="test01"
        @change="test02();"
        >
    </div>
</template>
 
<script>
export default {
    props:['removeValue'],
    data(){
        return{
            test01: '',
        }
    },
    methods: {
        test02(e) {
           this.file_name = e.target.files[0].name;
        }
    },
    computed:{
         
    }
}
</script>
 
<style>
 
</style>