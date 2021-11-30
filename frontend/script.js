window.onload = function () {
    var request = new XMLHttpRequest();
    var counter = 0;

    request.onreadystatechange = function () {
        if (counter > 30) {
            showResult("túl sok átirányítás");
            return;
        }
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            console.log(counter);
            const object = JSON.parse(this.responseText);
            if (object.content) { showResult(object.content); }
            else if (object.redirectUrl) {
                counter++;
                request.open('GET', 'http://localhost:3000' + object.redirectUrl);
                request.send();
            }
            else {
                showResult('loading...')
            }
        }
    };

    request.open('GET', 'http://localhost:3000/rest/jsons/init', true);
    request.send();
}




function showResult(result) {
    document.getElementById('result').innerHTML = result;
}