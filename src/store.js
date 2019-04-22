import {compose, createStore, combineReducers} from 'redux';
import {CAPTURE, CHANGE_TEXT, CHANGE_VIDEO_URL, CHANGE_FONT_FAMILY, CHANGE_SHADOWS} from './actions/EditorActions'




//State
const defaultState = {
    editor: {
        sourceVideoUrl: 'https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm',
        imageUrl: '',
        memeText: "This is the meme's text",
    },
    textStyles: {
        color: 'white',
        fontSize: '30px',
        fontSizeOptions: ['15px', '30px', '45px', '60px'],
        fontFamily: 'Comic Sans MS',
        fontFamilyOptions: ['Comic Sans MS', 'Montserrat', 'Arial', 'Impact'],
        fontShadow: false,
        upperCased: false,
    }
}

//Reducers
function memeState(state=defaultState, action ){
    console.dir(state.editor)
    switch(action.type){
        
        case CAPTURE:
            let video = document.getElementById("video"); 
            let canvas = document.getElementById("canvas");
            let context = canvas.getContext('2d').drawImage(video, 0, 0);
            
            context = canvas.getContext('2d');
            
            
            context.textAlign = "center";
            context.font = state.textStyles.fontSize + ' ' + state.textStyles.fontFamily;
            

            //Drawing backshadows
            if (state.textStyles.fontShadow) {
                context.shadowColor="black";
                context.shadowBlur=5;
                context.lineWidth=5;
                context.strokeStyle = "black";
                context.strokeText(state.editor.memeText, context.canvas.width/2 , context.canvas.height/1.3);
            }
            
            //Drawing main text
            context.shadowBlur=0;
            context.fillStyle = state.textStyles.color;
            context.fillText(state.editor.memeText, context.canvas.width/2 , context.canvas.height/1.3);

            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    imageUrl: canvas.toDataURL('image/jpeg', 1.0),
                },
            };

        case CHANGE_TEXT:
            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    memeText: action.payload.memeText,
                },
            };

        case CHANGE_VIDEO_URL:
            if (action.payload.videoUrl instanceof Object) {
                action.payload.videoUrl = URL.createObjectURL(action.payload.videoUrl);
            }
            
            return {
                ...state,
                editor: { 
                    ...state.editor, 
                    sourceVideoUrl: action.payload.videoUrl,
                },
            };

        case CHANGE_FONT_FAMILY:
            return {
                ...state,
                textStyles: { 
                    ...state.textStyles, 
                    fontFamily: action.payload.fontFamily,
                },
        };

        case CHANGE_SHADOWS:
            var fontShadow = (action.payload.fontShadow === "true");
            return {
                ...state,
                textStyles: { 
                    ...state.textStyles, 
                    fontShadow: fontShadow,
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
