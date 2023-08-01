import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (text) => {
        setEnteredGoalText(text);
    };

    const addGoal = () => {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                title="Add goal"
                onPress={addGoal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
});
