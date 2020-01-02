
import React, { Component } from 'react';
import './App.css';



class App extends React.Component {       

    render_sound(){
            var music = new Audio("http://curtastic.com/nightmare.mp3")

			var chime = new Audio("http://curtastic.com/gold.wav")

			var nothing = new Audio("http://touchbasicapp.com/nothing.wav")

			var allAudio = []

			allAudio.push(music)

			allAudio.push(chime)

			

			var tapped = function() {


				// Play all audio files on the first tap and stop them immediately.

				if(allAudio) {

					for(var audio of allAudio) {

						audio.play()

						audio.pause()

						audio.currentTime = 0

					}

					allAudio = null

				}

				

				// We should be able to play music delayed now (not during the tap event).

				//messagediv.innerHTML = "Music starts in 2 seconds..."

				setTimeout(function() {

					//messagediv.innerHTML = "Music playing. <button onclick='stop()'>Stop</button>"

					music.play()

				}, 2000)

				

			}

			document.body.addEventListener('touchstart', tapped, false)

			document.body.addEventListener('click', tapped, false)

			

			var stop = function() {

				music.pause()

				loop = null

				document.body.removeEventListener('touchstart', tapped, false)

				document.body.removeEventListener('click', tapped, false)

			}

			

			// Check if audio starts already unlocked by playing a blank wav.

			nothing.play().then(function() {

				//lockeddiv.innerHTML = "Audio started unlocked!"

			}).catch(function(){

				//lockeddiv.innerHTML = "Audio started locked :("

			})

			

			var loop = function() {

				// Try to play chimes whenever we want (not during user action).

				if(Math.random() < .01) {

					chime.play().then(function(){

					//	lockeddiv.innerHTML = "Audio is now unlocked!"

					})

				}

				setTimeout(loop, 16)

			}

            loop()
        }

            render(){
                return (
                  <div className="App">
                    <div className="title">Sound Effect Test</div>
                    
                    <div id = "img_id" className = "img_class"></div>
                    <div className = "cards_footer">
                      <button  className="start_button" onClick={() => this.render_sound()}>START</button>
                    </div>
                  </div>
                );
              };
    };
export default App;
