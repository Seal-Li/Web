<template>
    <div class="myaxios">
        <h2>MyAxios页面</h2>
        <button @click="submit"> 发送Axios请求</button>
    </div>
</template>

<script>
export default {
    name: "MyAxios",
    methods: {
        submit() {
            console.log("发送Axios请求")
        }
    }
};
</script>

<style scoped>
.myaxios {
    
}
</style>