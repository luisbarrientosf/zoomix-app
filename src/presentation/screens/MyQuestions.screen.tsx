import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { getMyQuestions } from "../../infrastructure/redux/actions/getMyQuestions.actions";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { QuestionList } from "../components/QuestionList/QuestionList";


type MyQuestionsScreenParams = {
  navigation: any;
}

export const MyQuestionsScreen = ({ navigation } : MyQuestionsScreenParams) => {
  const loading = useAppSelector(state => state.getMyQuestions.loading);
  const questions = useAppSelector(state => state.getMyQuestions.value);
  const dispatch = useAppDispatch();

  useEffect(()=> {
    if(questions === null) {
      dispatch(getMyQuestions("userId"));
    }
  });

  if(loading){
    return <Text>Loading...</Text>;
  }
  
  if(!loading && (questions !== null && questions.length > 0)) {
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
          
        <QuestionList data={questions}/>
      </SafeAreaView>
    );
  }
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