import "../App.css"
import ProductCard from "./ProductCard.jsx";

function Cards() {

   const lanches = [
  {
    id: 1,
    name: "X-Burger",
    description: "Hambúrguer clássico com queijo, alface, tomate e molho especial",
    price: "25,90",
    image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Burger"
  },
  {
    id: 2,
    name: "X-Bacon",
    description: "Hambúrguer com queijo, bacon crocante, alface, tomate e maionese",
    price: "R$ 28,90",
    image: "https://via.placeholder.com/300x200?text=X-Bacon"
  },
  {
    id: 3,
    name: "X-Egg",
    description: "Hambúrguer com queijo, ovo frito, alface, tomate e maionese",
    price: "R$ 26,90",
    image: "https://via.placeholder.com/300x200?text=X-Egg"
  },
  {
    id: 4,
    name: "X-Tudo",
    description: "Hambúrguer com queijo, bacon, ovo, presunto, calabresa, alface, tomate e maionese",
    price: "R$ 32,90",
    image: "https://via.placeholder.com/300x200?text=X-Tudo"
  },
  {
    id: 5,
    name: "X-Salada",
    description: "Hambúrguer com queijo, alface, tomate, pepino e molho especial",
    price: "R$ 24,90",
    image: "https://via.placeholder.com/300x200?text=X-Salada"
  },
  {
    id: 6,
    name: "X-Frango",
    description: "Filé de frango empanado com queijo, alface, tomate e maionese",
    price: "R$ 27,90",
    image: "https://via.placeholder.com/300x200?text=X-Frango"
  }
];

  
  const bebidas = [
    // seus dados de bebidas aqui
  ];
    return(
        <div className="container mt-5 p-4">
            <ul className="nav nav-tabs" role="tablist">
                <li className="">
                    <button 
                        className="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#lanches"
                        type="button"
                    >
                        Lanches
                    </button>
                </li>
                <li className="">
                    <button 
                        className="nav-link " 
                        data-bs-toggle="tab" 
                        data-bs-target="#bebidas"
                        type="button"
                    >
                        Bebidas
                    </button>
                </li>
            </ul>
      
            <div className="tab-content bg-gray-200 p-4">
                <div className="tab-pane fade active show" id="lanches">
                    <div className=" grid grid-cols-2 gap-4">
                        {lanches.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                
                <div className="tab-pane fade " id="bebidas">
                    <div className="products-grid">
                        {bebidas.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards;