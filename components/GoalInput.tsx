import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
} from "react-native";

type GoalInputProps = {
  input: (text: string) => void;
  visible?: boolean;
  onCancel?: () => void;
};

const GoalInput = ({ input, visible, onCancel }: GoalInputProps) => {
  // State to hold the current input text
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  // function goal input handler
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    const text = enteredGoal.trim();
    if (!text) return; // prevent adding empty goals
    input(text);
    // empty input field after adding a goal
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Type here..."
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            android_ripple={{ color: "#640233" }}
            onPress={addGoalHandler}
          >
            <Text style={{ color: "#ffffff", textAlign: "center", padding: 8 }}>
              Add Goal
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            android_ripple={{ color: "#640233" }}
            onPress={onCancel}
          >
            <Text style={{ color: "#ffffff", textAlign: "center", padding: 8 }}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 40,
    width: "90%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 20,
    color: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    // optional: to make the image circular
    borderRadius: 50,
  },
});
