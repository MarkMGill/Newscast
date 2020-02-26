import React from 'react';
import { connect } from 'react-redux';
import { citySubmit, inputValChange } from '../actions';

class ButtonSubmit extends React.Component {

    onBtnSubmit = e => {
        e.preventDefault();
        // update city reducer, then blank out the input box by setting inputVal to ''. The change in city reducer re-renders Weather component to update weather for city inputted in input box.
        this.props.citySubmit(this.props.inputVal);
        this.props.inputValChange('');
    }

    render() {
        return (
            <div>
                <button type="submit" className="btn btn-primary mt-2" onClick={(e) => this.onBtnSubmit(e)}>Submit</button>
                <p className="mt-3">powered by openweathermap.org</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { city: state.city, inputVal: state.inputVal }
}

export default connect(mapStateToProps, { citySubmit, inputValChange })(ButtonSubmit);