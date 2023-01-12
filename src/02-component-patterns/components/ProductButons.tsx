import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
    className?: string
}

export const ProductButtons = ({ className }: Props) => {

    const { counter, increaseBy } = useContext(ProductContext);

    return (
        <div className={ `${ styles.buttonsContainer } ${ className }` }>
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 )}
                > - </button>
            <div className={ styles.countLabel }> { counter }</div>
            <button
                className={ styles.buttonAdd}
                onClick={ () => increaseBy( +1 )}
                > + </button>
        </div>
    )
};