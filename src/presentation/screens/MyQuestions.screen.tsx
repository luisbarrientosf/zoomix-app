import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { getMyQuestions, getMyQuestionsInit } from "../../infrastructure/redux/actions/getMyQuestions.actions";
import { useAppDispatch, useAppSelector} from "../../infrastructure/redux/hooks";
import { QuestionList } from "../components/QuestionList/QuestionList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../presentation/navigation/StackNavigator";


interface Props extends NativeStackScreenProps<StackParams, "MyQuestions"> {}

export const MyQuestionsScreen: React.FC<Props> = ({ navigation }) => {
  const loading = useAppSelector(state => state.getMyQuestions.loading);
  const questions = useAppSelector(state => state.getMyQuestions.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(questions === null && loading === false) {
      dispatch(getMyQuestions("userId"));
    }
    return () => {
      dispatch(getMyQuestionsInit());
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Questions</Text>
        <FontAwesome
          onPress={() => navigation.pop()}
          name={"arrow-left"}
          size={28}
          color={"#AAAAAA"}
        />
      </View>
        
      { questions !== null ? (
        <QuestionList data={questions}/>
      ) : (
        <Text>Loading...</Text>
      )} 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
  }
});