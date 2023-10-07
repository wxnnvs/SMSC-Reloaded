fetch('https://github.com/wxnnvs/SMSC-Reloaded/raw/main/style.css')
  .then(response => document.body.insertAdjacentHTML("beforeend", "<style>" + response + "</style>"));