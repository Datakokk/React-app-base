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

          <ProductCard 
            product={ product }
            className="bg-dark text-white"
            >
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title title={'New Product'} className='text-bold'/>
            <ProductCard.Buttons className="custom-buttons"/>
          </ProductCard>
          
          <ProductCard 
            product={ product }
            className='bg-dark text-white'
            >
            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.9)' }}/>
            <ProductTitle className='text-bold'/>
            <ProductButtons className='custom-buttons'/>
          </ProductCard>
          
          <ProductCard 
            product={ product }
            style={{
              backgroundColor: '#70D1F8'
            }}
          >
            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.9)' }}/>
            <ProductTitle style={{fontStyle: 'italic'}}/>
            <ProductButtons style={{
              display: 'flex',
              justifyContent: 'end'
            }}/>
          </ProductCard>
          
        </div>
    </div>
  )
}

