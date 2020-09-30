let navBars = document.querySelector('.nav_bars'),
    navItems = document.querySelector('.nav_items'),
    nav = document.querySelector('.nav'),
    navLinks = document.querySelectorAll('.nav_link');

navBars.addEventListener('click',function(){
    navBars.classList.toggle('responsive');
    navItems.classList.toggle('responsive');
    nav.classList.toggle('responsive');
});
for(let i=1; i<navLinks.length;i++){
    navLinks[i].addEventListener('click', function(){
        // remove class
        removeClassActive();
        // add class
        navLinks[i].classList.add('nav_link--active');
    });
}
function removeClassActive(){
    navLinks.forEach(link => {
    link.classList.remove('nav_link--active');
    });

}