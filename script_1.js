window.onload=function(){
  	document.querySelector("#auth-signup").addEventListener("click",active1);
	document.querySelector("#auth-login").addEventListener("click",active2);
}

function active1(){
	var tag=document.querySelectorAll(".p");
	var x=tag[0].getAttribute("aria-selected");
	var y=tag[1].getAttribute("aria-selected");
	var tag1=document.querySelectorAll("#hide");
	console.log(x)
	console.log(y)
	if (y=='true'){
		tag[1].setAttribute("aria-selected","false");
		tag[1].classList.remove("active");
		document.querySelectorAll("#exampleusername")[0].setAttribute("placeholder","First and Last Name");
		tag1[0].classList.remove("hidden");
		tag1[1].classList.add("hidden");
		tag1[2].classList.remove("hidden");
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
	var tag1=document.querySelectorAll("#hide");
	if (x=='true'){
		tag[0].setAttribute("aria-selected","false");
		tag[0].classList.remove("active");
		document.querySelectorAll("#exampleusername")[0].setAttribute("placeholder","Username");
		tag1[0].classList.add("hidden");
		tag1[1].classList.remove("hidden");
		tag1[2].classList.add("hidden");
	}
	if (y=='false'){
		tag[1].setAttribute("aria-selected","true");
		tag[1].classList.add("active");
	}
}

