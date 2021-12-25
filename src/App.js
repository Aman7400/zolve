import Navbar from "./components/Navbar/Navbar";
import Account from "./sections/Account/Account";
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
      {/* Account */}
      <Account />
    </p>
  );
}

export default App;
