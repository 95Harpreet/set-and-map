var z=new Set()
z.add(23)
z.add(55)
z.add(22)

//console.log('present '+z.has(23))            //value present or not
var k=z.entries()
for(var s of k)
{
    console.log(s)
}