require('dotenv').config(); // enabling the dotenv package
const fetch = require('node-fetch');

it('should fetch gifs given a query', async () => {
  await fetch(
    `http://api.giphy.com/v1/gifs/search?api_key=${
      process.env.GIPHY_KEY
    }&q=dog&limit=5`
  )
    .then(res => res.json())
    .then(json => {
      //expect(json.data.is_sticker).toEqual(0); // 0 means the response is a gif
      expect(json.pagination.count).toBe(5); // test if limit parameter works
    });
});

it('fetches a gif given the id', async () => {
  await fetch(
    `http://api.giphy.com/v1/gifs/xTiQyqwwF7R3bwm2Ag?api_key=${
      process.env.GIPHY_KEY
    }`
  )
    .then(res => res.json())
    .then(json => {
      expect(json.data.id).toEqual('xTiQyqwwF7R3bwm2Ag'); // if id from response is equal to input id
      expect(json.data.is_sticker).toEqual(0); // 0 means the response is a gif
    });
});

it('should fetch a sticker', async () => {
  await fetch(
    `http://api.giphy.com/v1/stickers/random?api_key=${process.env.GIPHY_KEY}`
  )
    .then(res => res.json())
    .then(json => {
      expect(json.data.is_sticker).toBeTruthy(); // true means the response is a sticker
    });
});
