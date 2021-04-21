let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false}, { name: "Album 3", price: 9.99, addedToCart: false }, { name: "Album 4", price: 19.99, addedToCart: false }];

const loop = () => {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Album')
    }
}

document.getElementById('main').addEventListener('click', function(event){
    const photo = event.target.id;
    const theImage = document.getElementById('image');
    const theName = document.getElementById('name');
    const thePrice = document.getElementById('price');

    for (const theAlbum in albums) {
        if (photo === theAlbum.name) {
            if (theAlbum.addedToCart == true){
                alert ('This album exists in the cart!');
                console.log(theAlbum);
            }

            var p = document.createElement("p");
            p = theAlbum;
            document.getElementById('image').appendChild(p);
        }
    }
});