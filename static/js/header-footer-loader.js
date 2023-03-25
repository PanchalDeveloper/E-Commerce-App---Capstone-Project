const body = document.querySelector('body');

// Loading Header
loadElement('/header.html', body, 'afterbegin');

// Loading Footer
loadElement('/footer.html', body, 'beforeend');

// Function to load Elements within Webpage
async function loadElement(elemFileUrl = "", addToElem = Object, position = "afterbegin"){
    // Send a "GET" request
    const req = await fetch(elemFileUrl);

    // If the request is successful, insert the response HTML into the "body"
    if (req.status === 200 && req.ok) {
        const html = await req.text();
        
        addToElem.insertAdjacentHTML(position, html);
    }
}