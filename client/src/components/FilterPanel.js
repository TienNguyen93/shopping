import React from "react";

const FilterPanel = ({categories, onChange}) => {
    return (
        <>
            {categories.map(category => 
                <ul style={{listStyleType: 'none'}} key={category.id}>
                    <li>
                        <input 
                            type="checkbox" 
                            checked={category.checked}
                            onChange={() => onChange(category.id)}
                        />
                        <span>{category.label}</span>
                    </li>
                </ul>)}
        </>
    )
}

export default FilterPanel