
//let $cache= $('<div></div>');
let cache = [];
let index = 0;

let merge= function(left, right){
    let merged = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            merged.push(left.shift());
        }
        else{
            merged.push(right.shift());
        }
    }
    while(left.length){
       merged.push(left.shift());
    }
    while(right.length){
       merged.push(right.shift());
    }
    cache.push(merged);
    return merged;
}

let mergeSort = function(arr){
    //console.log(arr);
    cache.push(arr);
    if(arr.length < 2){
        return arr;
    }
    let mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(mergeSort(left), mergeSort(right));

}