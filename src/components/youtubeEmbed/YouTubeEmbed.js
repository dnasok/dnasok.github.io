import React from "react";
import "./YouTubeEmbed.scss";

export default function YouTubeEmbed({youtubeId, label}) {
  return (
    <div className="youtube-embed-wrapper">
      {label && <p className="youtube-embed-label">{label}</p>}
      <div className="youtube-embed-container">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={label || "YouTube video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
