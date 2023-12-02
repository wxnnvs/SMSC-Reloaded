let style;
let toggled = true;

fetch(chrome.runtime.getURL('style.css'))
    .then(response => response.text())
    .then(response => {
        style = response;
        document.body.insertAdjacentHTML('afterend', '<style id="smsc-rld">' + style + '</style>');
    });

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
        if (toggled) {
            toggled = !toggled;
            document.getElementById('smsc-rld').innerHTML = "";
        } else if (!toggled) {
            toggled = !toggled;
            document.getElementById('smsc-rld').innerHTML = style;
        }
    }
});