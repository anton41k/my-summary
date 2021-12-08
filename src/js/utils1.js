//import observer from 'intersection-observer';

const options = {
    threshold: 1.0
}
const callback = function (entries) {

    console.log('elements ', elements);

    //entries.forEach(entry => {
        const elem = entries;
        elem.classList.add('element_show')

    //});
};
const observer = new IntersectionObserver(callback, options);

const elements = document.querySelectorAll('.elem_animation');
let c=500
for (let elem of elements) {
    setTimeout(() => {
        //observer.observe(elem);
        callback(elem)
    }, c);
    c=c+500
}