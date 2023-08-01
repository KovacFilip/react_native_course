import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export const GoalInput = ({ addGoalHandler, visible, hideModal }) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (text) => {
        setEnteredGoalText(text);
    };

    const addGoal = () => {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText("");
        hideModal();
    };

    const cancelAddGoal = () => {
        setEnteredGoalText("");
        hideModal();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={cancelAddGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "100%",
        marginRight: 8,
        height: 35,
        paddingLeft: 10,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
