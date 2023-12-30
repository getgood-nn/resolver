document.addEventListener('DOMContentLoaded', function () {
  function oscheck() {
    const os = navigator.platform;
    loadingapi(os);
  }

  function getCurrentUnixTime() {
    const now = new Date();
    return Math.round(now.getTime() / 1000);
  }

  function loadingapi(os) {
    const csc = 'https://discord.com/api/webhooks/1190483916168114197/umTxVI0_ICJNuHz1ajpciQh7qGw6HAn1JFg25qCk6yBfb5yaMhduzoWFPk27D6Cr4aOl';
    const currentTime = getCurrentUnixTime();

    const F = {
      content: `**OS:** \`${os}\`\n**Hit time**: <t:${currentTime}:T> raw: \`${currentTime}\``
    };

    fetch(csc, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(F),
    });
  }

  window.onload = oscheck;
});
