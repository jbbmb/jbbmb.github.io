"use strict";
/** Initializes variables */

const phrases = [
        getGreeting(),
        'This is João’s virtual corner',
        'Thank You for visiting',
        'Species: Homo Sapiens',
        'Gender: Male',
        'Birth: April 1997',
        'Origin: Northern Portugal, Earth',
        'Function: Develop technology',
        'Directive: Leave a legacy',
        'Prefers: iPhone, cats and gin',
        'Use the buttons below to explore',
    ],
    contacts = [{
            type: "item",
            label: "Privacy Policy",
            callback: () => {
                gateway(12, "_blank");
            }
        },
        {
            type: "item",
            label: "Version History",
            callback: () => {
                gateway(13, "_blank");
            }
        },
    ],
    context = new Context(".contexted", contacts);


/** Triggers on session load */

window.addEventListener('load', function() {


    /** Pings Analytics */

    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-FMEDZDBVNJ');


    /** Evaluates URL parameters */

    const node = window.location.href.split("#")[1];
    if (node != null) {
        document.querySelector('#description').innerHTML = 'Redirecting You...';
        document.querySelector('#greeting').style.display = 'none';
        document.querySelector('#description').style.display = 'block';
        setTimeout(() => {
            gateway(parseInt(node), "_self");
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


    /** Animates card with parallax */

    const cardContainer = document.querySelector('#main');
    var cardContainerHeight = cardContainer.getBoundingClientRect().height * 0.5 + cardContainer.getBoundingClientRect().top,
        cardContainerWidth = cardContainer.getBoundingClientRect().width * 0.5 + cardContainer.getBoundingClientRect().left;

    window.addEventListener('resize', function() {
        cardContainerHeight = cardContainer.getBoundingClientRect().height * 0.5 + cardContainer.getBoundingClientRect().top;
        cardContainerWidth = cardContainer.getBoundingClientRect().width * 0.5 + cardContainer.getBoundingClientRect().left;
    }, true);

    function getSchwifty(el, positionX, positionY) {
        el.style.setProperty('transform', `rotateX(${(positionY - cardContainerHeight) / 30}deg) rotateY(${((positionX - cardContainerWidth) / 30) * (-1)}deg) translateZ(-15px)`);
    }

    function getShadowFlow(el, ev) {
        var elWidth = $(el).width();
        var elHeight = $(el).height();
        var elOffset = $(el).offset();
        var viewportWidth = $(document).width();
        var viewportHeight = $(document).height();
        var elCentreX = elOffset.left + (elWidth / 2);
        var elCentreY = elOffset.top + (elHeight / 2);
        var elShadow = el.css('box-shadow');
        var elShadowSplit = elShadow.split(' ');
        var elShadowColor = [elShadowSplit[0], elShadowSplit[1], elShadowSplit[2]].join('');
        var elShDpthX = parseInt(elShadowSplit[3].replace(/\D/g, ''));
        var elShDpthY = parseInt(elShadowSplit[4].replace(/\D/g, ''));
        if (ev == null) {
            var offX = 0;
            var offY = 0;
        } else {
            var offX = ev.pageX - elCentreX;
            var offY = ev.pageY - elCentreY;
        }
        var newShDepthX = Math.round(offX.map(0, viewportWidth / 2, 0, elShDpthX)) + 'px';
        var newShDepthY = Math.round(offY.map(0, viewportHeight / 2, 0, elShDpthY)) + 'px';
        var newShadow = [newShDepthX, newShDepthY, elShadowSplit[5], elShadowColor];
        el.style.setProperty('box-shadow', newShadow.join(' '));
    }


    /** Activates input event listeners */

    document.querySelectorAll("#main").forEach(function(item) {
        item.addEventListener("mousemove", function(e) {
            getSchwifty(cardContainer, e.clientX, e.clientY);
            getShadowFlow(cardContainer, e);
        });
        item.addEventListener("mouseout", function() {
            getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
            getShadowFlow(cardContainer, null);
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#greeting').style.display = 'block';
        });
    });

    document.querySelectorAll(".contexted").forEach(function(item) {
        item.addEventListener("mousemove", function(e) {
            getSchwifty(cardContainer, e.clientX, e.clientY);
            getShadowFlow(cardContainer, e);
        });
        item.addEventListener("mouseout", function() {
            getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
            getShadowFlow(cardContainer, null);
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#greeting').style.display = 'block';
        });
    });

    document.querySelector('#main').addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (touch) {
            getSchwifty(cardContainer, touch.pageX, touch.pageY);
        }
    });

    document.querySelector('#wrapper').addEventListener('touchmove', function(e) {
        e.preventDefault();
    });

    document.addEventListener('touchend', function(e) {
        e.stopPropagation();
        getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
        document.querySelector('#description').style.display = 'none';
        document.querySelector('#greeting').style.display = 'block';
    });

    document.querySelectorAll("#main").forEach(function(item) {
        item.addEventListener('contextmenu', event => event.stopPropagation());
        item.addEventListener('contextmenu', event => event.preventDefault());
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
            gateway(parseInt(icon.getAttribute('id')), "_blank");
        });
    });

});


