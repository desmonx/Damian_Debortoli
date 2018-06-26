var html = document.querySelector('link[rel="import"]').import;
var text = html.getElementById("header");
document.body.appendChild(text.cloneNode(true));

