import { Pressable, StyleSheet, Text, View } from "react-native";

type GoalItemProps = {
  item: { id: string };
  text: string;
  onDelete: (id: string) => void;
};

const GoalItem = ({ item, text, onDelete }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    // Android shadow
    elevation: 2,
  },

  goalText: {
    color: "black",
  },
});
