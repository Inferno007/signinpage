window.onload=function(){
  	document.querySelector("#auth-signup").addEventListener("click",active1);
	document.querySelector("#auth-login").addEventListener("click",active2);
}

function active1(){
	var tag=document.querySelectorAll(".p");
	var x=tag[0].getAttribute("aria-selected");
	var y=tag[1].getAttribute("aria-selected");
	console.log(x)
	console.log(y)
	if (y=='true'){
		tag[1].setAttribute("aria-selected","false");
		tag[1].classList.remove("active");
	}
	if (x=='false'){
		tag[0].setAttribute("aria-selected","true");
		tag[0].classList.add("active");
	}
}
function active2(){
	var tag=document.querySelectorAll(".p");
	var x=tag[0].getAttribute("aria-selected");
	var y=tag[1].getAttribute("aria-selected");
	if (x=='true'){
		tag[0].setAttribute("aria-selected","false");
		tag[0].classList.remove("active");
	}
	if (y=='false'){
		tag[1].setAttribute("aria-selected","true");
		tag[1].classList.add("active");
	}
}

