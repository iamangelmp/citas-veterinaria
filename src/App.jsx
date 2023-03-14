import Header from "./components/Header";
import Form from "./components/Form";
import PatienrsList from "./components/PatienrsList";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <h1>Hola mundo</h1>
      <Form />
      <PatienrsList />
    </div>
  );
}

export default App;
