let arr = [10,8,21,1]


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var $mainDiv= $('<div></div>');
$mainDiv.attr('id', "main");
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
_.each(cache, function(step){
	let $div2= $('<div></div>');
	let color = getRandomColor();
	_.each(step, function(id){
		let $div3= $('<div></div>');
		$div3.addClass("number").text(id).css("background-color", color);;
		$div2.append($div3);
	});
	$('body').append($div2);
	
});

//$('body').append($mainDiv);
	//console.log(step);

//console.log(arr);