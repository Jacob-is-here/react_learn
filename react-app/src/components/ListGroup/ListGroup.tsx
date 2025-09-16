import { MouseEvent, useState } from "react";
import styles from "./ListGroup.css";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  // (items:string)=> void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group" style={{background: 'yellow'}}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item activate"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
