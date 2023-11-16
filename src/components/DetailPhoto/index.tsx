import React from "react";
import { PhotoType } from "../../core/types";

const DetailPhoto = ({ id, title, thumbnailUrl }: PhotoType) => {
  return (
    <div className="detail-photo">
      <h1>Detail Page</h1>
      <h2>id: {id}</h2>
      <img src={thumbnailUrl} alt="photo" className="detail-photo__img" />
      <p>{title}</p>
    </div>
  );
};

export default DetailPhoto;
