import "../App.css"
import ProductCard from "./ProductCard.jsx";

function Cards() {

    const lanches = [
        {
            id: 1,
            name: "X-Burger",
            description: "Hambúrguer clássico com queijo, alface, tomate e molho especial",
            price: 25.90,
            image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Burger"
        },
        {
            id: 2,
            name: "X-Bacon",
            description: "Hambúrguer com queijo, bacon crocante, alface, tomate e maionese",
            price: 28.90,
            image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Bacon"
        },
        {
            id: 3,
            name: "X-Egg",
            description: "Hambúrguer com queijo, ovo frito, alface, tomate e maionese",
            price: 26.90,
            image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Egg"
        },
        {
            id: 4,
            name: "X-Tudo",
            description: "Hambúrguer com queijo, bacon, ovo, presunto, calabresa, alface, tomate e maionese",
            price: 32.90,
            image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Tudo"
        },
        {
            id: 5,
            name: "X-Salada",
            description: "Hambúrguer com queijo, alface, tomate, pepino e molho especial",
            price: 24.90,
            image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Salada"
        },
        {
            id: 6,
            name: "X-Frango",
            description: "Filé de frango empanado com queijo, alface, tomate e maionese",
            price: 27.90,
            image: "https://s3-sa-east-1.amazonaws.com/loja2/df3b7d69b007dbc7111ed3a1a30dea8d.png?text=X-Frango"
        }
    ];


    const bebidas = [
        {
            id: 6,
            name: "Refrigerante Lata",
            description: "Refrigerante de cola 350ml, gelado",
            price: 5.90,
            image: "https://www.thebakers.com.br/wp-content/uploads/2019/05/coca-600x540-600x540.png?text=Refrigerante"
        },
        {
            id: 7,
            name: "Água",
            description: "Água mineral sem gás 500ml",
            price: 3.90,
            image: "https://png.pngtree.com/png-vector/20250325/ourmid/pngtree-water-bottle-png-image_15868794.png?text=Água"
        }
    ];
    return (
        <div className="container mt-5 p-4">
            <ul className="nav nav-tabs ml-2" role="tablist">
                <li className="nav-item">
                    <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#lanches"
                        type="button"
                    >
                        Lanches
                    </button>
                </li>
                <li className="nav-item">
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

            <div className="tab-content bg-gray-200 p-4 rounded-md">
                <div className="tab-pane fade active show" id="lanches">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {lanches.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className="tab-pane fade" id="bebidas">
                    <div className="grid grid-cols-2 gap-4">
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