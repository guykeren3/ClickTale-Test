const body = document.querySelector('body');

function handleClick() {
    body.addEventListener('click', (e) => {
        target = e.target;
        console.log(target.textContent);
    })
};

handleClick();

function handleRequest(url) {
    $.ajax({
        type: "GET",
        url: url,
        data: {},
        success: function (data) {
            console.log(data);
        }
    });
}

handleRequest('https://www.yahoo.com/');
handleRequest('http://jquery.com/download/');

//The difference between the two requests is the fact a request is sent to a different domain by each request.