import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { onChangeArgs, Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css';
import { useState } from 'react';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
};

const products: Product[] = [ product1, product2 ];

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {

const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

const onProductCountChange = ({ count, product}: onChangeArgs) => {
  // console.log(count, product);

  setShoppingCart( oldShoppingCart => {
    if( !count ){
      // delete oldShoppingCart[product.id];
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      // return { ...oldShoppingCart }
      return rest;
    }
    return {
      ...oldShoppingCart,
      [ product.id ] : { ...product, count }
    }
  })
}

  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {
            products.map( product => (
              <ProductCard 
                key={ product.id}
                product={ product  }
                className='bg-dark text-white'
                onChange={ onProductCountChange }
                >
                <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.9)' }}/>
                <ProductTitle className='text-bold'/>
                <ProductButtons className='custom-buttons'/>
              </ProductCard>
            ))
          }
        </div>

        <div className="shopping-card">
          {
           Object.entries( shoppingCart ).map( ([key, product]) => (
              <ProductCard 
                key={key}
                product={ product }
                className='bg-dark text-white'
                style={{ width: '100px'}}
                value={ product.count }
                >
                <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.9)' }}/>
                <ProductTitle className='text-ligth'/>
                <ProductButtons 
                  className='custom-buttons'
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                  />
              </ProductCard>
            ))
          }
        </div>

        <div>
          <code>
            {JSON.stringify( shoppingCart, null, 5 )}
          </code>
        </div>
    </div>
  )
}

