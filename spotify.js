let token;
function getApiKeyAndRun(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "https://accounts.spotify.com/api/token", false ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xmlHttp.send( "grant_type=client_credentials&client_id=ab6a8f0632454087980ca63507940ef9&client_secret=788fdea65d3842658a1d37565a328af3");
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}
function getArtistData(access_token){
     token = JSON.parse( access_token)["access_token"];
    console.log(access_token[0]);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.spotify.com/v1/artists/0LjcLn4U7ZBWHliLkrQBJz?", false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization","Bearer  "+token);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}


console.log(getArtistData(getApiKeyAndRun()));