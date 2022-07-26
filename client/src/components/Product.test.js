import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Product from './Product'

test('renders content', () => {
    const product = {
        title: "test render",
        image: "https://images-na.ssl-images-amazon.com/images/I/415T8PS+72L._AC_SX184_.jpg",
        price: "100",
        category: "cat1"
    }

    render(<Product product={product} />)

    const element = screen.getByText('test render')
  
    screen.debug(element)
  
    expect(element).toBeDefined()
})