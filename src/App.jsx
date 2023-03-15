import Header from "./components/Header";
import Form from "./components/Form";
import PatienrsList from "./components/PatienrsList";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PatienrsList />
      </div>
    </div>
  );
}

export default App;
