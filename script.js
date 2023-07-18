

const myObserver = new IntersectionObserver( (nomeQualquer) => {

    nomeQualquer.forEach( (nomeQualquer2) =>{
        if(nomeQualquer2.isIntersecting){
            nomeQualquer2.target.classList.add('show')
        }else{
            nomeQualquer2.target.classList.remove('show')
        }
    })

})

const elements = document.querySelectorAll('.hidden')

elements.forEach((elements) => myObserver.observe(elements))