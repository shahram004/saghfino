const $ = document
const openMenuBtn = $.getElementById('openMenu')
const mobileMenu = $.getElementById('mobileMenu')
const header = $.getElementById('header')
const closeMenu =$.getElementById('closMenu')
let menuOpen = false
openMenuBtn.addEventListener ('click', function () {
      mobileMenu.style.display = 'block'
    })
    closeMenu.addEventListener('click',()=>{
        mobileMenu.style.display = 'none'
})