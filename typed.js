var test = document.querySelector('#typed');

var start = "";
var end = "Saatvik Tripathy"; 
var index = 1;
var pos = 0;
var unsub;
console.log(end.length);
unsub = setInterval(function () {
    
    if(pos == (end.length) || pos == -1){
        index = index * (-1);
    } 
    start = end.substring(0,pos);
    test.textContent = start;
    pos += index;  
},100);