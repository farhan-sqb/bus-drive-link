function animateBus(event) {

    function animateBusFunc() {
        document.getElementById("busAnimate").classList.remove("busAnimater");
        document.body.style.overflowY = "auto";
    }




    if (event !== "") {
        
        document.body.style.overflowY = "hidden";
        document.getElementById("busAnimate").classList.add("busAnimater");
        setInterval(function () {
            window.location.href = event;
        }, 5000);

    }

    else {

        document.body.style.overflowY = "hidden";
        document.getElementById("busAnimate").classList.add("busAnimater");
        setTimeout(animateBusFunc, 5000);

    }

}