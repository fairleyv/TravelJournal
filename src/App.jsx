import './App.css';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import cardData from "../src/data";

function App() {
  let cards = cardData.map(card => {
    return (
      <Card 
          key={card.id}
          {...card}
      /> )   
    }
  )

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
