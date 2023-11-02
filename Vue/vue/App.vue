<template>
    <school></school>
    <hr>
    <student></student>
</template>


<script>
    import school from "./school.vue"
    import student from "./Student.vue"
    export default {
        name:"App",
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