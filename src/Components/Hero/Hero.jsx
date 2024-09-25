
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/nCTHSKN/360-F-561319125-Flb-ZDuk6mdy-Aoyp-T139c-SRKYom-H9-D4-PY.jpg')" }}>
      <div className="container mx-auto flex items-center justify-center h-full px-5">
        <div className="relative text-center text-purple-300 max-w-lg p-5">
          <h1 className="text-5xl font-bold mb-6 md:text-6xl lg:text-7xl">Welcome to Our Website</h1>
          <p className="text-2xl mb-6 md:text-3xl">We provide the best solutions tailored to meet your business needs, from innovative products to customer-focused services.</p>
          <p className="text-xl mb-6 md:text-2xl">Join us in exploring new opportunities and achieving success together.</p>
          <a href="#services" className="inline-block bg-purple-700 text-white text-lg md:text-xl py-2 px-6 rounded hover:bg-purple-600 transition duration-300">Explore Services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
