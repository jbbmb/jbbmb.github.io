"use strict";
/** Initializes variables */

const phrases = [
        getGreeting(),
        'Welcome to the virtual corner of',
        'this male Homo Sapiens specimen',
        'born early April of 1997 in Portugal',
        'who is passionate about technology',
        'and many other things you can explore',
        'using the many options below.',
        'Thank You so much for visiting.'
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
        document.querySelector('#description').innerHTML = 'Redirecting You...';
        document.querySelector('#greeting').style.display = 'none';
        document.querySelector('#description').style.display = 'block';
        setTimeout(() => {
            gateway(parseInt(node));
        }, 500);

    }


    /** Removes preload tag */

    document.body.className = document.body.className.replace(/\bis-preload\b/, '');


    /** Activates TextScramble */

    const el = document.querySelector('#greeting'),
        fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 3500)
        });
        counter = (counter + 1) % phrases.length;
    };
    next();


    /** Animates card with parallax... */

    const cardContainer = document.querySelector('#main');
    var cardContainerHeight = cardContainer.getBoundingClientRect().height * 0.5 + cardContainer.getBoundingClientRect().top,
        cardContainerWidth = cardContainer.getBoundingClientRect().width * 0.5 + cardContainer.getBoundingClientRect().left;

    window.addEventListener('resize', function() {
        cardContainerHeight = cardContainer.getBoundingClientRect().height * 0.5 + cardContainer.getBoundingClientRect().top;
        cardContainerWidth = cardContainer.getBoundingClientRect().width * 0.5 + cardContainer.getBoundingClientRect().left;
    }, true);

    function getSchwifty(el, positionX, positionY) {
        el.style.setProperty('transform', `rotateX(${(positionY - cardContainerHeight) / 20}deg) rotateY(${(positionX - cardContainerWidth) / 20}deg) translateZ(-2px)`);
    }


    /** Activates input event listeners */

    document.querySelectorAll("#main").forEach(function(item) {
        item.addEventListener("mousemove", function(e) {
            getSchwifty(cardContainer, e.clientX, e.clientY);
        });
        item.addEventListener("mouseout", function() {
            getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#greeting').style.display = 'block';
        });
    });

    document.querySelector('#wrapper').addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0]
        if (touch) {
            getSchwifty(cardContainer, touch.pageX, touch.pageY);
        }
    });

    document.addEventListener('touchend', function(e) {
        e.stopPropagation();
        getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
        document.querySelector('#description').style.display = 'none';
        document.querySelector('#greeting').style.display = 'block';
    });

    document.addEventListener('contextmenu', event => event.preventDefault());

    document.querySelectorAll(".icon").forEach(function(icon) {
        icon.addEventListener("mousemove", function() {
            document.querySelector('#description').innerHTML = icon.getAttribute('alt');
            document.querySelector('#greeting').style.display = 'none';
            document.querySelector('#description').style.display = 'block';
        });
        icon.addEventListener("mouseout", function() {
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#greeting').style.display = 'block';
        });
    });

    document.querySelectorAll(".direct").forEach(function(icon) {
        icon.addEventListener("click", function() {
            gateway(parseInt(icon.getAttribute('id')));
        });
    });

    document.querySelectorAll(".modern_context_js_outer").forEach(function(item) {
        item.addEventListener("mousemove", function(e) {
            getSchwifty(cardContainer, e.clientX, e.clientY);
            document.querySelector('#greeting').style.display = 'none';
            document.querySelector('#description').style.display = 'block';
        });
        item.addEventListener("mouseout", function() {
            getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#greeting').style.display = 'block';
        });
    });

});


/** Redirects the user accordingly */

function gateway(node) {
    switch (node) {
        case 1:
            SnackBar({
                message: "Composing message using your provider...&nbsp",
                status: "info",
                position: "tr",
                fixed: true,
                timeout: 6000,
                dismissible: false
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
            gtag('event', 'click', {
                'event_category': 'photos',
                'event_label': 'photos'
            });
            window.location.href = "https://vsco.co/jbbmb/gallery";
            break;
        case 9:
            window.location.href = "https://www.youtube.com/channel/UCI5SHB_GdeKYgzO58DGMI2g";
            break;
        case 10:
            window.location.href = "https://routinehub.co/user/jbbmb";
            break;
        case 404:
            setTimeout(() => {
                SnackBar({
                    message: "Sorry, the requested page was not found!&nbsp",
                    status: "error",
                    position: "tr",
                    fixed: true,
                    timeout: 6000,
                    dismissible: false
                })
            }, 500);
            break;
        default:
            setTimeout(() => {
                SnackBar({
                    message: "Sorry, an internal error has occurred!&nbsp",
                    status: "error",
                    position: "tr",
                    fixed: true,
                    timeout: 6000,
                    dismissible: false
                })
            }, 500);
            break;
    }
}


/** Loads the selected route */

function reload(node) {
    const next = ("https://jbbmb.com#").concat(node.toString());
    window.location.href = next;
}


/** Greets the visitor */

function getGreeting() {
    var goodX = [
            [0, 5, "good night!"],
            [6, 11, "good morning!"],
            [12, 19, "good afternoon!"],
            [20, 23, "good evening!"]
        ],
        hr = new Date().getHours();
    for (var i = 0; i < goodX.length; i++) {
        if (hr >= goodX[i][0] && hr <= goodX[i][1]) {
            console.log("Opening Web Inspector I see...");
            return "Hello, ".concat(goodX[i][2]);
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