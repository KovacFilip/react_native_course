import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
    const [listOfGoals, setListOfGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        setListOfGoals((prevState) => [
            ...prevState,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    };

    const deleteGoalHandler = (index) => {
        setListOfGoals((prevState) =>
            prevState.filter((item) => item.id !== index)
        );
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={listOfGoals}
                    renderItem={(itemData) => (
                        <GoalItem
                            onDeleteItem={deleteGoalHandler}
                            index={itemData.item.id}
                            text={itemData.item.text}
                        />
                    )}
                />
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
    goalsContainer: {
        flex: 5,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
});
