import Navbar from "./components/Navbar/Navbar";
import Account from "./sections/Account/Account";
import GivingDream from "./sections/GivingDream/GivingDream";
import Hero from "./sections/Hero/Hero";
import Rewards from "./sections/Rewards/Rewards";
import StayUpdate from "./sections/StayUpdated/StayUpdate";
import Tailor from "./sections/Tailor/Tailor";

function App() {
  return (
    <>
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
      {/* Rewards */}
      <Rewards />
    </>
  );
}

export default App;
