import React, { Component } from 'react';
import Delete from '../../images/delete.png';

class FilePreviewer extends Component {
    render(){
        return(
            this.props.fileUploadList.map((file, index) => {
                return(
                <div key={index} className='docdiv'>
                    <p>{file.name}</p>
                    <img alt="Delete" src={Delete} onClick={() => this.props.removeFiles(index)} className="docdelete"/>
                </div>)
            })
        )
    }
}

export default FilePreviewer;