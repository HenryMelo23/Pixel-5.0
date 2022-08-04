const nav = document.querySelector('.nav');
const icon = document.querySelector('.icon');
const main = document.querySelector('.main');
const video = document.querySelector('video');
const p = document.querySelector('p');
const body = document.querySelector('body');
const li = document.querySelector('li');

icon.addEventListener('click',() => {
    nav.classList.toggle('dark');
})
icon.addEventListener('click',() => {
    main.classList.toggle('dark');
})
icon.addEventListener('click',() => {
    video.classList.toggle('dark');
})

icon.addEventListener('click',() => {
    body.classList.toggle('dark');
})
icon.addEventListener('click',() => {
    p.classList.toggle('dark');
})