import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {

    showCity = () => {
        if(!this.props.city) {
            return null;
        }
        return this.props.city.name;
    }

    render() {
        return (
            <footer className="page-footer font-small bg-dark text-light pt-4 mt-3">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Gill Newscast for {this.showCity()}</h5>
                        <p>All the latest news updates.</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"></hr>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#!">Sports</a>
                        </li>
                        <li>
                            <a href="#!">Local</a>
                        </li>
                        <li>
                            <a href="#!">Business</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                        <li>
                            <a href="#!">Technology</a>
                        </li>
                        <li>
                            <a href="#!">Entertainment</a>
                        </li>
                        <li>
                            <a href="#!">Classifides</a>
                        </li>
                        <li>
                            <a href="#!">Careers</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#!"> Gill Newscast</a>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return { city: state.city }
}

export default connect(mapStateToProps)(Footer);