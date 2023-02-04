
import { useState } from "react";
import Footer from "./CompoundComponents/Footer";
import Navbar from "./CompoundComponents/Navbar";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <div>
      <Navbar />
     
      <Footer />
    </div>
  );
}
export default App;