// Smooth scrolling for navigation links
/* 【課題13】スムーススクロールを実装してください
   要件:
   - document.querySelectorAll('a[href^="#"]')で内部リンクを全て取得
   - クリックイベントでデフォルト動作を防止
   - scrollIntoViewメソッドでスムーススクロール
*/

// Header background on scroll
/* 【課題14】スクロール時のヘッダー背景変更を実装してください
   要件:
   - windowのscrollイベントを監視
   - スクロール位置が100pxを超えたら背景を濃く
   - それ以外は元の透明度に戻す
*/

// Add animation class when elements come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

/* 【課題15】Intersection Observerでアニメーションを実装してください
   要件:
   - IntersectionObserverを作成
   - 要素が画面内に入ったら'animate-in'クラスを追加
   - project-cardとabout-content要素を監視
*/

// Add CSS animation styles
const style = document.createElement('style')
style.textContent = `
    .project-card,
    .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`
document.head.appendChild(style)

// Simple mobile menu toggle (if you want to add a hamburger menu later)
function _toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links')
  navLinks.classList.toggle('mobile-open')
}

// Add some interactivity to skill tags
/* 【課題16】スキルタグのホバーアニメーションを実装してください
   要件:
   - .skills liの全要素に対して
   - mouseenterでscale(1.1)に拡大
   - mouseleaveで元のサイズに戻す
*/
