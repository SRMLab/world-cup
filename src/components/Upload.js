import React, { Component } from 'react';
import FileUpload from './FileUpload';


class Upload extends Component {
    render() {
        return (
            <div>
                <h2>Upload Your Image here</h2>
                <FileUpload />
            </div>
        );
    }
}

export default Upload;