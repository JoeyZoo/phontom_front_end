<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
    <link rel="icon" type="image/x-icon"  href="static/favicon.ico">
      <section class="container">
        <h1 id="logo">
          <a href="/" title="幻象户外">
            <img src="~/assets/img/phontom_logo.png" width="100%" alt="幻象户外">
          </a>
        </h1>
        <div class="h-r-nsl">
            <!-- / nav -->
            <ul class="nav">
             <!-- <router-link to="/up/space" tag="li" active-class="current" exact>
                <a>个人首页</a>
              </router-link>-->
            </ul>
            <ul class="h-r-login">
              <li v-if="!userInfo.id" id="no-login">
                <a href="/login" title="登录">
                  <em class="icon18 login-icon">&nbsp;</em>
                  <span class="vam ml5">登录</span>
                </a>
                |
                <a href="/register" title="注册">
                  <span class="vam ml5">注册</span>
                </a>
              </li>
              <li v-if="userInfo.id" class="h-r-user undis" id="is-login-two">
              <el-row class="block-col-4">
                <el-col :span="7">
                  <el-dropdown>
                    <span class="el-dropdown-link">
                    <a href="/up/space">
                    <img
                      :src="userInfo.avatar"
                      width="30"
                      height="30"
                      class="nav-avatar"
                      >
                    </a>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>消息</el-dropdown-item>
                      <el-dropdown-item>
                        <a href="javascript:void(0)" title="退出" @click="logout()" class="ml5">退出</a>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
                <el-col :span="4">
                  <span class="demonstration">
                    <a href="/up/space" title="管理">管理</a>
                  </span>
                </el-col>
                <el-col :span="4">
                  <el-dropdown size="medium">
                    <span class="el-dropdown-link">
                      <el-button type="text" @click="queryPlayHistory()">历史</el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-if="playHistoryList==null">                                 
                                      <i class="phontom">&#xe708;暂无播放历史</i>                                
                                </el-dropdown-item>                  
                        <ul class="of" id="bna">
                            <li v-for="(history,index) in playHistoryList" v-bind:key="index">                                                  
                              <el-dropdown-item>
                                <p>{{history.gmtCreate}}</p>
                                <section class="course-img">
                                  <img
                                    :src="history.cover"
                                    width="120"
                                    height="68"
                                    class="image"
                                    :alt="history.title"
                                  >
                                </section>
                                <div style="padding:3px 3px">
                                      <a :href="'/player/'+history.videoSourceId" target="_blank" :title="history.title" class="history title">{{history.title}}</a>
                                </div> 
                                <hr width="100" size=0.5 color=lightgray align="center">
                              </el-dropdown-item>              
                            </li>
                        </ul>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
                <el-col :span="4">
                  <span class="demonstration">
                    <a href="/up/publish" title="投稿">投稿</a>
                  </span>
                </el-col>
                <el-col :span="4">
                  <el-dropdown size="medium">
                    <span class="el-dropdown-link">
                      <el-button type="text" @click="queryUpdate()">动态</el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-if="updateList==null">
                                  
                                      <i class="phontom">&#xe708;暂无动态</i>
                                  
                                </el-dropdown-item>
                    
                        <ul class="of" id="bna">
                            <li v-for="(update,index) in updateList" v-bind:key="index">                                                  
                              <el-dropdown-item>
                                <img
                                  :src="update.avatar"
                                  width="30"
                                  height="30"
                                  class="nav-avatar"
                                > 
                                <p>{{update.gmtCreate}}</p>
                                <section class="course-img">
                                  <img
                                    :src="update.cover"
                                    width="120"
                                    height="68"
                                    class="image"
                                    :alt="update.title"
                                  >
                                </section>
                                <div style="padding:3px 3px">
                                      <a :href="'/player/'+update.videoSourceId" target="_blank" :title="update.title" class="update title">{{update.title}}</a>
                                </div> 
                                <hr width="100" size=0.5 color=lightgray align="center">
                              </el-dropdown-item>              
                            </li>
                        </ul>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
                &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;
              </el-row>
              </li>
              <!-- /未登录显示第1 li；登录后显示第2，3 li -->
            </ul>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
      
    <!-- /公共头引入 -->
    <nuxt/>

    <!-- 公共底引入 -->
      <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.atguigu.com/" title="幻象公园" target="_blank">幻象公园</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>管理员电话：13162679462</span>
                <span>Email：13121214151@163.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2020作品版权归视频创作者所有</span>
              </section>
            </section>
          </section>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";

import cookie from 'js-cookie'
import login from '@/api/login'
import video from '@/api/video'

export default {
  data() {
    return {
      videoQueryVo:{
        titleKeyword:''
      },
      userInfo: {},
      updateList:[],
      playHistoryList:[]
    }
  },
  created() {
    this.showMemberInfo()
  },
  methods:{
    //从cookie中获取用户信息，此时用户信息为字符串类型
    showMemberInfo() {
      var memberStr =cookie.get("phontom_user")//取出来的是字符串
      if(memberStr){//将字符串转换为json对象
          this.userInfo=JSON.parse(memberStr)
      }
    },
    //退出
    logout() {
      //清空cookie
      cookie.set("phontom_token",'',{domain:'localhost'})
      cookie.set("phontom_user",'',{dimain:'localhost'})
      //回到首页
      window.location.href='/'
    },
    //查询用户关注的UP主动态
    queryUpdate(){
      video.queryUpdate(this.userInfo.id)
        .then(response=>{
          this.updateList=response.data.data.updateList
          video.updateChecked(this.userInfo.id)
        })
    },
    queryPlayHistory(){
      video.queryPlayHistory(this.userInfo.id)
        .then(response=>{
          this.playHistoryList=response.data.data.playHistoryList
        })
    }

    //首页模糊查询
    /**
    findVideoByCondition(){
        video.findVideoByCondition(this.videoQueryVo)
            .then(response =>{
                this.videoList=response.data.data.videoList
            })
    }, */
  }
};
</script>
<style>
.in-wrap{
  background-color:	#FCFCFC;
}
.nav-avatar{
    box-shadow: 0px 0px 2px gray;
    border-radius: 50%;
}
</style>