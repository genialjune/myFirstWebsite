var	icon = document.querySelector('.icon')
var	layer = document.querySelector('.layer')
var	menuBox = document.querySelector('.menu-box')
var	closeMenu = document.querySelector('.close-menu')


function openMenu(){
	layer.style.display='block'
	menuBox.style.right ='0'
	menuBox.style.display = 'flex'
	

}

function menuClose(){
	layer.style.display='none'
	menuBox.style.right = '-500px'
	menuBox.style.display = 'none'
}

 
var one = document.querySelector('.one') 
var two = document.querySelector('.two') 
var three = document.querySelector('.three') 

function skills(){
	one.style.display = 'block'
	two.style.display = 'none'
	three.style.display = 'none'
}

function exp(){
	one.style.display = 'none'
	two.style.display = 'block'
	three.style.display = 'none'
}

function educ(){
	one.style.display = 'none'
	two.style.display = 'none'
	three.style.display = 'block'
}




