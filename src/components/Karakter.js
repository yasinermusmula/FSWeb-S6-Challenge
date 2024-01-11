// Karakter bileşeniniz buraya gelecek
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
const Karakter = (props) => {
  const { item } = props;

  return (
    <AccordionItem>
      <AccordionHeader targetId={item.name}>{item.name}</AccordionHeader>
      <AccordionBody accordionId={item.name}>
        <p>
          <strong>height: {item.height}</strong>
        </p>
        <p>
          <strong>Mass: {item.mass}</strong>
        </p>
        <p>
          <strong>Hair Color: {item.hair_color}</strong>
        </p>
        <p>
          <strong>Skin Color: {item.skin_color}</strong>
        </p>
        <p>
          <strong>Eye Color: {item.eye_color}</strong>
        </p>
        <p>
          <strong>Birthyear: {item.birth_year}</strong>
        </p>
        <p>
          <strong>Gender: {item.gender}</strong>
        </p>
      </AccordionBody>
    </AccordionItem>
  );
};

export default Karakter;
