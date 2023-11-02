<template>
    <div>
        <h2>学生学号：{{studentId}}</h2>
        <h2>学生姓名：{{studentName}}</h2>
    </div>
</template>


<script>
    export default {
        name:"student",
        data: function() {
                return {
                    studentId: "123456",
                    studentName: "张三"
                }
        },
        methods: {},
    }
</script>




<style>


</style>