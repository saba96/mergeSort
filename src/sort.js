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
    return merged;
    // console.log('here');
    // let leftSize = m - l + 1;
    // let rightSize = r - m
    // let leftArr = [];
    // let rightArr = [];
    // for(let i=0; i<leftSize; i++){
    //     leftArr[i] = arr[l + i];
    // }
    // for(let i=0; i<rightSize; i++){
    //     rightArr[i] = arr[l+m+i];
    // }
    // let i=0;
    // let j=0;
    // let k=l;
    // while(i<leftSize && j<rightSize){
    //     if(leftArr[i] <= rightArr[j]){
    //         arr[k] = leftArr[i];
    //         i++;
    //     }
    //     else{
    //         arr[k] = rightArr[j];
    //         j++;
    //     }
    //     k++;
    // }
    // while( i < leftSize){
    //     arr[k] = leftArr[i];
    //     i++;
    //     k++;
    // }
    // while(j < rightSize){
    //     arr[k] = rightArr[j];
    //     j++;
    //     k++;
    // }
}

let mergeSort = function(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
    // if(l < r){
    //     m = l + (r - 1) / 2;
    //     mergeSort(arr, l, m);
    //     mergeSort(arr, m+l, r);
    //     merge(arr, l, m, r);
    // }
    //return arr;
}