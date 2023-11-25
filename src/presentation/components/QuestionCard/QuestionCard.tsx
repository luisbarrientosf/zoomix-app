import { FC } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { Question } from "../../../domain/entities/question.entity";
// import { useAppDispatch } from "infrastructure/redux/hooks";

const { width } = Dimensions.get("window");

type QuestionCardProps = {
  question: Question;
}

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  // const dispatch = useAppDispatch();

  return (
    <View style={styles.questionCardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {question.question}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Like"
          onPress={() => { /* dispatch(likeQuestion(user.id, question.id)) */ }}
        />
        <Button
          title="Save"
          onPress={() => { /* dispatch(saveQuestion(user.id, question.id)) */ }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionCardContainer: {
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eaeaea",
    width: width - 110,
    height: width - 110,
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(250, 170, 170, 0.5)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
  },
  buttonsContainer: {
    flexDirection: "row",
    borderTopColor: "#eaeaea",
    borderTopWidth: 1,
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 8
  }
});