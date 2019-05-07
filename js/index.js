// VISUAL & MOTION DESIGN : GAL SHIR
// https://dribbble.com/shots/4532056-Alien-Invasion

// WEB ANIMATION : KONO
// https://twitter.com/konoanimation
// http://kono.co.za/
// hi@kono.co.za

// No JS
// No plugins
// 45KB size

// const shipy = document.querySelector('.shipy');
const button = document.querySelector('.button');
const shipy = document.querySelector('.shipy');
let isVisibleSaucer = true;
console.log(shipy.getBoundingClientRect());
button.addEventListener('click', function() {
    if (isVisibleSaucer) {
        anime ({
            targets: '.shipy',
            translateX: 200,
            translateY: -2000,
            easing: 'easeInOutSine',
            loop: 1
        });
        isVisibleSaucer = false;
        button.innerHTML = 'Come back, dear flying saucer!'
    } else if(!isVisibleSaucer) {
        
        anime ({
            targets: '.shipy',
            translateX: 0,
            translateY: 0,
            easing: 'easeInOutSine'
        });
        isVisibleSaucer = true;
        button.innerHTML = "Get lost, you evil saucer!"
    }
    
})
