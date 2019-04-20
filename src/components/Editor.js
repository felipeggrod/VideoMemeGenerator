import React from 'react';
import {connect} from 'react-redux';
import {capture, changeText, changeVideoUrl} from '../actions/EditorActions'

var video;


class Editor extends React.Component {

    componentDidMount() {
        video = document.getElementById("video");
    }

    onPlayPause() { 
        if (video.paused) {
            video.play();
        } else {
            video.pause(); 
        }
    }

    onCapture() {
        
        this.props.onCapture();
        
    }

    onChangeText(e) {
        this.props.onChangeText(e.target.value);
    }
    
    onVideoFileSelect(e) {
        this.props.onChangeVideoUrl(document.getElementById('video_file').files[0]);
        video.load();
        video.play();
    }

    onChangeVideoUrl(e) {
        this.props.onChangeVideoUrl(e.target.value);
        video.load();
    }

    render() {
        return (  
            <>
                <div className='row position-relative'>
                    <video 
                        className=''
                        crossOrigin="Anonymous"
                        controls
                        id = "video"
                        width="100%"
                        //height="450"
                        playsInline                  
                        autoPlay
                        muted
                        loop
                    >
                        <source
                        className='center border'
                        src={this.props.sourceVideoUrl}
                        type="video/webm"
                        />

                        
                        
                    </video>
                    <div id="overlay" style ={{
                        color: this.props.textStyles.color,
                        font: this.props.textStyles.font,
                    
                    }}>
                        {this.props.memeText}
                    </div>
                    
                </div>



                <div className='row section mt-2 p-2'>
                    <div className='m-auto col-12 col-sm-6'>
                        <label className="text-white w-75">
                            Meme text:
                            <input className="form-control shadow" type="text" onChange={(e) => this.onChangeText(e)} placeholder="Something edgy..." />
                            
                        
                        </label>
                        <button className="btn btn-primary mx-2" > O </button>
                    </div>
                    <div className='m-auto col-6 col-sm-3'>
                        <label className="text-white w-100">
                            Custom video:
                            <input className="file-input" id="video_file" name="video_file" type="file" onChange = {(e) => this.onVideoFileSelect(e)} ></input>
                        </label>
                    </div>
                    <div className='m-auto col-6 col-sm-3'>
                        <label className="text-white w-100"> 
                            Paste a Video URL
                            <input className="form-control shadow " type="url" onChange = { (e) => this.onChangeVideoUrl(e)} placeholder="Enter a video URL..."/>
                        </label>
                    </div>
                </div>

                <div className='row section mt-2 p-2'>
                    <div className='column'>
                        <button className="btn btn-primary mx-2" onClick={(e) => this.onPlayPause(e)}> Play/Pause </button>
                        
                        <button className="btn btn-primary mx-2" onClick={(e) => this.onCapture(e)}> Capture </button>
                        
                        <a className="btn btn-primary mx-2 " href={this.props.imageUrl} download> Download </a>
                    </div> 
                </div>
                
                <canvas className='row mt-2 p-2' id="canvas" width="500" height="500" ></canvas>
            </>
        );
    }
}



const mapStateToProps = (state) => ({
    imageUrl: state.memeState.editor.imageUrl,
    memeText: state.memeState.editor.memeText,
    sourceVideoUrl: state.memeState.editor.sourceVideoUrl,
    textStyles: state.memeState.textStyles,
    titleColor: state.memeState.titleColor
})


const mapActionsToProps = {
    onCapture: capture,
    onChangeText: changeText,
    onChangeVideoUrl: changeVideoUrl,
};

export default connect(mapStateToProps, mapActionsToProps)(Editor);
    