import {Image, View} from 'react-native';
import {Card, CardGroup} from "react-bootstrap";

export const HomeItem = ({item}) => {
    return (
        <>
            <View style={{
                flexDirection: 'row', marginBottom: 10
            }}>
                <Card>
                    <View style={{justifyContent: 'top'}}>
                        <Image
                            style={{width: 120, height: 70}}
                            source={{uri: item.thumbnail}}
                        />
                    </View>
                    <Card.Body>
                        <Card.Title style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Card.Title>
                        <Card.Text style={{fontSize: 14}}>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </View>
        </>
    );
};