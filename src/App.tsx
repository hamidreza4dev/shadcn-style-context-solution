import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  return (
    <div>
      <Accordion type="multiple" variant="default">
        <AccordionItem value="1">
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, asperiores.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, asperiores.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="multiple" variant="secondary">
        <AccordionItem value="1">
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, asperiores.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, asperiores.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
