import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './redux/store'
import {Provider} from 'react-redux';
import HomeContainer from './screens/HomeScreen/HomeContainer';
import DetailsContainer from './screens/DetailsScreen/DetailsContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (

        <Tab.Navigator   initialRouteName="Feed"
                         tabBarOptions={{
                             activeTintColor: '#535a70',
                             inactiveTintColor: '#55cc44',
                             activeBackgroundColor: '#55cc44',
                             inactiveBackgroundColor: '#4a4d54',
                             showIcon: true,
                         }}>

            <Tab.Screen
                name="Home"
                component={HomeContainer}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Ionicons name="home" color={'#fdffdc'} size={25} />
                    ),
                }}
            />

            <Tab.Screen
                name="Details1"
                component={DetailsContainer}
                options={{
                    tabBarLabel: 'Details',
                    tabBarIcon: () => (
                        <Ionicons name="information-circle-sharp" color={'#fdffdc'} size={25} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </Provider>
    );
}


