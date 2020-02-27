import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newsStoryLoad } from '../actions';

class NewsStories extends React.Component {

    showNewsStories = () => {
        if(this.props.newsStories === []) {
            return <div>Loading...</div>;
        }
        // map through newsStories to create card for each story
        return this.props.newsStories.map((element, index) => {
            const { title, description, urlToImage } = element;
            if(index < 5 || urlToImage === null || title ===  null) {
                return null;
            }
            // shorten news description to fit the card
            const desc = description.slice(0, 100).trim() + '...';
            // format title to use in URL
            const formatTitle = title.replace(/[^A-Z0-9]+/ig, "-");
            return (
                <div onClick={() => this.props.newsStoryLoad(element)} key={index} className="mb-3">
                    <Link to={`/Newscast/news/${formatTitle}`}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={urlToImage} className="card-img mt-3 ml-2" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{desc}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render() {
        if(!this.props.newsStories) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <p className="text-left mb-0 pb-0">powered by newsapi.org</p>
                <div className="list-group mb-2">{this.showNewsStories()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { newsStories: state.newsStories }
}

export default connect(mapStateToProps, { newsStoryLoad })(NewsStories);