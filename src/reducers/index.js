import { combineReducers } from 'redux';

const newsStoriesReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEWS_STORIES_LOAD':
            return action.payload;
        default:
            return state;
    }
}

const newsStoryReducer = (state=[], action) => {
    switch(action.type) {
        case 'NEWS_STORY':
            return action.payload;
        default:
            return state;
    }
}

const inputValReducer = (inputVal='', action) => {
    if(action.type === 'INPUT_VAL') {
        return action.payload;
    }
    return inputVal;
}

const citySubmitReducer = (citySubmit=null, action) => {
    if(action.type === 'CITY_SUBMIT') {
        return action.payload;
    }
    return citySubmit;
}

export default combineReducers({
    newsStories: newsStoriesReducer,
    newsStory: newsStoryReducer,
    inputVal: inputValReducer,
    city: citySubmitReducer
});