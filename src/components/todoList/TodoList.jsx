//rfce
import React from 'react'
import Button from '../button/Button';
import Items from '../items/Items'
import PropTypes from "prop-types";

function TodoList({ items }) {
  return (
    <div>
      Things to do:
      <Items items={items} />
      <Button text={"Clear Completed"} />
      <div>{items.length || 0} things left</div>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  // items: PropTypes.arrayOf(PropTypes.object = {
  //   items: Prototypes.shape({
  //     name: Prototypes.string,
  //   id: propTypes.number})
  // }),
  // text nie dziala bo go nie przekazuje jako argument?
  text: PropTypes.number,
};

export default TodoList
