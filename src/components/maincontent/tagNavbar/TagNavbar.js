import React from 'react'
import './TagNavbar.css'


function TagNavbar({ UniqueTags, handleTagNavbar }) {
    return (
        <div className='container TagNavbar'>
            <nav>
                <ul>
                    <li onClick={handleTagNavbar} >All</li>
                    {
                        UniqueTags.map(tag => {
                            return <li onClick={handleTagNavbar}>
                                {tag}
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default TagNavbar
