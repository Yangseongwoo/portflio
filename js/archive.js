document.addEventListener("DOMContentLoaded", function () {
    const cursorImage = document.getElementById("cursor-image");
    const archivesContents = document.querySelectorAll(".archives-content");

    // 화면 너비가 768px 이상일 때만 이벤트 리스너 추가
    if (window.innerWidth > 768) {
        archivesContents.forEach(content => {
            content.addEventListener("mouseenter", function(event) {
                cursorImage.style.display = "block"; // 이미지 표시
                document.body.style.cursor = "none"; // 기본 커서 숨김
            });

            content.addEventListener("mousemove", function(event) {
                cursorImage.style.left = `${event.pageX}px`; // 커서의 X 좌표
                cursorImage.style.top = `${event.pageY}px`; // 커서의 Y 좌표
            });

            content.addEventListener("mouseleave", function() {
                cursorImage.style.display = "none"; // 이미지 숨김
                document.body.style.cursor = "default"; // 기본 커서로 복원
            });
        });
    }
});




/* archive */
document.querySelectorAll('.archives-content').forEach((item) => {
    const projectImage = item.querySelector('.project-image');
    const imageDisplay = item.nextElementSibling; // 다음 형제 요소인 image-display
    const cursorImage = document.getElementById('cursor-image'); // 커서 이미지 요소

    // 이미지의 고정 오프셋 값
    const offsetX = 10; // 커서 오른쪽으로 고정할 거리
    const offsetY = -300; // 커서 위쪽으로 고정할 거리

    item.addEventListener('mousemove', (event) => {
        if (!imageDisplay.classList.contains('show')) { // 열린 상태가 아닐 때만
            const x = event.clientX + offsetX; // 커서의 X 위치에 오프셋 추가
            const y = event.clientY + offsetY; // 커서의 Y 위치에 오프셋 추가

            // 커서 이미지 위치 업데이트
            cursorImage.style.left = `${event.clientX}px`;
            cursorImage.style.top = `${event.clientY}px`;

            // 프로젝트 이미지 위치 업데이트
            projectImage.style.left = `${x}px`; // 고정된 X 위치
            projectImage.style.top = `${y}px`; // 고정된 Y 위치
            projectImage.style.opacity = 1; // 불투명하게 설정
        }
    });

    item.addEventListener('mouseenter', () => {
        if (!imageDisplay.classList.contains('show')) { // 열린 상태가 아닐 때만
            cursorImage.style.display = 'block';
            projectImage.style.display = 'block'; // hover 시 이미지를 보이게 함
            projectImage.style.opacity = 1; // 불투명하게 설정
        }
    });

    item.addEventListener('mouseleave', () => {
        if (!imageDisplay.classList.contains('show')) {
            cursorImage.style.display = 'none'; // 열린 상태가 아닐 때 커서 숨기기
        }
        projectImage.style.opacity = 0; // 작품 이미지 숨기기
    });

    item.addEventListener('click', () => {
        const images = JSON.parse(item.getAttribute('data-images'));

        // 이미지 표시 공간에 모든 이미지 추가
        imageDisplay.innerHTML = ''; // 기존 내용 삭제
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = "Project Image";
            imageDisplay.appendChild(img);
        });

        // 높이를 조절하여 부드럽게 나타나도록 설정
        if (imageDisplay.classList.contains('show')) {
            // 이미 열려있는 경우, 닫기
            imageDisplay.classList.remove('show'); // show 클래스를 제거하여 높이를 줄임
            imageDisplay.style.height = '0'; // 높이를 0으로 설정
            cursorImage.src = 'image/cursor img.jpg'; // 원래 커서 이미지로 돌리기
            cursorImage.style.display = 'none'; // 커서 숨기기
        } else {
            // 열려있지 않은 경우, 열기
            imageDisplay.classList.add('show'); // show 클래스를 추가하여 높이를 설정
            imageDisplay.style.height = '400px'; // 높이를 설정하여 부드럽게 열리도록 함
            cursorImage.src = 'image/cursorclose.png'; // 새로운 커서 이미지로 변경
            cursorImage.style.display = 'block'; // 커서 이미지 보이기
        }
    });

    // image-display 영역 클릭 시 닫기
    imageDisplay.addEventListener('click', () => {
        if (imageDisplay.classList.contains('show')) {
            imageDisplay.classList.remove('show'); // show 클래스를 제거하여 높이를 줄임
            imageDisplay.style.height = '0'; // 높이를 0으로 설정
            cursorImage.src = 'image/cursor img.jpg'; // 원래 커서 이미지로 돌리기
            cursorImage.style.display = 'none'; // 커서 숨기기
        }
    });

    // image-display에 mousemove 이벤트 추가
    imageDisplay.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // 커서 이미지 위치 업데이트
        cursorImage.style.left = `${x}px`;
        cursorImage.style.top = `${y}px`;
        cursorImage.src = 'image/cursorclose.png'; // 열린 공간에서도 커서 이미지를 변경
        cursorImage.style.display = 'block'; // 열린 공간에서도 커서 이미지 보이기
    });

    // image-display가 열린 후 hover 시 커서 이미지 보이기
    imageDisplay.addEventListener('mouseenter', () => {
        cursorImage.src = 'image/cursorclose.png'; // 열린 공간으로 들어갔을 때 커서 이미지 변경
        cursorImage.style.display = 'block'; // 열린 공간에 마우스가 올라갔을 때 커서 이미지 보이기
    });

    imageDisplay.addEventListener('mouseleave', () => {
        if (!imageDisplay.classList.contains('show')) {
            cursorImage.style.display = 'none'; // 닫힌 상태일 때 커서 숨기기
        }
    });
});















