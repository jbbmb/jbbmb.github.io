window.addEventListener('load', function () {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.body.className = document.body.className.replace(/\bis-preload\b/, '');
    if (window.location.href.includes("?404")) {
        SnackBar({
            message: "Sorry, that page does not exist!&nbsp",
            status: "error",
            position: "tr",
            fixed: true,
            dismissible: false
        })
    }
});