import React from 'react'
import { useRef } from 'react';
function KittenGallery() {
    const galleryRef = useRef(null);
    const index = useRef(0);
    function showNextImage(){
        const imageList = galleryRef.current.querySelectorAll(".image");
        index.current = index.current +1 >= imageList.length ? 0 : index.current +1;
        imageList[index.current].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });


    }

  return (
    <section>
        <h2>Kitty Gallery</h2>
        <button onClick={showNextImage}>Next</button>
        <ul ref={galleryRef} className="gallery">
            <li className="image">
                <img src="https://placekitten.com/g/200/300"/>
            </li>
            <li className="image">
                <img src="https://placekitten.com/g/200/250"/>
            </li>
            <li className="image">
                <img src="https://placekitten.com/g/300/300"/>
            </li>
        </ul>
    </section>
  )
}

export default KittenGallery
