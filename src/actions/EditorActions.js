
export const PLAY_PAUSE = 'PLAY_PAUSE';

export const PlayPause = () => ({
    type: PLAY_PAUSE
});


export const CAPTURE = 'CAPTURE';

export const Capture = (imageUrl) => ({
    type: CAPTURE,
    payload: {
        imageUrl: imageUrl
    }
});



export const INIT_EDITOR_DATA = 'INIT_EDITOR_DATA';

export const InitEditorData = () => ({
    type: INIT_EDITOR_DATA
});