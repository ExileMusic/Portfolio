function getPlaylistData(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLkFb67nRu85dSDaGQGdbLHUp4w7TUtL7y&key=AIzaSyDeUMhJh1CcsPR412r7vD25oYES1BDnt_c", false ); // false for synchronous request

    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function getPlayList(id){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDeUMhJh1CcsPR412r7vD25oYES1BDnt_c&id=PLkFb67nRu85dSDaGQGdbLHUp4w7TUtL7y&part=id,snippet&fields=items(id,snippet(title,channelId,channelTitle))", false ); // false for synchronous request

    xmlHttp.send(null);
    return xmlHttp.responseText;
}
export{getPlaylistData,getPlayList}