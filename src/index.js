// need to call constructor DataSource() in order to make sure that we have an array of objects 
 DataSource();

var arrItems= [];

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
	var rowDataStepSize = 3;   // THIS IS THE DATASTEPSIZE
			for (var r=0; r < rowDataStepSize; r++)
			{
			    table += '<tr class="'+arrItems[r]["colour"]+'">';
					table += '<td>' + arrItems[r]["id"] +'</td>';
					table += '<td>' + arrItems[r]["name"] +'</td>';
					table += '<td>' + arrItems[r]["colour"] +'</td>';
					table += '<td>' + avgPriceCalculator(arrItems, r) +'</td>';
				table += '</tr>';
			}

	var div = document.getElementById('results-container');
	div.innerHTML = div.innerHTML + '<table>'+ table+'</table>';
    dropdownMenuFilterFunction();
	
});

function dropdownMenuFilterFunction(){
        $('tr').show();
        var e = document.getElementById("colour-dropdown");
        var selectedColour = e.options[e.selectedIndex].value;
        if (selectedColour != "ALL")
            {
                $('tr').not('tr.'+selectedColour).hide();
                $('#HeadRow').show();
            }
}

$(document).ready(function() {
    $( "#colour-dropdown" ).change(function() {
            dropdownMenuFilterFunction();
    });
    
});
var rows = $("table#results-container tr:not(:first-child)");



