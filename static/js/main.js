"use strict";
/** Initializes variables */

const phrases = [
        getGreeting(),
        'Welcome to the virtual corner of',
        'this male Homo Sapiens specimen',
        'born early April of 1997, in Portugal,',
        'who is passionate about technology',
        'and many other things you can explore',
        'by using the many options below.',
        'Thank You so much for visiting!'
    ],
    contacts = [{
            type: "item",
            label: "Mail",
            callback: () => {
                gateway(1);
            }
        },
        {
            type: "item",
            label: "Skype",
            callback: () => {
                gateway(2);
            }
        },
        {
            type: "item",
            label: "Telegram",
            callback: () => {
                gateway(3);
            }
        }
    ],
    context = new Context(".contexted", contacts);


/** Triggers on session load */

window.addEventListener('load', function() {


    /** Pings Analytics */

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-FMEDZDBVNJ');


    /** Evaluates URL parameters */

    const node = window.location.href.split("#")[1];
    if (node != null) {
        gateway(node);
    }


    /** Blocks native context menu */

    this.document.addEventListener('contextmenu', event => event.preventDefault());


    /** Removes preload tag */

    this.document.body.className = this.document.body.className.replace(/\bis-preload\b/, '');


    /** Activates TextScramble */

    const el = this.document.querySelector('#greeting'),
        fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 2000)
        });
        counter = (counter + 1) % phrases.length;
    };
    next();


    /* Animates card with parallax... */

    const imgContainer = this.document.querySelector('#main');
    var imgContainerHeight = imgContainer.getBoundingClientRect().height * 0.5 + imgContainer.getBoundingClientRect().top,
        imgContainerWidth = imgContainer.getBoundingClientRect().width * 0.5 + imgContainer.getBoundingClientRect().left;

    window.addEventListener('resize', function(event) {
        imgContainerHeight = imgContainer.getBoundingClientRect().height * 0.5 + imgContainer.getBoundingClientRect().top;
        imgContainerWidth = imgContainer.getBoundingClientRect().width * 0.5 + imgContainer.getBoundingClientRect().left;
    }, true);

    function getSchwifty(el, xPos, yPos) {
        el.style.setProperty('transform', `rotateX(${(yPos - imgContainerHeight) / 20}deg) rotateY(${(xPos - imgContainerWidth) / 15}deg) translateZ(-2px)`);
    }


    /** ... on desktop */

    this.document.querySelector('#main').addEventListener('mousemove', function(e) {
        getSchwifty(imgContainer, e.clientX, e.clientY);
    });

    this.document.querySelector('.modern_context_js_outer').addEventListener('mousemove', function(e) {
        getSchwifty(imgContainer, e.clientX, e.clientY);
    });

    this.document.querySelector('#main').addEventListener('mouseout', function(e) {
        getSchwifty(imgContainer, imgContainerWidth, imgContainerHeight);
    });

    this.document.querySelector('.modern_context_js_outer').addEventListener('mouseout', function(e) {
        getSchwifty(imgContainer, imgContainerWidth, imgContainerHeight);
    });


    /** ... and on mobile */

    this.document.querySelector('#main').addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0]
        if (touch) {
            getSchwifty(imgContainer, touch.pageX, touch.pageY);
        }
    });

    this.document.addEventListener('touchend', function(e) {
        getSchwifty(imgContainer, imgContainerWidth, imgContainerHeight);
    });

});


/** Redirects the user accordingly */

function gateway(node) {
    switch (node) {
        case 1:
            SnackBar({
                message: "Composing e-mail to hello@jbbmb.com...",
                status: "info",
                position: "br",
                fixed: true,
                timeout: false,
                dismissible: true
            });
            window.location.href = "mailto:hello@jbbmb.com";
            break;
        case 2:
            window.location.href = "https://join.skype.com/invite/JaDhKR5KYErt";
            break;
        case 3:
            window.location.href = "https://telegram.me/jbbmb";
            break;
        case 4:
            window.location.href = "https://revolut.me/jbbmb";
            break;
        case 5:
            window.location.href = "https://www.linkedin.com/in/jbbmb";
            break;
        case 6:
            window.location.href = "https://github.com/jbbmb";
            break;
        case 7:
            window.location.href = "https://music.apple.com/playlist/c-re/pl.u-6mo4lN4H4NWedB";
            break;
        case 8:
            window.location.href = "https://vsco.co/jbbmb/gallery";
            break;
        case '9':
            window.location.href = "https://www.youtube.com/channel/UCI5SHB_GdeKYgzO58DGMI2g";
            break;
        case 10:
            window.location.href = "https://routinehub.co/user/jbbmb";
            break;
        case 404:
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
                message: "Sorry, an internal error has occurred!",
                status: "error",
                position: "br",
                fixed: true,
                timeout: false,
                dismissible: true
            });
            break;
    }
}


/** Loads the selected route */

function reload(node) {
    const next = ("https://jbbmb.com#").concat(node);
    window.location.href = next;
}


/** Greets the visitor */

function getGreeting() {
    var goodX = [
            [0, 5, "Good night..."],
            [6, 11, "Good morning..."],
            [12, 19, "Good afternoon..."],
            [20, 23, "Good evening..."]
        ],
        hr = new Date().getHours();
    for (var i = 0; i < goodX.length; i++) {
        if (hr >= goodX[i][0] && hr <= goodX[i][1]) {
            console.log("Opening Web Inspector I see...");
            return (goodX[i][2]);
        }
    }
}


/** TextScramble */

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '01'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}