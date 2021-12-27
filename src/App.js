import Navbar from "./components/Navbar/Navbar";
import Account from "./sections/Account/Account";
import Brands from "./sections/Brands/Brands";
import GivingDream from "./sections/GivingDream/GivingDream";
import Hero from "./sections/Hero/Hero";
import Money from "./sections/Money/Money";
import Rewards from "./sections/Rewards/Rewards";
import StayUpdate from "./sections/StayUpdated/StayUpdate";
import Tailor from "./sections/Tailor/Tailor";
import Testimonial from "./sections/Testimonials/Testimonial";

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
      {/* Brands  */}
      <Brands />
      {/* Testimonial */}
      <Testimonial />
      {/* Money at Fingertips */}
      <Money />
    </>
  );
}

export default App;
