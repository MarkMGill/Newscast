import openWeatherMap from '../apis/openWeatherMap';
import newsAPI from '../apis/newsAPI';

export const newsStoriesLoad = () => async dispatch => {
    const response = await newsAPI.get(`v2/top-headlines?country=us&apiKey=7a4e481d736140efae783b1bfd607fbe`);

    dispatch({type: 'NEWS_STORIES_LOAD', payload: response.data.articles });
}

export const newsStoryLoad = (value) => {
    return {
        type: 'NEWS_STORY',
        payload: value
    }
}

export const citySubmit = (value) => async dispatch => {
    const response = await openWeatherMap.get(`/data/2.5/weather?q=${value},us&appid=969ce553fd02fdef6241c212841ec718&units=imperial`);

    dispatch({type: 'CITY_SUBMIT', payload: response.data});
}

export const inputValChange = (value) => {
    return {
        type: 'INPUT_VAL',
        payload: value
    }
}