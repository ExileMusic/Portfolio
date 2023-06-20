import {getApiKeyAndRun,getArtistData} from "./spotify.js";

import {getPlaylistData} from "./youtube.js";
let streamingTrackNames=[];            
function displayStreamingTracks(){
                        const songs = JSON.parse(getArtistData(getApiKeyAndRun()))["items"];
                        const youtubeSongs = JSON.parse(getPlaylistData())["items"];
                        console.log(youtubeSongs)
                        let songCount = songs.length;
                        let wrapper = document.querySelector("#wrapper")
                        //load song data per song
                        let template = document.getElementById("song-spotlight");
                        for(let i = 0 ; i <songCount;i++){
                            let clone = template.content.cloneNode(true);
                            let songName = songs[i]["name"];
                            if(streamingTrackNames.includes(songName)){
                                return;
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
                             let songData = fetch("./songdata.json").then(response => 
                         response.json().then((data) => {
                            let genres="";
                             for (let i = 0; i < data[songName]["genres"].length; i++) {
                                let element = data[songName]["genres"][i];
                                console.log(element)
                             
                             
                                genres+=element+", ";
                             }
                             genres=genres.slice(0,-2);
                             genre.textContent = "Genres: "+genres;
                             wrapper.appendChild(clone);
                             console.log(songs)
                             streamingTrackNames.push(songName);
                         }).then())
                            
                           
                        }
                    }
				function displaySocialTracks(){

                }
				
				//"images/"+songName+"-cover.png"


displayStreamingTracks();