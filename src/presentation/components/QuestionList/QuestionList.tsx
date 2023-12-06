import { Question } from "../../../domain/entities/question.entity";
import React, { FC, useState } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DeleteQuestionModal } from "../DeleteQuestionModal/DeleteQuestionModal";

const width = Dimensions.get("screen").width - 26;

interface QuestionListProps {
  data: Question[];
}

export const QuestionList: FC<QuestionListProps> = ({ data }) => {
  const [questionPressed, setQuestionPressed] = useState<Question | null>(null);
  const [isDeleteQuestionModalOpen, setIsDeleteQuestionModalOpen] = useState<boolean>(false);

  const QuestionRow: ListRenderItem<Question> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.rowCard}
        onPress={() => {
          setQuestionPressed(item);
          setIsDeleteQuestionModalOpen(true);
        }}
      >
        <Text style={styles.rowTitle}>
          {item.question}
        </Text>
        <Text style={styles.rowCategory}>
          {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={QuestionRow}
          disableIntervalMomentum
          decelerationRate="fast"
          scrollEventThrottle={16}
          renderToHardwareTextureAndroid
          scrollEnabled
          scrollToOverflowEnabled
        />
      </View>
      <DeleteQuestionModal
        data={questionPressed}
        isVisible={isDeleteQuestionModalOpen}
        setIsVisible={setIsDeleteQuestionModalOpen}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 420
  },
  rowCard: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width,
    margin: 1,
    marginBottom: 8,
    elevation: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
    marginBottom: 6,
  },
  rowCategory: {
    color: "#5A5A5A"
  }
});