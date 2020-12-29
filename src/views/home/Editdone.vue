<template>

  <div id="Infoform">
    <Homehead :show1='true' :show2='false'></Homehead>
    <form name='myform'>
     <div class="firstBox">
        <div class="formItem">
          <label for="username">姓名</label>
          <input type="text" id='username' placeholder="姓名"  name='username' :value="params.username">  
        </div>
        <div class="formItem">         
          <label for="sex">性别</label>
          <div class="sex">
           <el-radio-group v-model="radio1"  text-color='#fff' fill='red'>
             <el-radio-button label="男" name='sex' id="sex" :checked='params.sex=="男"'></el-radio-button>
             <el-radio-button label="女" name='sex' id="sex" :checked='params.sex=="女"'></el-radio-button>
           </el-radio-group>
          </div>
        </div>
        <div class="formItem">
            <label for="nation">民族</label>
            <input type="text" id="nation" name='nation' placeholder="民族" :value='params.nation'>
            <span class="icon">></span>  
        </div>
        <div class="formItem">
            <label for="idNumber">身份证号</label>
            <input type="number" id='idNumber' placeholder="身份证号" name='idNumber' :value='params.idNumber'>  
        </div>
        <div class="formItem">
            <label for="birthDate">出生日期</label>
            <input type="date" id='birthDate' placeholder="出生日期" name='birthDate' :value='params.birthDate'>  
        </div>
     </div>
     <div class="secondBox">
        <div class="formItem">
            <label for="school">毕业院校</label>
            <input type="text" id='school' placeholder="学校全称" name='school' :value="params.school">  
        </div>
       <div class="formItem">
            <label for="background">学历</label>
            <input type="text" id="background" name='background' placeholder="最高学历" :value='params.background'>
            <span class="icon">></span>  
        </div>
     </div>
     <div class="thirdBox">
        <div class="formItem">         
          <label for="category">人员类别</label>
          <div class="category">
           <el-radio-group v-model="radio2"  text-color='#fff' fill='red'>
             <el-radio-button label="正式党员" name='category' id='category' :checked="params.category=='正式党员'"></el-radio-button>
             <el-radio-button label="预备党员" name='category' id="category" :checked="params.category=='预备党员'"></el-radio-button>
           </el-radio-group>
          </div>
        </div>
        <div class="formItem">
            <label for="branch">转入支部</label>
            <input type="text" id="branch" name='branch' placeholder="组织全称" :value='params.branch'>
            <span class="icon">></span>  
        </div>
        <div class="formItem">
            <label for="enterDate">入党日期</label>
            <input type="date" id='enterDate' placeholder="入党日期" name='enterDate' :value='params.enterDate'>  
        </div>
        <div class="formItem">
            <label for="probationDate">转正日期</label>
            <input type="date" id='probationDate' placeholder="转正日期" name='probationDate' :value='params.probationDate'>  
        </div>
        <div class="formItem">
            <label for="introduce1">介绍人1</label>
            <input type="text" id='introduce1' placeholder="介绍人姓名(选填)" name='introduce1' :value="params.introduce1">  
        </div>
        <div class="formItem">
            <label for="introduce2">介绍人2</label>
            <input type="text" id='introduce2' placeholder="介绍人姓名(选填)" name='introduce2' :value="params.introduce2">  
        </div>
        <div class="formItem">         
          <label for="normal">党籍正常</label>
          <div class="normal">
           <el-radio-group v-model="radio3"  text-color='#fff' fill='red'>
             <el-radio-button label="是" name='normal' id="normal" :checked='params.normal=="是"'></el-radio-button>
             <el-radio-button label="否" name='normal' id="normal" :checked='params.normal=="否"'></el-radio-button>
           </el-radio-group>
          </div>
        </div>
        <div class="formItem">
            <label for="filesPlace">档案地</label>
            <input type="text" id='filesPlace' placeholder="地址精确到门牌号(选填)" name='filesPlace' :value='params.filesPlace'>  
        </div>
     </div>
     <div class="forthBox">
        <div class="formItem">
            <label for="phone">手机号码</label>
            <input type="number" id='phone' placeholder="手机号码" name='phone' :value='params.phone'>  
        </div>
        <div class="formItem">
            <label for="address">家庭住址</label>
            <input type="text" id='address' placeholder="地址精确到门牌号" name='address' :value='params.address'>  
        </div>
        
     </div>
     <div class="fifthBox">
        <div class="formItem">
          <label for="sign">党员签名</label>
          <img id="img" :src="params.url" alt="">  
        </div>
     </div>
     <div class="button" v-if='show'>
        <span  @click='modify()' :class="{active:isActive}">修改</span>
        <span  @click='submit()' :class="{active:!isActive}">提交</span>
    </div>
    </form>
    
  </div>
</template>

<script>
import Homehead from './Homehead'
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
      };
  },
  components:{
   Homehead,
  },
  mounted(){
    this.params = this.$route.query
    console.log(this.params); //拿到参数：填写的信息
  },
  methods:{
    modify(){
        if(!this.isActive){
            this.isActive=!this.isActive
        }
    },
    submit(){
        if(this.isActive){
            this.isActive=!this.isActive
        }
        this.$axios.post('/addMember',this.params)
        setTimeout(() => {
            this.show=false;
        }, 1000);
        
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
        input{
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