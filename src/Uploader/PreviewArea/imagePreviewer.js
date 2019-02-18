import React, { Component } from 'react';
import Delete from '../../images/delete.png';

class ImagePreviewer extends Component {
    render(){
        return(
            this.props.fileURLs.map((url, index) => {
            return(
                <div key={index} className='imgdiv'>
                    <img alt='NotAnImageFile' src={url} className='img'/>
                    <img alt="Delete" src={Delete} onClick={() => this.props.removeImages(index)} className="delete"/>
                </div>
            )})
        )
    }
} 

export default ImagePreviewer;