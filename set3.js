//var z=new Set([23,55,22,55])
var z=new Set()
z.add(23)
z.add(55)
z.add(22)
//z.delete(55)                  //delete the index
z.clear()                      //clear the values
var myvalue=z.values()
console.log('elements are')
for(var s of myvalue)
{

console.log(s)}