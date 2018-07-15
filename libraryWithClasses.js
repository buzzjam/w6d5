class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist)
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track)
  }

  getOverallRating() {
    let sum = this.tracks.reduce((a, e) => {
      return a + e.rating;
    }, 0)
    return sum / this.tracks.length
  }

  getTotalDuration() {
    return this.tracks.reduce((a, e) => {
      return a + e.length;
    }, 0)
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const myLibrary = new Library("test", "Frank")
const myPlaylist = new Playlist("my first playlist");
const myTrack = new Track("Views", 5, 3);
const myTrack2 = new Track("Rap God", 5, 6);
const myTrack3 = new Track("West End Girls", 5, 4);

myLibrary.addPlaylist(myPlaylist);
myPlaylist.addTrack(myTrack);
myPlaylist.addTrack(myTrack2);
myPlaylist.addTrack(myTrack3);