// Materialize scrollspy
document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.scrollspy');
    let options = {};
    let instances = M.ScrollSpy.init(elems, options);
});

// Materialize parallax
document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.parallax');
    let options = {};
    let instances = M.Parallax.init(elems, options);
});

//Materialize pushpin
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.pushpin');
    let options = {top: 171, offset: 43};
    let instances = M.Pushpin.init(elems, options);
});

//Materials select
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    let options = {};
    var instances = M.FormSelect.init(elems, options);
});