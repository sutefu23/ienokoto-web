// スムーススクロール
const smoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScroll.length; i++) {
  smoothScroll[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = smoothScroll[i].getAttribute("href");
    if (!href) return;
    let targetElement = document.getElementById(href.replace("#", ""));
    const rect = targetElement?.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = (rect ?? 0) + offset - gap;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}
// スムースフェード
const fadeElements = document.querySelectorAll<HTMLElement>(".fade");
window.onscroll = () => {
  fadeElements.forEach((element) => {
    const showPosition = element.dataset.showPosition
      ? Number(element.dataset.showPosition)
      : 0;
    if (window.pageYOffset > showPosition) {
      element?.classList.add("show");
      element?.classList.remove("hide");
    } else {
      element?.classList.add("hide");
      element?.classList.remove("show");
    }
  });
};

// ハンバーガーメニュー
const menu: HTMLElement | null = document.querySelector(".main_navi");
const menuBtn: HTMLElement | null = document.querySelector(".slide_box");
const body: HTMLElement | null = document.querySelector("body");
const menuWidth: number = menu ? menu.getBoundingClientRect().width : 0;

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    slideMenu();
  });
}

function slideMenu(): void {
  if (body) {
    body.classList.toggle("open");
  }

  if (body && body.classList.contains("open")) {
    if (menu) {
      menu.style.transition = "right 0.1s ease-in-out";
      menu.style.right = "0";
      let overlay: HTMLElement = document.createElement("div");
      overlay.id = "overlay";
      overlay.style.transition = "opacity 0.1s ease-in-out";
      overlay.style.opacity = "0";
      if (body) body.appendChild(overlay);
      setTimeout(function () {
        overlay.style.opacity = "1";
      }, 0); // Trigger fade in.
      overlay.addEventListener("click", function () {
        slideMenu();
      });
    }
  } else {
    if (menu) {
      menu.style.transition = "right 0.2s ease-in-out";
      menu.style.right = -menuWidth + "px";
      let overlay: HTMLElement | null = document.querySelector("#overlay");
      if (overlay) {
        overlay.style.transition = "opacity 0.1s ease-in-out";
        overlay.style.opacity = "1";
        setTimeout(function () {
          if (overlay) overlay.style.opacity = "0"; // Trigger fade out.
          setTimeout(function () {
            overlay?.parentNode?.removeChild(overlay);
          }, 100); // Remove after transition.
        }, 0);
      }
    }
  }
}

// 時間帯によって背景画像を変更
// 朝昼晩の時間帯でdata-src-1,2,3を出し分けるような処理
(function () {
  const now = new Date();
  const hour = now.getHours();
  const catchImage = document.querySelector(".catch_image");
  if (!catchImage) return;
  if (hour >= 4 && hour < 11) {
    const moring = catchImage.getAttribute("data-src-1");
    if (!moring) return;
    catchImage.setAttribute("src", moring);
  } else if (hour >= 11 && hour < 17) {
    const noon = catchImage.getAttribute("data-src-2");
    if (!noon) return;
    catchImage.setAttribute("src", noon);
  } else {
    const night = catchImage.getAttribute("data-src-2");
    if (!night) return;
    catchImage.setAttribute("src", night);
  }
})();
