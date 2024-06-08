<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

function scrollToId(e){
  console.log(e.target.hash)
  const hash = e.target.hash.replace('#','')
  const el = document.getElementById(hash)
  if(el){
    el.scrollIntoView({alignToTop:false,behavior: 'smooth'})
  }
  return false
}
</script>

<template>
  <div class="menu" id="menu">
    <a class="menu_logo" href="#">
      <img src="/src/assets/media/logo.jpg">
    </a>
    <div class="menu_in">
      <a @click="event.preventDefault();scrollToId(event)" href="#test">test</a>
    </div>		
    <a class="menu_logo_ghost" href="#">
      <img src="/src/assets/media/logo.jpg">
    </a>			
  </div>	
</template>

<style scoped>
.menu{
	display: flex;
	width:100%;
	left:0;
	top:0;
	position:fixed;
	z-index:101;
	padding:10px 10vw;
}

.menu_in{
	display:flex;	
	width:100%;
	/*flex-wrap:wrap;*/
	justify-content:center;
}

.menu_in a{
	font-size:18px;
	margin:15px;
	transition:0.2s;
}

.menu_logo{
	max-width:100px;
	display: flex;
    align-items: center;
}

.menu_logo img{
	pointer-events:none;
}

.menu_logo_ghost{
	max-width:100px;
	display: flex;
    align-items: center;
	visibility:hidden;
	opacity:0;
	pointer-events:none;
}

@media (min-width:0px) and (max-width:640px){
	.menu_logo_ghost{
		display:none;
	}
  .menu{
	  flex-direction: column;
		align-items: center;
	}
}
</style>
