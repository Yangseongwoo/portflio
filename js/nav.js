document.addEventListener('DOMContentLoaded', function() {
    const firstNavItem = document.querySelector('.nav-item:first-child');
    const navItems = document.querySelectorAll('.nav-item');

    // nav-items의 초기 상태를 설정하는 함수
    function updateNavItems() {
        if (window.innerWidth > 768) {
            // PC 화면인 경우 모든 nav-item을 보이도록 설정
            navItems.forEach(item => {
                item.style.display = 'block';
                item.classList.remove('active'); // active 클래스 제거
            });
        } else {
            // 모바일 화면인 경우 모든 nav-item을 숨기고 첫 번째 항목만 보이도록 설정
            navItems.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('active');
            });
            navItems[0].style.display = 'block'; // 첫 번째 항목만 보이도록 설정
        }
    }

    // 첫 번째 nav-item 클릭 시 나머지 항목 보이기/숨기기
    firstNavItem.addEventListener('click', function() {
        const isActive = firstNavItem.classList.toggle('active');

        navItems.forEach(item => {
            if (isActive) {
                item.style.display = 'block'; // 모든 항목 보이기
            } else {
                item.style.display = 'none'; // 다시 첫 번째 항목만 보이기
            }
        });

        // 첫 번째 항목만 다시 보이도록 설정
        if (!isActive) {
            navItems[0].style.display = 'block'; // 첫 번째 항목만 보이도록 설정
        }
    });

    // 초기 상태 설정
    updateNavItems();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', updateNavItems);
});





document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        const targetId = this.getAttribute('href'); // 클릭한 링크의 href 속성 값 가져오기
        const targetElement = document.querySelector(targetId); // 타겟 요소 선택

        if (targetElement) {
            // 부드러운 스크롤 애니메이션
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // 부드럽게 스크롤
            });
        }
    });
});


