function ClickCss(target, targets) {
    targets.forEach(element => element.classList.remove('active'));
    target.classList.add('active');
}

function smoothScroll(targetY, duration) {
    var startY = window.pageYOffset;
    var diff = targetY - startY;
    var startTime = performance.now();

    function step(currentTime) {
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startY + diff * ease);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

export function InitMenu(targets) {
    targets.forEach(target => {
        target.addEventListener('click', event => {
            var href = event.currentTarget.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                ClickCss(event.currentTarget, targets);
                var el = document.querySelector(href);
                if (el) {
                    var nav = document.querySelector('nav');
                    var navH = nav ? nav.offsetHeight : 0;
                    var rect = el.getBoundingClientRect();
                    window.scrollTo(0, window.pageYOffset + rect.top - navH);
                }
            } else {
                event.preventDefault();
                ClickCss(event.currentTarget, targets);
                window.open(event.currentTarget.href, event.currentTarget.getAttribute('target') || "_self");
            }
        });
    });
    targets[0].classList.add('active');
}

export function InitLanguageMenu(targets) {
    targets.forEach(target => {
        target.addEventListener('click', event => {
            event.preventDefault();
            if (event.currentTarget.href) {
                window.location.replace(event.currentTarget.href);
            }
        });
    });
}

export function InitMenuIcon(icon, layout) {
    icon.addEventListener('click', () => {
        layout.classList.toggle('active');
    });
}
