
async function fetchLyrics() {
    try {
        const response = await fetch(
        "https://api.lyrics.ovh/v1/artist/title");
        // 
    const data = await response.json(); // Convert response to JSON
    console.log(data.lyrics); // Display user data
    } catch (error) {
      console.error("Error: Type another song title"); // Handle errors
    }
    }

    fetchLyrics("Kenny Rogers", "The Gambler");
