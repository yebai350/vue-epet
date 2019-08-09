<template>
    <div id="footer">
        <ul>
            <router-link
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
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
                    icon:"&#xe638;",
                    text:"精选",
                    path:"/handpick",
                },
                {
                    icon:"&#xe602;",
                    text:"分类",
                    path:"/classify"
                },
                {
                    icon:"&#xe649;",
                    text:"小萌书",
                    path:"/smbook"
                },
                {
                    icon:"&#xe62a;",
                    text:"购物车",
                    path:"/shopcar"
                },
                {
                    icon:"&#xe629;",
                    text:"我的",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>
<style>
 #footer{
        width: 100%;
        height: 1rem;
        position: absolute;
        left: 0;
        bottom:0;
        background: #fff;
        border-top:.01rem solid #ccc;
        box-shadow: 0rem -.01rem .4rem #e7e7e7;
    }
    
    #footer ul,#footer ul li{
        width: 100%;
        height: 100%;
    }
    #footer ul{
        display: flex;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:.3rem
    }
    #footer ul li i{
        font-size:.4rem;
    }

    #footer ul .router-link-active{
        color:rgb(11, 165, 11);
    }
</style>
