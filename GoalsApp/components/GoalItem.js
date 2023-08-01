import { Pressable, StyleSheet, Text, View } from "react-native";

export const GoalItem = ({ text, index, onDeleteItem }) => {
    return (
        <View key={index} style={styles.goal}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.pressedItem : "")}
                onPress={() => onDeleteItem(index)}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goal: {
        margin: 10,
        backgroundColor: "#3A86FF",
        borderRadius: 6,
    },
    goalText: {
        padding: 10,
        color: "white",
        fontWeight: "bold",
    },
    pressedItem: {
        opacity: 0.5,
    },
});
