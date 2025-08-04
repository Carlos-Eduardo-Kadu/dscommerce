import "./style.css"
import HeaderClient from "./../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonWhite from "../../components/ButtonWhite";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Está TV é muito útil!",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    price: 2500.99,
    category: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        }
    ]
}

export default function ProduticDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    < ProductDetailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        < ButtonPrimary />
                        < ButtonWhite />
                    </div>
                </section>
            </main>
        </>
    );
}