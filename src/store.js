import {compose, createStore, combineReducers} from 'redux';
import {CAPTURE, CHANGE_TEXT} from './actions/EditorActions'


//Actions





//State
const defaultState = {
    titleColor: 'primary',
    editor: {
        sourceVideoUrl: 'https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm',
        imageUrl: '',
        memeText: "This is the meme text",
    }
}

//Reducers
function memeState(state=defaultState, action ){
    console.dir(state.editor)
    switch(action.type){
        
        case CAPTURE:
            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    imageUrl: action.payload.imageUrl,
                },
            };

        case CHANGE_TEXT:
            console.log('payload.memetext:' + action.payload.memeText);
            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    memeText: action.payload.memeText,
                },
            };


        default:
            return state;
    }
}


//Added this to use the Redux Devtools Extension on Chrome
const allStoreEnhancers = compose (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = combineReducers({memeState})

export const store = createStore(root, allStoreEnhancers);
