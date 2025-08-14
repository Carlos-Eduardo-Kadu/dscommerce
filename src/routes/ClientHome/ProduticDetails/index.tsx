import "./style.css"
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonWhite from "../../../components/ButtonWhite";
import * as productService from "../../../services/product-services"
import { useParams } from "react-router-dom";

export default function ProduticDetails() {

    const params = useParams();
    const product = productService.findById(Number(params.productId))

    return (
        <>
            <main>
                <section id="product-details-section" className="dsc-container">
                    {
                        product &&
                        < ProductDetailsCard product={product} />
                    }
                    <div className="dsc-btn-page-container">
                        < ButtonPrimary nameButton="Comprar" />
                        < ButtonWhite nameButtonWhite="Início" />
                    </div>
                </section>
            </main>
        </>
    );
}