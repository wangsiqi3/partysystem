<template>

  <div id="Infoform">
    <Homehead :show1='false' :show2='false'></Homehead>
    <form name='myform'>
     <div class="firstBox">
        <div class="formItem">
          <label for="username">姓名</label>
          <input autoComplete="off" :readonly="true" @blur='blur($event)'  type="text" id='username' placeholder="姓名"  name='username' :value="params.username">  
        </div>
        <div class="formItem">         
          <label for="sex">性别</label>
          <input v-show='isRead' autoComplete="off" type="text" :value='params.sex' @blur='blur($event)' id="sex" placeholder="性别" :readonly="isRead" name='sex'> 
           <select  v-show='!isRead' class="input" autoComplete="off" type="text" :value='params.sex' @blur='blur($event)' id="sex" placeholder="性别" name='sex' >
                <option>男</option>
                <option>女</option>
            </select>
        </div>
        <div class="formItem">
            <label for="nation">民族</label>
             <input v-show='isRead' autoComplete="off" type="text" :value='params.nation' @blur='blur($event)' id="nation" placeholder="民族" :readonly="isRead" name='sex'> 
            <select v-show='!isRead' class="input" autoComplete="off" type="text" @blur='blur($event)' id="nation" name='nation' placeholder="民族" :value='params.nation'>
                <option v-for='(item,index) in this.nations' :key='"-"+index'>{{item}}</option>
            </select>
        </div>
        <div class="formItem">
            <label for="idNumber">身份证号</label>
            <input autoComplete="off" type="number" :readonly="true" id='idNumber' placeholder="身份证号" name='idNumber' :value='params.idNumber'>  
        </div>
        <div class="formItem">
            <label for="birthDate">出生日期</label>
            <input autoComplete="off" type="date" @blur='blur($event)' :readonly="isRead" id='birthDate' placeholder="出生日期" name='birthDate' :value='params.birthDate'>  
        </div>
     </div>
     <div class="secondBox">
        <div class="formItem">
            <label for="school">毕业院校</label>
            <input autoComplete="off" type="text" @blur='blur($event)' :readonly="isRead" id='school' placeholder="学校全称" name='school' :value="params.school">  
        </div>
       <div class="formItem">
            <label for="background">学历</label>
            <input v-show='isRead' autoComplete="off" type="text"  @blur='blur($event)' :readonly="isRead" id="background" name='background' placeholder="最高学历" :value='params.background'> 
            <select v-show='!isRead' class="input" autoComplete="off" type="text"  @blur='blur($event)'  id="background" name='background' placeholder="最高学历" :value='params.background'>
                <option>博士后</option>
                <option>博士</option>
                <option>研究生</option>
                <option>本科</option>
                <option>专科</option>
                <option>高中</option>
                <option>初中</option>
                <option>小学</option>
            </select>
        </div>
     </div>
     <div class="thirdBox">
        <div class="formItem">         
          <label for="category">人员类别</label>
          <input v-show='isRead' autoComplete="off" type="text" @blur='blur($event)' id="category" :readonly="isRead" :value="params.category" name='category'>
          <select v-show='!isRead' class="input"  autoComplete="off" type="text" @blur='blur($event)' id="category" placeholder="人员类别" :value="params.category" name='category'>
                <option>正式党员</option>
                <option>预备党员</option>
            </select>
        </div>
        <div class="formItem">
            <label for="branch">转入支部</label>
            <input v-show='isRead' autoComplete="off" type="text" @blur='blur($event)' id="branch" :readonly="isRead" name='branch' placeholder="组织全称" :value='params.branch'>  
            <select v-show='!isRead' class="input"  autoComplete="off" type="text" @blur='blur($event)' id="branch" name='branch' placeholder="转入支部" :value='params.branch' >
                <option>南方网第一党支部</option>
                <option>南方网第二党支部</option>
                <option>南方日报集团第一党支部</option>
                <option>南方日报集团第二党支部</option>
                <option>南方杂志党支部</option>
            </select>
        </div>  
        <div class="formItem">
            <label for="enterDate">入党日期</label>
            <input autoComplete="off" type="date" @blur='blur($event)' id='enterDate' :readonly="isRead" placeholder="入党日期" name='enterDate' :value='params.enterDate'>  
        </div>
        <div class="formItem">
            <label for="probationDate">转正日期</label>
            <input autoComplete="off" type="date" @blur='blur($event)' id='probationDate' :readonly="isRead" placeholder="转正日期" name='probationDate' :value='params.probationDate'>  
        </div>
        <div class="formItem">
            <label for="introduce1">介绍人1</label>
            <input autoComplete="off" type="text" @blur='blur($event)' id='introduce1' :readonly="isRead" placeholder="介绍人姓名(选填)" name='introduce1' :value="params.introduce1">  
        </div>
        <div class="formItem">
            <label for="introduce2">介绍人2</label>
            <input autoComplete="off" type="text" @blur='blur($event)' id='introduce2' :readonly="isRead" placeholder="介绍人姓名(选填)" name='introduce2' :value="params.introduce2">  
        </div>
        <div class="formItem">         
          <label for="normal">党籍正常</label>
          <input v-show='isRead' autoComplete="off" type="text" @blur='blur($event)' :value='params.normal' id="normal" name='normal' :readonly="isRead">
          <select v-show='!isRead' class="input" autoComplete="off" type="text" @blur='blur($event)' :value='params.normal' id="normal" name='normal' >
                <option>是</option>
                <option>否</option>
            </select>
        </div>
        <div class="formItem">
            <label for="filesPlace">档案地</label>
            <input autoComplete="off" type="text" @blur='blur($event)' id='filesPlace' :readonly="isRead" placeholder="地址精确到门牌号(选填)" name='filesPlace' :value='params.filesPlace'>  
        </div>
     </div>
     <div class="forthBox">
        <div class="formItem">
            <label for="phone">手机号码</label>
            <input autoComplete="off" type="number" @blur='blur($event)' id='phone' :readonly="isRead" placeholder="手机号码" name='phone' :value='params.phone'>  
        </div>
        <div class="formItem">
            <label for="address">家庭住址</label>
            <input autoComplete="off" type="text" @blur='blur($event)' id='address' :readonly="isRead" placeholder="地址精确到门牌号" name='address' :value='params.address'>  
        </div>
        
     </div>
     <div class="fifthBox">
        <div class="formItem">
          <label for="sign">党员签名</label>
          <img id="img" :src="params.url" alt="">  
        </div>
     </div>
     <div class="button" v-if='show'>
        <span  @click='modify()' :class="{active:!isActive}">修改</span>
        <span  @click='submit()' :class="{active:isActive}">提交</span>
     </div>
  </form>
    <Toast :Show='toast' :message='message'></Toast>
  </div>
