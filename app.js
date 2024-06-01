const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log('entry', entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showing');
        } else {
            entry.target.classList.remove('showing');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));