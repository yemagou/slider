 const btndown = document.querySelectorAll('.btn2');
const btnup = document.querySelectorAll('.btn1');
const block = document.querySelectorAll('body');
const grid1 = document.querySelector('.grid1');
const grid2 = document.querySelector('.grid2');
const grid3 = document.querySelector('.grid3');

let index = 1;

const downT = () => {
    const sort = gsap.timeline();

    sort.to(block, {duration: 1, y:'-=100vh'});
}

btndown.forEach(btn => {
    btn.addEventListener('click', () =>{

        if(index === 3){
            btn.classList.add('animbtn');
            setTimeout(() => {
                btn.classList.remove('animbtn');
            }, 500)
        }

        if(index < 3){
            downT();
            index++;
        }

    })
})

const upT = () => {
    gsap.to(block, {duration: 1, y:'+=100vh'});
}

btnup.forEach(btn => {

    btn.addEventListener('click', () =>{
        
        if(index === 1){
            btn.classList.add('animbtn');
            setTimeout(() => {
                btn.classList.remove('animbtn');
            }, 500)
        }

        if(index > 1){
            upT();
            index--;
        }

    })
})

const logos = document.querySelector('.logo');

window.addEventListener('load', function(){
    logos.className += " hidden";
});