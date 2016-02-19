# youtube-download-links
This tool parse a direct links of Youtube Video in PHP/JS
Useful to Youtuber Downloaders and Playback Video by direct url.


# How to use

In Javascript:
```Javascript
var id = 'MEEQriaoMY4' ; // Youtube video id
var info  = [] ;

info = getYoutubeInfo ('http://siteofproxy.com/proxy.php', id );

console.log(info);
```

# Results
```
Array[Array[3]]
0: "webm"
1: "medium"
2: "http://r7---sn-q4f7snez.googlevideo.com/videoplayback?dur=0.000&ignature="
```
