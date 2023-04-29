import {Text, View} from 'react-native';
import {NavBar} from "./public/NavBar";
import {Home} from "./public/Home";
import {NavigationContainer} from '@react-navigation/native';
import {Gallery} from "./public/Gallery";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Profile} from "./public/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <NavBar/>
            <>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Головна" component={Home}
                                    options={{
                                        tabBarIcon: ({focused}) => (focused ?
                                            <Ionicons name="md-home" size={24} color="blue"/> :
                                            <Ionicons name="md-home" size={24} color="gray"/>)
                                    }}/>
                        <Tab.Screen name="Галерея" component={Gallery}
                                    options={{
                                        tabBarIcon: ({focused}) => (focused ?
                                            <Ionicons name="md-image" size={24} color="blue"/> :
                                            <Ionicons name="md-image" size={24} color="gray"/>)
                                    }}/>
                        <Tab.Screen name="Профіль" component={Profile}
                                    options={{
                                        tabBarIcon: ({focused}) => (focused ?
                                            <Ionicons name="md-people" size={24} color="blue"/> :
                                            <Ionicons name="md-people" size={24} color="gray"/>)
                                    }}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </>
            <View
                style={{
                    flexDirection: 'row',
                    height: 70,
                    marginTop: 20,
                    padding: 20
                }}>
                <Text style={{textAlign: 'center', marginBottom: 0}}>Симон Олексій, група: ІПЗ-19-2</Text>
            </View>
        </>
    );
}
