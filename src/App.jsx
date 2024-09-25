import Card from "./Components/Card/Card";
import Filter from "./Components/Filter/Filter";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <Filter/>
    </div>
  )
}
