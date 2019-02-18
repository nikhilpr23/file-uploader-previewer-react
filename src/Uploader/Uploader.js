import React, { Component } from 'react';
import './Uploader.css';
import DropArea from '././DropArea/dropArea';
import PreviewArea from '././PreviewArea/previewArea';


class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilePresent: false,
            isDragActive: false,
            fileUploadList: [],
            fileURLs: [],
        }
        this.removeImages = this.removeImages.bind(this);
        this.removeFiles = this.removeFiles.bind(this);
    }

    onFileUpload = (event) => {        
        event.preventDefault();
        const fileUploadList= this.state.fileUploadList;
        const fileURLs = this.state.fileURLs;

        for(var i=0; i<event.target.files.length; i++) {
            fileUploadList.push(event.target.files[i]);
            fileURLs.push(URL.createObjectURL(event.target.files[i]));
        }      

        this.setState({fileUploadList, fileURLs});
        
        (fileUploadList.length === 0 ? 
            this.setState({isFilePresent: false})
            : this.setState({isFilePresent: true}))
    }

    onDrop = (event) => {
        event.preventDefault();
        const fileUploadList= this.state.fileUploadList;
        const fileURLs = this.state.fileURLs;
      
        for(var i=0; i< event.dataTransfer.files.length; i++) {
            fileUploadList.push(event.dataTransfer.files[i]);
            fileURLs.push(URL.createObjectURL(event.dataTransfer.files[i]));
        } 
        this.setState({ 
            fileUploadList, 
            fileURLs,
            isDragActive: false
         });

         (fileUploadList.length === 0 ? 
            this.setState({isFilePresent: false})
            : this.setState({isFilePresent: true}))
    }
    
    onDragOver = (event) => {
        event.preventDefault();
        this.setState({isDragActive: true})
    }
    
    onDragLeave = () => {
        console.log();
        this.setState({isDragActive: false})
    }

    removeImages = (key) => {     
        const fileUploadList = this.state.fileUploadList.filter(item => item.name !== this.state.fileUploadList[key].name);
        const fileURLs = this.state.fileURLs.filter(item => item !== this.state.fileURLs[key]);

        this.setState({fileUploadList, fileURLs});
        
        (fileURLs.length === 0 ? 
            this.setState({isFilePresent: false})
            : this.setState({isFilePresent: true}))

    }

    removeFiles = (key) => {
        const fileUploadList = this.state.fileUploadList.filter(item => item.name !== this.state.fileUploadList[key].name);
        const fileURLs = this.state.fileURLs.filter(item => item !== this.state.fileURLs[key]);

        this.setState({fileUploadList, fileURLs});
        
        (fileURLs.length === 0 ? 
            this.setState({isFilePresent: false})
            : this.setState({isFilePresent: true}))
    }

    render() {
        return(
        <div className="container">
            <DropArea 
                isDragActive={this.state.isDragActive}
                onChange={this.onFileUpload}
                uploadType={this.props.uploadType}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
            />   
            <PreviewArea 
                isFilePresent={this.state.isFilePresent}
                fileURLs= {this.state.fileURLs}
                fileUploadList = {this.state.fileUploadList}
                uploadType={this.props.uploadType}
                removeImages={this.removeImages}
                removeFiles={this.removeFiles}
            />
        </div>
        );
    }
}

export default Uploader;