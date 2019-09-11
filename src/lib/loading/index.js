import Loading from "./index.vue";
import Vue from "vue";
export default ()=>{
// console.log(Loading)
//extend  继承
//vue=LoadingComponent
    let LoadingComponent = Vue.extend(Loading);
//  console.log(LoadingComponent)
    let vm = new LoadingComponent({
        el:document.createElement("div"),
        // data:{
        //     flag:false
        // },
        methods:{
            handlemount(){
                // this.flag = true;
                document.body.appendChild(vm.$mount().$el)
            },
            handleDestory(){
                // this.flag = false;
                document.body.removeChild(vm.$mount().$el)
            }
        }
    })
    // console.log(vm)
//    console.log(vm.$mount().$el)
    // document.body.appendChild(vm.$mount().$el)
    return vm;
}