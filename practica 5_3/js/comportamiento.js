document.addEventListener('DOMContentLoaded', function () {
 
    var span1 = document.getElementById('span1');
    var span2 = document.getElementById('span2'); 


    span1.addEventListener('click', function () {
        window.location.href = 'quienesSomos.html';
    });

    span2.addEventListener('click', function () {
        window.location.href = 'bootstrap_israel.html';
    });
});