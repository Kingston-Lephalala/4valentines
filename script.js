const quizOrder=['q1','q2','q3','q4'];
let current=0;

function show(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');}
function startQuiz(){current=0;show(quizOrder[0]);}
function next(){current++;if(current<quizOrder.length){show(quizOrder[current]);}else{show('final');}}

const noBtn=document.getElementById('noBtn');
window.addEventListener('load',()=>{setTimeout(()=>noBtn.classList.add('fade'),800);});
noBtn.addEventListener('mouseenter',()=>{const x=(Math.random()*220-110);const y=(Math.random()*140-70);noBtn.style.transform=`translate(${x}px,${y}px)`;});

// Button questions

document.querySelectorAll('.option').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const parent=btn.closest('.quiz');
        if(parent.dataset.done) 
            return;
        parent.dataset.done=true;
        const isCorrect=btn.dataset.correct==='true';
        btn.classList.add(isCorrect?'correct':'wrong');
        parent.querySelectorAll('.option').forEach(
            b=>{
                if(b.dataset.correct==='true'){b.classList.add('correct');}b.disabled=true;
            }
        );
        if(isCorrect){
            parent.querySelector('.feedback').style.opacity=1;
        }
        
        else{
            parent.querySelector('.feedback-wrong').style.opacity=1;
        }
        setTimeout(next,1200);
    });
});

// Image question

document.querySelectorAll('.img-question img').forEach(img=>{
    img.addEventListener('click',()=>{
        const parent=img.closest('.quiz');
        if(parent.dataset.done) return;
        parent.dataset.done=true;
        const isCorrect=img.dataset.correct==='true';
        img.classList.add(isCorrect?'correct':'wrong');
        parent.querySelectorAll('img').forEach(i=>{if(i.dataset.correct==='true'){i.classList.add('correct');}});
        if(isCorrect){parent.querySelector('.feedback').style.opacity=1;}else{parent.querySelector('.feedback-wrong').style.opacity=1;}
        setTimeout(next,1200);
    });
});

// hearts
const hearts=['💖','💘','💕','💗','❤️'];
function createHeart(){const h=document.createElement('div');h.className='heart';h.textContent=hearts[Math.floor(Math.random()*hearts.length)];h.style.left=Math.random()*100+'vw';h.style.animationDuration=6+Math.random()*6+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),12000);}setInterval(createHeart,700);
