// filepath: /bootstrap-web-project/bootstrap-web-project/js/main.js

// Toggling Menu
const toggleMenu = () => {
    const toggle = document.getElementById('navbar-toggle');
    const nav = document.getElementById('navbar');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

toggleMenu();

// Toggling Active Link
const navLinks = document.querySelectorAll('.nav-link');

function activateLink() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('navbar');
    navMenu.classList.remove('show');
}

navLinks.forEach(link => link.addEventListener('click', activateLink));

// 回到頂部按鈕功能
const backToTopButton = document.getElementById('backToTop');

// 監聽滾動事件
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // 當滾動超過 200px 時顯示按鈕，否則隱藏
    if (scrollPosition > 200) {
        backToTopButton.classList.add('show');
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.add('hide');
        backToTopButton.classList.remove('show');
    }
});

// 點擊按鈕回到頂部
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動效果
    });
});

// 切換訂閱訊息
function toggleSubscribeMessage() {
    const subscribeCheckbox = document.getElementById('subscribe');
    const subscribeMessage = document.getElementById('subscribeMessage');

    if (subscribeCheckbox.checked) {
        subscribeMessage.value = "已訂閱最新消息";
    } else {
        subscribeMessage.value = ""; // 清空值，表示未訂閱
    }
}

// 表單提交處理
function handleFormSubmit() {
    const subscribeMessage = document.getElementById('subscribeMessage').value;

    // 如果未訂閱，移除該欄位，避免傳送空值
    if (!subscribeMessage) {
        document.getElementById('subscribeMessage').remove();
    }

    return true; // 允許表單提交
}

// 燈箱圖片顯示功能
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const carousel = document.getElementById('carouselExampleIndicators');
    let carouselInstance = null;

    // 如果滑動式圖片區塊存在，初始化 Carousel 實例
    if (carousel) {
        carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
    }

    // 為每張圖片添加點擊事件
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(img => {
        img.addEventListener('click', () => {
            const imageSrc = img.getAttribute('data-bs-image');
            lightboxImage.src = imageSrc; // 更新燈箱圖片的來源
        });
    });

    // 當燈箱關閉時清空圖片
    if (lightboxModal) {
        lightboxModal.addEventListener('hidden.bs.modal', () => {
            lightboxImage.src = ''; // 清空圖片來源
        });
    }
});