//Radio buttons checked:
var radio = document.getElementById("radio");
var rbForm = document.getElementById("rbForm");
radio.onchange = function(){
    for (var i = 0; i<rbForm.children.length; i++){
        if (rbForm.children[i].checked) {
            document.getElementById("picsSrc").src = 'img/img' + i + '.jpg';
        }
    }
}

//Right arrow key:
document.getElementById("right").onclick = function(){
    for (var i = 0; i<rbForm.children.length; i++){
        if (rbForm.children[i].checked) {
            if (rbForm.children[8].checked){
                rbForm.children[0].checked = "true"
                document.getElementById("picsSrc").src = 'img/img' + 0 + '.jpg';
                break;
            } else {
                rbForm.children[i+1].checked = "true";
                document.getElementById("picsSrc").src = 'img/img' + [i+1] + '.jpg';
                break;
            }

        }
    }
}

//Left arrow key:
document.getElementById("left").onclick = function(){
    for (var i = 8; i<rbForm.children.length; i--){
        if (rbForm.children[i].checked) {
            if (rbForm.children[0].checked){
                rbForm.children[8].checked = "true"
                document.getElementById("picsSrc").src = 'img/img' + 8 + '.jpg';
                break;
            } else {
                rbForm.children[i-1].checked = "true";
                document.getElementById("picsSrc").src = 'img/img' + [i-1] + '.jpg';
                break;
            }

        }
    }
}

//Start slideshow:
var interval;
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
btnPlay.onclick = function(){
        btnPlay.style.display = "none";
        btnPause.style.display = "block";
        interval = setInterval(function(){
            for (var i = 0; i<rbForm.children.length; i++){
                if (rbForm.children[i].checked) {
                    if (rbForm.children[8].checked){
                        rbForm.children[0].checked = "true"
                        document.getElementById("picsSrc").src = 'img/img' + 0 + '.jpg';
                        break;
                    } else {
                        rbForm.children[i+1].checked = "true";
                        document.getElementById("picsSrc").src = 'img/img' + [i+1] + '.jpg';
                        break;
                    }

                }
            }
        },3000)
}

//Stop(pause) slideshow:
btnPause.onclick = function(){
        btnPlay.style.display = "block";
        btnPause.style.display = "none";
        clearInterval(interval);
    }


//Picture thumbnail:
rbForm.children[0].onmouseover = function(){
    pic0.style.display = "block";
}
rbForm.children[0].onmouseout = function(){
    pic0.style.display = "none";
}

rbForm.children[1].onmouseover = function(){
    pic1.style.display = "block";
}
rbForm.children[1].onmouseout = function(){
    pic1.style.display = "none";
}

rbForm.children[2].onmouseover = function(){
    pic2.style.display = "block";
}
rbForm.children[2].onmouseout = function(){
    pic2.style.display = "none";
}

rbForm.children[3].onmouseover = function(){
    pic3.style.display = "block";
}
rbForm.children[3].onmouseout = function(){
    pic3.style.display = "none";
}

rbForm.children[4].onmouseover = function(){
    pic4.style.display = "block";
}
rbForm.children[4].onmouseout = function(){
    pic4.style.display = "none";
}

rbForm.children[5].onmouseover = function(){
    pic5.style.display = "block";
}
rbForm.children[5].onmouseout = function(){
    pic5.style.display = "none";
}

rbForm.children[6].onmouseover = function(){
    pic6.style.display = "block";
}
rbForm.children[6].onmouseout = function(){
    pic6.style.display = "none";
}

rbForm.children[7].onmouseover = function(){
    pic7.style.display = "block";
}
rbForm.children[7].onmouseout = function(){
    pic7.style.display = "none";
}

rbForm.children[8].onmouseover = function(){
    pic8.style.display = "block";
}
rbForm.children[8].onmouseout = function(){
    pic8.style.display = "none";
}