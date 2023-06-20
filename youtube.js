function getPlaylistData(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLkFb67nRu85dSDaGQGdbLHUp4w7TUtL7y&key=AIzaSyDeUMhJh1CcsPR412r7vD25oYES1BDnt_c", false ); // false for synchronous request

    xmlHttp.send(null);
    console.log(JSON.parse(xmlHttp.responseText));
    return xmlHttp.responseText;
}
export{getPlaylistData}