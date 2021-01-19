import React from 'react'

import '../App.css'

function Article(props) {
    return (
        <div className={props.nombre< 2 ? "none":"" }>
            

            <img  src="../img1.webp" alt=""/>
        </div>
    )
}

export default Article
