import { createContext, ReactElement } from "react";

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string 
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className }: Props) => {

   const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}
    >
        <div className={ `${ styles.productCard } ${ className }` }>
            { children }
        </div>   
    </Provider>
  )
}