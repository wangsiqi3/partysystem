<template>
  <div id="Infoform">
    <form name='myform'>
     <div class="firstBox">
        <div class="formItem">
          <label for="username">姓名</label>
          <input autoComplete="off" type="text" id='username' placeholder="姓名"  name='username'>  
        </div>
        <div class="formItem">         
          <label for="sex">性别</label>
          <div class="sex">
           <el-radio-group v-model="radio1"  text-color='#fff' fill='red'>
             <el-radio-button label="男" name='sex' id="sex"></el-radio-button>
             <el-radio-button label="女" name='sex' id="sex"></el-radio-button>
           </el-radio-group>
          </div>
        </div>
        <div class="formItem" @click="showPicker()">
            <label for="nation">民族</label>
            <input type="text" autoComplete="off" id="nation" name='nation' placeholder="民族" :value='nation'>
            <span class="icon" :class={rotate:rotate}>></span>  
        </div>
        <div class="formItem">
            <label for="idNumber">身份证号</label>
            <input type="number" autoComplete="off" id='idNumber' placeholder="身份证号" name='idNumber'>  
        </div>
        <div class="formItem">
            <label for="birthDate">出生日期</label>
            <input type="date" id='birthDate' placeholder="出生日期" name='birthDate'>  
        </div>
     </div>
     <div class="secondBox">
        <div class="formItem">
            <label for="school">毕业院校</label>
            <input type="text" autoComplete="off" id='school' placeholder="学校全称" name='school'>  
        </div>
       <div class="formItem" @click="showPicker3()">
            <label for="background">学历</label>
            <input type="text" autoComplete="off" id="background" name='background' placeholder="最高学历" :value='background'>
            <span class="icon" :class={rotate:rotate3}>></span>  
        </div>
     </div>
     <div class="thirdBox">
        <div class="formItem">         
          <label for="category">人员类别</label>
          <div class="category">
           <el-radio-group v-model="radio2"  text-color='#fff' fill='red'>
             <el-radio-button label="正式党员" name='category' id='category'></el-radio-button>
             <el-radio-button label="预备党员" name='category' id="category"></el-radio-button>
           </el-radio-group>
          </div>
        </div>
        <div class="formItem" @click="showPicker2()">
            <label for="branch">转入支部</label>
            <input type="text" autoComplete="off" id="branch" name='branch' placeholder="组织全称" :value='branch'>
            <span class="icon" :class={rotate:rotate2}>></span>  
        </div>
        <div class="formItem">
            <label for="enterDate">入党日期</label>
            <input type="date" id='enterDate' placeholder="入党日期" name='enterDate'>  
        </div>
        <div class="formItem">
            <label for="probationDate">转正日期</label>
            <input type="date" id='probationDate' placeholder="转正日期" name='probationDate'>  
        </div>
        <div class="formItem">
            <label for="introduce1">介绍人1</label>
            <input type="text" autoComplete="off" id='introduce1' placeholder="介绍人姓名(选填)" name='introduce1'>  
        </div>
        <div class="formItem">
            <label for="introduce2">介绍人2</label>
            <input type="text" autoComplete="off" id='introduce2' placeholder="介绍人姓名(选填)" name='introduce2'>  
        </div>
        <div class="formItem">         
          <label for="normal">党籍正常</label>
          <div class="normal">
           <el-radio-group v-model="radio3"  text-color='#fff' fill='red'>
             <el-radio-button label="是" name='normal' id="normal"></el-radio-button>
             <el-radio-button label="否" name='normal' id="normal"></el-radio-button>
           </el-radio-group>
          </div>
        </div>
        <div class="formItem">
            <label for="filesPlace">档案地</label>
            <input type="text" autoComplete="off" id='filesPlace' placeholder="地址精确到门牌号(选填)" name='filesPlace'>  
        </div>
     </div>
     <div class="forthBox">
        <div class="formItem">
            <label for="phone">手机号码</label>
            <input type="number" autoComplete="off" id='phone' placeholder="手机号码" name='phone'
             >  
        </div>
        <div class="formItem">
            <label for="address">家庭住址</label>
            <input type="text" autoComplete="off" id='address' placeholder="地址精确到门牌号" name='address'>  
        </div>
     </div>
     <div class="submit"  @click="submit($event)">确认并签名</div>
    </form>
   <!-- 底部滚动选择器 民族选择器-->
   <div class="picker-main">
     <div
       v-if="show"
       class="picker"
       >
      <section class="picker-main">
        <h3>
          <span @click="show = false;rotate=false">取消</span>
          <span>请选择</span>
          <span @click="sure()">确认</span>
        </h3>
        <ul ref="ul" id="ul1">
          <li
            v-for="(item, index) in list"
            :key="index+'-'"
            :class="active==item.id?'active':active==item.id-1||active==item.id+1?'active2':null"
            :ref="'li'+item.label"
          >{{item.val}}</li>
        </ul>
      </section>
    </div>
   </div>
   <!-- 底部滚动选择器 -->
   <!-- 底部滚动选择器 支部选择器-->
    <div class="picker-main">
     <div
       v-if="show2"
       class="picker"
       >
      <section class="picker-main">
        <h3>
          <span @click="show2 = false;active2=false">取消</span>
          <span>请选择</span>
          <span @click="sure2()">确认</span>
        </h3>
        <ul ref="ul2" id="ul2">
          <li
            v-for="(item, index) in branchs"
            :key="index+'+'"
            :class="active2==item.id?'active':active2==item.id-1||active2==item.id+1?'active2':null"
            :ref="'li'+item.label"
          >{{item.val}}</li>
        </ul>
      </section>
    </div>
   </div>
   <!-- 底部滚动选择器 -->
   <!-- 底部滚动选择器 学历选择器-->
    <div class="picker-main">
     <div
       v-if="show3"
       class="picker"
       >
      <section class="picker-main">
        <h3>
          <span @click="show3 = false;active3=false">取消</span>
          <span>请选择</span>
          <span @click="sure3()">确认</span>
        </h3>
        <ul ref="ul3" id="ul3">
          <li
            v-for="(item, index) in backgrounds"
            :key="index+'*'"
            :class="active3==item.id?'active':active3==item.id-1||active3==item.id+1?'active2':null"
            :ref="'li'+item.label"
          >{{item.val}}</li>
        </ul>
      </section>
    </div>
   </div>
   <!-- 底部滚动选择器 -->
   <Toast :Show='toast' :message='message'></Toast>
  </div>
