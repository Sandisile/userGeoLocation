import React, { Component } from 'react;
import MapView from 'react-native-maps';

class UserGeoLocation extends Component {

    //initials state with current position
    state = {
        currentPosition: 'unknown',
    }

    //check watch  ID
    watchID: ? number = null;

    componentDidMount = ()⇒ {
    	//get current position
        navigator.geolocation.getCurrentPosition(
            (position)⇒ {
                const currentPosition = JSON.stringify(position);
                this.setState({ currentPosition });
            },
            (error)⇒ alert(error.message), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
	// watch Position as the user moves
        this.watchID = navigator.geolocation.watchPosition((position)⇒ {
            const currentPosition = JSON.stringify(position);
            this.setState({ currentPosition });
        });
    }

    componentWillUnmount = ()⇒ {
    	// Clear Watch
        navigator.geolocation.clearWatch(this.watchID);
    }
    //render View
    render() {

        return ( 
            <View style = { styles.container }>
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
            </MapView> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
   	flex:1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
    },
    map: {
     position: 'absolute',
     top:0,
     left:0,
     right:0,
     bottom:0,
     }
    });
