// スムーススクロール
const smoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScroll.length; i++){
  smoothScroll[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScroll[i].getAttribute('href');
    if(!href) return;
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement?.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = (rect??0) + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}
// スムースフェード
const elements = document.querySelectorAll<HTMLElement>(".fade");
window.onscroll = () => {
  elements.forEach((element) => {
    console.log(element)
    const showPosition = element.dataset.showPosition ? Number(element.dataset.showPosition): 0;
    if (window.pageYOffset > showPosition) {
      element?.classList.add("show");
      element?.classList.remove("hide");
    } else {
      element?.classList.add("hide");
      element?.classList.remove("show");
    }  
  });
};