import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://reactnative.dev/docs/assets/p_cat2.png",
                }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.dummyText}>Hello World</Text>
            <Button title="Tap me" />
            <TextInput
                defaultValue="You can type in me"
                style={{
                    height: 40,
                    borderColor: "black",
                    borderWidth: 2,
                    textAlign: "center",
                    width: 300,
                    margin: 16,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    dummyText: {
        margin: 16,
        borderWidth: 2,
        borderColor: "red",
        padding: 10,
    },
});
