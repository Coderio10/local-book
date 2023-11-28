import React from 'react'
import "./css/index.css"

export default function bookComponent({book}) {
    
    console.log(book)

    const searchedData = book.map( item => {

        let Thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
        if (Thumbnail !== undefined) {
            return (
                <div className='bookEle' key={item.id}>
                    <img src={Thumbnail} alt='image' />
                    <h2>{item.volumeInfo.title}</h2>
                </div>
            )
        }
    }) 

    return (
        <div className='result-section'>
            { searchedData }
        </div>
        
    )
}