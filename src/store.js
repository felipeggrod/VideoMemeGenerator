import {compose, createStore, combineReducers} from 'redux';

export const TOGGLE_TITLE_COLOR = 'TOGGLE_TITLE_COLOR';

export const toggleTitleColor = () => ({
    type: TOGGLE_TITLE_COLOR
});


const allStoreEnhancers = compose (
    //adding this to use the Redux Devtools Extension on chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const defaultState = {
    titleColor: 'primary'
}

function memeState(state=defaultState, action ){
  
    switch(action.type){
      
        case TOGGLE_TITLE_COLOR:
            return {
                ...state,
                titleColor: state.titleColor === 'primary' ? 'secondary' : 'primary',
            };

        default:
            return state;
    }
}

const root = combineReducers({memeState})

export const store = createStore(root, allStoreEnhancers);
