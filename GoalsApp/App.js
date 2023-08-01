import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
    const [listOfGoals, setListOfGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        setListOfGoals((prevState) => [...prevState, enteredGoalText]);
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={listOfGoals}
                    renderItem={(itemData) => (
                        <GoalItem index={itemData.index} text={itemData.item} />
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
