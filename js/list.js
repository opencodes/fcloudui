$(document).ready(function(){
	$('#traceme').click(function(){
				$.getJSON("http://66.96.204.38:1987/fcloud/?publickey=0&callback=?", function(data) {
					var response = JSON.parse(data);
					$('#list').text('asdasdas');
					     
				});
				
		/*$.getJSON('http://localhost:1987/fcloud/?publickey=0', function(data) {
			  alert('sdfsdf');
			  var items = [];
			  alert(data);
			  console.log(data);
			  $.each(JSON.parse(data), function(key, val) {
			    items.push('<div class="span6 list-div">'+
			               '<a href="detail.html">'+
		                   '<div class="right-first-div pull-left">'+
		                   '<img   alt="64x64"  src="img/male.png">'+
		                   '</div>'+	                
		                   '<div class="right-second-div pull-left">'+
		                   '<h5>Rajesh Kumar Jha</h5>'+
		                   '<span class="location"> New Delhi</span>'+	                
		                   '</div>'+
		                   '<div class="right-third-div pull-right">'+
		                   '<button class="btn btn-mini btn-primary" data-loading-text="loading..."  type="button">'+
		                   'Trace Me'+
		                   '</button>'+
		                   '<i class="icon-film"></i>'+                
		                   '</div>'+
		                   '</a>'+
		        		   '</div>');
			  });

			  $('#list').html('list');
		});*/
	});
	
});