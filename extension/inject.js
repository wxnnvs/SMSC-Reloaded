fetch('https://raw.githubusercontent.com/wxnnvs/SMSC-Reloaded/main/extension/style.css')
  .then(response => response.text())
  .then(response => document.body.insertAdjacentHTML("beforeend", "<style>" + response + "</style>"));