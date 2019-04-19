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
