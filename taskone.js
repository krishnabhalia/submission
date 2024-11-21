var array = [1, 1, 2, 4, 4, 5, 5, 5, 7, 6,  9] ;
var duprev=[];
for (var i=0;i<array.length;i++)
{
    for(var j=i+1;j<array.length;j++)
    {
        if(array[i]+array[j]==10)
        {
            duprev.push([array[i],array[j]]);
            duprev.push([array[j],array[i]]);
        }
    }
}
console.log(duprev);
var array2=new Set()
for (var i=0;i<array.length;i++)
{
    array2.add(array[i]);
}

var array1=Array.from(array2);
var rev=[]

for (var i=0;i<array1.length;i++)
{
    for(var j=0;j<array1.length;j++)
    {
        if(array1[i]+array1[j]==10)
        {
            rev.push([array1[i],array1[j]]);
        }
    }
}
console.log(rev);

var array3=Array.from(array2).sort();

var uni=[]
var len=array3.length/2;
if((array3.length/2)%2==0)
{
    len=len+1;
}


for (var i=0;i<len;i++)
{
    for(var j=0;j<array3.length;j++)
    {
        if(array3[i]+array3[j]==10)
        {
            uni.push([array3[i],array3[j]]);
        }
    }
}

console.log(uni);