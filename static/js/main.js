"use strict";
/** Initializes variables */

const phrases = [
        'Homo Sapiens specimen in his 20s.',
        'Born in northern Portugal, Earth.',
        'Currently lives in the city of Porto.',
        'Developer-disguised IAM Architect.',
        'Studies software and user experience.',
        'Passionate about personal technology.',
        'Obsessed with privacy and security.',
        'Nags companies to delete old accounts.',
        'Believes AI is nothing to be scared of.',
        'Trying to leave his own legacy.',
        'Staying hungry and foolish.',
        'Can\'t settle on an iPhone wallpaper.',
        'Hates notifications and texting.',
        'Atheist second child from a big family.',
        'Rocks to pop and electronic music.',
        'Goes for a nice gin and tonic over beer.',
        'Prefers cats over dogs any day.',
        'Can speak four languagues fluently.',
        'Spends his money on trips and burguers.',
        'Has set foot in eight countries so far.',
        'Always takes pictures of the sunset.',
        'Takes care of plants that end up dieing.',
        'Believes in climate change and vaccines.',
        'Votes every time there is an election.',
        'Has built this tiny corner of the web.'
    ],
    options = [{
        type: "item",
        label: "Copyright",
        callback: () => {
            gateway(12, "_blank");
        }
    },
    {
            type: "item",
            label: "Privacy Policy",
            callback: () => {
                gateway(13, "_blank");
            }
        },
        {
            type: "item",
            label: "System Status",
            callback: () => {
                gateway(14, "_blank");
            }
        },
    ],
    context = new Context(".contexted", options);


/** Triggers on session load */

