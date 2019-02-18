import React, { Component } from 'react';
import fileIcon from '../../images/files-lg.svg';
import imageIcon from '../../images/images.png';

class DropArea extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    openFileDialog = () => {        
        this.fileInput.current.click();
    }

    render(){
        const type = this.props.uploadType;
        return (
            <div 
                className={`dropArea ${this.props.isDragActive? 'highlight': ''}`} 
                onClick={this.openFileDialog}
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                onDragLeave={this.props.onDragLeave}
            >
                <input 
                    type="file" 
                    ref={this.fileInput} 
                    style={{display : 'none'}} 
                    multiple 
                    onChange={this.props.onChange}
                />
                <img 
                    alt="upload" 
                    className="icon" 
                    src={type === "files" ? fileIcon : imageIcon} 
                />
                <p>Drop your {type} here</p> or <br/>
                <span>Click to browse</span>
            </div>
        )
    }
} 

export default DropArea;