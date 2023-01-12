import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
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

          <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title={'Hi Verden!!'}/>
            <ProductCard.Buttons />
          </ProductCard>
          
          <ProductCard 
            product={ product }
            className='bg-dark text-white'
            >
            <ProductImage className='custom-image'/>
            <ProductTitle className='text-bold'/>
            <ProductButtons className='custom-buttons'/>
          </ProductCard>
          
        </div>
    </div>
  )
}

