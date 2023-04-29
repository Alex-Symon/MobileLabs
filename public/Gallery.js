import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export const Gallery = () => {
    const [img, setImg] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((response) => response.json())
            .then((data) => {
                setImg(data)
            })
            .catch(error => {
                setErrors(error.response.data)
            })
            .finally(() => setLoading(false))
    }

    useEffect(getPhotos, []);

    return (
        <>
            {loading && <ActivityIndicator size="large"/>}
            {errors && errors.map(error => <Text>{error.message}</Text>)}
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start'
                    }}>
                    {img.map(photo => <View key={photo.id} style={styles.photo}>
                        <Image
                            style={{width: 150, height: 150}}
                            source={{uri: photo.thumbnailUrl}}/>
                    </View>)}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    photo: {
        width: "50%",
        alignItems: 'center',
        marginBottom: 10
    },
});