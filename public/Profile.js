import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export const Profile = () => {
    return (
        <View>
            <Text style={styles.text} >Електронна пошта</Text>
            <TextInput
                style={styles.input}
                keyboardType="email-address"
            />
            <Text style={styles.text} >Пароль</Text>
            <TextInput
                style={styles.input}
                keyboardType="visible-password"
            />
            <Text style={styles.text} >Пароль (ще раз)</Text>
            <TextInput
                style={styles.input}
                keyboardType="visible-password"
            />
            <Text style={styles.text} >Прізвище</Text>
            <TextInput
                style={styles.input}
            />
            <Text style={styles.text} >Ім'я</Text>
            <TextInput
                style={styles.input}
            />
            <Button style={{margin: 20}}
                title="Зареєструватися"
                color="blue"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 10,
        height: 40,
        borderWidth: 1,
        margin: 20
    },
    text: {
        marginLeft: 20,
    },
});