import { useEffect, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArg {
    product: Product;
    onChange?: ( arg: onChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value=0 }: useProductArg ) => {
  
    const [counter, setCounter] = useState( value);

    const increaseBy = ( value: number ) => {
        
        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue)

        onChange && onChange({ count: newValue, product});
    }

    useEffect(() => {
      setCounter( value )
    }, [value])
    
    return {
        counter,

        increaseBy
    }
};
