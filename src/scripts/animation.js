// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const heart = document.querySelector('.heart img');
const quote = document.querySelector('.info h3');
const love = document.querySelector('.love');

//Moving Animation to Event
container.addEventListener("mousemove", (e) => {
    console.log("Hey")
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
});

//Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    //Popout
    title.style.transform = 'translateZ(150px)';
    heart.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    quote.style.transform = 'translateZ(125px)';
    love.style.transform = 'translateZ(100px)';
});

//animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popout back
    title.style.transform = 'translateZ(0px)';
    heart.style.transform = 'translateZ(0px) rotateZ(0deg)';
    quote.style.transform = 'translateZ(0px)';
    love.style.transform = 'translateZ(0px)';
});