<template>
    <div>
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
    </div>
</template>


<script>
    export default {
        name:"school",
        data: function () {
            return {
                schoolName: '北京邮电大学',
                schoolAddress: '北京西二旗'
            };
        },
        methods: {},
    }
</script>




<style>


</style>