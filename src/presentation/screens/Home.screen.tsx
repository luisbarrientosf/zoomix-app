import { Button, Text, View } from "react-native";

type HomeScreenParams = {
  navigation: any;
}

export const HomeScreen = ({ navigation }: HomeScreenParams) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Select your category:</Text>
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
    </View>
  );
};