import React from "react";
import LibrarySong from "./LibrarySongs";

const Library = ({
  libraryStatus,
  setSongs,
  isPlaying,
  audioRef,
  songs,
  setCurrentSong,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Koleksi Lagu</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
