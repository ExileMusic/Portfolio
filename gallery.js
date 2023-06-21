import {getApiKeyAndRun,getArtistData} from "./spotify.js";

import {getPlaylistData,getPlayList} from "./youtube.js";
let streamingTrackNames=[];            
 function displayStreamingTracks(){
     streamingTrackNames=[];  
                        const songs = JSON.parse(getArtistData(getApiKeyAndRun()))["items"];
                        const youtubeSongs = JSON.parse(getPlaylistData())["items"];
                        let songCount = songs.length;
                        
                        let wrapper = document.querySelector("#wrapper")
                        //load song data per song
                        let template = document.getElementById("song-spotlight");
                        for(let i = 0 ; i <songCount;i++){
                            let clone = template.content.cloneNode(true);
                            let songName = songs[i]["name"];
                            if(streamingTrackNames.includes(songName.toLowerCase())){
                                console.log("Already added")
                                continue;
                            }
                            let artistsElement = clone.getElementById("artists"); 
                            let artists = songs[i]["artists"]
                            let releaseDate = clone.getElementById("release-date");
                            let genre = clone.getElementById("genre");
                            let audio = clone.getElementById("sound-file");
                            let image = clone.getElementById("song-image");
                            let name = clone.getElementById("song-name");
                            let type =songs[i]["album_type"];
                            let albumType = clone.getElementById("album-type");
                            let spotifyIcon = clone.getElementById("spotify-link");
                            let soundcloudIcon = clone.getElementById("soundcloud-link");
                            let youtubeIcon = clone.getElementById("youtube-link");
                            let spotifyLink = songs[i]["external_urls"]["spotify"];
                            let youtubeLink = ""
                           for (let i = 0; i < youtubeSongs.length; i++) {
                             if(youtubeSongs[i]["snippet"]["title"].toLowerCase().includes(songName.toLowerCase())){
                                youtubeLink="https://www.youtube.com/watch?v="+youtubeSongs[i]["snippet"]["resourceId"]["videoId"]
                             }
                           }
                            let soundcloudLink ="http://soundcloud.com/exile_m/"+songName;
                            name.textContent = songName;
                            image.setAttribute("src",songs[i]["images"][0]["url"]);
                            spotifyIcon.setAttribute("href",spotifyLink);
                            soundcloudIcon.setAttribute("href",soundcloudLink.replaceAll(" ","-"));
                            youtubeIcon.setAttribute("href",youtubeLink);
                            audio.setAttribute("src","Music/"+songName.toLowerCase()+".wav");
                            albumType.textContent = type;
                            let text =""
                            for(let i = 0;i<artists.length;i++){
                                text+= artists[i]["name"]+ ","
                            }
                            artistsElement.textContent = "Artists: "+artists[0]["name"];
                            let date = new Date(songs[i]["release_date"]);
                            date = date.toDateString().split(" ");
                            releaseDate.textContent = "Release date: "+ date[1]+" "+ date[2]+" "+ date[3];
                             
                            let genres=JSON.parse(getPlayList(youtubeSongs[i]["snippet"]["playlistId"]))["items"][0]["snippet"]["title"]
                             
                             genre.textContent = "Genres: "+genres;
                             wrapper.appendChild(clone);
                             streamingTrackNames.push(songName.toLowerCase());
                             
                             
                        
                         
                        
                        }
                        
                        
                        return new Promise((res)=>{
                            setTimeout(()=>{
                            res();} , 500);});
                    }
async function displaySocialTracks(){

                        const songs = JSON.parse(getPlaylistData())["items"];
                        
                        let songCount = songs.length;
                        console.log(songs.length)
                        let wrapper = document.querySelector("#wrapper")
                        //load song data per song
                        let template = document.getElementById("song-spotlight");
                        for(let i = 0 ; i <songCount;i++){
                            let clone = template.content.cloneNode(true);
                            let songName = songs[i]["snippet"]["title"].split("|")[1].trim();
                            console.log(JSON.parse(getPlayList(songs[i]["snippet"]["playlistId"])))
                            if(streamingTrackNames.includes(songName.toLowerCase())){
                                console.log("Already added")
                                console.log(songs[i])
                                continue;
                            }
                            let artistsElement = clone.getElementById("artists"); 
                            //let artists = songs[i]["artists"]
                            let releaseDate = clone.getElementById("release-date");
                            let genre = clone.getElementById("genre");
                            let audio = clone.getElementById("sound-file");
                            let image = clone.getElementById("song-image");
                            let name = clone.getElementById("song-name");
                            //let type =songs[i]["album_type"];
                           // let albumType = clone.getElementById("album-type");
                            let soundcloudIcon = clone.getElementById("soundcloud-link");
                            let deezerIcon = clone.getElementById("deezer-link");
                            let appleIcon = clone.getElementById("apple-link");
                            let spotifyIcon = clone.getElementById("spotify-link");
                            let youtubeIcon = clone.getElementById("youtube-link");
                            let youtubeLink = ""
                           for (let i = 0; i < songCount; i++) {
                             if(songs[i]["snippet"]["title"].toLowerCase().includes(songName.toLowerCase())){
                                youtubeLink="https://www.youtube.com/watch?v="+songs[i]["snippet"]["resourceId"]["videoId"]
                             }
                           }
                            let soundcloudLink ="http://soundcloud.com/exile_m/"+songName;
                            name.textContent = songName;
                            console.log(songs[i])
                            image.setAttribute("src",songs[i]["snippet"]["thumbnails"]["high"]["url"]);
                            spotifyIcon.remove();
                            deezerIcon.remove();
                            appleIcon.remove();
                            soundcloudIcon.setAttribute("href",soundcloudLink.replaceAll(" ","-"));
                            youtubeIcon.setAttribute("href",youtubeLink);
                            audio.setAttribute("src","Music/"+songName.toLowerCase()+".wav");
                            //albumType.textContent = type;
                            // let text =""
                            // for(let i = 0;i<artists.length;i++){
                            //     text+= artists[i]["name"]+ ","
                            // }
                            artistsElement.textContent = "Artists: "+"Exile";
                           let date = new Date(songs[i]["snippet"]["publishedAt"].split("T")[0]);
                            date = date.toDateString().split(" ");
                            releaseDate.textContent = "Release date: "+ date[1]+" "+ date[2]+" "+ date[3];
                             
                            let genres=JSON.parse(getPlayList(songs[i]["snippet"]["playlistId"]))["items"][0]["snippet"]["title"]
                             genre.textContent = "Genres: "+genres;
                             image.setAttribute("style","width: 100%px;overflow:hidden;aspect-ratio: 1 / 1;")
                             wrapper.appendChild(clone);
                             streamingTrackNames.push(songName.toLowerCase());
                         
                            
                           
                        }
                        setTimeout(setAudio,100)
}
				
				//"images/"+songName+"-cover.png"



                await displayStreamingTracks()



 displaySocialTracks()
 console.log(streamingTrackNames)

function setAudio(){
    let arr = document.querySelectorAll("audio");
                        arr.forEach(element => {
                            element.volume = 0.3;
                        });
}