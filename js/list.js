$(document).ready(function(){
	
                 $.ajax({
                    dataType: 'jsonp',
                    data: "publickey=0",                      
                    jsonp: 'callback',
                    url: 'http://66.96.204.38:1987/fcloud/?callback=?',                     
                    success: function(data) {
                      var items = "";
          			  $.each(data.items, function(key, val) {
          			    items += '<div class="span6 list-div">'+
          			               '<a href="detail.html">'+
          		                   '<div class="right-first-div pull-left">'+
          		                   '<img   alt="64x64"  src="img/male.png">'+
          		                   '</div>'+	                
          		                   '<div class="right-second-div pull-left">'+
          		                   '<h5>'+val.name_first+' '+val.name_middle+' '+val.name_last+'</h5>'+
          		                   '<span class="location"> New Delhi</span>'+	                
          		                   '</div>'+
          		                   '<div class="right-third-div pull-right">'+
          		                   '<button class="btn btn-mini btn-primary" data-loading-text="loading..."  type="button">'+
          		                   'Trace Me'+
          		                   '</button>'+
          		                   '<i class="icon-film"></i>'+                
          		                   '</div>'+
          		                   '</a>'+
          		        		   '</div>';
          			  });
          			$('#list').html(items);
                    }
               
      });             
       
	
	
});