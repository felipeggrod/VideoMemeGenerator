import React from 'react';
import {connect} from 'react-redux';
import {capture, changeText, changeVideoUrl, changeFontFamily, changeShadows} from '../actions/EditorActions'

var video;


class Editor extends React.Component {

    componentDidMount() {
        video = document.getElementById("video");
    }

    //Video related
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

    onVideoFileSelect(e) {
        this.props.onChangeVideoUrl(document.getElementById('video_file').files[0]);
        video.load();
        video.play();
    }

    onChangeVideoUrl(e) {
        this.props.onChangeVideoUrl(e.target.value);
        video.load();
    }

    //Text related
    onChangeText(e) {
        this.props.onChangeText(e.target.value);
    }

    onChangeFontFamily(e) {
        this.props.onChangeFontFamily(e.target.value);
    }

    onChangeShadows(e) {
        this.props.onChangeShadows(e.target.value);
    }

    render() {
        const fontFamilyOptions = this.props.textStyles.fontFamilyOptions.map((option) =>
            <option
                key={option}
                value={option} 
            > {option} </option>
        );

        return (  
            <>
                <div className='row position-relative d-flex justify-content-center border rounded border-secondary'>
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
                        fontFamily: this.props.textStyles.fontFamily,
                        textShadow: (this.props.textStyles.fontShadow ? '0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black' : '0 0 0 black'),
                    }}> {this.props.memeText} </div>
                    
                </div>



                <div className='row section mt-2 p-2'>
                    <div className='m-auto col-12 col-sm-6'>
                        <label className="text-white w-100">
                            Meme text:
                            <input className="form-control shadow" type="text" onChange={(e) => this.onChangeText(e)} placeholder="Something edgy..." />
                            
                        
                        </label>
                    </div>
                    <div className='m-auto col-6 col-sm-3'>
                        <label className="text-white w-100"> 
                            Video URL:
                            <input className="form-control shadow " type="url" onChange = { (e) => this.onChangeVideoUrl(e)} placeholder="Enter a video URL..."/>
                        </label>
                    </div>
                    <div className='m-auto col-6 col-sm-3'>
                        <label className="text-white w-100">
                            Custom video:
                            <input className="form-control shadow file-input" id="video_file" name="video_file" type="file" onChange = {(e) => this.onVideoFileSelect(e)} ></input>
                        </label>
                    </div>
                    
                </div>

                <div className='row section mt-2 p-2'>
                    <div className='col-6 col-sm-6'>
                        <select className="btn btn-secondary m-2" onChange={(e) => this.onChangeFontFamily(e)}>
                            {fontFamilyOptions}
                        </select>
                        <select className="btn btn-secondary m-2" onChange={(e) => this.onChangeShadows(e)}>
                            <option value={false} > No Shadows</option>
                            <option value={true} > Shadows</option>
                        </select>
                        
                        
                    </div>
                    <div className='col-6 col-sm-6'>
                        <button className="btn btn-primary m-2" onClick={(e) => this.onPlayPause(e)}> Play/Pause </button>
                    
                        <button className="btn btn-primary m-2" onClick={(e) => this.onCapture(e)}> Capture </button>
                        
                        {this.props.imageUrl === '' ? (
                            <div/>
                        ) : (
                            <a className="btn btn-success m-2 " href={this.props.imageUrl} download> Download </a>
                        )}
                        
                    </div> 
                </div>
                
                <div className='row mt-2 p-2 d-flex justify-content-center'>
                    <canvas className='col12' id="canvas" width="500" height="400" ></canvas>
                </div>
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
    onChangeFontFamily: changeFontFamily,
    onChangeShadows: changeShadows,
};

export default connect(mapStateToProps, mapActionsToProps)(Editor);
    