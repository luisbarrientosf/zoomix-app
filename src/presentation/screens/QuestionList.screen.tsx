import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { getQuestions } from "../../infrastructure/redux/actions/getQuestions.actions";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { QuestionCardCarousel } from "../../presentation/components/QuestionCardCarousel/QuestionCardCarousel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../presentation/navigation/StackNavigator";


interface Props extends NativeStackScreenProps<StackParams, "QuestionList"> {}

export const QuestionListScreen: React.FC<Props> = ({ route, navigation }) => {
  const { category } = route.params;
  const loading = useAppSelector(state => state.getQuestions.loading);
  const questions = useAppSelector(state => state.getQuestions.value);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      { loading && <Text>Loading...</Text> }
      { !loading && (questions !== null && questions.length > 0) && (
        <>
          <View style={styles.header}>
            <FontAwesome
              onPress={() => navigation.pop()}
              name={"arrow-left"}
              size={28}
              color={"#AAAAAA"}
            />
          </View>
          <QuestionCardCarousel data={questions}/>
        </>
      )}

      <Button
        title="Reload questions"
        onPress={() => dispatch(getQuestions(category))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 16
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
  }
});