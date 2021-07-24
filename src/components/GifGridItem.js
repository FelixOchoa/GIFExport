import React from "react";

export const GifGridItem = (img) => {
  return (
    <div className="card animate__animated animate__fadeInTopRight shadow-md">
      <img src={img.url} alt={img.title} />
      <p className="">{img.title}</p>
    </div>
  );
};
