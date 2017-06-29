import React, { Component } from 'react;
import MapView from 'react-native-maps';

class UserGeoLocation extends Component {


    state = {
        currentPosition: 'unknown',
    }

    watchID: ? number = null;

    componentDidMount = ()⇒ {
        navigator.geolocation.getCurrentPosition(
            (position)⇒ {
                const currentPosition = JSON.stringify(position);
                this.setState({ currentPosition });
            },
            (error)⇒ alert(error.message), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

        this.watchID = navigator.geolocation.watchPosition((position)⇒ {
            const currentPosition = JSON.stringify(position);
            this.setState({ currentPosition });
        });
    }

    componentWillUnmount = ()⇒ {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
        return ( 
            <View style = { styles.container } >
            <MapView style = { styles.map }
            currentRegion = {
                {
                    latitude: this.state.currentPosition.coords.latitude,
                    longitude: this.state.currentPosition.coords.longitude,

                }
            } >
            <MapView.Marker coordinate = {
                { longitude: currentRegion.longitude, latitude: currentRegion.latitude }
            }

            />  
            </MapView > 
            </View>
        );
    }
}
