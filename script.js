let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }    // 如果超出范围，回到第一张
    if (n < 1) { slideIndex = slides.length }   // 如果小于1，跳到最后一张
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";         // 隐藏所有幻灯片
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // 移除所有点的 active 类
    }
    slides[slideIndex - 1].style.display = "block"; // 显示当前幻灯片
    dots[slideIndex - 1].className += " active";    // 添加 active 类到当前点

    // 每3秒自动切换到下一张幻灯片
    setTimeout(function () {
        plusSlides(1); // 自动播放
    }, 3000);
}
