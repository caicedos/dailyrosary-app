import React from 'react';
import './Videos.css'

const Videos = () => {

    return (
    <div>
        <h1 className='tc'>Videos/Music</h1>
        <div className='flex flex-wrap tc mt2 wrapper'>
            <iframe className=' pa2 ' title='first' src="https://www.youtube-nocookie.com/embed/6LVZ07lAg4M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className=' pa2 ' title='second' src="https://www.youtube-nocookie.com/embed/p_shhU_H5Z0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className=' pa2 ' title='third' src="https://www.youtube-nocookie.com/embed/jIdiktEquMM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className=' pa2 ' title='fourth' src="https://www.youtube-nocookie.com/embed/SmqLKr6gF-Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className=' pa2 ' title='fifth' src="https://www.youtube-nocookie.com/embed/VBgoU2M5J_s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>

    )
}

export default Videos;