import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component{
    
    renderWeather(cityData) {
        if (!cityData) {
            return;
        }
        
        const name = cityData.city.name;
        const temps = cityData.list.map( w => w.main.temp );
        const humidities = cityData.list.map( w => w.main.humidity );
        const pressures = cityData.list.map( w => w.main.pressure );
        
        const { lon, lat } = cityData.city.coord;
        
        return (
            <tr key={ name }>
                <td> <GoogleMap lat={lat} lon={lon} /></td>
                <td> <Chart color='orange' data={ temps } unit='K'/> </td>
                <td> <Chart color='green' data={ humidities } unit='hPa'/> </td>
                <td> <Chart color='blue' data={ pressures } unit='%'/> </td>
            </tr>    
        );
    }
    
    render() {
        return <table className='table table-form'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                { this.props.weather.map(this.renderWeather) }
            </tbody>
        </table>
    }
    
}

function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);