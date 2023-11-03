<!-- <template>
    <div class="myaxios">
        <h2>MyAxios页面</h2>
        <button @click="submit"> 发送Axios请求</button>
        <p v-for="val in weatherList" :key="val.time"> 
            {{val.time}}-{{ val.day_text }}-{{ val.min_temp }}-{{ val.max_temp }} 
        </p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "MyAxios",
    data: function() {
        return {
            // today: "",
            weatherList: ""
        }
    },
    methods: {
        submit() {
            console.log("发送Axios请求");
            // axios({
            //     url: "http://www.nmc.cn/rest/weather",
            //     method: "GET",
            //     params: {
            //         stationid: 54857
            //     },
            //     headers: {
            //         "User-Agent": 
            //         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            //     }
            //     //then 方法一定为箭头函数，不然无法捕获vue示例
            // }).then((data) => {
            //     this.weatherList = data.data.data.tempchart
            //     console.log(this.weatherList);
            // });
            axios
                .get("http://www.nmc.cn/rest/weather", {
                    params: {
                        stationid: 54857,
                    },
                    headers: {
                        "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                    },
                    })
                .then((response) => {
                    this.weatherList = response.data.data.tempchart;
                    console.log(this.weatherList);
                });
                /**
                 * 项目部署线上环境
                 * 
                 * 请求：http：//
                 * 可以正常访问数据
                 * 
                 * 配置nginx
                 * 拦截rest
                 * 
                 */
        }
        
    }
};
</script>

<style scoped>
.myaxios {
    
}
</style> -->


<template>
    <div class="myaxios">
      <h2>MyAxios页面</h2>
      <button @click="submit">发送Axios请求</button>
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th>天气</th>
            <th>最低温度</th>
            <th>最高温度</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="val in reversedWeatherList" :key="val.time">
            <td>{{ val.time }}</td>
            <td>{{ val.day_text }}</td>
            <td>{{ val.min_temp }}</td>
            <td>{{ val.max_temp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "MyAxios",
    data: function() {
      return {
        weatherList: []
      };
    },
    computed: {
      reversedWeatherList() {
        return this.weatherList.slice().reverse();
      }
    },
    methods: {
      submit() {
        console.log("发送Axios请求");
        axios
          .get("http://www.nmc.cn/rest/weather", {
            params: {
              stationid: 54857
            },
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
            }
          })
          .then((data) => {
            this.weatherList = data.data.data.tempchart;
            console.log(this.weatherList);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .myaxios {
    /* 样式可以根据需要添加 */
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  