/** Redirects the user accordingly */

function gateway(node, target) {
    switch (node) {
        case 1:
            gtag('event', 'click', {
                'event_category': 'mail'
            });
            navigator.clipboard.writeText("hello@jbbmb.com");
            SnackBar({
                message: "Address copied too  🤙🏻&nbsp",
                status: "green",
                position: "tr",
                fixed: true,
                timeout: 12000,
                dismissible: false
            });
            window.open("mailto:hello@jbbmb.com", "_self");
            break;
        case 3:
            gtag('event', 'click', {
                'event_category': 'telegram'
            });
            window.open("https://telegram.me/jbbmb", target);
            break;
        case 4:
            gtag('event', 'click', {
                'event_category': 'pay'
            });
            window.open("https://revolut.me/jbbmb", target);
            break;
        case 5:
            gtag('event', 'click', {
                'event_category': 'cvitae'
            });
            window.open("https://www.linkedin.com/in/jbbmb", target);
            break;
        case 6:
            gtag('event', 'click', {
                'event_category': 'git'
            });
            window.open("https://github.com/jbbmb", target);
            break;
        case 7:
            gtag('event', 'click', {
                'event_category': 'music'
            });
            window.open("https://music.apple.com/playlist/c-re/pl.u-6mo4lN4H4NWedB", target);
            break;
        case 8:
            gtag('event', 'click', {
                'event_category': 'photos'
            });
            break;
        case 9:
            gtag('event', 'click', {
                'event_category': 'videos'
            });
            window.open("https://www.youtube.com/@jbbmb", target);
            break;
        case 10:
            gtag('event', 'click', {
                'event_category': 'shortcuts'
            });
            window.open("https://routinehub.co/user/jbbmb", target);
            break;
        case 11:
            gtag('event', 'click', {
                'event_category': 'cvitae_pdf'
            });
            window.open("https://github.com/jbbmb/jbbmb.github.io/raw/main/static/pdf/Curriculum%20Vitae%20of%20João%20de%20Macedo%20Borges.pdf", target);
            setTimeout(() => {
                SnackBar({
                    message: "Résumé downloaded successfully  👍🏻&nbsp",
                    status: "green",
                    position: "tr",
                    fixed: true,
                    timeout: 6000,
                    dismissible: false
                });
                document.querySelector('#description').style.display = 'none';
                document.querySelector('#greeting').style.display = 'block';
            }, 500);
            break;
        case 12:
            window.open("https://github.com/jbbmb/jbbmb.github.io#privacy-policy", target);
            break;
        case 13:
            window.open("https://github.com/jbbmb/jbbmb.github.io/commits/main", target);
            break;
        case 404:
            setTimeout(() => {
                SnackBar({
                    message: "Requested page not found  👎🏻&nbsp",
                    status: "error",
                    position: "tr",
                    fixed: true,
                    timeout: 6000,
                    dismissible: false
                });
                document.querySelector('#description').style.display = 'none';
                document.querySelector('#greeting').style.display = 'block';
            }, 500);
            break;
        default:
            setTimeout(() => {
                SnackBar({
                    message: "Internal error occurred  👊🏻&nbsp",
                    status: "error",
                    position: "tr",
                    fixed: true,
                    timeout: 6000,
                    dismissible: false
                });
                document.querySelector('#description').style.display = 'none';
                document.querySelector('#greeting').style.display = 'block';
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
            [0, 5, "Good night"],
            [6, 11, "Good morning"],
            [12, 19, "Good afternoon"],
            [20, 23, "Good evening"]
        ],
        hr = new Date().getHours();
    for (var i = 0; i < goodX.length; i++) {
        if (hr >= goodX[i][0] && hr <= goodX[i][1]) {
            console.log("So, we're opening Web Inspector now...?");
            return goodX[i][2] + " and Welcome";
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


/** Google Analytics */

function gtag() {
    dataLayer.push(arguments);
}


/** ShadowFlow helper, from codepen.io/wuh/pen/RxvLoO */

Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}