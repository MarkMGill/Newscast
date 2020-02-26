import React from 'react';
import { connect } from 'react-redux';
import { newsStoriesLoad } from '../actions';

class NewsStory extends React.Component {

    componentDidMount() {
        // NewsStory makes its own call to the newsapi only if the direct story url is entered in to the browser
        if(!this.props.newsStories.length) {
            this.props.newsStoriesLoad();
        }
    }

    showStory = () => {
        if(!this.props.newsStories) {
            return null;
        }
        // map through newsStories and display only the story with a url in browser that matches title of story
        return this.props.newsStories.map((el, index) => {
            const { title, description, content, url } = el;
            if(this.props.match.params.id === el.title) {
                return (
                    <div key={index} className="mb-5 pb-5">
                        <h1 className="display-4">{title}</h1>
                        <h5>{description}</h5><br />
                        <p>{content}</p>
                        <p>View full story at <a href={url}>{url}</a>.</p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                );
            } else {
                return null;
            }
        });
    }

    render() {

        return (
            <div className="container">
                <div>{this.showStory()}</div>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return { newsStories: state.newsStories }
}

export default connect(MapStateToProps, { newsStoriesLoad })(NewsStory);