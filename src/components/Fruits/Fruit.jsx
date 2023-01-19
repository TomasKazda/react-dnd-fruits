import { useDrag } from 'react-dnd'
import { useState, useEffect } from 'react';

export const ItemTypes = {APPLE: "apple", PEAR: "pear"}

export const Fruit = ({type = ItemTypes.APPLE, value = 1}) => {
    const [cnt, setCnt] = useState(value);
    useEffect(() => {
        setCnt(value)
    }, [value]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type,
        item: {type, value: cnt},
        end: (item, monitor) => {console.log(item, monitor)},
        collect: (monitor) => {
            return { isDragging: monitor.isDragging() }
        }
    }))
    
    let symbol = "🍹";
    switch (type) {
        case ItemTypes.APPLE:
            symbol = "🍎"
            break;
        case ItemTypes.PEAR:
            symbol = "🍐"
            break;
        default:
            break;
    }

    return <span className={"fruit " + type} data-cnt={cnt} ref={drag}>{isDragging ? "😱" : symbol}</span>
}

export default Fruit;