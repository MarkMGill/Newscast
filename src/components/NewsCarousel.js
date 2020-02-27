import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { newsStoriesLoad, newsStoryLoad } from '../actions';

class NewsCarousel extends React.Component {
    // added index and direction to add carousel controls
    constructor(props) {
        super(props);
        this.state = { index: 0, direction: null, interval: null };
    }

    componentDidMount() {
        // call out to newsapi to add news stories to redux store newsStories reducer
        this.props.newsStoriesLoad();
    }

    handleSelect = (selectedIndex, e) => {
        // update index and direction in state
        this.setState({
            index: selectedIndex,
            direction: e.direction, 
            interval: null
        });
    }

    showNewsCarousel = () => {
        // map through newsStories reducer to create 5 carousel items from first 5 indexes in newsStories array
        return this.props.newsStories.map((element, index) => {
            const { title, urlToImage } = element;
            if(index > 4 || urlToImage === null || title ===  null) {
                return null;
            }
            // format title to use in URL
            const formatTitle = title.replace(/[^A-Z0-9]+/ig, "-");
            return (
                <Carousel.Item key={index} onClick={() => this.props.newsStoryLoad(element)}>
                    <Link to={`/Newscast/news/${formatTitle}`}>
                        <img
                        className="d-block w-100"
                        src={urlToImage}
                        alt="First slide"
                        width="700px"
                        height="450px"
                        />
                        <Carousel.Caption>
                            <h5 className="bg-dark" style={{opacity: "0.9"}}>{title}</h5>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            );
           
        });
    }

    render() {
        if(this.props.newsStories === []) {
            return <div>Loading...</div>;
        }
        return (
        <Carousel activeIndex={this.state.index} interval={this.state.interval} direction={this.state.direction} onSelect={(i, e) => this.handleSelect(i,e)}  className="mb-3">
            {this.showNewsCarousel()}
        </Carousel>
        );
    }
}

const mapStateToProps = state => {
    return { newsStories: state.newsStories }
}

export default connect(mapStateToProps, { newsStoriesLoad, newsStoryLoad })(NewsCarousel);