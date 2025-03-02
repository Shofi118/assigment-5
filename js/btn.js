// alert()
function makeRed(){
    document.body.style.backgroundColor ='red'
}

const btnMakeBlue = document.getElementById('theam');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor ='blue'
}
document.getElementById('theam').addEventListener('click', function(){
    document.body.style.backgroundColor = 'golderond'
})

document.getElementById('login-btn').addEventListener('click' ,function(){
    window.location.href = './main.html'
})