<template>
  <div id="app">

    <!-- 
      ref 属性，可以用来获取dom元素或组件的实例对象
      绑定方式 ref="home"
      获取方式 this.$refs.home
      
      通过ref获取的子组件VC对象后就可以操作子组件内部的变量或函数调用（不建议使用）

      props 用于接收父组件传递的数据
      父组件传递方式：<Student :info="msg"></Student>
      子组件接收方式：props:['info'] ... 
      props传递的参数不可以被子组件直接修改，可在mounted钩子中将父传子变量赋值给子自身，后就可以修改子自身的元素了
      也可以通过父组件向子组件传递函数的形式，实现了子组件变量以参数的形式传递给父级，父级可以在函数内部对子级传递过来的数据进行操作
      父组件可以通过ref动态给子组件绑定事件

      自定义事件（可以同时传递多个参数使用逗号分隔）

      子组件解绑自定义事件：<button @click="offParent"> offParent </button>
    -->
    <h2 ref="home"> Welcome To 北京邮电大学 </h2>
    <hr />
    <!-- <School ref="sch" :info="msg" v-on:getName="getSchoolName"></School> -->

    <!-- 简写形式 -->
    <School ref="sch" :info="msg" @getName="getSchoolName"></School>

    <!-- 事件只可被触发一次 -->
    <!-- <School ref="sch" :info="msg" @getName.once="getSchoolName"></School> -->

    <!-- <School ref="sch" :info="msg"></School> -->


    <hr />
    <Student></Student>
    <button @click="btn"> 点击有惊喜 </button>
  </div>
</template>


<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  data: function(){
    return {
      msg: 'App变量，传递至School',
      schoolName: ""
    }
  },

  components: {
    School,
    Student
  },
  methods:{
    btn(){
      // console.log(this.$refs.home)
      // console.log(this.$refs.sch)
      this.refs.sch.$on("getName", this.getSchoolName)
    },
    getSchoolName(name) {
      console.log("父级收到子级参数", name)
      this.SchoolName = name
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.school {
  background-color: green;
}
</style>
