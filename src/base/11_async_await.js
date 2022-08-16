const getImagen = async() => {
    
    try {
        
        const apiKey = '0fQUMUboqLe2OekIj92gu0B9SZRhsCfY';
        const httpRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await httpRequest.json();
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    
        console.log(url);

    } catch (error) {
        
        console.error(error);
    }
    
 }

 getImagen();