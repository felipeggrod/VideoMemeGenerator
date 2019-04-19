import {compose, createStore, combineReducers} from 'redux';


//Actions
export const TOGGLE_TITLE_COLOR = 'TOGGLE_TITLE_COLOR';
export const toggleTitleColor = () => ({
    type: TOGGLE_TITLE_COLOR
});

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



//State
const defaultState = {
    titleColor: 'primary',
    editor: {
        sourceVideoUrl: 'https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm',
        videoElement: '',
        videoState: '',
        canvas: '',
        context: '',
        imageUrl: '',
        memeText: "Meme text init state",
    }
}

//Reducers
function memeState(state=defaultState, action ){
    console.dir(state.editor)
    switch(action.type){
        
        case TOGGLE_TITLE_COLOR:
            return {
                ...state,
                titleColor: state.titleColor === 'primary' ? 'secondary' : 'primary',
            };

        case PLAY_PAUSE:
        
            return state
            
        
        case CAPTURE:
            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    imageUrl: action.payload.imageUrl,
                },
            };

        case INIT_EDITOR_DATA:
            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    //video: document.getElementById("video"),
                    //canvas: document.getElementById("canvas")
                }
                
            };

        default:
            return state;
    }
}


//This must be added to use the Redux Devtools Extension on Chrome
const allStoreEnhancers = compose (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = combineReducers({memeState})

export const store = createStore(root, allStoreEnhancers);
