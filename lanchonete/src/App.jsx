import './App.css'
import 'bootswatch/dist/slate/bootstrap.min.css';
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <CartProvider> 
      <div>
        <Header/>
        <Cards/>
        <Cart/>
      </div>
    </CartProvider>
  )
}

export default App
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