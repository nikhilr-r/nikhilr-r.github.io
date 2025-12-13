import NeuralBackground from "./components/3d/NeuralBackground";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      {/* Background Layer */}
      <NeuralBackground />
      
      {/* Content Layer */}
      <Home />
    </>
  );
}