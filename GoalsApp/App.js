import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [listOfGoals, setListOfGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        setListOfGoals((prevState) => [
            ...prevState,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    };

    const viewModal = () => {
        setModalIsVisible(true);
    };

    const hideModal = () => {
        setModalIsVisible(false);
    };

    const deleteGoalHandler = (index) => {
        setListOfGoals((prevState) =>
            prevState.filter((item) => item.id !== index)
        );
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput
                addGoalHandler={addGoalHandler}
                hideModal={hideModal}
                visible={modalIsVisible}
            />
            <Button title="Add New Goal" onPress={viewModal} color="#3A86FF" />
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
