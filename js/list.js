function fetchList(){
		 $.ajax({
             dataType: 'jsonp',
             data: "publickey=0",                      
             jsonp: 'callback',
             url: 'http://66.96.204.38:1987/fcloud/?callback=?',                     
             success: function(data) {
               var items = "";
   			  $.each(data.items, function(key, val) {
   			    items += '<div class="span6 list-div"  >'+
   		                   '<div class="right-first-div pull-left">'+
   		                   '<img   alt="64x64"  src="img/'+val.photo+'" class="find-detail" id="'+val.id+'">'+
   		                   '</div>'+	                
   		                   '<div class="right-second-div pull-left">'+
   		                   '<h5 class="find-detail" id="'+val.id+'">'+val.name+'</h5>'+
   		                   '<span class="location"> New Delhi</span>'+	                
   		                   '</div>'+
   		                   '<div class="right-third-div pull-right">'+
   		                   '<button class="btn btn-mini btn-primary" data-loading-text="loading..."  type="button">'+
   		                   'Trace Me'+
   		                   '</button><br>'+
   		                   '<i class="icon-film"></i>'+                
   		                   '</div>'+
   		        		   '</div>';
   			  });
   			  	$('#list').html(items);
             }        
          	});    
	}
$(document).ready(function(){	
	fetchList();
	$('.find-detail').live('click',function(){
		var profile_id = $(this).attr('id');
		$.ajax({
            dataType: 'jsonp',
            data: "profile_id="+profile_id,                      
            jsonp: 'callback',
            url: 'http://66.96.204.38:1987/fcloud/user/?callback=?',                     
            success: function(data) {
              var items = "";
  			  $.each(data.items, function(key, val) {
  			    items += '<div class="span3 details-div">'+
				  	                '<div class="right-first-div pull-left">'+
				               '<img   alt="64x64"  src="img/'+val.photo+'" class="pull-left thumbnail ">'+
				            '</div>'+
				            
				            '<div class="right-second-div pull-left">'+
				                '<h5>Rajesh Kumar Jha</h5>'+
				                '<span class="location"> '+val.name+'</span>'+
				            '</div>'+
				            '<br>'+
				            '<div class="clearfix" ></div>'+
				            '<div class="right-second-div pull-left">'+
				                '<h5>Email </h5>'+
				                '<span class="location"> '+val.email+'</span>'+
				            '</div>'+
				            '<div class="clearfix" ></div>'+
				            '<div class="right-second-div pull-left">'+
				                '<h5>Call Office</h5>'+
				                '<span class="location"> +91-'+val.phone_home+'</span>'+
				            '</div>'+
				            '<div class="clearfix" ></div>'+
				            '<div class="right-second-div pull-left">'+
				                '<h5>Call Home</h5>'+
				                '<span class="location">+91-'+val.phone_office+'</span>'+
				            '</div>'+
				            '<div class="clearfix" ></div>'+
				            '<div class="right-second-div pull-left">'+
				                '<h5>Friends</h5>'+
				            '</div>'+
				            '<div class="right-second-div pull-left">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				            '</div>'+
				            '<div class="clearfix" ></div>'+
				            '<div class="right-second-div pull-left">'+
				                '<h5>Groups</h5>'+
				            '</div>'+
				            '<div class="right-second-div pull-left details-div">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				                '<img   alt="64x64"  src="img/default.png" class="pull-left thumbnail">'+
				            '</div>'+
				            '<div class="clearfix" ></div>'+
				    '</div>';
  			  });
  			  	$('#list').html(items);
            }        
         	});
	});
	
                         
       
	
	
});