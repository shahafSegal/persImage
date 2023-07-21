const switchButton = document.getElementById('switchButton');
const stylesheet = document.getElementById('stylesheet');

let isStylesheet1Active = true;
/*when button is pressed change style, change button text and when pressed again changes back style*/
switchButton.addEventListener('click', () => {
    if (isStylesheet1Active) {
        stylesheet.href = 'style2.css';
        switchButton.textContent="switch to dark mode"
    } else {
        stylesheet.href = 'style1.css';
        switchButton.textContent="switch to light mode"
    }
    isStylesheet1Active = !isStylesheet1Active;
});
