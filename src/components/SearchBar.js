import React from 'react';
import { connect } from 'react-redux';
import { inputValChange } from '../actions';

class SearchBar extends React.Component {

    render() {
        // update input value in inputVal reducer using inputValChange action creater from what is typed in input box
        return <input type="text" className="form-control mt-2" value={this.props.inputVal} onChange={ e => this.props.inputValChange(e.target.value)} />;
    }
}

const mapStateToProps = state => {
    return { inputVal: state.inputVal }
}

export default connect(mapStateToProps, { inputValChange })(SearchBar);