function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    }
    else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }
    else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.


// Make the actual CORS request.
function makeCorsRequest(message, number) {
    // This is a sample server that supports CORS.
    var url = 'https://shielded-reef-48843.herokuapp.com/?message=' + message + '&number=' + number;
    console.log(number);
    var xhr = createCORSRequest('GET', url);
    console.log(xhr);
    if (!xhr) {
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();
}



