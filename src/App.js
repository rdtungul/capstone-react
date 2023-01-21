import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
// importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Specials from "./pages/Specials";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Specials />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
