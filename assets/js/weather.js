var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c599e8cf88222b89d3d7fce3b12be2a1')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("Please enter a valid city"))

})