import {ActivityIndicator, FlatList, ScrollView, Text, View} from "react-native";
import {HomeItem} from "./HomeItem";
import {useEffect, useState} from "react";

export const Home = () => {
    const [content, setContent] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const getInfo = () => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setContent(data.products)
            })
            .catch(error => {
                setErrors(error.response.data)
            })
            .finally(() => setLoading(false))
    }

    useEffect(getInfo, []);

    return (
        <ScrollView>
            <View>
                {loading && <ActivityIndicator size="large"/>}
                {errors && errors.map(error => <Text>{error.message}</Text>)}
                <FlatList
                    data={content}
                    renderItem={({item}) => <HomeItem item={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    );
}