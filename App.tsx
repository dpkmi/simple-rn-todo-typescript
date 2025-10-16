import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

type Goal = {
  id: string;
  text: string;
};

export default function App() {
  // modal state
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  // state to hold the list of goals
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  // function to handle opening the modal
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  // function to handle adding a new goal
  const addGoalHandler = (enteredGoal: string) => {
    const text = enteredGoal.trim();
    if (!text) return; // prevent adding empty goals
    // add new goal to the list with a unique id
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Date.now().toString() + Math.random().toString(36).slice(2), text },
    ]);
    endAddGoalHandler();
  };

  // function to delete on press of a goal item
  const deleteGoalHandler = (id: string) => {
    // remove the goal with the specified id from the list
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#210644"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            input={addGoalHandler}
            visible={modalIsVisible}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem
                item={item}
                text={item.text}
                onDelete={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
    flexDirection: "column",
  },
});
