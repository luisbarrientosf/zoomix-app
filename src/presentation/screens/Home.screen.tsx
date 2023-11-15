/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Text, View } from "react-native";

type HomeParams = {
  navigation: any;
}

export const HomeScreen = ({ navigation }: HomeParams) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to QuestionList Screen"
        onPress={() => navigation.navigate("QuestionList")}
      />
    </View>
  );
};