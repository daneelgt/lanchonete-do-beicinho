import "./App.css";
import "bootswatch/dist/litera/bootstrap.css";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./contexts/components/Cart.jsx";
import ProductCardModal from "./components/QuantityModal.jsx";
import ModalComponent from "./components/Modal.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Cards />
        <Cart />
        <ProductCardModal />
        <ModalComponent />
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
