import React from "react";
import search from "../../images/search.svg";
const Input = ({
  onChangeInput,
}: {
  onChangeInput:(event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="input-item">
      <img src={search} alt="search" className="input-icon" />
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onChange={onChangeInput}
      />
    </div>
  );
};

export default Input;
