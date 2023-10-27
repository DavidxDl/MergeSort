function mergeSort(list)
{
    //Recursive base 
    if (list.length < 2) return list;
    
    let leftHalf = mergeSort(list.slice(0, list.length / 2));
    let rightHalf = mergeSort(list.slice(list.length / 2));
    let merged = [];

    while ( leftHalf.length > 0 || rightHalf.length > 0 ) {
            if (leftHalf[0] < rightHalf[0]) {
                merged.push(leftHalf[0]); 
                leftHalf.splice(0, 1);
            } else if (rightHalf[0] == undefined) {
                merged.push(leftHalf[0]); 
                leftHalf.splice(0, 1);
            } else {
                merged.push(rightHalf[0]);
                rightHalf.splice(0, 1)
            }  
    }

    return merged
}


function binarySearch(arr, n, outIndex = 0)
{
   const middle = Math.floor(arr.length / 2);

   if (arr[middle] === n) return true;
   if (arr.length === 1 && arr[0] !== n) return false;
   if (n > arr[middle]) return binarySearch(arr.slice(middle), n);
   if (n < arr[middle]) return binarySearch(arr.slice(0, middle), n);
}