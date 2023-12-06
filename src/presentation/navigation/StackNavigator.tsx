import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home.screen";
import { QuestionListScreen } from "../screens/QuestionList.screen";
import { MyQuestionsScreen } from "../screens/MyQuestions.screen";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="QuestionList" component={QuestionListScreen} />
      <Stack.Screen name="MyQuestions" component={MyQuestionsScreen} />
    </Stack.Navigator>
  );
};
