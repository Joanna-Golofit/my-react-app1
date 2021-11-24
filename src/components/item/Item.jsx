import React from 'react';
import PropTypes from "prop-types";

function Item({
  id,
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  isNew,
}) {
  return (
    <>
      <li>
        <input type="checkbox" />
        {id} - {name}
        <img src={imgUrl} alt={name}
          // width="100"
          height="50" />
        {isNew && "!NEW!"}
      </li>
    </>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
};

export default Item
