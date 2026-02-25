interface ChaiCardProps{
    name:string;
    price:number;
    isSpecial?:boolean;
}


export const ChaiCard = ({ name, price, isSpecial = false }:ChaiCardProps) => {
    return (
        <div>
            <h2>{name}{isSpecial && <span>⭐</span>}</h2>
            <p>{price}</p>
        </div>
    );
}
