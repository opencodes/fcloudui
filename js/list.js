var server_ip  = '66.96.204.38';
var deviceUuId = '550e8400-e29b-41d4-a716-446655440000';//device.uuid;
/*var device_info = {
		deviceName : device.cordova,
		platform : device.platform,
		uuid :device.uuid,
		version :device.verson
};*/


function fetchList(){
		 $.ajax({
             dataType: 'jsonp',
             data: "publickey="+deviceUuId,                      
             jsonp: 'callback',
             url: 'http://'+server_ip+':1987/fcloud/?callback=?',                     
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
   		                   '<div ><button class="btn btn-mini  btn-warning trace_me"  data-loading-text="tracing.."  type="button" data-id="'+val.id+'">'+
		                   'Trace Me'+
		                   '</button></div>'+
   		                   '</div>'+
   		                   '<div class="right-third-div pull-right">'+   		                   
   		                   '<i class="icon-film"></i>'+                
   		                   '</div>'+
   		        		   '</div>';
   			  });
   			  	$('#list').html(items);
             }        
          	});    
	}
$(document).ready(function(){	
	$('#home-screen').live('click',function(){
		$('#list').show();
		$('#home-screen').hide();
		fetchList();
	});
	
	$('.find-detail').live('click',function(){
		$('#list').hide();
		$('#detail').show();
		var profile_id = $(this).attr('id');
		$.ajax({
            dataType: 'jsonp',
            data: "profile_id="+profile_id,                      
            jsonp: 'callback',
            url: 'http://'+server_ip+':1987/fcloud/user/?callback=?',                     
            success: function(data) {
              var items = "";
  			  $.each(data.items, function(key, val) {
  			    items += '<div class="span3 details-div">'+
				  	                '<div class="right-first-div pull-left">'+
				               '<img   alt="64x64"  src="img/'+val.photo+'" class="pull-left thumbnail ">'+
				            '</div>'+
				            
				            '<div class="right-second-div pull-left">'+
				                '<h5>'+val.name+'</h5>'+
				                '<span class="location"> '+val.home_location+'</span>'+
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
  			
  			  	$('#detail').html(items);
            }        
         	});
	});
	$('.trace_me').live('click',function(){
		$(this).button('loading');
		var friend_id = $(this).data('id');
		var thiselement  = $(this);
		$.ajax({
            dataType: 'jsonp',
            data: "friend_id="+friend_id,                      
            jsonp: 'callback',
            url: 'http://'+server_ip+':1987/fcloud/traceme/?callback=?',                     
            success: function(data) {
              var items = "";
  			    items += ' <span class="label label-success"><i class="icon-ok icon-white"></i> Invitation Sent </span> ';
  			  thiselement.parent().html(items);
            }        
         	});
	});
});

