
        function btnclick(leftvalue) {
            if (leftvalue==60) {
                document.getElementById('horse').src = "img/01624a1b21d9557f45667802439c2589.gif";
                document.getElementById('horse').style.left = "60%";
                document.getElementById('horse').style.transform = "rotateY(0deg)";
            }else if (leftvalue==0) {
                document.getElementById('horse').style.transform = "rotateY(180deg)";
                document.getElementById('horse').style.left = "0";
            }
        }
    