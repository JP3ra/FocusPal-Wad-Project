function playVideo() {
    var videoUrl = document.getElementById("video-url").value;
    var videoId = extractVideoId(videoUrl);

    if (videoId) {
      var videoPlayer = '<iframe width="700" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
      document.getElementById("video-container").innerHTML = videoPlayer;
      document.getElementById("notes").disabled = false;
    } else {
      alert("Please enter a valid YouTube video URL");
    }
  }

  function extractVideoId(videoUrl) {
    var regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/)([^#\&\?]{11})/;
    var match = videoUrl.match(regex);
    return match ? match[1] : false;
  }

  function saveNotes() {
    // Get the notes from the text area
    var notes = document.getElementById("notes").value;
  
    // Create a new Blob object with the notes
    var blob = new Blob([notes], { type: "text/plain;charset=utf-8" });

    // Create a new anchor element
    var anchor = document.createElement("a");

    // Set the href attribute of the anchor element to the URL of the Blob object
    anchor.href = window.URL.createObjectURL(blob);

    // Set the download attribute of the anchor element to the filename of the notepad file
    anchor.download = "notepad.txt";

    // Click the anchor element to download the notepad file
    anchor.click();
  }
