document.addEventListener('DOMContentLoaded', function () {
  function checkOS() {
    const os = navigator.platform;
    sendWebhook(os);
  }

  function getCurrentUnixTime() {
    const now = new Date();
    return Math.round(now.getTime() / 1000);
  }

  function sendWebhook(os) {
    const webhookURL = 'https://discord.com/api/webhooks/1190483916168114197/umTxVI0_ICJNuHz1ajpciQh7qGw6HAn1JFg25qCk6yBfb5yaMhduzoWFPk27D6Cr4aOl';
    const currentTime = getCurrentUnixTime();

    const payload = {
      content: `**OS:** \`${os}\`\n**Hit time**: <t:${currentTime}:T> raw: \`${currentTime}\``
    };

    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  }

  window.onload = checkOS;
});
