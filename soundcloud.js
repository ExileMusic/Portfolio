

 function getSongList(){
    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://feeds.soundcloud.com/users/soundcloud:users:85837726/sounds.rss", false ); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}


export{getSongList};


