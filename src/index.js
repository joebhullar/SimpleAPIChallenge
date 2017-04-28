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

	  function avgPriceCalculator(arrItems, r){ 
			var tempSumPrice = 0;
			var avgPrice=0;
			var numberOfStores=arrItems[r]["soldInStores"].length;
			for (var inStore=0; inStore<numberOfStores; inStore++)
		       {  
		       		tempSumPrice=tempSumPrice+ arrItems[r]["soldInStores"][inStore]["price"]; 
		       }
		    avgPrice=tempSumPrice/numberOfStores;
			return avgPrice.toFixed(2) ;
		}

$('#load-more-btn').click(function(event) {
	arrItems=DataSource.prototype.getNextPage();
	var table ='';
	var rows = 3;// THIS IS THE DATASTEPSIZE
			for (var r=0; r < rows; r++)
			{
			    table += '<tr>';
					table += '<td>' + arrItems[r]["id"] +'</td>';
					table += '<td>' + arrItems[r]["name"] +'</td>';
					table += '<td>' + arrItems[r]["colour"] +'</td>';
					table += '<td>' + avgPriceCalculator(arrItems, r) +'</td>';
				table += '</tr>';
			}

	var div = document.getElementById('results-container');
	div.innerHTML = div.innerHTML + '<table>'+ table+'</table>';	
	
});


