var typed=new typed(".text",{
     strings: ["Frontend Developer","youtuber", "Web Developer"],
     typespeed:100,
     backspeed:100,
     backdelay:1000,
     loop:true
	});
 
 const header=document.querySelector("header");

 window.addEventListener("scroll" , function(){
     header.classList.toggle ("sticky" , window.scrollY > 200)
 });