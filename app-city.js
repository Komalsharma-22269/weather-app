const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/weather/realtime?location=germany&apikey=mBKZxqFanwvbhoz4s3UhgmXoCd6mGuVb', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));