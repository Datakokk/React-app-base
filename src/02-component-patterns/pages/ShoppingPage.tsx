import { ProductCard } from "../components/ProductCard"

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

          <ProductCard product={ product }/>
          
        </div>
    </div>
  )
}
