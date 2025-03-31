function playSelectedAudio() {
    index = Math.floor(Math.random() * (3)) + 1;
    console.log(index);
    const audio = document.getElementById(index.toString());
  
    audio.play();
  
    // When the audio ends, send a message to background.js
    audio.addEventListener('ended', () => {
      chrome.runtime.sendMessage('audioFinished');
    });
  
  }
  
  // Call playSelectedAudio when the script is loaded
  playSelectedAudio();
  


  const button = document.getElementById("toggle-overlay");

  button.addEventListener('click', () => {
      // Close the offscreen document, passing a callback
      chrome.offscreen.closeDocument(() => {
          console.log("Offscreen document closed successfully.");
      });
      
      // Log a message
      console.log("Button clicked, closing offscreen document.");
  });
  