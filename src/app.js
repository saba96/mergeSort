let arr = [10,8,21,1]


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// var $mainDiv= $('<div></div>');
// $mainDiv.attr('id', "main");
_.each(arr, function(id){
	var $div1= $('<div></div>');
	$div1.attr('id', id).addClass("number").text(id).css("background-color", getRandomColor());
	$('body').append($div1);
});


function unique(arr) {
    var hash = {}, result = [];
    hash[[]] = true;
    for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { 
            result.push(arr[i]);
        }
    }
    return result;
}

arr = mergeSort(arr);
cache = unique(cache); 
cache.shift();

var oddCount = 0;
var evenCount = 0;
var $oddDiv = $('<div></div>');
var $evenDiv = $('<div></div>');
for (var i = 0; i<cache.length; i++) {
	if(oddCount === 2 ){
		$('body').append($oddDiv);
		$oddDiv = $('<div></div>');
		oddCount = 0;
	}
	if(evenCount === 2){
		$('body').append($evenDiv);
		$evenDiv = $('<div></div>');
		evenCount = 0;
	}
	let color = getRandomColor();
	if(i%2===1){
		for (var j = 0; j<cache[i].length; j++) {
			var $div3= $('<div></div>');
			$div3.addClass("number").text(cache[i][j]).css("background-color", color);;
			$oddDiv.append($div3);	
		}
		
		oddCount++;
	}
	else{
		for (var j = 0; j<cache[i].length; j++) {
			var $div3= $('<div></div>');
			$div3.addClass("number").text(cache[i][j]).css("background-color", color);;
			$evenDiv.append($div3);	
		}
		
		evenCount++;
	}
}


let finalColor = getRandomColor();
_.each(arr, function(id){
	var $sorted= $('<div></div>');
	$sorted.attr('id', id).addClass("number").text(id).css("background-color", finalColor);
	$('body').append($sorted);
});
