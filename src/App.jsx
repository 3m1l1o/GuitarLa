import { useState } from "react";
import { Guitar } from "./components/Guitar.jsx";
import { Header } from "./components/Header";
import { db } from "./data/db.js";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) =>{guitar.id === item.id});
    if(itemExist >= 0) { //existe en el carrito
      const updatedCard = [...cart];
      updatedCard[itemExist].quantity++
      setCart(updatedCard);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  return (
    <>
      <Header 
      cart={cart}/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                guitar={guitar}
                key={guitar.id}
                addToCart={addToCart}
                setCart={setCart}
              />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
