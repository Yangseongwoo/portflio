/* document.addEventListener('DOMContentLoaded', () => {
    const eye = document.querySelector('.iris');
    const overlay = document.querySelector('.overlay'); // .overlay 요소가 존재하는지 확인해야 함

    window.addEventListener('mousemove', (event) => {
        const x = -(window.innerWidth / 2 - event.pageX) / 10;
        const y = -(window.innerHeight / 2 - event.pageY) / 10;
        eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;
    });

    if (overlay) { // overlay 요소가 존재할 경우에만 실행
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;

            // 스크롤 위치에 따라 불투명도 조정
            overlay.style.opacity = Math.min(scrollPosition / 300, 1); // 300px 스크롤 시 완전히 보이도록 설정
        });
    }
}); */




document.addEventListener('DOMContentLoaded', () => {
    const eyeBall = document.querySelector('.eye-ball'); // eye-ball 요소 선택
    const eyeWrap = document.querySelector('.eye-wrap2'); // eye-wrap2 요소 선택

    window.addEventListener('mousemove', (event) => {
        // eye-wrap2의 위치 정보 가져오기
        const eyeWrapRect = eyeWrap.getBoundingClientRect();
        const eyeBallRadius = eyeBall.offsetWidth / 2;

        // eye-wrap2의 중앙 위치 계산
        const eyeWrapCenterX = eyeWrapRect.left + eyeWrapRect.width / 2;
        const eyeWrapCenterY = eyeWrapRect.top + eyeWrapRect.height / 2;

        // 마우스 위치와 eye-wrap2 중앙 위치 차이 계산
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // 최대 이동 범위 설정
        const maxDistance = (eyeWrapRect.width / 2) - eyeBallRadius; // 최대 이동 범위

        // 마우스와 eye-ball 중앙 간의 거리 계산
        const deltaX = mouseX - eyeWrapCenterX;
        const deltaY = mouseY - eyeWrapCenterY;

        // 실제 이동 거리 계산
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const angle = Math.atan2(deltaY, deltaX);

        // eye-ball의 위치 조정
        let eyeBallXPos, eyeBallYPos;
        if (distance < maxDistance) {
            eyeBallXPos = deltaX;
            eyeBallYPos = deltaY;
        } else {
            eyeBallXPos = maxDistance * Math.cos(angle);
            eyeBallYPos = maxDistance * Math.sin(angle);
        }

        // eye-ball의 위치 업데이트
        eyeBall.style.transform = `translate(${eyeBallXPos}px, ${eyeBallYPos}px)`;
        
        // eye-ball의 위치를 화면 전체를 기준으로 조정
        eyeBall.style.left = `${mouseX - eyeBallRadius}px`; // 마우스 X 위치에 따라 eye-ball 위치 설정
        eyeBall.style.top = `${mouseY - eyeBallRadius}px`;   // 마우스 Y 위치에 따라 eye-ball 위치 설정
    });
});













    

    