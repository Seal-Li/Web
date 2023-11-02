<template>
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <p>{{ info }}</p>
        <p> {{ schoolInfo }}</p>
        <button @click="changeParent"> changeParent </button>
        <button @click="sendSchoolName"> sendSchoolName </button>
        <button @click="offParent"> offParent </button>
    </div>
</template>


<script>
    export default {
        name:"MySchool",
        // props:["info"],
        // props: {
        //     info: String
        // },

        props:{
            info:{
                type:String,
                required:false, //是否必填
                default:"默认值信息"
            },
            // getName: function() {}
        },
        data: function () {
            return {
                schoolName: '北京邮电大学',
                schoolAddress: '北京西二旗',
                schoolInfo: ""
            };
        },
        mounted(){
            this.schoolInfo = this.info
        },
        methods: {
            changeParent(){
                console.log(this.info);
                this.schoolInfo = "changedInfo";
            },
            sendSchoolName() {
                console.log("子级向父级发送name数据");
                // this.getName(this.schoolName)
                this.$emit("getName", this.schoolName)
            },
            offParent(){
                this.$off("getName");
            }
        },
    }
</script>




<style scoped lang="less">
    .school{
        background-color: yellow;
    }
    p {
        color: blue;
    }
</style>