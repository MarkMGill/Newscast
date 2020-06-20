import React from 'react';
import { connect } from 'react-redux';
import { newsStoriesLoad } from '../actions';

class NewsStory extends React.Component {

    componentDidMount() {
        // NewsStory makes its own call to the newsapi only if the direct story url is entered in to the browser
        if(!this.props.newsStories.length) {
            this.props.newsStoriesLoad();
        }
        // start at the top of the page
        window.scrollTo(0, 0);
    }

    showStory = () => {
        if(!this.props.newsStories) {
            return null;
        }
        // map through newsStories and display only the story with a url in browser that matches name of story
        return this.props.newsStories.map((el, index) => {
            const { name, description, url } = el;
            const { contentUrl } = el.image;
            // format name to use in URL
            const formatName = name.replace(/[^A-Z0-9]+/ig, "-");
            if(this.props.match.params.id === formatName) {
                return (
                    <div key={index} className="mb-5 pb-5 text-center">
                        <h1 className="display-4 text-left">{name}</h1>
                        <h5 className="text-left">{description}</h5><br />
                        <img className="d-block w-100" width="800px" height="500px" src={contentUrl} alt={name}></img>
                        <p className="text-left">Non adipisicing minim qui proident incididunt cupidatat Lorem in Lorem aliquip. Duis minim laborum velit enim ea anim voluptate ullamco cillum ea irure ex. Qui ullamco reprehenderit nisi ipsum velit.</p>
                        <p className="text-left">Dolor excepteur amet elit laboris consequat tempor. Do eiusmod commodo consectetur irure do duis aute irure velit ullamco laborum voluptate ex laborum. Dolor et nulla nostrud tempor consequat quis duis cillum velit adipisicing laboris aute voluptate.</p>
                        <p className="text-left">Voluptate esse aute nulla excepteur exercitation ex deserunt sit occaecat. Minim cillum cillum amet reprehenderit eiusmod exercitation est quis. Tempor dolor laboris proident ullamco consequat tempor. Tempor nostrud incididunt minim esse quis officia anim. Eu enim irure culpa mollit non anim cillum deserunt nostrud consequat incididunt ipsum sunt.</p>
                        <p className="text-left">Nostrud laborum id aliqua ullamco sunt veniam nisi. Proident voluptate cillum et ullamco excepteur ipsum irure culpa Lorem labore nostrud veniam voluptate. Duis adipisicing ad voluptate aliquip dolore cillum velit esse nostrud enim culpa sint amet. Irure ipsum sit Lorem dolore tempor. Ex sit velit fugiat commodo duis dolor laboris elit nostrud laborum.</p>
                        <p className="text-left">Ex dolor mollit minim Lorem dolor proident aliquip incididunt est tempor nulla pariatur tempor elit. Cupidatat et voluptate eiusmod officia nostrud eu voluptate tempor est. Qui occaecat labore excepteur consequat consectetur do incididunt et mollit labore enim eiusmod. Ex ut mollit sit duis ad exercitation eiusmod. Cupidatat duis incididunt nulla dolor in velit sit minim dolor mollit ipsum non commodo officia.</p>
                        <p className="text-left">View full story at <a href={url}>{url}</a>.</p>
                        <br /><br /><br /><br />
                    </div>
                );
            } else {
                return null;
            }
        });
    }

    render() {

        return (
            <div className="container mt-5">
                <div>{this.showStory()}</div>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return { newsStories: state.newsStories }
}

export default connect(MapStateToProps, { newsStoriesLoad })(NewsStory);