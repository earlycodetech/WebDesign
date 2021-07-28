const jokes = [
    'My name is not Frankiscence because I have lots of scents!',
    'Who gave the tortoise its scars... lol',
    'Strong guy, huh? Go to the jungle and fight a hungry lion... lol'
];

const pJoke = document.querySelector('.center > p');

const randomIndex = Math.floor(Math.random() * 3);

pJoke.textContent = jokes[randomIndex];

// const theme = ()=>{
//     document.querySelector('.card').classList.toggle('bg-danger');
//     document.querySelector('.card > h3').classList.toggle('text-light');
// }

const oi = document.querySelector('.switcher');

oi.addEventListener('click',()=>{
    document.querySelector('.card').classList.toggle('bg-danger');
    document.querySelector('.card > h3').classList.toggle('text-light');
});