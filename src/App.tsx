import { Grid } from "./componentes/grid";
import { Flex } from "./componentes/flex";

function App() {
  return (
    <>
      <h1 className="bg-blue-600 text-white py-4 my-5 text-center text-3xl font-bold">
        Mi aplicacion con Tailwind!
      </h1>

      <main className="max-w-5xl mx-auto px-4 space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-center">Grid</h2>
          <Grid />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-center">Flex</h2>
          <Flex />
        </section>
      </main>
    </>
  );
}

export default App;