var options_1 = {
    strings: ["Chào mừng ngày Quốc khánh 2/9/1945"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    onComplete: function() {
        new Typed("#text-2", options_2);
    }
};

var options_2 = {
    strings: ["Ngày Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    onComplete: function() {
        new Typed("#text-3", options_3);
    }
};

var options_3 = {
    strings: ["Lập nên nước Việt Nam Dân chủ Cộng hòa, nay là nước Cộng hòa Xã hội Chủ nghĩa Việt Nam"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false, 
    onComplete: function(self) {
        document.querySelector(".block-1").style.display = "none";
    }
};

setTimeout(function() {
    new Typed("#text-1", options_1);
}, 1000);
