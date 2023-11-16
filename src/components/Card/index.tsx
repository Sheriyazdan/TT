import React from "react";
import { Link } from "react-router-dom";
import { PhotoType } from "../../core/types";

const Photo = ({ id, title, thumbnailUrl }: PhotoType) => {
  return (
    <Link to={`/detail/${id}`} className="photo-block" key={id}>
      <img className="photo-block__img" src={thumbnailUrl} alt="" />
      <p className="photo-block__title">{title}</p>
    </Link>
  );
};

export default Photo;
