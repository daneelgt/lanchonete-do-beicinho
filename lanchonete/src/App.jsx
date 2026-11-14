import "./App.css";
import "bootswatch/dist/litera/bootstrap.css";
import Header from "./components/common/Header.jsx";
import Cards from "./components/common/Cards.jsx";
import { CartProvider } from "./app/shopping-cart/components/CartContext.jsx";
import Cart from "./app/shopping-cart/Cart.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Cards />
        <Cart />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
// import './App.css'
// import 'bootswatch/dist/slate/bootstrap.min.css';
// import Header from './components/Header.jsx'
// import Cards from './components/Cards.jsx'
// // import { CartProvider } from './context/CartContext.jsx';
// function App() {

//   return (
//     <div>
//       <Header/>
//       <Cards/>
//     </div>
//   )

// }

// export default App
