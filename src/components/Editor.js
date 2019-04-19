import React from 'react';
import {connect} from 'react-redux';
import {PlayPause, Capture, InitEditorData} from '../actions/EditorActions'

var video;
var canvas;

var context;
var memeText = '';


class Editor extends React.Component {

    componentDidMount() {
        this.props.onInitEditorData();

        video = document.getElementById("video"); 
        canvas = document.getElementById("canvas");
    }

    onPlayPause() { 
        this.props.onPlayPause();
        if (video.paused) {
            video.play();
        } else {
            video.pause(); 
        }
    } 
    onCapture() {

        //if (video.paused) {
            canvas.getContext('2d').drawImage(video, 0, 0);
            
            context = canvas.getContext('2d');
            context.font = "30px Comic Sans MS";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText(memeText, 256,256);

            this.props.onCapture(canvas.toDataURL('image/jpeg', 1.0));
        //}
    }

    onChangeText(e) {
        memeText = e.target.value
        console.log(e.target.value)
        
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
                    src="https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm"
                    type="video/webm"
                  />
                </video>
                <label>
                  Meme text:
                  <input type="text" onChange={(e) => this.onChangeText(e)} placeholder="Something edgy..." />
                </label>

                <button onClick={(e) => this.onPlayPause(e)}> Play/Pause </button>
                <input type="button" value="Capture" onClick={(e) => this.onCapture(e)}/>
                <a href={this.props.imageUrl} download> Download </a>
                <canvas id="canvas" width="500" height="500" ></canvas>
            </>
        );
    }
}



const mapStateToProps = (state) => ({
    imageUrl: state.memeState.editor.imageUrl,
    titleColor: state.memeState.titleColor
})


const mapActionsToProps = {
    onPlayPause: PlayPause,
    onCapture: Capture,
    onInitEditorData: InitEditorData
};

export default connect(mapStateToProps, mapActionsToProps)(Editor);
    