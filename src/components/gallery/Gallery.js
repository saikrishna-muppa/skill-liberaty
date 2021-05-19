import React from 'react'
import '../gallery/Gallery.css'
const Gallery = () => {
    const data=[
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },
        {
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        },{
            "image":"https://i.pinimg.com/originals/91/e4/18/91e418f3ed4854f94005dc75f9d1baa0.jpg",
        }
    ]
    return (
        <div className="gallery-container">
            {data.map((post)=>{
                return(
                    <div className="gallery-header">
                        <div className="content-details fadeIn-left">
                            <h4>Gallery title here</h4>
                            <p>Institute</p>
                        </div>
                        <img src={post.image}/>
                        </div>
                )
            })}
        </div>
    )
}

export default Gallery
