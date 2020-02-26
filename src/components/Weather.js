import React from 'react';
import { connect } from 'react-redux';
import { citySubmit } from '../actions';

class Weather extends React.Component {

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates = (position) => {
        // get latitude and longiture coordinates from user if approved
        const lat = position.coords.latitude
        const long = position.coords.longitude
        this.reverseGeocodeCoordinates(lat, long);
    }
    
    reverseGeocodeCoordinates = (lat, long) => {
        // call out to google api using geolocatoin coordinates and update city in redux store
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false&key=AIzaSyAdrYjDCwHMxF12ov1Jk7SFxrYQfo5T068`)
        .then(response => response.json())
        .then(data => {
            let address = data.results[4].address_components[0].long_name;
            this.props.citySubmit(address);
        })
        .catch(error => alert(error));        
    }

    showError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
            default:
                alert("An unknown error occurred.");
                break;
        }
      }

    showWeather = () => {
        // show weather for city currently in city reducer
        if(this.props.city === null) {
            return <h1 className="py-5">Please enter city name...</h1>;
        }
        const { description, icon } = this.props.city.weather[0];
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const temp = Math.round(this.props.city.main.temp);

        return (
            <div className="card-body">
                <h4>{this.props.city.name}</h4>
                <h4>{temp}&deg;</h4>
                <img src={iconURL} alt="Weather Icon"></img>
                <h4>{description}</h4>
            </div>   
        );
    }

    render() {
        return(
            <div>{this.showWeather()}</div>
        );
    }

}

const mapStateToProps = state => {
    return { city: state.city }
}

export default connect(mapStateToProps, { citySubmit })(Weather);