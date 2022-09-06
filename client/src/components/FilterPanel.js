import React from 'react'

const FilterPanel = ({ categories, onChange }) => {
  return (
    <div style={{ paddingTop: '5px' }}>
      {categories.map(category =>
        <ul style={{ listStyleType: 'none', padding: '2px' }} key={category.id}>
          <li>
            <label>
              <input
                style={{ transform: 'scale(1.5)', margin: '5px', marginRight: '10px' }}
                type="checkbox"
                checked={category.checked}
                onChange={() => onChange(category.id)}
              />
              {category.label}
            </label>
          </li>
        </ul>)}
    </div>
  )
}

export default FilterPanel