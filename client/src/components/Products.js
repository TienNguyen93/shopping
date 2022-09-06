import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const Products = ({ products }) => {
  const style = {
    product: {
      // verticalAlign: 'top',
      textAlign: 'left',
      overFlow: 'hidden',
      minHeight: '100%',
      display: 'inline-block',
      whiteSpace: 'normal',
      letterSpacing: 'normal',
      listStyleType: 'none'

    },
    image: {
      maxWidth: '230px',
      maxHeight: '230px',
      alignSelf: 'center'
    }
  }


  return (
    <>
      {products.map(product =>
        <div key={product.id} style={{ alignSelf: 'center' }}>
          <Link to={`/products/${product.id}`}>
            <div style={{ display: 'inline-table' }}>
              <div style={{ textAlign: 'center' }}>
                <img style={style.image} src={product.image} alt="" />
              </div>
              <div style={{ padding: '10px', textAlign: 'left', lineHeight: '25px' }}>
                <ul style={{ listStyleType: 'none' }}>
                  <p className="product-title">{product.title}</p>
                  <div>
                    {[...Array(5)].map((star, index) => {
                      return (
                        <FaStar key={index} style={{ marginRight: '5px' }} color="red" size={12} />
                      )
                    })}
                  </div>
                  <li style={{ fontSize: '18px', paddingTop: '5px', color: 'black' }}>
                                        ${product.price}
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default Products