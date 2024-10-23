const images = document.querySelectorAll('.hover-image');

function showImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    images.forEach((img, index) => {
        img.style.left = `${x - 50}px`; // 커서 위치에 맞추어 이미지 위치 설정
        img.style.top = `${y - 50}px`; // 커서 위치에 맞추어 이미지 위치 설정

        // 이미지가 커서 위치에 따라 보이도록 설정
        if (index === Math.floor(x / 100) % images.length) {
            img.style.display = 'block';
            img.style.opacity = '1'; // 이미지가 보이도록 투명도 조정
        } else {
            img.style.opacity = '0'; // 다른 이미지는 숨김
        }
    });
}

function hideImage() {
    images.forEach((img) => {
        img.style.opacity = '0'; // 마우스가 떠나면 모든 이미지 투명하게
        setTimeout(() => {
            img.style.display = 'none'; // 잠시 후에 숨김
        }, 500); // 애니메이션 시간과 동일하게 설정
    });
}

