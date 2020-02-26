import React from 'react';
import SearchBar from './SearchBar';
import ButtonSubmit from './ButtonSubmit';
import Weather from './Weather';
import NewsCarousel from './NewsCarousel';
import NewsStories from './NewsStories';

class MainNews extends React.Component {

    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-center mb-2">
                            <div className="card">
                                <div className="card-body">
                                    <NewsCarousel />
                                    <NewsStories />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 text-center'>
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <Weather />
                                            <SearchBar />
                                            <ButtonSubmit />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

}

export default MainNews;