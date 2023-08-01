import { Pressable, StyleSheet, Text, View } from "react-native";

export const GoalItem = ({ text, index, onDeleteItem }) => {
    return (
        <Pressable onPress={() => onDeleteItem(index)}>
            <View key={index} style={styles.goal}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
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
