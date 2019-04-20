export const CAPTURE = 'CAPTURE';
export const capture = (imageUrl) => ({
    type: CAPTURE,
    payload: {
        imageUrl: imageUrl
    }
});

export const CHANGE_TEXT = 'CHANGE_TEXT';
export const changeText = (memeText) => ({
    type: CHANGE_TEXT,
    payload: {
        memeText: memeText,
    }
});

export const CHANGE_VIDEO_URL = 'CHANGE_VIDEO_URL';
export const changeVideoUrl = (videoUrl) => ({
    type: CHANGE_VIDEO_URL,
    payload: {
        videoUrl: videoUrl,
    }
});