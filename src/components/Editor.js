import React from 'react';

var myVideo;
var canvas;

var ctx;

var imageUrl='';

export default class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            imageUrl: ''
        }
    }

    componentDidMount() {
        console.log(myVideo)
        myVideo = document.getElementById("video"); 
        canvas = document.getElementById("c");
        
        
        console.log(myVideo)
        console.log(canvas)
    }

    playPause() { 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause(); 
            
    } 
    capture() {
        
        
        if (myVideo.paused) {
            canvas.getContext('2d').drawImage(myVideo, 0, 0);
            
            ctx = canvas.getContext('2d');
            ctx.font = "30px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Helleo World", 256,256);

            this.setState({imageUrl: canvas.toDataURL('image/jpeg', 1.0)})//.toString()
            console.log(this.state.imageUrl);
            //console.log(canvas.toDataURL())
        }
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
                  <input type="text" placeholder="Something edgy..." />
                </label>

                <button onClick={(e) => this.playPause(e)}> Play/Pause </button>
                <input type="button" value="Capture" onClick={(e) => this.capture(e)}/>
                <a href={this.state.imageUrl.toString()} onClick = { (e) => console.log(imageUrl)} download> Download </a>
                <canvas id="c" width="500" height="500" ></canvas>
            </>
        );
    }
}
    