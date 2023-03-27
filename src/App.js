import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    return (
        <>
        <h1>Video </h1>
        <ReactPlayer
        //url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        url="https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8"
        muted={true}
        width="50%"
        height="50%"
        controls />
        </>
    )
}

export default Player;