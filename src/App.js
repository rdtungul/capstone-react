import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
// importing components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Specials from "./pages/Specials";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Nav />
            <Specials />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
