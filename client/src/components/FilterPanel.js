import React from "react";

const FilterPanel = ({categories, onChange}) => {
    return (
        <div>
            {categories.map(category => 
                <ul style={{listStyleType: 'none', margin: '5px'}} key={category.id}>
                    <li>
                        <label>
                            <input 
                                style={{transform: 'scale(1.5)', marginRight: '10px'}}
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