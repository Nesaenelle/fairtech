; (function () {
    var $menuBtn = $('[data-menu-btn]');
    var $menu = $('[data-menu]');

    $menuBtn.on('click', function (e) {
        e.stopPropagation();
        $menuBtn.toggleClass('opened');
        $menu.toggleClass('opened');
    })


    window.addEventListener('click', function (e) {
        if (!$menu[0].contains(e.target)) {
            $menu.removeClass('opened');
            $menuBtn.removeClass('opened');
        }
    }, false);
})();