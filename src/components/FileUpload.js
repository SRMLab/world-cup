import React, { Component } from 'react';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
        }

        reader.readAsDataURL(file)
    }


    render() {
        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} width='300px' />);
        } else {
        imagePreview = (<div>Please select an Image for Preview</div>);
        }
        return (
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type="file" onChange={(e)=>this.handleImageChange(e)}/>
                    <button type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div>
                    {imagePreview}
                </div>
            </div>
        );
    }
}

export default FileUpload;