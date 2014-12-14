
function search() {
	
	var searchText = document.getElementById('searchText').value,
		author = document.getElementById('author').value;
	console.log(searchText,author);
	if (author=='none') {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost:9200/sentiment/_search?q='+ searchText, false);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded","Access-Control-Allow-Origin","*");

		xhr.send();
    	if(xhr.readyState === 4 && xhr.status === 200) {
        	if(xhr.responseText !== "") {
           		json = JSON.parse(xhr.responseText);
           		var temp = json.hits.hits;
           		for(var i=0;i<temp.length; i++) {
           			console.log(temp[i]._source['author'],temp[i]._source['message']);
           			$('#answers').append('<li><b>'+temp[i]._source['author']+': </b> '+temp[i]._source['message']+'</li>');
           		}                 	                 
        	}
    	}
	} else if(author != 'None' && searchText == ''){
		console.log('here');
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost:9200/sentiment/_search?q=author:'+ author, false);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded","Access-Control-Allow-Origin","*");
		xhr.send();
    	if(xhr.readyState === 4 && xhr.status === 200) {
        	if(xhr.responseText !== "") {
           		json = JSON.parse(xhr.responseText);
            	var temp = json.hits.hits;
            	console.log(temp);
           		for(var i=0;i<temp.length; i++) {
           			console.log(temp[i]._source['author'],temp[i]._source['message']);
           			$('#answers').append('<li><b>'+temp[i]._source['author']+': </b> '+temp[i]._source['message']+'</li>');
           		}                            	                 
        	}
    	}
	} else {

	}

}
