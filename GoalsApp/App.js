import { useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [listOfGoals, setListOfGoals] = useState([]);

    const goalInputHandler = (goal) => {
        setEnteredGoalText(goal);
    };

    const addGoalHandler = () => {
        setListOfGoals((prevState) => [...prevState, enteredGoalText]);
        setEnteredGoalText("");
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal"
                    onChangeText={(text) => goalInputHandler(text)}
                    value={enteredGoalText}
                />
                <Button title="Add goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={listOfGoals}
                    renderItem={(itemData) => (
                        <View key={itemData.index} style={styles.goal}>
                            <Text style={styles.goalText}>{itemData.item}</Text>
                        </View>
                    )}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "70%",
        marginRight: 8,
        height: 35,
        paddingLeft: 10,
    },
    goalsContainer: {
        flex: 5,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    goal: {
        margin: 10,
        padding: 10,
        backgroundColor: "#3A86FF",
        borderRadius: 6,
    },
    goalText: {
        color: "white",
        fontWeight: "bold",
    },
});
