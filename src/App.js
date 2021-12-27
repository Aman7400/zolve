import Navbar from "./components/Navbar/Navbar";
import Account from "./sections/Account/Account";
import Brands from "./sections/Brands/Brands";
import GivingDream from "./sections/GivingDream/GivingDream";
import Harness from "./sections/Harness/Harness";
import Hero from "./sections/Hero/Hero";
import Investors from "./sections/Investors/Investors";
import Money from "./sections/Money/Money";
import Rewards from "./sections/Rewards/Rewards";
import SafeNSecure from "./sections/SafeNSecure/SafeNSecure";
import StayUpdate from "./sections/StayUpdated/StayUpdate";
import Tailor from "./sections/Tailor/Tailor";
import Testimonial from "./sections/Testimonials/Testimonial";
import WhatsNew from "./sections/WhatsNew/WhatsNew";

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
      {/* Safe n Secure */}
      <SafeNSecure />
      {/* Investors */}
      <Investors />
      {/* Harness */}
      <Harness />
      {/* FAQs */}
      {/* What's New */}
      <WhatsNew />
    </>
  );
}

export default App;
