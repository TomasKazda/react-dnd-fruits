import {useState} from 'react'
import {ItemTypes} from "./Fruit"
import { useDrop } from 'react-dnd'
import Fruit from './Fruit'

export const Basket = () => {
    const [apples, setAppleCount] = useState(0);
    const [pears, setPearCount] = useState(0);
    const [{isOver}, drop] = useDrop(
        () => ({
            accept: [ItemTypes.APPLE, ItemTypes.PEAR],
            drop: (item, monitor) => {console.log(item); 
                if (ItemTypes.APPLE === item.type) setAppleCount(prev => prev + item.value);
                if (ItemTypes.PEAR === item.type) setPearCount(prev => prev + item.value);}, 
            collect: monitor => ({
                isOver: !!monitor.isOver(),
            })
        })
    );
    return (       
        <div ref={drop} className={"basket " + (isOver ? "over" : "")}>
          <Fruit type={ItemTypes.APPLE} value={apples} />
          <Fruit type={ItemTypes.PEAR} value={pears} />
        </div>
    );
}

export default Basket;