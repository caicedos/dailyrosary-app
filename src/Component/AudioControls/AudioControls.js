import React from 'react';

const AudioControls = () => {
    return (
        <div className='tc'>
            <button className='center hover grow'><svg width="50" height="50" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /><path d="M0 0h24v24H0z" fill="none" /></svg></button>
            <button className='enter hover grow'><svg width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 6h12v12H6z" /></svg></button>
        </div>
    )
}

export default AudioControls;