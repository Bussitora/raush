<script setup>
import { ref } from 'vue'

window.addEventListener('load', function () {
  let canvas = document.getElementById("main_canvas")
  let main = document.getElementById("main")
  let context = canvas.getContext('2d')
     
  var canvasFVC = ({
    0: [[0], [0], [0]],
    1: [[255], [81], [56]],
  })
  var canvasFVsW = 0.3
  var canvasFVsC = "#777"

  var canvasWidth
  var canvasHeight    
  
  var opacityEnd = 0.6
  var opacityChangeUp = 0.1
  var opacityChangeDown = 0.1
      
  var selectedFragment = -1
  var moveMouse = false

  var correctMin = canvasFVsW / 2 - canvasFVsW
  var correctMax = canvasFVsW / 2
    

  var fragments = [
   [[0, 0], [22.5, 0], [15.2, 15], [0, 9.6], [0, 0]],
   [[22.5, 0], [47, 0], [34, 21], [13, 54], [10.5, 25], [15.2, 15], [22.5, 0]],
   [[47, 0], [42.5, 47.5], [34, 21]],
   [[47, 0], [83, 0], [66, 28], [46.5, 59.5], [42.5, 47.5], [47, 0]],
   [[83, 0], [88.5, 0], [100, 26.5], [100, 40.5], [72, 30.2], [66, 28], [83, 0]],
   [[88.5, 0], [100, 0], [100, 26.5], [88.5, 0]],
   [[0, 9.6], [15.2, 15], [10.5, 25], [0, 46.5], [0, 9.6]],
   [[34, 21], [42.5, 47.5], [46.5, 59.5], [60, 100], [52, 100], [13, 54], [34, 21]],
   [[66, 28], [72, 30.2], [78, 61], [86, 100], [60, 100], [46.5, 59.5], [66, 28]],
   [[72, 30.2], [100, 40.5], [100, 100], [78, 61], [72, 30.2]],
   [[10.5, 25], [13, 54], [14.5, 73], [0, 100], [0, 46.5], [10.5, 25]],
   [[13, 54], [52, 100], [17, 100], [14.5, 73], [13, 54]],
   [[78, 61], [100, 100], [86, 100], [78, 61]],
   [[14.5, 73], [17, 100], [0, 100], [14.5, 73]],
  ]
  recalculation(main)

  var canvasPosition = {
      x: canvas.offsetLeft,
      y: canvas.offsetTop
  }
	drawCanvas()


  canvas.onmouseover = mouseEnterHandler
  canvas.onmouseout = mouseLeaveHandler
  canvas.onmousemove = mouseMoveHandler

  function drawCanvas() {
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      drawFragments()
      setTimeout(drawCanvas, 20)
  }
	
    function drawFragments() {
      fragments.forEach((fragment, index) => {
        var arRes = []
			  arRes["change"] = 0
			  arRes["opacity"] = 0			
        context.beginPath()

        fragment.forEach((value, index) => {
          if (index == 0){
             context.moveTo(percentToPx(value[0], true), percentToPx(value[1], false))
          }
          else {
            context.lineTo(percentToPx(value[0], true), percentToPx(value[1], false))
          }
        })
        if (selectedFragment == index){
          arRes = changeOpacity(fragments[index]["opacity"], fragments[index]["change"], true)
        }
        else{
          arRes = changeOpacity(fragments[index]["opacity"], fragments[index]["change"], false)
        }
        fragments[index]["opacity"] = arRes["opacity"]
        fragments[index]["change"] = arRes["change"]
        context.fillStyle = "rgba(" + canvasFVC[arRes["change"]][0] + "," + canvasFVC[arRes["change"]][1] + "," + canvasFVC[arRes["change"]][2] + "," + fragments[index]["opacity"] + ")"
        context.fill()
        context.strokeStyle = canvasFVsC
        context.lineWidth = canvasFVsW
        context.stroke()
        context.closePath()
      })
    }
	
    function changeOpacity(alpha, change, selected) {
		  var result = new Array();
		  result["change"] = change
		
      if (selected) {
        if(change == 1){
          if (alpha >= opacityEnd) result["opacity"] = opacityEnd
          else result["opacity"] = alpha + opacityChangeUp;
        }
        else{
          if (alpha <= opacityChangeDown) {
            result["opacity"] = 0
            result["change"] = 1
          } 
          else result["opacity"] = alpha - opacityChangeDown;
        }
      } else {
        if(change == 1){
          if (alpha <= opacityChangeDown) {
            result["opacity"] = 0
            result["change"] = 0
          }
          else result["opacity"] = alpha - opacityChangeDown
        }
        else{
          if (alpha >= opacityEnd) result["opacity"] = opacityEnd
          else result["opacity"] = alpha + opacityChangeUp
        }
      }
      return result
    }

    function mouseMoveHandler(e) {
        if (!moveMouse) return false;
        var mouse = {
            x: e.pageX - canvasPosition.x,
            y: e.pageY - canvasPosition.y
        }
        
        selectedFragment = -1

        fragments.forEach((value, index) => {
          context.beginPath()
          value.forEach((value, index) => {
            if (index == 0) context.moveTo(percentToPx(value[0], true), percentToPx(value[1], false))
            else context.lineTo(percentToPx(value[0], true), percentToPx(value[1], false))
          })
          if (context.isPointInPath(mouse.x, mouse.y)) {
                selectedFragment = index
            }
            context.closePath()
        })
    }

    function mouseLeaveHandler(e) {
        moveMouse = false
        selectedFragment = -1
    }

    function mouseEnterHandler(e) {
        moveMouse = true
    }

    function recalculation(main) { 
      canvasHeight = main.getBoundingClientRect().height
      canvasWidth = main.getBoundingClientRect().width
      context.canvas.width = canvasWidth
      context.canvas.height = canvasHeight		
      fragments.forEach((value, index) => {
        fragments[index]["animation"] = 0
			  fragments[index]["opacity"] = 1
			  fragments[index]["change"] = 0
      })

    }

    function percentToPx(value, axis) {
        let result = (axis) ? (canvasWidth / 100) * value : (canvasHeight / 100) * value
        if ((axis && result == canvasWidth) || (!axis && result == canvasHeight)){
          result += correctMax
        }
        else if (result == 0){
          result += correctMin
        }
        return result
    }


    addEventListener("resize", (event) => {})

    onresize = (event) => {
      recalculation(main)
    }

})
</script>

<template>
<div id="main" class="block main">
  <h1>Арт-студия «Катя Рауш»</h1>
  <a class="main_button" target="_blank" href="https://vk.com/im?media=&sel=-206958613">записаться</a>
  <canvas id="main_canvas" ></canvas>
</div>
</template>

<style scoped>
.main {
  justify-content: center;
  align-items: center;
  display:flex;
  flex-direction: column;
  height:50vh;
  min-height:450px;
  background:url("../assets/media/m.png") center center no-repeat;
  background-size:cover;
  color:#fff;
  position:relative;
}

#main_canvas{
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  right:0;
}

.main h1{
  position:relative;
  z-index:1001;
  pointer-events: none;
}

.main_button{
  text-decoration: none;
  color:#fff;
  position:relative;
  z-index:1001;
  margin-top:50px;
  background-color: #e5448a;
  padding:15px 40px;
  border-radius:4px;
  font-size:18px;
  font-weight:600;
  text-transform: uppercase;
  transition:0.2s;
}
.main_button:hover{
  background-color:#e61e53;
}

</style>
