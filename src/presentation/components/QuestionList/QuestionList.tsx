import { Question } from "../../../domain/entities/question.entity";
import React, { FC, useRef } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";

const width = Dimensions.get("screen").width;

interface QuestionListProps {
  data: Question[];
}

const QuestionList: FC<QuestionListProps> = ({ data }) => {
  
  const QuestionRow: ListRenderItem<Question> = ({ item }) => {
    return (
      <View style={{
        backgroundColor: "white",
        borderRadius: 15,
        paddingVertical: 5,
        height: 50,
        width: width,
        marginBottom: 5,
      }}>
        <Text>
          {item.question}
        </Text>
        
      </View>
    );
  };

  return (
    <View style={{height: 300}}>
      <FlatList
        data={data}
        renderItem={QuestionRow}
        contentContainerStyle={styles.flatListContainer}
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

export default QuestionList;

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: "center",
    width,
  }
});