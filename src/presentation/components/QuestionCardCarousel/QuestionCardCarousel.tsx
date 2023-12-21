import { Question } from "../../../domain/entities/question.entity";
import React, { FC, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ImageURISource,
  ListRenderItem,
  StyleSheet,
  View,
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

  const getInputRange = (index: number) => {
    return [
      (index - 1) * ITEM_LENGTH,
      (index ) * ITEM_LENGTH,
      (index + 1) * ITEM_LENGTH,
    ];
  };

  const AnimatedQuestionCard: ListRenderItem<Question> = ({ item, index }) => {
    const inputRange = getInputRange(index);
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

  interface AnimatedBackgroundProps {
    item: ImageUri;
    index: number;
  }

  interface ImageUri {
    id: string;
    uri: ImageURISource;
  }

  const AnimatedBackground: FC<AnimatedBackgroundProps> = ({ item, index }) => {
    const inputRange = getInputRange(index);
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });
    
    return(
      <Animated.Image
        source={item.uri}
        resizeMode={"contain"}
        style={[
          StyleSheet.absoluteFillObject,
          { opacity }
        ]}
      />
    );
  };

  const images: ImageUri[] = [
    { id: "id1", uri: require("../../assets/backgrounds/wallhaven-8owy7o.png") },
    { id: "id2", uri: require("../../assets/backgrounds/wallhaven-j8oo6m.png") },
    { id: "id3", uri: require("../../assets/backgrounds/wallhaven-eyz75k.png") },
  ];

  return (
    <>
      <View style={styles.background}>
        { images.map((item,index) => 
          <AnimatedBackground 
            key={item.id}
            item={item} 
            index={index}
          />
        )}
      </View>
      
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
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: "center",
    paddingLeft: PADDING,
    paddingRight: PADDING,
  },
  background: {
    position: "absolute",
    top: 0,
    left:0,
    width: "100%", 
    height: "100%"
  }
});