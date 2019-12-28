// Materialize scrollspy
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.scrollspy');
    let options = '';
    let instances = M.ScrollSpy.init(elems, options);
});

// Materialize parallax
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let options = '';
    let instances = M.Parallax.init(elems, options);
});

// Materialize pushpin
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.pushpin');
    let options = '{top: 20px}';
    let  instances = M.Pushpin.init(elems, options);
});

// $('.pushpin').each(function() {
//     var $this = $(this);
//     var $target = $('#' + $(this).attr('data-target'));
//     $this.pushpin({
//       top: $target.offset().top,
//       bottom: $target.offset().top + $target.outerHeight() - $this.height()
//     });
// });