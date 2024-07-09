import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton} from './styles'

function Home() {
  const inputRef = useRef()
  const [products, setProducts] = useState([])

  function insertItem() {
    setProducts([{ id: v4(), name: inputRef.current.value }, ...products])
  }

  function deleteItem(id) {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <Container>
      <h1>Shopping List</h1>
      <input placeholder="produto..." type="text" ref={ inputRef }/>
      <AddButton onClick={ insertItem }>Adicionar Item</AddButton>

      {products.map((product) => (
        <Product key={product.id}>
          <p>{ product.name }</p>
          <TrashButton onClick={ () => deleteItem(product.id) }>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  )
}

export default Home