import {Image, View, Text} from 'react-native';

export const NavBar = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 70,
                marginTop: 20,
                padding: 20,
                marginBottom: 0
            }}>
            <View style={[
                {
                    flex: 1,
                    justifyContent: 'center',
                }]}>
                <Image
                    style={{width: 100, height: 30}}
                    source={require('../assets/logo.png')}/>
            </View>
            <View style={{
                flex: 4, justifyContent: 'right', alignItems: 'right'
            }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>FirstMobileApp</Text>
            </View>
        </View>
    );
};