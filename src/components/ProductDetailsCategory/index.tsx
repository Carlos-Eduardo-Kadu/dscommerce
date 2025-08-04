import "./style.css"

type Props = {
    name : string;
}
export default function ProductDetailsCategory({name} : Props) {
    return (
        <div className="dsc-category">
            {name}
        </div>
    );
}