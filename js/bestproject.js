function bestshowDescription() {
    const description = document.querySelector('.description');
    description.style.display = 'block'; // 설명 창 보이기
    setTimeout(() => {
        description.style.opacity = '1'; // 부드럽게 나타나도록 설정
    }, 10);
}

function besthideDescription() {
    const description = document.querySelector('.description');
    description.style.opacity = '0'; // 부드럽게 사라지도록 설정
    setTimeout(() => {
        description.style.display = 'none'; // 숨김
    }, 300); // 애니메이션 시간과 동일하게 설정
}




