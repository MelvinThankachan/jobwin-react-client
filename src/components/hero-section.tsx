import AuthModal from "./auth-modal";

const HeroSection = () => {
  return (
    <section className="bg-base-300">
      <div className="container mx-auto h-dvh flex justify-center items-center">
        <AuthModal />
      </div>
    </section>
  );
};

export default HeroSection;
