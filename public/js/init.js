document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.scrollspy');
    let options = '';
    let instances = M.ScrollSpy.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let options = '';
    let instances = M.Parallax.init(elems, options);
});