// need to call constructor DataSource() in order to make sure that we have an array of objects 
		//CODE BELOW produces array of objects!
 DataSource();
// console.log("After Constructor Is Called!!");
// 
// console.log(DataSource.prototype.getNextPage());
// console.log(DataSource.prototype.getNextPage());
// console.log(DataSource.prototype.getNextPage());
// console.log(DataSource.prototype.getNextPage());
// console.log("Nothing should print  after this");
// console.log(DataSource.prototype.getNextPage());

var arrItems= [];
arrItems=DataSource.prototype.getNextPage();
console.log("Below are ONLY THREE objects from the array!");
console.log(arrItems[0]["id"]);
console.log(arrItems[1]["soldInStores"].length);
console.log(arrItems[2]["soldInStores"][1]["price"]);

//arrItems=#JOE

var items=[];


