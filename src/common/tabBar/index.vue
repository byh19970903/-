<template>
    <div id="footer">
<ul>
    <router-link 
    v-for="(item,index) in navs"
    :key="index"
    :to="item.path"
    tag="li"
    >
    <i></i>
    <span>{{item.text}}</span>
    </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    icon:"",
                    text:"电影",
                    path:"/movie"
                },
                 {
                    icon:"",
                    text:"我的",
                    path:"/mine"
                },
                 {
                    icon:"",
                    text:"影院",
                    path:"/cinema"
                },
            ]
        }
    }
}
</script>

<style>
  #footer{
        width:100%;
        height:1rem;
        position:fixed;
        left:0;
        bottom:0;
        background: #fff;
    }
   #footer ul,#footer ul li{
        width:100%;
        height:100%;
    }
    #footer ul {
        display:flex;
    }
    #footer ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .3rem
    }
    #footer ul .router-link-active{
        color:#c33;
    }
</style>