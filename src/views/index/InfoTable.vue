
<template>
  <div id="infoTable" >
      <div class="title">党员信息采集表</div>
      <div class="search">
          <span class="branch" @click="slideDown($event)"><input id="branchInput" placeholder="接收支部" v-model='value' type="text"><span class="slide" :class="{rotate:show}" >></span></span>
          <span class="name"><input  placeholder="姓名" type="text" v-model='name'></span>
          <span class="button" :class="{active:isActive1}" @click='search()'>搜索</span>
          <span class="button" :class="{active:isActive2}" @click='clearAll()'>清空</span>
      </div>
      <Toast :Show='toast' :message='message'></Toast>
      <div class="branch_list" v-show='show'>
        <!-- 支部 -->
          <ul class="branchs">
              <li v-for='(item,index) in branchs' @click='select($event)' :key='index'>{{item}}</li>
          </ul>
      </div>
      <div class="list">
          <div class="list_Head">
            <div class="list_head">
               <span>姓名</span>
               <span>接收支部</span>
               <span>提交时间</span>
               <span>操作</span> 
            </div>
          </div>
          <div v-for="(item,index) in member" :key='index+key'>
            <div class="list_mumber">
              <span>{{item.username}}</span>
              <span>{{item.branch}}</span>
              <span>{{item.nowDate&&(new Date(item.nowDate)).Format("yyyy-MM-dd hh:mm:ss")}}</span>
              <span class="code" @mousemove="showCode(item.idNumber)">
                <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    >
                  <div>
                   <vue-qr :text="downloadData.url" :margin="0" @click.native='toUrl()' colorDark="#f67b29" colorLight="#fff"   :size="100"></vue-qr>
                  </div>
                   
                  <el-button slot="reference"> {{item.nowDate&&'查看二维码'}}</el-button>
               </el-popover>
              </span>
              
            </div>
          </div>
      </div>
      <div class="pager">
            <div class="block">
                <el-pagination
                  layout="prev, pager, next"
                  :total='total'
                  :page-size='pageSize'
                  :background='true'
                  @current-change='sizeChange'
                >
                 </el-pagination>
            </div>
      </div>
    
       
  </div>
</template>


<script>



Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
import Toast from '../../components/toast/Toast'
import vueQr from 'vue-qr'
export default {
 name:"InfoTable",
 data(){
     return {
      show:false,
      value:"",
      name:"",
      params:{},
      isActive1:true,
      isActive2:false,
      member:[],
      members:[],
      branchs:["南方网第一党支部","南方网第二党支部","南方日报集团第一党支部","南方日报集团第二党支部","南方杂志党支部"],
      toast:false,
      message:'',
      total:100,
      pageSize:3,
      currentPage:1,
      key:0,
      downloadData: {
                url: 'http://localhost:8080/home/infoshow?idNumber=445221199909262220'
            }
     }
 },
 created(){
    this.$axios.get('/getMember').then(res=>{
           this.member=res.data
           this.members=res.data
           this.pageSize = 3
           this.total = this.member.length
           this.sizeChange(1)
       })
 },
 components:{
   Toast,
   vueQr
 },
 methods:{
     toUrl(){
        window.open(this.downloadData.url)
     },
     select:function(e){
        this.show=false
        this.value = e.target.innerText
        this.params={
          receiveBranch:this.value,
          name:this.name
        }
     },

     slideDown(e){
      this.show=!this.show
     },
     search(){
         if(this.isActive1==false){
            this.isActive1=!this.isActive1
             this.isActive2=!this.isActive2 
         }
         this.show=false
         if(this.value!==""||this.name!==""){
           this.params={
           receiveBranch:this.value,
           name:this.name
          }
          this.$axios.post('/getlimitMember',this.params).then(res=>{
            if(res.data.length==0){
              this.member=res.data
              this.toast=true; 
              this.message='用户不存在';
              setTimeout(()=>{
                this.toast=false;this.message=''
              },1500)
              return
            } else{
              this.member=res.data
              this.members=res.data
              this.total = this.member.length
              this.sizeChange(1)
            }
          })
         }
     },

     clearAll(){
         if(this.isActive2==false){
            this.isActive1=!this.isActive1
            this.isActive2=!this.isActive2 
         }
        this.$router.go(0)
     },

     sizeChange:function(currentPage){
       this.currentPage=currentPage;
       let j=0;
       this.member=[]
       for(let i=0+(currentPage-1)*3;i<=2+(currentPage-1)*3;i++){
         var obj = this.members[i]
         if(this.members[i]){
           this.member[j++] = this.members[i]
         }
       }
     },

     showCode:function(idNumber){
       this.downloadData.url="http://localhost:8080/home/infoshow?idNumber="+idNumber
       this.downloadData.icon="http://localhost:8080/home/infoshow?idNumber="+idNumber
     },

   

   
  }
 }
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
#infoTable{
    padding: 10px 20px 50px;
    position: relative;
    .title{
      padding: 10px 0px;
      cursor: pointer;
    } 
    .branch_list{
        position: absolute;
        top: 95px;
        background-color: #fff;
        box-shadow: 0px 2px 4px 1px rgba($color: #000000, $alpha: .3);
        z-index:999;
        ul{
            list-style: none;
            color:#888888;
            
            li{
                padding: 5px;
            }
            li:hover{
                background-color: $color;
                color:#fff;
            }
        }
    }
    .search{
      padding: 10px 0px;
      span{
        margin-right: 10px;
        line-height: 30px;
        height: 30px;
      }
      input{
        width: 120px;
        padding: 5px;
      }
      .branch{
          position: relative;
          .slide{
              position: absolute;
              right: 0px;
              top: 0px;
              transform: rotate(90deg);
              color:#757575;
              cursor: pointer;
          }
          .slide.rotate{
              transform: rotate(270deg);
          }
      }
      .button{
          position: relative;
          display: inline-block;
          height: 28px;
          width: 70px;
          line-height: 28px;
          top: 2px;
          background-color: #fff;
          border: 1px solid #ccc;
          text-align: center;
          color:#919191;
          cursor: pointer;
          
      }
      .button.active{
          background-color: $color;
          color:#fff;
          border: 1px solid $color;
      }
     
    }
    .list{
        margin-bottom: 10px;
        div{
            cursor: pointer;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #f3f3f3;
            .list_mumber{
              margin-left: 30px;
              color:#919191;
              display: flex;
              position: relative;
              margin-top: 10px;
              span{
               flex:1
              }
              .code{
                  color:$color;
                  font-size: 10px;
                .showCode{
                position: absolute;
                width: 30px;
                height: 30px;
                background-color: red;
                right: 129px;
                top: 27px;
                
              }
              }
              
         }
        }
        .list_Head{
           border-bottom: 1px solid #ececec;
          .list_head{
             margin-left: 30px;
             display: flex;
             span{
              flex:1
             }
         }
        }
    }
    .pager{
        position: absolute;
        right: 20px;
    }
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: $color!important;
    color: #FFF;
}
</style>