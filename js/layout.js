$(document).ready(function() {
    // 첫 번째 요소를 보이도록 초기화
    $('.main_ad_all').eq(0).addClass('active');

    // 자동 슬라이드 함수
    function autoSlide() {
        var current = $('.main_ad_all.active');
        var next = current.next('.main_ad_all');

        // 마지막 요소일 경우 첫 번째 요소로 돌아가도록 설정
        if (next.length === 0) {
            next = $('.main_ad_all').eq(0);
        }

        // 현재 요소 fade out, 다음 요소 fade in
        current.removeClass('active').addClass('fadeout');
        next.addClass('active').addClass('fadein');

        // 1초 후에 fade 효과 클래스 제거
        setTimeout(function() {
            current.removeClass('fadeout');
            next.removeClass('fadein');
        }, 1000);
    }

    // 3초마다 자동 슬라이드 실행
    setInterval(autoSlide, 3000);
});