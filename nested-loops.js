function multiplyall(arr){
    var product=1;
    for(i=0;i<arr.length;i++)
    {
    for(j=0;j<arr[i].length;j++)
    {
        product*=arr[i][j];

    }
    }
    return product;
}
var product=multiplyall([[1,2],[3,4],[5,6,7]]);
console.log(product);