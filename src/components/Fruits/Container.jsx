import App from "../../App";
import Basket from "./Basket"
import Fruit from "./Fruit";
import {ItemTypes} from "./Fruit"

export const Container = () => {
    return (
        <div className="fruits">
            <Basket />
            <Fruit />
            <Fruit type={ItemTypes.APPLE} value={5} />
            <Fruit type={ItemTypes.PEAR} />
            <Fruit type={ItemTypes.PEAR} value={5} />
        </div>
    );
}

export default Container;