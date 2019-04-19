import React from 'react';
import {connect} from 'react-redux';
import {capture, changeText, changeVideoUrl} from '../actions/EditorActions'

var video;
var canvas;
var context;


class Editor extends React.Component {

    componentDidMount() {
        video = document.getElementById("video"); 
        canvas = document.getElementById("canvas");
    }

    onPlayPause() { 
        if (video.paused) {
            video.play();
        } else {
            video.pause(); 
        }
    } 
    onCapture() {
        canvas.getContext('2d').drawImage(video, 0, 0);
        
        context = canvas.getContext('2d');
        context.font = "30px Comic Sans MS";
        context.fillStyle = "white";
        context.textAlign = "center";
        
        context.fillText(this.props.memeText, context.canvas.width/2 , context.canvas.height/1.8);

        this.props.onCapture(canvas.toDataURL('image/jpeg', 1.0));
        
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
                <video 
                  crossOrigin="Anonymous"
                  controls
                  id = "video"
                  width="800"
                  height="450"
                  playsInline                  
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src={this.props.sourceVideoUrl}
                    type="video/webm"
                  />
                </video>
                <div id="overlay">{this.props.memeText}</div>

                <label>
                    Meme text:
                    <input type="text" onChange={(e) => this.onChangeText(e)} placeholder="Something edgy..." />
                </label>
                
                <label>
                    Custom video:
                    <input id="video_file" name="video_file" type="file" onChange = {(e) => this.onVideoFileSelect(e)} ></input>
                    <form onSubmit={this.changeVideoUrl}>
                        <label> Paste a Video URL </label>
                        <input type="url" onChange = { (e) => this.onChangeVideoUrl(e)}/>
                        <input type="submit" value="Submit" />
                    </form>        
                    
                </label>

                <button onClick={(e) => this.onPlayPause(e)}> Play/Pause </button>
                
                <button onClick={(e) => this.onCapture(e)}> Capture </button>
                
                
                <a href={this.props.imageUrl} download> Download </a>
                
                <canvas id="canvas" width="500" height="500" ></canvas>
            </>
        );
    }
}



const mapStateToProps = (state) => ({
    imageUrl: state.memeState.editor.imageUrl,
    memeText: state.memeState.editor.memeText,
    sourceVideoUrl: state.memeState.editor.sourceVideoUrl,
    titleColor: state.memeState.titleColor
})


const mapActionsToProps = {
    onCapture: capture,
    onChangeText: changeText,
    onChangeVideoUrl: changeVideoUrl,
};

export default connect(mapStateToProps, mapActionsToProps)(Editor);
    