</template>

<script>
import Homehead from './Homehead'
import Toast from '../../components/toast/Toast'
export default {
 name:'Infoform',
 data () {
      return {
        radio1: '男',
        radio2: '正式党员',
        radio3:'是',
        params:{},
        value:"",
        background:"",
        branch:"",
        isActive:true,
        flag:false,
        show:true,
        isRead:true,
        toast:false,
        message:"",
        nations:["汉族","壮族","满族","回族","珞巴族","赫哲族","塔塔尔族","独龙族","鄂伦春族","门巴族","乌孜别克族","裕固族","俄罗斯族","保安族","德昂族","基诺族","京族","怒族","鄂温克族","普米族","阿昌族","塔吉克族","布朗族","撒拉族","毛南族","景颇族","达斡尔族","柯尔克孜族","锡伯族","仫佬族","土族","羌族","纳西族","佤族","水族","拉祜族","高山族","东乡族","仡佬族","傈僳族","畲族","傣族","黎族","哈萨克族","哈尼族","白族","朝鲜族","瑶族","侗族","布依族","藏族","蒙古族","彝族","土家族","维吾尔族","苗族"]
      };
  },
  components:{
   Homehead,
   Toast
  },
  mounted(){
    this.params = this.$route.params
    console.log(this.params); //拿到参数：填写的信息
  },
  methods:{
    modify(){
        if(this.isActive){
            this.isActive=!this.isActive
        }
        this.isRead=false
    },
    blur(e){
       let value = e.target.value
       if(value.trim()==''){
            this.toast=true; 
            this.message='不允许为空值';
            setTimeout(()=>{
                this.toast=false;this.message=''
                },
                1500)
            return
        }
       let param=e.target.id
       this.params[param]=value
       console.log(this.params);
    },
    submit(){
        if(!this.isActive){
            this.isActive=!this.isActive
        }
        this.$axios.post('/addMember',this.params)
        setTimeout(() => { 
            this.$router.push({path:'/home/infoshow',query:{idNumber:this.params.idNumber}})
            //  this.$router.push({name:'Infoshow',params:{idNumber:this.params.idNumber}})
            //  http://localhost:8080/home/editdone?idNumber=445221199909262220
        }, 500);
        this.isRead=true
    },
    
}
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
  #Infoform{
      margin: 60px 10px 10px;
      position: relative;
      font-size: 14px;
      .firstBox,.secondBox,.thirdBox,.forthBox,.fifthBox{
          margin-bottom: 10px;
          background-color: #fff;
      }
      #img{
          background-color: #fff;
          margin-top: 2.8rem;
          border-top: 1px solid #ccc;
          width: 320px;
      }
      .formItem{
        position: relative;
        border-bottom: 1px solid #ccc;
        // background-color: yellow;
        height: 44px;
        .sex,.category,.normal{
            display: inline-block;
            margin-left: -60px;
            margin-top: 2px;
        }
        .category{
            margin-left: 28px;
        }
        >label{
          position: absolute;
          left: 0px;
          text-align: left;
          padding-left: 10px;
          height: 43px;
          line-height: 43px;
          width: 70px;
        //   background-color: green;
        } 
        input,.input{
            height: 43px;
            border: 0px;
            padding-left: 5px;
            width: 250px;
            margin-left: 80px;
        }
        ::-webkit-input-placeholder{font-size: 14px;}    /* 使用webkit内核的浏览器 */
        :-moz-placeholder{font-size: 14px;}                  /* Firefox版本4-18 */
        ::-moz-placeholder{font-size: 14px;}                  /* Firefox版本19+ */
        :-ms-input-placeholder{font-size: 14px;}           /* IE浏览器 */
        .icon{
            position: absolute;
            right: 20px;
            top: 15px;
        }
        .icon.rotate{
            transform: rotate(90deg);
            color:red;
        }
      }
      .button{
       margin-top: 12rem;
       >span{
           display: inline-block;
        width: 60px;
       height: 40px; 
       line-height: 40px;  
       color:$color;
       border:1px solid $color;
       margin-left: 5px;
        }
       span.active{
           color:#fff;
           background-color: $color;
       } 
      }
    }

</style>