import React from 'react';

export default class Readme extends React.Component {
    render() {
        return (  
            <section className="text-white">
                <h2>Video Meme Generator</h2>
                <p>
                    Welcome to the <em>Video Meme Generator</em>. This is a little tool that helps you create edgy memes from videos.
                </p>
                <section>
                    <p>You can:</p>
                    <ul>
                    <li>Pick any point in the video to create your meme</li>
                    <li>
                        Change the text effects/styling and see the changes live
                    </li>
                    <li>
                        Capture the meme and download it to your computer
                    </li>
                    <li>
                        Provide any custom video you'd like. From url or file, as long as it is a .webm
                    </li>
                    </ul>
                </section>
            </section>
        );
    }
}
    