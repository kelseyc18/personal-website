const INTENT_MOUSE_CLASS = 'intent-mouse';

function setupRootDom() {
    const body = document.body;

    document.addEventListener('touchstart', () => {
        body.classList.add(INTENT_MOUSE_CLASS);
    });

    document.addEventListener(
        'mousedown',
        () => {
            body.classList.add(INTENT_MOUSE_CLASS);
        }, {
            capture: true
        },
    );

    document.addEventListener(
        'keydown',
        (e) => {
            if (
                e.key === 'Tab' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowDown' ||
                e.key === 'Enter'
            ) {
                body.classList.remove(INTENT_MOUSE_CLASS);
            }
        }, {
            capture: true
        },
    );

    // Default to not showing focus outlines on load
    body.classList.add(INTENT_MOUSE_CLASS);
}

window.onload = setupRootDom;