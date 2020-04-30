import fetch from 'isomorphic-unfetch';

export default (message) =>
  fetch(process.env.TELEGRAM_WEBHOOK_URL, {
    method: 'post',
    body: message,
  });