window.addEventListener('load', function() {


    /** Pings Analytics */

    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-FMEDZDBVNJ');


    /** Evaluates URL parameters */

    const node = window.location.href.split("?")[1];
    if (node != null) {
        setTimeout(() => {
            gateway(parseInt(node), "_self");
        }, 500);
    }


    /** Adds greeting to intro */

    var goodX = [
        [0, 5, "Good night.<br><bdi>Just scroll.</bdi>"],
        [6, 11, "Good morning.<br><bdi>Just scroll.</bdi>"],
        [12, 19, "Good afternoon.<br><bdi>Just scroll.</bdi>"],
        [20, 23, "Good evening.<br><bdi>Just scroll.</bdi>"]
    ],
    hr = new Date().getHours();
    for (var i = 0; i < goodX.length; i++) {
        if (hr >= goodX[i][0] && hr <= goodX[i][1]) {
            console.log("So, we're opening Web Inspector now...?");
            document.getElementById('greeting').innerHTML = (goodX[i][2]);
            break;
        }
    }


    /** Activates TextScramble */

    const el = document.querySelector('#punchline'),
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
    var cardContainerHeight = cardContainer.getBoundingClientRect().height * 0.88,
        cardContainerWidth = cardContainer.getBoundingClientRect().width * 0.5 + cardContainer.getBoundingClientRect().left;

    window.addEventListener('resize', function() {
        cardContainerHeight = cardContainer.getBoundingClientRect().height * 0.88;
        cardContainerWidth = cardContainer.getBoundingClientRect().width * 0.5 + cardContainer.getBoundingClientRect().left;
    }, true);

    function getSchwifty(el, positionX, positionY) {
        el.style.setProperty('transform', `rotateX(${(positionY - cardContainerHeight) / 30}deg) rotateY(${((positionX - cardContainerWidth) / 30) * (-1)}deg) translateZ(-15px)`);
    }

    getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight); // initial adjust


    /** Activates input event listeners */

    document.querySelectorAll("#main").forEach(function(item) {
        item.addEventListener("mousemove", function(e) {
            getSchwifty(cardContainer, e.clientX, e.clientY);
        });
        item.addEventListener("mouseout", function() {
            getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#punchline').style.display = 'block';
        });
    });

    document.querySelector('#main').addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (touch) {
            getSchwifty(cardContainer, touch.clientX, touch.clientY);
        }
    });

    document.addEventListener('touchend', function(e) {
        e.stopPropagation();
        getSchwifty(cardContainer, cardContainerWidth, cardContainerHeight);
        document.querySelector('#description').style.display = 'none';
        document.querySelector('#punchline').style.display = 'block';
    });

    document.querySelectorAll(".icon").forEach(function(item) {
        item.addEventListener('contextmenu', event => event.stopPropagation());
        item.addEventListener('contextmenu', event => event.preventDefault());
    });

    document.addEventListener('contextmenu', event => event.preventDefault());

    document.querySelectorAll(".icon").forEach(function(icon) {
        icon.addEventListener("mousemove", function() {
            document.querySelector('#description').innerHTML = icon.getAttribute('alt');
            document.querySelector('#punchline').style.display = 'none';
            document.querySelector('#description').style.display = 'block';
        });
        icon.addEventListener("mouseout", function() {
            document.querySelector('#description').style.display = 'none';
            document.querySelector('#punchline').style.display = 'block';
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
            setTimeout(() => {
                navigator.clipboard.writeText("hello@jbbmb.com")
                SnackBar({
                    message: "&nbspAddress copied to the clipboard.&nbsp",
                    status: "green",
                    position: "tl",
                    fixed: true,
                    timeout: 7000,
                    dismissible: false
                });
              }, 0);
            break;
        case 2:
            gtag('event', 'click', {
                'event_category': 'telegram'
            });
            window.open("https://telegram.me/jbbmb", target);
            break;
        case 3:
            gtag('event', 'click', {
                'event_category': 'pay'
            });
            window.open("https://revolut.me/jbbmb", target);
            break;
        case 4:
            gtag('event', 'click', {
                'event_category': 'bluesky'
            });
            window.open("https://bsky.app/profile/jbbmb.com", target);
            break;
        case 5:
            gtag('event', 'click', {
                'event_category': 'cvitae'
            });
            window.open("https://www.linkedin.com/in/jbbmb", target);
            break;
        case 6:
            gtag('event', 'click', {
                'event_category': 'music'
            });
            window.open("https://music.apple.com/playlist/c-re/pl.u-6mo4lN4H4NWedB", target);
            break;
        case 7:
            gtag('event', 'click', {
                'event_category': 'videos'
            });
            window.open("https://www.youtube.com/@jbbmb", target);
            break;
        case 8:
            gtag('event', 'click', {
                'event_category': 'bereal'
            });
            window.open("https://bere.al/jbbmb", target);
            break;
        case 9:
            gtag('event', 'click', {
                'event_category': 'shortcuts'
            });
            window.open("https://routinehub.co/user/jbbmb", target);
            break;
        case 10:
            gtag('event', 'click', {
                'event_category': 'git'
            });
            window.open("https://github.com/jbbmb", target);
        break;
        case 11:
            gtag('event', 'click', {
                'event_category': 'cvitae_pdf'
            });
            window.open("https://github.com/jbbmb/jbbmb.github.io/raw/main/static/pdf/Curriculum%20Vitae%20of%20João%20de%20Macedo%20Borges.pdf", target);
            setTimeout(() => {
                SnackBar({
                    message: "&nbspFile downloaded successfully.&nbsp",
                    status: "green",
                    position: "tl",
                    fixed: true,
                    timeout: 7000,
                    dismissible: false
                });
                document.querySelector('#description').style.display = 'none';
                document.querySelector('#punchline').style.display = 'block';
            }, 500);
            break;
        case 12:
            window.open("https://github.com/jbbmb/jbbmb.github.io/blob/main/LICENSE.md", target);
            break;
        case 13:
            window.open("https://github.com/jbbmb/jbbmb.github.io/blob/main/README.md", target);
            break;
        case 14:
            window.open("http://stats.uptimerobot.com/OXmELf5EPJ", target);
            break;
        case 404:
            setTimeout(() => {
                SnackBar({
                    message: "&nbspThe requested page was not found.&nbsp",
                    status: "error",
                    position: "tl",
                    fixed: true,
                    timeout: 7000,
                    dismissible: false
                });
                document.querySelector('#description').style.display = 'none';
                document.querySelector('#punchline').style.display = 'block';
            }, 500);
            break;
        default:
            setTimeout(() => {
                SnackBar({
                    message: "&nbspAn internal error has occurred.&nbsp",
                    status: "error",
                    position: "tl",
                    fixed: true,
                    timeout: 7000,
                    dismissible: false
                });
                document.querySelector('#description').style.display = 'none';
                document.querySelector('#punchline').style.display = 'block';
            }, 500);
            break;
    }
}


/** Loads the selected route */

function reload(node) {
    const next = ("https://jbbmb.com?").concat(node.toString());
    window.location.href = next;
}


/** Scrolls to the top */

function bopToTheTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


/** Pushes to Google */

function gtag() {
    dataLayer.push(arguments);
}


/** Scroll Magic for video intro */

const controller = new ScrollMagic.Controller();

// Start Section
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// End Section
const section = document.querySelector("section");
const end = section.querySelector("h1");

// Scene
let scene = new ScrollMagic.Scene({
        duration: 8000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller)
    document.getElementById("cover").removeAttribute("autoplay");

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 0.9 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;
scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});
setInterval(() => {
    requestAnimationFrame(() => {
        delay += (scrollpos - delay) * accelamount;
        video.currentTime = delay;
    })
}, 60);


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