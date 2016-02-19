<?php

echo parseYoutube($_GET['id']);

function parseYoutube($data) {  

	$data = 'http://www.youtube.com/get_video_info?video_id='.$data;

	parse_str($data, $info);  
	$streams = explode(',', $info['url_encoded_fmt_stream_map']);  
	
	$results = [];  
	
	foreach($streams as $stream) { 
		$real_stream = [];  

		parse_str($stream, $real_stream);  

		$real_stream['url'] .= '&signature=' . $real_stream['sig'];  
	
	
  		array_push($results,$real_stream);
  		
  	} 
  	
  	echo json_encode($results);
}




 

?>
