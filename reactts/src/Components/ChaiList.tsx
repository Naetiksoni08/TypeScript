import type { Chai } from "../Types";
import { ChaiCard } from "./ChaiCard";

interface ChaiListProps {
    item: Chai[];
}

export function ChaiList({ item }: ChaiListProps) {
    return (
        <div>
            {item.map((Chai) => (
                <ChaiCard
                    key={Chai.id}
                    name={Chai.name}
                    price={Chai.price}
                    isSpecial={Chai.price > 30} />
            ))}
        </div>
    )
}