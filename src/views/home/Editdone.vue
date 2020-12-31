<template>

  <div id="Infoform">
      <div class="head"><Homehead></Homehead>
    <div class="return" @click='modifySign()'><返回</div></div>
    <form name='myform'>
     <div class="firstBox">
        <div class="formItem">
          <label for="username">姓名</label>
          <input autoComplete="off" :readonly="isRead" @blur='blur($event)'  type="text" id='username' placeholder="姓名"  name='username' :value="params.username">  
        </div>
        <div class="formItem">         
          <label for="sex">性别</label>
          <input v-show='isRead' autoComplete="off" type="text" :value='params.sex' @blur='blur($event)' id="sex" placeholder="性别" :readonly="isRead" name='sex'>  
          <el-select v-show='!isRead' id="sex" @change='change(value)' v-model='value' placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
        <div class="formItem">
            <label for="nation">民族</label>
            <input v-show='isRead' autoComplete="off" type="text" :value='params.nation' @blur='blur($event)' id="nation" placeholder="民族" :readonly="isRead" name='sex'> 
            <el-select v-show='!isRead' id="nation" @change='change3(value3)' v-model='value3' placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
        <div class="formItem">
            <label for="idNumber">身份证号</label>
            <input autoComplete="off" type="number" @blur='isCorrect($event)' :readonly="isRead" id='idNumber' placeholder="身份证号" name='idNumber' :value='params.idNumber'>  
        </div>
        <div class="formItem">
            <label for="birthDate">出生日期</label>
            <input autoComplete="off" type="date" @blur='blur($event)' :readonly="isRead" id='birthDate' placeholder="出生日期" name='birthDate' v-model='params.birthDate'>  
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
            <el-select v-show='!isRead' id="background" @change='change4(value4)' v-model='value4' placeholder="请选择">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            
        </div>
     </div>
     <div class="thirdBox">
        <div class="formItem">         
          <label for="category">人员类别</label>
          <input v-show='isRead' autoComplete="off" type="text" @blur='blur($event)' id="category" :readonly="isRead" :value="params.category" name='category'>
          <el-select v-show='!isRead' id="category" @change='change1(value1)' v-model='value1' placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
         
        </div>
        <div class="formItem">
            <label for="branch">转入支部</label>
            <input v-show='isRead' autoComplete="off" type="text" @blur='blur($event)' id="branch" :readonly="isRead" name='branch' placeholder="组织全称" :value='params.branch'>  
            <el-select v-show='!isRead' id="branch" @change='change2(value2)' v-model='value2' placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        
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
          <el-select v-show='!isRead' id="normal" @change='change5(value5)' v-model='value5' placeholder="请选择">
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
         
        </div>
        <div class="formItem">
            <label for="filesPlace">档案地</label>
            <input autoComplete="off" type="text" @blur='blur($event)' id='filesPlace' :readonly="isRead" placeholder="地址精确到门牌号(选填)" name='filesPlace' :value='params.filesPlace'>  
        </div>
     </div>
     <div class="forthBox">
        <div class="formItem">
            <label for="phone">手机号码</label>
            <input autoComplete="off" type="number" @blur='blurs($event)' id='phone' :readonly="isRead" placeholder="手机号码" name='phone' :value='params.phone'>  
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
        options: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        value: '',
        options1: [{
          value: '正式党员',
          label: '正式党员'
        }, {
          value: '预备党员',
          label: '预备党员'
        }],
        value1: '',
        options2: [{
          value: '南方网第一党支部',
          label: '南方网第一党支部'
        }, {
          value: '南方网第二党支部',
          label: '南方网第二党支部'
        }, {
          value: '南方日报集团第一党支部',
          label: '南方日报集团第一党支部'
        }, {
          value: '南方日报集团第二党支部',
          label: '南方日报集团第二党支部'
        }, {
          value: '南方杂志党支部',
          label: '南方杂志党支部'
        }],
        value2: '',
        options3:[],
        value3:'',
        options4: [{
          value: '博士',
          label: '博士'
        }, {
          value: '硕士',
          label: '硕士'
        }, {
          value: '本科',
          label: '本科'
        }, {
          value: '专科',
          label: '专科'
        }, {
          value: '高中',
          label: '高中'
        }, {
          value: '初中',
          label: '初中'
        }, {
          value: '小学',
          label: '小学'
        }],
        value4: '',
        options5: [{
          value: '是',
          label: '是'
        }, {
          value: '否',
          label: '否'
        }],
        value5: '',
        params:{},
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
    this.value=this.$route.params.sex
    this.value1=this.$route.params.category
    this.value2=this.$route.params.branch
    this.value3=this.$route.params.nation
    this.value4=this.$route.params.background
    this.value5=this.$route.params.normal
    for(var i =0;i<this.nations.length;i++){
      this.options3.push({value:this.nations[i],label:this.nations[i],})
    }
  },
  methods:{
    modifySign(){
       this.$router.push({name:'Sign',params:this.params})
    },
    isCorrect(e){
       let value = e.target.value
       if(value.length!==18){
            this.toast=true; 
            this.message='请输入正确的身份证号码';
            setTimeout(()=>{
                this.toast=false;this.message=''
                },
                1500)
         return
        }
        let param=e.target.id
        this.params.idNumber=value
      
    },
    modify(){
        if(this.isActive){
            this.isActive=!this.isActive
        }
        this.isRead=false
    },
    blurs(e){
      let value = e.target.value
      if(value.length!==11){
            this.toast=true; 
            this.message='请输入正确的手机号码';
            setTimeout(()=>{
                this.toast=false;this.message=''
                },
                1500)
            return
        }
       let param=e.target.id
       this.params[param]=value
    },
    change(value){
        this.params.sex=value
    },
    change1(value){
        this.params.category=value
    },
    change2(value){
        this.params.branch=value
    },
    change3(value){
        this.params.nation=value
    },
    change4(value){
        this.params.background=value
    },
    change5(value){
        this.params.normal=value
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
    },
    submit(){
        if(!this.isActive){
            this.isActive=!this.isActive
        }
         this.$axios.post('/isExite',this.params).then(res=>{
           if(res.data=='该用户已存在'){
            this.toast=true; 
            this.message=res.data;
            setTimeout(()=>{
                this.toast=false;this.message=''
                },
                1500)
           
           }else{
               this.$axios.post('/addMember',this.params)
        setTimeout(() => { 
            this.$router.push({path:'/home/infoshow',query:{idNumber:this.params.idNumber}})
        }, 200);
           }
        })
    },
    
}
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
  .return{
  color:#fff;
  position: fixed;
  left: 10px;
  top: 0.5rem;
  font-size: 1.125rem;
  width: 48px;
  height: 48px;
  line-height: 48px;
  z-index: 99999;
} 
 select{
      width: 200px!important;
      position: relative;
      left: -32px;
  }
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