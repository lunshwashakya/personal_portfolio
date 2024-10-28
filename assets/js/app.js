document.addEventListener('scroll', () =>{
    const scrollTop = document.documentElement.scrollTop;   
    const mainNav = document.querySelector(".main-nav")
    if(scrollTop > 50){
        mainNav.classList.add("bg-nav");
    }
    else{
        mainNav.classList.remove("bg-nav");
    }
});