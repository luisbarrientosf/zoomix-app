import { Question } from "../../../domain/entities/question.entity";
import React, { FC, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from "react-native";
import { QuestionCard } from "../QuestionCard/QuestionCard";

const { width } = Dimensions.get("window");
const ITEM_LENGTH = width * 0.8;
const PADDING = (width - ITEM_LENGTH) / 2;
const TRANSLATE_Y = 16;

interface QuestionCardCarouselProps {
  data: Question[];
}

export const QuestionCardCarousel: FC<QuestionCardCarouselProps> = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<Question>>(null);

  const AnimatedQuestionCard: ListRenderItem<Question> = ({ item, index }) => {
    const inputRange = [
      (index - 1) * ITEM_LENGTH,
      (index ) * ITEM_LENGTH,
      (index + 1) * ITEM_LENGTH,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -TRANSLATE_Y, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={{
          width: ITEM_LENGTH,
          transform: [{translateY}],
        }}>
        <QuestionCard question={item} />
      </Animated.View>
    );
  };


  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={AnimatedQuestionCard}
      contentContainerStyle={styles.flatListContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      disableIntervalMomentum
      decelerationRate="fast"
      snapToInterval={ITEM_LENGTH}
      snapToAlignment="start"
      scrollEventThrottle={16}
      renderToHardwareTextureAndroid
      onScroll={
        Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: "center",
    paddingLeft: PADDING,
    paddingRight: PADDING,
  }
});