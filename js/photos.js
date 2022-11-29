function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => displayPhotos(data));
}
loadPhotos();

function displayPhotos(photos) {
    const photosContainer = document.getElementById('photos');
    for (const photo of photos) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');
        div.style.background = 'skyblue';
        div.style.textAlign = 'center';
        /* div.innerHTML = `
        <p>${photo.title}</p>
        <img src="${photo.url}">
        `; */
        p.innerText = photo.title;
        img.src = photo.url;
        // img.setAttribute('src', photo.url);
        div.appendChild(p);
        div.appendChild(img);
        photosContainer.appendChild(div);
    }
}
