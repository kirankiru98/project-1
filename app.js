const button = document.querySelector('.share');
const tooltipContent = "<div class='box-icons'><p>share</p><img class='tip-content' src='./images/icon-facebook.svg'> <img class='tip-content' src='./images/icon-twitter.svg'> <img class='tip-content' src='./images/icon-pinterest.svg'></div>";

button.addEventListener('click', (e) => {
    button.style.backgroundColor = 'hsl(214, 17%, 51%)';
    button.children[0].children[0].style.fill = 'hsl(210, 46%, 95%)';
});
tippy('#tool-tip', {
    content: tooltipContent,
    allowHTML: true,
    hideOnClick: 'toggle',
    maxWidth: 350,
    trigger: 'click',
    interactive: true,
    theme: 'custom',
});
// if(window.outerWidth >= 576) {
//   tippy('#tool-tip', {
//     content: tooltipContent,
//     allowHTML: true,
//     hideOnClick: 'toggle',
//     maxWidth: 350,
//     trigger: 'click',
//     interactive: true,
//     theme:'custom',
//   });
// } 
// if(window.outerWidth < 576){
//   tippy('#tool-tip', {
//     content: tooltipContent,
//     allowHTML: true,
//     hideOnClick: 'toggle',
//     maxWidth: 'none',
//     trigger: 'click',
//     interactive: true,
//     theme:'custom',
//     placement: 'bottom',
//     arrow: false,
//   });
// }