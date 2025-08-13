import "./style.css"

type Props = {
    nameButtonWhite: string;
}
export default function ButtonWhite({ nameButtonWhite }: Props) {
    return (
        <div className="dsc-btn dsc-btn-white">
            {nameButtonWhite}
        </div>
    );
}