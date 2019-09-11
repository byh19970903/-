<template>
  <div id="app">
   <router-view></router-view>
   <TabBar/>
   <!-- <Loading/>  -->
  </div>
</template>

<script>
import TabBar from "../src/common/tabBar"
// import TabBar from "common/tabBar"



// console.log(Loading())
  import http from "utils/http.js"
export default {
    name:"App",
    components:{
      TabBar,
      //  Loading,
    },
     created(){
       http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
         console.log(data);
       })
     }

}
</script>
<style lang="scss">

</style>
