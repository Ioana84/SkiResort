import React, { ReactElement} from 'react';


export default function VideoElement(): ReactElement {
    
    return (
        <video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm"/>

    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4"/>

    Download the
    <a href="/media/cc0-videos/flower.webm">WEBM</a>
    or
    <a href="/media/cc0-videos/flower.mp4">MP4</a>
    video.
    </video>
    );
}