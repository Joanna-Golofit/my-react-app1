//rfce
import React from "react";
import Item from "../item/Item";


function Items({ items }) {
  return (
    <ul>
      {items.length > 0 && 
      items.map(({ id, imgUrl, name, isNew }) => (
        <Item id={id} key={id} imgUrl={imgUrl} name={name} isNew={isNew} />
      ))}
    </ul>
  );
}

// function Items(props) {
//   return (
//     <ul>
//       <li>coś2 i ...{props.name}</li>
//       <img src={props.imgUrl} alt={props.name} width="140" />
//     </ul>
//   );
// }

export default Items;
