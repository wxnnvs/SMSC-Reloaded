fetch('https://github.com/wxnnvs/SMSC-Reloaded/raw/main/extension/style.css')
  .then(response => document.body.insertAdjacentHTML("beforeend", "<style>" + response + "</style>"));