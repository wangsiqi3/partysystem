<template>
<!--  -->
  <div id="canvasBox" :style="getHorizontalStyle">
    <canvas style="background-color:#fff;"></canvas>
    <div class="greet">
      <div class="btnBox">
        <div class="btn" @click="clear()" id="restart">重置</div>
        <div class="btn" @click="download()" style="backgroundColor:#fff;border:1px solid red;color:red;width:100px">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import Draw from "./Draw"
export default {
  name:"Canvas2",
   data() {
    return {
      degree: 0 // 屏幕整体旋转的角度, 可取 -90,90,180等值
    };
  },
  components: {
    Draw
  },
  inject: ["reload"],
  mounted() {
    this.canvasBox = document.getElementById("canvasBox");
    this.initCanvas();
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    var that = this;
    window.addEventListener(
      evt,
      function() {
        // alert(evt);
        setTimeout(function() {
          that.reload();
        }, 300);
      },
      false
    );
  },
  computed: {
    getHorizontalStyle() {
      const d = document;
      const w =
        window.innerWidth ||
        d.documentElement.clientWidth ||
        d.body.clientWidth;
      const h =
        window.innerHeight ||
        d.documentElement.clientHeight ||
        d.body.clientHeight;
      let length = (h - w) / 2;
      let width = w;
      let height = h;
      if (width < height) {
        this.degree = 90;
        width = h;
        height = w;
      } else {
        length = 0;
      }
      if (this.canvasBox) {
        this.canvasBox.removeChild(document.querySelector("canvas"));
        this.canvasBox.appendChild(document.createElement("canvas"));
        setTimeout(() => {
          this.initCanvas();
        }, 200);
      }
      return {
        transform: `rotate(${
          this.degree
        }deg) translate(${length}px,${length}px)`,
        width: `${width}px`,
        height: `${height}px`,
        transformOrigin: "center center"
      };
    }
  },
  methods:{
    initCanvas() {
      const canvas = document.querySelector("canvas");
      this.draw = new Draw(canvas, -this.degree);
    },
    clear() {
      this.draw.clear();
    },
   
    download() {
      const image = this.draw.getPNGImage();
      const blob = this.draw.dataURLtoBlob(image);
      const url = "";
       const successCallback = response => {
         console.log(response);
       };
      const failureCallback = error => {
        console.log(error);
      };
      this.draw.upload(blob, url, successCallback, failureCallback);
      console.log(image);
      this.$emit('comfirm',image)
    }
  }
  }

</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
 #canvasBox {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.greet {
  padding: 20px;
  font-size: 20px;
  user-select: none;
  position: absolute;
  bottom: 0;
  left: 200px;
}
.greet a {
  cursor: pointer;
}
.greet select {
  font-size: 18px;
}
canvas {
  flex: 1;
  cursor: crosshair;
}
.btnBox {
  padding: 0 2%;
  box-sizing: border-box;
  position: relative;
  left: 130px;
  .btn {
    text-align: center;
    color: #fff;
    background-color: $color;
    height: 40px;
    width: 100px;
    line-height: 40px;
    font-weight: 300;
    font-size: 1em;
    border-radius: 4px;
  }
  #restart{
      position: relative;
      top: 40px;
      left: 120px;
  }
}
</style>