let nightDay = document.getElementById('nightDay');
const darkRejim = document.getElementById('darkRejim')
const lightRejim = document.getElementById('lightRejim')
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
let kun = true;
nightDay.addEventListener('click',() =>{
    if(kun == true){
        kun = false;
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        lightRejim.classList.remove('d-none')
        darkRejim.classList.add('d-none')
    } 
    else{
        kun = true;
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        lightRejim.classList.add('d-none')
        darkRejim.classList.remove('d-none')

    }
})
