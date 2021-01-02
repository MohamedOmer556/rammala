const btn = document.querySelector('.li-phone');
const number = document.querySelector('.number');
const cartBtn = document.querySelectorAll('.btn');
const nav = document.querySelector('nav');



const tl = gsap.timeline({defaults: {ease:'power2.inOut', duration: 1}});
tl.from('.box1', {clipPath: 'inset(50px 50px)'});
tl.fromTo(nav, {y:'-100%'},{y:'0%', ease:'back.out(1.7)'});



function btnShow(e){
    if (!e.target.classList.contains('active')){
        e.target.classList.add('active');
        number.style.display = 'flex';  
    }
    else{
        e.target.classList.remove('active');
        number.style.display = 'none';
    }
}



btn.addEventListener('click', btnShow);


