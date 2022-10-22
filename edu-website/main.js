// change navbar styles on scroll


window.addEventListener('scroll' , ()=>
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY > 0)
)


// show hide faqs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click' , () =>{
        faq.classList.toggle('open')

        // change icon
        const icon = faq.querySelector('.faq__icon ion-icon');

        let plus = icon.getAttribute('name') 

        if(plus === "add-outline"){
        icon.setAttribute('name' , "remove-outline")
        }else{
            icon.setAttribute('name' , "add-outline")
        }
    })
})


// show/hide nav menu

const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click' , ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener("click" , closeNav)