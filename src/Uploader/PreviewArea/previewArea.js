import React, { Component } from 'react';
import ImagePreviewer from './imagePreviewer';
import FilePreviewer from './filePreviewer';
    

class PreviewArea extends Component {
    
    onSubmit = () => {
        if(!this.props.isFilePresent) return
        else alert("Uh oh, we don't do that here. Uploading is currently not an option!!");
    }

    render(){
        const type = this.props.uploadType;
        return(
            <div className='previewer'>
                {!this.props.isFilePresent ? <p>The <i>Glass</i> is <i>Clear</i>. Upload some {type} to preview them here.</p>: ''}
                {type === 'images' ?
                    <div className='imgWrap'>
                        <ImagePreviewer 
                            fileURLs={this.props.fileURLs} 
                            removeImages={this.props.removeImages}
                        />
                    </div> :
                    <div className='docWrap'>
                        <FilePreviewer 
                            fileUploadList = {this.props.fileUploadList}     
                            removeFiles={this.props.removeFiles}
                        />
                    </div>
                } <br/>
                <button 
                    className={`upload ${this.props.isFilePresent ? '' : 'disabled'}`} 
                    onClick={this.onSubmit}>Upload
                </button>
            </div>
        )
    }
}

export default PreviewArea;