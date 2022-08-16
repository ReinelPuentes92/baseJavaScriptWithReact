const apiKey = '0fQUMUboqLe2OekIj92gu0B9SZRhsCfY';

const httpRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpRequest
    .then(response => response.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);

