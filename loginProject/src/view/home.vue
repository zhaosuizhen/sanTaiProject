<template>
    <div id="home" v-loading="listLoading">
        <video muted autoplay="autoplay" class="video">
            <source :src="videoSouce" style="width: 100%;height: 100%">
        </video>
          <div class="platform-content1" id="platform1" >
            <!--<a class="platform1" href="http://39.98.226.242:8089/dataupdate/#/loginUpdate" target="_blank">-->
            <a class="platform1" v-for="(item,index) in topMenu" :key="item.menuId"  href="#" @click="goSystem('topMenu',index)">
                <div>
                    <img :src="menuListIcon[index].menuIcon" alt="">
                </div>
                <p class="platform-text-big">{{item.menuName}}</p>
            </a>
        </div>
        <div class="platform-content2" id="platform2">
            <a class="platform2"  v-for="(item,index) in bottomMenu" :key="item.menuId"  href="#" @click="goSystem('bottomMenu',index)">
                <p class="platform-text-small">{{item.menuName}}</p>
            </a>
            <a class="platform2" target="_blank" href="http://119.6.57.72:8089/xxl-job-admin/toLogin">
                <p class="platform-text-small">采集系统</p>
            </a>
        </div>  
    </div>
</template>
<script>
// import Crypto from "../assets/js/crypto";
let Base64 = require('js-base64').Base64
import { getmanuList } from "@/utils/api/home"
import $ from 'jquery' 
export default {
    name:'home',
    data() {
        return{
            systemList:'',
            menuListIcon:[
                { menuIcon:require('../assets/images/home/1.png')},
                { menuIcon:require('../assets/images/home/2.png')},
                { menuIcon:require('../assets/images/home/3.png')},
                { menuIcon:require('../assets/images/home/4.png')},
                { menuIcon:require('../assets/images/home/5.png')},
				{ menuIcon:require('../assets/images/home/6.png')},
            ],
            videoSouce:require('../assets/video/video.mp4'),
            listLoading:false,
            topMenu:[],
            bottomMenu:[]
        }
    },
    mounted() {
        this.getmanuList(); //获取
        setTimeout(()=>{
            this.lick();
        },3000)
    },
    methods:{

        lick(){
        // $("#platform").show();
        $("#platform1").animate({
            bottom:'35%'
        },1000);
        $("#platform2").animate({
            bottom:'1%'
        },1000);
    },
        //
        goSystem(menuType,index){
            //后台管理系统  
            let authToken = Base64.encode(sessionStorage.getItem("authToken"))
           // let phoneNo = Crypto.encrypt(sessionStorage.getItem("phoneNo"),'abcdefgabcdefg98');  //加密
            // let userAccount = Crypto.encrypt(sessionStorage.getItem("userAccount"),'abcdefgabcdefg88');
            let userAccount = sessionStorage.getItem("userAccount");
            let firstMenuId = '';
            let url = '';
            if(menuType === 'topMenu'){
                firstMenuId = this.topMenu[index].menuId; //选中菜单id 加密
                if ( firstMenuId == 81 ){
                    url =`${this.topMenu[index].menuUrl}?firstMenuId=${firstMenuId}&authToken=${authToken}&userAccount=${userAccount}&encrypt=1`;
                } else {
                    url =`${this.topMenu[index].menuUrl}`;
                }
            }else if(menuType === 'bottomMenu'){
                firstMenuId = this.bottomMenu[index].menuId; //选中菜单id 加密
                url =`${this.bottomMenu[index].menuUrl}?firstMenuId=${firstMenuId}&authToken=${authToken}&userAccount=${userAccount}&encrypt=1`;
            }
            window.open(url);
        },
        //获取一级菜单列表
        async getmanuList(){
            this.listLoading = true;
            const res = await getmanuList({
                userAccount: sessionStorage.getItem("userAccount"),
            })
            if(res.data.code == 0){
                 this.systemList = res.data.data;
                this.systemList.forEach(item => {
                    if(item.isDelete == 0){ //当菜单未被删除时显示
                        if(item.menuId == 81){
                            this.topMenu.push(item);
                        }else if(item.menuId == 79){
                            this.topMenu.unshift(item);
                        }else if(item.menuId == 77){
                            this.topMenu.push(item);
                        }else{
                            this.bottomMenu.push(item)
                        }
                    }
                });
            }else if(res.data.code== -1 || res.data.code== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.code == -2){
                this.$message({
                    message: '登录已过期',
                    type: 'warning'
                })
                this.$router.push({path: '/login'}); 
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.listLoading = false;
        }    
    }
}
</script>
<style scoped>
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
    #home{
        width: 100%;
        height: 100%;
        overflow: hidden;    
    }
    .video{
        width: 100%;
        height: 100%;
        object-fit: fill;
        display: block;
    }
    .platform-content1{
        position: absolute;
        bottom: -500px;
        left: 10%;
        width: 80%;
        height: 20%;
        /*background-color: #fff;*/
    }   
    .platform-content2{
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: -500px;
        /* width: 100%; */
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 10%;
    }
    .platform1{
        width: 32.3%;
        height: 78%;
        float: left;
        margin: 0.5%;
        text-decoration: none;
        /*background-color: aqua;*/
    }
