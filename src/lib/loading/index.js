import Loading from "./index.vue";
import Vue from "vue";
export default () => {
let LoadingComponent = Vue.extend(Loading);

let child = new LoadingComponent({
    el: document.createElement("div"),
    data: {
        flag: false
    },
    methods: {
        handlemount() {
            this.flag = true;
        },
        handleDestory() {
            this.flag = false;
        }
    }
})

document.body.appendChild(child.$mount().$el)
return child;


   /*  let LoadingComponent = Vue.extend(Loading);

    let vm = new LoadingComponent({
        el: document.createElement("div"),
        methods: {
            handlemount() {
                document.body.appendChild(vm.$mount().$el)
            },
            handleDestory() {
                document.body.removeChild(vm.$mount().$el)
            }
        }
    })


    return vm; */

}