import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenParams = {
  navigation: any;
}

export const HomeScreen = ({ navigation }: HomeScreenParams) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Zoomix</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Personal"
          onPress={() => navigation.navigate("QuestionList", { category: "personal" })}
        />
        <Button
          title="Hypothetical"
          onPress={() => navigation.navigate("QuestionList", { category: "hypothetical" })}
        />
        <Button
          title="+18"
          onPress={() => navigation.navigate("QuestionList", { category: "+18"})}
        />
        <Button
          title="All"
          onPress={() => navigation.navigate("QuestionList", { category: "all"})}
        />
        <Button
          title="My Questions"
          onPress={() => navigation.navigate("MyQuestions")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12
  },
  title: {
    fontWeight: "600",
    fontSize: 42,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center"
  },
  buttonsContainer: {
    marginTop: 40,
    height: 260,
    justifyContent: "space-between"   
  }
});