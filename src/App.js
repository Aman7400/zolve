import Navbar from "./components/Navbar/Navbar";
import GivingDream from "./sections/GivingDream/GivingDream";
import Hero from "./sections/Hero/Hero";
import StayUpdate from "./sections/StayUpdated/StayUpdate";
import Tailor from "./sections/Tailor/Tailor";

function App() {
  return (
    <p>
      {/* Navbar */}
      <Navbar />
      {/* Need Help Button */}
      {/* Hero */}
      <Hero />
      {/* Stay Update */}
      <StayUpdate />
      {/* Tailor */}
      <Tailor />
      {/* Giving Your Dream */}
      <GivingDream />
    </p>
  );
}

export default App;
