import { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Question } from "../../../domain/entities/question.entity";
import { useAppDispatch } from "../../../infrastructure/redux/hooks";
import { likeQuestion } from "../../../infrastructure/redux/actions/likeQuestion.actions";
import { saveQuestion } from "../../../infrastructure/redux/actions/saveQuestion.actions";
import { LikeButton } from "../Buttons/LikeButton";
import { SaveButton } from "../Buttons/SaveButton";

const { width } = Dimensions.get("window");

type QuestionCardProps = {
  question: Question;
}

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.questionCardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {question.question}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <LikeButton 
          onPress={() => dispatch(likeQuestion(question.id, ""))}
          isLiked={question.isLiked}
        />
        <SaveButton 
          onPress={() => dispatch(saveQuestion(question.id, ""))} 
          isSaved={question.isSaved}
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
    width: width - 110,
    height: width - 110,
    elevation: 1
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
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