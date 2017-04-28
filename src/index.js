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

	var table ='';
	var rows = 3;
	var cols = 3;
	{ 
	
	  function avgPriceCalculator(arrItems){ 
			var tempSumPrice = 0;
			var avgPrice=0;
			var numberOfStores=arrItems[0]["soldInStores"].length;
			for (var inStore=0; inStore<numberOfStores; inStore++)
		       {  
		       		tempSumPrice=tempSumPrice+ arrItems[0]["soldInStores"][inStore]["price"]; 
		       }
		    avgPrice=tempSumPrice/numberOfStores;
		    console.log("THIS IS THE AVG PRICE:"+tempSumPrice);
			return avgPrice.toFixed(2) ;
		}
		
		table += '<tr>';
			//for (var c=0; c <= cols; c++)
			{
				table += '<td>' + arrItems[0]["id"] +'</td>';
				table += '<td>' + arrItems[0]["name"] +'</td>';
				table += '<td>' + arrItems[0]["colour"] +'</td>';
				table += '<td>' + avgPriceCalculator(arrItems) +'</td>';
			}
		table += '</tr>';
	}

	
	var div = document.getElementById('results-container');
	div.innerHTML = div.innerHTML + '<table>'+ table+'</table>';
	
	

document.getElementById("demo").innerHTML = arrItems[0]["id"];

var items=[];


