var playlist = new Object ({artistName: 'song'})

function updatePlaylist (playList, artistName, songTitle) {
  playList[artistName] = songTitle
  return playList
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}