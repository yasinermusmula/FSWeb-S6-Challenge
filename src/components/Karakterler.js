import { useState } from "react";
import Karakter from "./Karakter";
import {
  Accordion,
} from "reactstrap";

const Karakterler = (props) => {
  const { data } = props;

  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle }>
        Karakterler
        {data.map((item, index) => (
          <Karakter item={item} key={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default Karakterler;
