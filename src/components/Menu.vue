<script setup>
import { ref, onMounted, onUnmounted } from 'vue' 

const isScroll = ref(false)
const isSideMenu = ref(false)

function scrollToId(e){
  const hash = e.target.hash.replace('#','')
  const el = document.getElementById(hash)
  if(el){
    el.scrollIntoView({alignToTop:false,behavior: 'smooth'})
  }
  return false
}

function handleScroll(){
	if (window.scrollY >= 70) {
		isScroll.value = true
	}
	else{
		isScroll.value = false
	}	
}

function handleSideMenu(){
	isSideMenu.value = !isSideMenu.value
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})
   
onUnmounted(() => {
	window.value.removeEventListener(handleScroll)
}) 

</script>

<template>
  <div v-bind:class="{ scroll: isScroll }" class="header">
	<div class="header_in">
		<a class="menu_logo" href="#">
			<img src="/src/assets/media/logo.jpg">
		</a>
		<div v-bind:class="{ act: isSideMenu }" class="shadow"></div>
		<div v-bind:class="{ act: isSideMenu }" class="menu">
			<div @click="handleSideMenu" class="close"></div>
			<a @click.prevent="scrollToId" href="#gallery">Фото</a>
			<a @click.prevent="scrollToId" href="#map">Контакты</a>
		</div>
		<div @click="handleSideMenu" class="menu_b"></div>
	</div>		
  </div>	
</template>

<style scoped>
.header{
	display: flex;
	width:100%;
	left:0;
	top:0;
	position:fixed;
	z-index:1002;
	background:none;
	height:70px;	
	transition:0.2s;
	pointer-events: none;
}

.header.scroll{
	background:#fff;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}

.header_in{
	max-width:1200px;
	margin:0 auto;
	width:100%;
	display:flex;
	align-items:center;
	justify-content: space-between;
}

.menu{
	display:flex;	
	width:100%;
	margin-left:30px;
	align-items: center;
}

.menu a{
	font-size:20px;
	margin:0px 15px;
	transition:0.2s;
	color:#fff;
	font-weight:600;
	text-decoration: none;
	pointer-events: all;
}

.menu a:hover{
	text-decoration: none;
	color:#fff;
}

.scroll .menu a{
	color:#000;
}

.scroll .menu a:hover{
	color:#000;
}

.menu_logo{
	max-width:70px;
	display: flex;
    align-items: center;
	pointer-events: all;
	cursor:pointer;
}

.menu_b{
	width:40px;
	height:40px;
	background:url(../assets/media/menu_w.svg) center center no-repeat;
	background-size:contain;
	display:none;
	pointer-events: all;
}

.scroll .menu_b{
	background:url(../assets/media/menu.svg) center center no-repeat;
}

.close{
	display:none;
	pointer-events: all;
}

.shadow{
	display:none;
}

@media (min-width:0px) and (max-width:640px){
	.menu_b{
		display:block;
	}
  	.menu{
		position:fixed;
		right:-360px;
		top:0;
		width:100%;
		max-width:360px;
		height:100%;
		flex-direction: column;
		align-items: flex-start;
		transition:0.2s;
		background:#fff;
		padding-top:70px;
	}
	.menu.act{
		right:0;
	}
	.menu a{
		font-size:20px;
		margin:15px 15px;
		transition:0.2s;
		color:#000;
		font-weight:600;
		text-decoration: none;
	}
	.close{
		width:30px;
		height:30px;
		background:url(../assets/media/close.svg) center center no-repeat;
		background-size:contain;
		position:absolute;
		right:10px;
		top:10px;
		cursor:pointer;
		display: block;
	}
	.shadow{
		display:block;
		position:fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.5);
		visibility:hidden;
		opacity:0;
		transition:0.2s;
	}
	.shadow.act{
		visibility:visible;
		opacity:1;
	}
}
</style>
