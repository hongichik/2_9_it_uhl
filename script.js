var options_1 = {
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    onComplete: function () {
        new Typed("#text-2", options_2);
    }
};

var options_2 = {
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    onComplete: function () {
        new Typed("#text-3", options_3);
    }
};

var options_3 = {
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    onComplete: function (self) {
        setTimeout(function () {
            document.querySelector(".block-1").style.display = "none";
            document.querySelector(".block-2").style.display = "flex";
            const paths = document.querySelectorAll("svg path");

            paths.forEach((path, index) => {
                setTimeout(() => {
                    path.style.transition = "opacity 0.5s";
                    path.style.opacity = 1;
                }, index * 80);
            });

        }, 1000);
    }
};


function initializeTyped() {
    if (window.innerWidth < 500) {
        options_1.strings = ["Chào mừng ngày <br/> Quốc khánh 2/9/1945"];
        options_2.strings = ["Ngày Chủ tịch Hồ Chí Minh <br/> đọc bản Tuyên ngôn Độc lập tại <br/>Quảng trường Ba Đình, Hà Nội"];
        options_3.strings = ["Lập nên nước <br/>Việt Nam Dân chủ Cộng hòa,<br/>nay là nước Cộng hòa Xã hội Chủ <br/>nghĩa Việt Nam"];
    } else {
        options_1.strings = ["Chào mừng ngày Quốc khánh 2/9/1945"];
        options_2.strings = ["Ngày Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội"];
        options_3.strings = ["Lập nên nước Việt Nam Dân chủ Cộng hòa, nay là nước Cộng hòa Xã hội Chủ nghĩa Việt Nam"];
    }

    document.getElementById('text-1').innerHTML = '';

    setTimeout(function () {

        new Typed("#text-1", options_1);
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {

    initializeTyped();
});

window.addEventListener("resize", function () {
    initializeTyped();
});

var audio = new Audio('music.mp3');

function playMusic() {
    audio.play().catch(function(error) {
        console.log('Playback failed:', error);
    });
}

document.addEventListener('click', function() {
    playMusic();
    document.removeEventListener('click', arguments.callee);
});