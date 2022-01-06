const observer = new IntersectionObserver((entries, observer) => {
    const toc = document.querySelector('#toc_container')
    if(!(entries[0].intersectionRatio === 1)) {
        toc.classList.add('is_scroll')
        if(!(document.querySelector('.toc_list').style.display))
        {
            document.querySelector('.toc_toggle a').click()
        }
    } else {
        toc.classList.remove('is_scroll')
    }
}, {
    threshold: 1
})
var h1 = document.querySelector('h1')
observer.observe(h1)