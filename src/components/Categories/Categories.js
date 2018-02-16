import React from 'react'

const Categories = ({ data }) => {
    return (<div>{
        data.allCategories ?
        data.allCategories.map( cat => {
            return <h1 key={cat.id}>{cat.name}</h1>
        }) :
        "loading"
    }
    </div>)
}

export default Categories