.platform1 .platform-text-big{
    text-align: center;
    font-size: 32px;
    color: #fff;
}
.platform1 p:hover{
    color: #27c6f7;
    /* text-decoration: underline; */
}
.platform1 div{
    margin: auto;
    width: 25%;
    height: 100%;
}
.platform1 div img{
    width: 100%;
}
.platform2{
    display: block;
    flex: 1;
    width: 150px;
    height: 100%;
    /* float: left !important; */
    margin: 0%;
    text-decoration: none;
    padding: 0%;
}
.platform2 .platform-text-small{
    text-align: center;
    font-size: 18px;
    color: #fff;
}
.app-bg{
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/home/app_bg2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}
.saoma{
    position: absolute;
    bottom: 25%;
    right: 25%;
    text-align: center;
}
.saoma-img{
    width: 200px;
    height: 200px;
    /* background-image: url('../assets/images/home/saoma.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
}
.saoma-img img{
    width: 90%;
    padding-top: 5%;
}
.saoma-upload{
    margin-top: 10px;
    font-size: 14px;
    color: #FFF;
    letter-spacing: 2px;
    font-family: "微软雅黑"
}

/* @media (min-width: 1024px){
    .platform-content2{
        left: 26%;
    }
}

@media (min-width: 1100px) {
    .platform-content2{
        left: 27%;
    }
}
@media (min-width: 1280px) {
    .platform-content2{
        left: 26%;
    }
}

@media (min-width: 1366px) {
    .platform-content2{
        left: 26%;
    }
}

@media (min-width: 1440px) {
    .platform-content2{
        left: 28%;
    }
}

@media (min-width: 1680px) {
    .platform-content2{
        left: 30%;
    }
}
@media (min-width: 1920px) {
    .platform-content2{
        left: 31%;
    }
} */






    /* .systemContent{
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/home/bg.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .homeTitle{
        padding-top:20px ;
    }
    .homeTitle .title{
        display: block;
        margin: 0 auto;
    }
    .homeTitle .desc{
        display: block;
        margin: 0 auto;
    }
    .descWrap{
        padding-top:5px ;
    }
    .bottomBack{
        width: 100%;
        height: 128px;
        background-image: url('../assets/images/home/bottom-background.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: 0;
    }

    .menuItemBack{
        position: relative;
        width: 235px;
        height: 300px;
        background-image: url('../assets/images/home/common.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    }
    .menuItem{
        display: flex;
        justify-content: space-around;
        
    }
    .menuList{
        display: flex;
        justify-content: space-around;
        margin-top: 10%;
    }
    .menuIcon{
        position: absolute;
        top: 7%;
        left: 50%;
        margin-left: -56px;
       -webkit-transition: all 800ms ease-out; 
        -moz-transition: all 800ms ease-out;
        transition: all 800ms ease-out;
    }

    .menuName{
        position: absolute;
        bottom: 30px;
        left: 10%;
        text-align: center;
        width: 80%;
        color: #FFF;
        font-size: 20px;
        letter-spacing: 1px;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
    } */
</style>