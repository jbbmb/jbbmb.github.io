/** Triggers on session load */
window.addEventListener('load', function() {

    /** Ping Analytics */
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-TMBJC0HLP7');


    /** Greets the visitor */
    var data = [
            [0, 5, "Good night, welcome to my corner. Use the options below to learn more about me."],
            [6, 11, "Good morning, welcome to my corner. Use the options below to learn more about me."],
            [12, 19, "Good afternoon, welcome to my corner. Use the options below to learn more about me."],
            [20, 23, "Good evening, welcome to my corner. Use the options below to learn more about me."]
        ],
        hr = new Date().getHours();
    for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0] && hr <= data[i][1]) {
            document.getElementById('greeting').innerHTML = (data[i][2]);
            console.log("Opening Web Inspector I see...");
            break;
        }
    }


    /** Blocks right-click context menu */
    document.addEventListener('contextmenu', event => event.preventDefault());


    /** Removes preload tag */
    document.body.className = document.body.className.replace(/\bis-preload\b/, '');


    /* Animates card with parallax... */
    const imgContainer = document.querySelector('#main'),
        imgContainerHeight = imgContainer.getBoundingClientRect().height * 0.5 + imgContainer.getBoundingClientRect().top,
        imgContainerWidth = imgContainer.getBoundingClientRect().width * 0.5 + imgContainer.getBoundingClientRect().left;

    function getSchwifty(el, xPos, yPos) {
        el.style.setProperty('transform', `rotateX(${(yPos - imgContainerHeight) / 25}deg) rotateY(${(xPos - imgContainerWidth) / 25}deg) translateZ(-2px)`);
    }

    /** ... on desktop */
    document.addEventListener('mousemove', function(e) {
        getSchwifty(imgContainer, e.clientX, e.clientY)
    });

    /** ... and on mobile */
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();

        const touch = e.targetTouches[0]

        if (touch) {
            getSchwifty(imgContainer, touch.pageX, touch.pageY)
        }
    });


    /** Evaluates URL parameters */
    const node = window.location.href.split("#")[1];
    if (node != null) {
        gateway(node);
    }
});


/** Redirects the user accordingly */
function gateway(node) {
    switch (node) {
        case "contact":
            SnackBar({
                message: "No e-mail app set up? No problem.<br>Send it to hello@jbbmb.com later.",
                status: "info",
                position: "br",
                fixed: true,
                timeout: false,
                dismissible: true
            });
            window.location.href = "mailto:hello@jbbmb.com";
            break;
        case "pay":
            window.location.href = "https://revolut.me/jbbmb";
            break;
        case "cvitae":
            window.location.href = "https://www.linkedin.com/in/jbbmb";
            break;
        case "git":
            window.location.href = "https://github.com/jbbmb";
            break;
        case "music":
            window.location.href = "https://music.apple.com/playlist/c-re/pl.u-6mo4lN4H4NWedB";
            break;
        case "photos":
            window.location.href = "https://vsco.co/jbbmb/gallery";
            break;
        case "videos":
            window.location.href = "https://www.youtube.com/channel/UCI5SHB_GdeKYgzO58DGMI2g";
            break;
        case "shortcuts":
            window.location.href = "https://routinehub.co/user/jbbmb";
            break;
        case "404":
            SnackBar({
                message: "Sorry, the requested page was not found!",
                status: "error",
                position: "br",
                fixed: true,
                timeout: false,
                dismissible: true
            });
            break;
        default:
            SnackBar({
                message: "Sorry, the requested page was not found!",
                status: "error",
                position: "br",
                fixed: true,
                timeout: false,
                dismissible: true
            });
            break;
    }
}

function reload(node) {
    const next = ("https://jbbmb.com#").concat(node);
    window.location.href = next;
}