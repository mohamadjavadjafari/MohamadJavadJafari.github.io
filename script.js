var i = 0;
var txt = "I don't have any tedency towards religion or politics , Viva humanity!";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();