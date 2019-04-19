import {compose, createStore, combineReducers} from 'redux';
import {PLAY_PAUSE, CAPTURE, INIT_EDITOR_DATA} from './actions/EditorActions'


//Actions
export const TOGGLE_TITLE_COLOR = 'TOGGLE_TITLE_COLOR';

export const toggleTitleColor = () => ({
    type: TOGGLE_TITLE_COLOR
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
            console.log("capture")
            console.log(action)
            console.log(action.payload)
            console.log(action.payload.imageUrl)
            console.log('_____________________')
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
