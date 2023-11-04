import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

import componentsImg from "./assets/components.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The Core UI building block"
              image={componentsImg}
            />
            <CoreConcepts title="Core Concepts" description="" />
            <CoreConcepts title="Core Concepts" description="" />
            <CoreConcepts title="Core Concepts" description="" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
