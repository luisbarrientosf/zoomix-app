import { Question } from "../../../domain/entities/question.entity";
import React, { FC } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";

const width = Dimensions.get("screen").width - 26;

interface QuestionListProps {
  data: Question[];
}

export const QuestionList: FC<QuestionListProps> = ({ data }) => {
  
  const QuestionRow: ListRenderItem<Question> = ({ item }) => {
    return (
      <View style={styles.rowCard}>
        <Text style={styles.rowTitle}>
          {item.question}
        </Text>
        <Text style={styles.rowCategory}>
          {item.category}
        </Text>
      </View>
    );
  };

  return (
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