import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
