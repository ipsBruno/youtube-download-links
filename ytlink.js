/*
   email@brunodasilva.com
   Get download links from youtube
   
   getYoutubeInfo('http://phpproxy.com/file.php', 'videoid');
   returns: object info about youtube links
*/
getYoutubeInfo = function(proxy, id) {

	url = proxy + '?id=' + id;
	infoVideo = [];
	
	$.ajaxSetup({ async: false}); 

	$.getJSON(url, function(data) {
		
		eachVar = [];
		
		$.each(data, function(index, value) {	

			var m = value.type.match("video/(.*)");
			
			var fm = m[1].split(';')[0];
			
			if(fm == 'x-flv') fm = 'flv';			
					
			infoVideo.push(new Array(fm, value.quality, value.url));
			
		}); 		
	});	
	 
	return infoVideo;
}
 
