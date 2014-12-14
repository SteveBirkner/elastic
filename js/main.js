function search() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:9200/sentiment/_search', false);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded","Access-Control-Allow-Origin","*");

	var searchText = document.getElementById('searchText').value,
		author = document.getElementById('author').value;
	
	xhr.send("q=" + searchText);
    if(xhr.readyState === 4 && xhr.status === 200) {
        if(xhr.responseText !== "") {
            json = JSON.parse(xhr.responseText);
            console.log(json);                  	                 
        }
    }
}
