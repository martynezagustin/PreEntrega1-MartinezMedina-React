import React, { useEffect, useState } from 'react';
import '../../style.css';
import NavBar from '../../components/NavBar';
import ItemListContainer from '../../components/ItemListContainer';
import Counter from '../../components/Counter';
import Card from '../../components/Card';
import { useFetch } from '../../../hooks/useFetch';
import { API_URLS } from '../../constants/index';
import { useNavigate } from 'react-router-dom';

function Home() {
  /* eslint-disable react/prop-types */
  const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState(false)
  const [productDetail, setProductDetail] = useState(null)
  const [productFiltered, setProductFiltered] = useState([])
  const [cart, setCart] = useState([])
  const { data: products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config)

  const onShowDetails = (id) => {
    navigate(`/products/${id}`)
  }

  const onFilter = (name) => {
    const productByCategory = products.filter((product) => product.category === name)
    setProductFiltered(productByCategory)
  }

  const onAddToCart = (id) => {
    const item = products.find((product) => product.id === id);
    if(cart?.find((product) => product.id === id)?.quantity === Number(item.stock)) return;
    if(cart?.length === 0){
        setCart([{...item, quantity: 1}])
    }
    if(cart?.length > 0 && !cart?.find((product) => product.id === id)){
        setCart([...cart, {...item, quantity: 1}])
    }
    if(cart?.length > 0 && cart?.find((product) => product.id === id)) {
        setCart((currentCart) => {
            return currentCart.map((product) => {
                if(product.id === id) {
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
        });
    }
  }

  return (
    <div>
      <>
        <ItemListContainer greeting="Tienda de Beats" />
        <p>Beats de Trap, Drill, Rkt.</p>
        <div className="inputContainer">
          <input type="text" placeholder='busca un producto' />
        </div>
        <div className="cardDivFather">
          {
            products.map((product) => {
              return (
                <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
              )
            }
            )
          }
        </div>
      </>
    </div>
  );
}


export default Home;