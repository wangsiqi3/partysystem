<template>
  <div id="infoTable">
      <div class="title">党员信息采集表</div>
      <div class="search">
          <span class="branch"><input placeholder="接受支部" type="text"><span class="slide" :class="{rotate:show}" @click="slideDown()">></span></span>
          <span class="name"><input  placeholder="姓名" type="text"></span>
          <span class="button" :class="{active:isActive1}" @click='search()'>搜索</span>
          <span class="button" :class="{active:isActive2}" @click='clearAll()'>清空</span>
      </div>
      <div class="branch_list" v-show='show'>
          <ul>
              <li v-for='(item,index) in branchs' :key='index'>{{item}}</li>
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
          <div>
            <div class="list_mumber">
              <span>王思琪</span>
              <span>南方网第二党支部</span>
              <span>2020-01-04 09:41:00</span>
              <span class="code">查看二维码</span>
            </div>
          </div>
          <div>
            <div class="list_mumber">
              <span>王思琪</span>
              <span>南方网第二党支部</span>
              <span>2020-01-04 09:41:00</span>
              <span class="code">查看二维码</span>
            </div>
          </div>
          <div>
            <div class="list_mumber">
              <span>王思琪</span>
              <span>南方网第二党支部</span>
              <span>2020-01-04 09:41:00</span>
              <span class="code">查看二维码</span>
            </div>
          </div>
      </div>
      <div class="pager">
          <span><</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>></span>
      </div>
      
  </div>
</template>

<script>
export default {
 name:"InfoTable",
 data(){
     return {
      show:false,
      isActive1:true,
      isActive2:false,
      branchs:["南方网第一党支部","南方网第二党支部","南方日报集团第一党支部","南方日报集团第二党支部","南方杂志党支部"]
     }
 },
 methods:{
     slideDown(){
      this.show=!this.show
     },
     search(){
         if(this.isActive1==false){
            this.isActive1=!this.isActive1
             this.isActive2=!this.isActive2 
         }
      
     },
     clearAll(){
         if(this.isActive2==false){
             this.isActive1=!this.isActive1
      this.isActive2=!this.isActive2 
         }
     
     }
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
    } 
    .branch_list{
        position: absolute;
        top: 95px;
        background-color: #fff;
        box-shadow: 0px 2px 4px 1px rgba($color: #000000, $alpha: .3);
        ul{
            list-style: none;
            color:#888888;
            li{
                padding: 5px;
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
              color:#757575
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
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #f3f3f3;
            .list_mumber{
              margin-left: 30px;
              color:#919191;
              display: flex;
              span{
               flex:1
              }
              .code{
                  color:$color;
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
        span{
            display: inline-block;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border: 1px solid #ddd;
            color: #929292;
            margin-left: 5px;
        }
    }
}
 
</style>