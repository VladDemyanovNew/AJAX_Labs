const square = document.querySelector(".lab4 .output .square");
const progressElem = document.querySelector(".lab4 .output .greenBar");
const button = document.querySelector(".lab4 .description button");

function lab4() {
    
    const options = {
        duration: 2000,
        easing: 'linear',
        progress: function(animation, progress) {
            progressElem.style.width = Math.round(progress * 100) + '%';
            progressElem.innerHTML = Math.round(progress * 100) + '%';
        },
        start: function() {
            $(button).prop('disabled', true);
        },
        complete: function() {
            $(button).prop('disabled', true);
        }
     };
    
    $(square)
    .animate({
        right: 0
    }, options)
    .animate({
        bottom: 0
    }, options)
    .animate({
        left: 0
    }, options)
    .animate({
        top: 0
    }, options);
}


export {lab4};