</template>

<script>
import Toast from '../../components/toast/Toast'
import Qs from 'qs'
   
export default {
 name:'Infoform',
 data () {
      return {
        radio1: '男',
        radio2: '正式党员',
        radio3:'是',
        rotate:false,
        rotate2:false,
        rotate3:false,
        list: [],
        branchs:[
            {id: -9, branch: "", label: "ff" },
            {id: -9, branch: "", label: "gg" },
            {id:0, val:"南方网第一党支部", label:'l'},
            {id:1, val:"南方网第二党支部", label:'m'},
            {id:2, val:"南方日报集团第一党支部", label:'n'},
            {id:3, val:"南方日报集团第二党支部", label:'o'},
            {id:4, val:"南方杂志党支部", label:'p'},
            { id: -9, branch: "", label: "hh" },
            { id: -9, branch: "", label: "ii" },
            { id: -9, branch: "", label: "jj" }
            ],
        backgrounds:[
            {id: -9, background: "", label: "fff" },
            {id: -9, background: "", label: "ggg" },
            {id:0, val:"博士后", label:'q'},
            {id:1, val:"博士", label:'r'},
            {id:2, val:"研究生", label:'s'},
            {id:3, val:"本科", label:'t'},
            {id:4, val:"专科", label:'u'},
            {id:5, val:"高中", label:'v'},
            {id:6, val:"初中", label:'w'},
            {id:7, val:"小学", label:'x'},
            { id: -9, background: "", label: "hhh" },
            { id: -9, background: "", label: "iii" },
            { id: -9, background: "", label: "jjj" }
        ],
        show: false,
        show2:false,
        show3:false,
        active: 0,
        active2:0,
        active3:0,
        nation: "",
        branch:"",
        background:'',
        listOffsetTop: [],
        listOffsetTop2: [],
        listOffsetTop3: [],
        timer: null,
        timer2: null,
        timer3: null,
        toast:false,
        message:'',
        params:{},
      };
  },
  components:{
   Toast
  },
  mounted(){
    const nation = ["汉族","壮族","满族","回族","珞巴族","赫哲族","塔塔尔族","独龙族","鄂伦春族","门巴族","乌孜别克族","裕固族","俄罗斯族","保安族","德昂族","基诺族","京族","怒族","鄂温克族","普米族","阿昌族","塔吉克族","布朗族","撒拉族","毛南族","景颇族","达斡尔族","柯尔克孜族","锡伯族","仫佬族","土族","羌族","纳西族","佤族","水族","拉祜族","高山族","东乡族","仡佬族","傈僳族","畲族","傣族","黎族","哈萨克族","哈尼族","白族","朝鲜族","瑶族","侗族","布依族","藏族","蒙古族","彝族","土家族","维吾尔族","苗族"]
    const nationList = [{ id: -9, nation: "", label: "a" },
        { id: -9, nation: "", label: "b" },]
    for(var i = 0;i<nation.length;i++){
      nationList.push({id:i,val:nation[i],label:"bj"+i})  
    }  
    nationList.push( { id: -9, nation: "", label: "c" },
        { id: -9, nation: "", label: "d" },{ id: -9, nation: "", label: "e" })
    this.list=nationList
    this.lists=[this.list,this.branchs,this.backgrounds]
  },
  methods:{
    submit:function(e){
      this.params = {
        username:myform.username.value,
        sex:myform.sex.value,
        nation:myform.nation.value,
        idNumber:myform.idNumber.value,
        birthDate:myform.birthDate.value,
        school:myform.school.value,
        background:myform.background.value,
        category:myform.category.value,
        branch:myform.branch.value,
        enterDate:myform.enterDate.value,
        probationDate:myform.probationDate.value,
        normal:myform.normal.value,
        phone:myform.phone.value,
        address:myform.address.value,
      } 
      
      for(let key in this.params){
        if(this.params[key]==''){
            this.toast=true; 
            this.message='请填写完整'+key;
            setTimeout(()=>{
                this.toast=false;this.message=''
                },
                1500)
            return
        }  
      }
       this.params={
        ...this.params,
        introduce1:myform.introduce1.value,
        introduce2:myform.introduce2.value,
        filesPlace:myform.filesPlace.value,
       }
       this.$axios.post('/isExite',this.params).then(res=>{
           if(res.data=='该用户已存在'){
            this.toast=true; 
            this.message=res.data;
            setTimeout(()=>{
                this.toast=false;this.message=''
                },
                1500)
            return
           }else{
            //    this.$router.push({path:'/home/sign',query: this.params})
               this.$router.push({name:'Sign',params:this.params})
           }
       })
       
       
    },
    //   底部滚动选择器 民族选择器 
     showPicker() {
      this.rotate=!this.rotate
      this.show = true;
      this.active = 0;
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.getOffsetTop();
        this.computeActive();
      }, 50);
    },
    sure() {
      this.list.map((item, index) => {
        item.id == this.active ? (this.nation = item.val) : null;
      });
      this.show = false;
      this.rotate=!this.rotate
    },
    getOffsetTop() {
      this.listOffsetTop = [];
      this.list.map((item, index) => {
        let liTop = this.$refs["li" + item.label];
        this.listOffsetTop.push(liTop[0].offsetTop - 41);
      });
    },
    computeActive() {
      let scroll = this.$refs.ul;
      scroll.addEventListener("scroll", () => {
        this.listOffsetTop.map((item, index) => {
          item <= scroll.scrollTop + 100 ? (this.active = index - 2) : null;
        });
      });
    },
    // 底部滚动选择器 支部选择器
    showPicker2() {
      this.rotate2=!this.rotate2
      this.show2 = true;
      this.active2 = 0;
      this.timer2 = setTimeout(() => {
        clearTimeout(this.timer2);
        this.getOffsetTop2();
        this.computeActive2();
      }, 50);
    },
    sure2() {
      this.branchs.map((item, index) => {
        item.id == this.active2 ? (this.branch = item.val) : null;
      });
      this.show2 = false;
      this.rotate2=!this.rotate2
    },
    getOffsetTop2() {
      this.listOffsetTop2 = [];
      this.branchs.map((item, index) => {
        let liTop = this.$refs["li" + item.label];
        this.listOffsetTop2.push(liTop[0].offsetTop - 41);
      });
    },
    computeActive2() {
      let scroll = this.$refs.ul2;
      scroll.addEventListener("scroll", () => {
        this.listOffsetTop2.map((item, index) => {
          item <= scroll.scrollTop + 100 ? (this.active2 = index - 2) : null;
        });
      });
    },
    //  底部滚动选择器 学历选择器
    showPicker3(x) {
      if(x==3){
          
      }
      this.rotate3=!this.rotate3
      this.show3 = true;
      this.active3 = 0;
      this.timer3 = setTimeout(() => {
        clearTimeout(this.timer3);
        this.getOffsetTop3();
        this.computeActive3();
      }, 50);
    },
    sure3() {
      this.backgrounds.map((item, index) => {
        item.id == this.active3 ? (this.background = item.val) : null;
      });
      this.show3 = false;
      this.rotate3=!this.rotate3
    },
    getOffsetTop3() {
      this.listOffsetTop3 = [];
      this.backgrounds.map((item, index) => {
        let liTop = this.$refs["li" + item.label];
        this.listOffsetTop3.push(liTop[0].offsetTop - 41);
      });
    },
    computeActive3() {
      let scroll = this.$refs.ul3;
      scroll.addEventListener("scroll", () => {
        this.listOffsetTop3.map((item, index) => {
          item <= scroll.scrollTop + 100 ? (this.active3 = index - 2) : null;
        });
      });
    }
    // 底部滚动选择器
  }
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
  #Infoform{
      margin: 60px 10px 10px;
      position: relative;
      font-size: 14px;
      .firstBox,.secondBox,.thirdBox,.forthBox{
          margin-bottom: 10px;
          background-color: #fff;
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
      .submit{
          width: 320px;
          height: 48px;
          line-height: 48px;
          background-color: $color;
          color:#fff;
          margin: auto;
      }
    }
// 底部滚动选择器
.picker {
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  .picker-main {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    h3 {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;
      border-bottom: solid 1px #ddd;
      font-size: 20px;
      line-height: 40px;
    }
    ul {
      max-height: 250px;
      padding: 0;
      margin: 0;
      overflow: auto;
      background-color: #fff;
      li {
        list-style: none;
        font-size: 25px;
        line-height: 50px;
        text-align: center;
        opacity: 0.3;
        height: 50px;
        background-color: #fff;
      }
    }
  }
}
.active {
  background-color: #ddd !important;
  color: #333;
  opacity: 1 !important;
}
.active2 {
  color: #333;
  opacity: 0.6 !important;
}
// 底部滚动选择器
</style>