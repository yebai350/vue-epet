import {classify_brand} from "api/index.js"
const state = {
    // recommend_bran 推荐  main_brand    sock_brand   health_brand  daily_brand   nurse_brand
    recommend_bran: JSON.parse(sessionStorage.getItem("recommend_bran"))||[],
    main_brand: JSON.parse(sessionStorage.getItem("main_brand")) || [],
    sock_brand: JSON.parse(sessionStorage.getItem("sock_brand")) || [],
    health_brand: JSON.parse(sessionStorage.getItem("health_brand")) || [],
    daily_brand: JSON.parse(sessionStorage.getItem("daily_brand")) || [],
    nurse_brand: JSON.parse(sessionStorage.getItem("daily_brand")) || [],
}
const mutations = {
    handleGetBrandMutation(state,params){
        let brandlist = [];
        for(var i=0;i<params.length;i++){
            var letterFirst = params[i].py.substr(0,1).toUpperCase();
            if(isHandList(letterFirst)){
                for(var k=0;k<brandlist.length;k++){
                    if(letterFirst==brandist[k],index){
                        brandlist[k].list.push({brandId})
                    }
                }
            }
        }
    }
}
const actions = {
    async handleGetBrandAction({commit}){
        let data = await classify_brand();
        commit("handleGetBrandMutation",data.data.brand)
    }
}

export default{
    state,
    mutations,
    actions,
    namespaced:true
}