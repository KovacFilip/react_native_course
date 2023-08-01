import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Button,
    Image,
    Modal,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

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
        <>
            <StatusBar style="light" />
            <Modal visible={visible} animationType="slide">
                <View style={styles.inputContainer}>
                    <Image
                        source={require("../assets/images/goal.png")}
                        style={styles.image}
                    />
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
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#004F95",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#ccc",
        color: "#fff",
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
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
