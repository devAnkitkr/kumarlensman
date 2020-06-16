import React, { useState } from 'react'
import Herotitle from './heroText/Herotitle'
import TagNavbar from './tagNavbar/TagNavbar'
import Portfolio from './Portfolio/Portfolio'
import Lightbox from './lightbox/Lightbox'




const MainContent = ({ UniqueTags, imageInfo }) => {

    const [photoInfo, setPhotoInfo] = useState(imageInfo)
    const [toggleGallery, setToggleGallery] = useState(false)
    const [index, setIndex] = useState(0)


    const handleTagNavbar = (e) => {
        const { innerText } = e.target

        if (innerText !== 'All') {
            let tagVal = innerText.toLowerCase()
            let sortedImageInfo = imageInfo.filter(item => item.tag[0] === tagVal)
            setPhotoInfo(sortedImageInfo)          
        }

        else {
            setPhotoInfo(imageInfo)
        }
    }

    const toggleLB = (e) => {
        const { id } = e.target
        setIndex(id)
        setToggleGallery(!toggleGallery)
    }

    return (
        <div className='container'>
            <Herotitle />
            <TagNavbar UniqueTags={UniqueTags} handleTagNavbar={handleTagNavbar} />
            {toggleGallery
                ? <Lightbox toggleLB={toggleLB} photoInfo={photoInfo} index={index} />
                : <Portfolio photoInfo={photoInfo} toggleLB={toggleLB} />
            }
        </div>
    )
}

export default MainContent
