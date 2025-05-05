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

// 初始化回到頂部按鈕功能
function initBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    // 監聽滾動事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // 點擊按鈕回到頂部
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 動態載入 Header 和 Footer
function loadHeaderAndFooter() {
    // 載入 Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // 載入 Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;

            // 初始化回到頂部按鈕功能
            initBackToTopButton();
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 燈箱圖片顯示功能
function initLightbox() {
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
}

// 初始化功能
document.addEventListener('DOMContentLoaded', () => {
    loadHeaderAndFooter(); // 動態載入 Header 和 Footer
    initLightbox(); // 初始化燈箱功能
});