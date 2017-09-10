const artistsAndSongs = {
  'Prince': ["Purple Rain", "When Doves Cry"],
  'The Beatles': ["Revolution", "Norwegian Wood"],
  'Joni Mitchell': ["A Case of You", "Sunny Sunday"],
  'Justin Bieber': ["Baby"]
}

artistsAndSongs['Daft Punk'] = ["Harder, Better, Faster, Stronger"]

delete artistsAndSongs["Justin Bieber"];
artistsAndSongs['Daft Punk'].push("Around the World");
console.log(artistsAndSongs);
