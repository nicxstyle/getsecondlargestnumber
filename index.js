let numaralar = [1,2,3,6,9,8,7,4];
function ikincibul(numaralar){
var enbuyuk= nums[0];
var ikinci = nums[0];
for(var i=1;i<nums.length;i++){
    if(nums[i]>enbuyuk){
        ikinci=enbuyuk;
        enbuyuk=nums[i];
    }else if(nums[i]>ikinci && nums[i]< enbuyuk){
        ikinci=nums[i];
    }

}
return ikinci;
}
console.log(ikincibul(numaralar));
