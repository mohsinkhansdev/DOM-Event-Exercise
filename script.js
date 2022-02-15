// DOM Event
var h1 = document.querySelector("h1");

h1
<h1>​Welcome to my DOM Demo!​</h1>
​
h1.addEventListener("click",function() { })

h1.addEventListener("click",function() { })

h1.addEventListener("click",function() { alert("h1 is clicked"); })

h1.addEventListener("click",function() { h1.style.background = "orange"; })

document.querySelector("ul").addEventListener("click", function() { console.log("UL Clicked");})

var lis = document.querySelectorAll("li");

lis

for(var i=0; i< lis.length; i++) { 
    lis[i].addEventListener("click", 
    function() { 
        this.style.color = "red"; 
    }); }