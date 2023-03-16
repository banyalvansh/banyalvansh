let noButton = document.getElementById("no");

noButton.addEventListener('mouseover', e => {
    let x = Math.floor(Math.random() * (screen.availWidth - 200))
    let y = Math.floor(Math.random() * (screen.availHeight - 200))
    console.log('x '+ x + ', y ' + y);
    noButton.style.position = "absolute"
    noButton.style.left = x + 'px'
    noButton.style.top = y +'px'
})


let yesButton = document.getElementById("yes");

yesButton.addEventListener('click', e => {
    console.log(document.getElementById('ques'));
    document.getElementById('ques').innerHTML = "Love You Too😘❤️";
    yesButton.style.display="none";
    noButton.style.display="none";

})
 
