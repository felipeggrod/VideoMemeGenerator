import React from 'react';

export default class Editor extends React.Component {
    render() {
        return (  
            <>
                <video
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
            </>
        );
    }
}
    