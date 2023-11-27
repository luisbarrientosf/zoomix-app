import React, { FC, useRef, useState, useEffect } from "react";
import { Animated, Easing, Pressable } from "react-native";
import LottieView from "lottie-react-native";

type LikeButtonProps = {
  onPress: () => void;
  isLiked: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({ onPress, isLiked }) => {
  const animationProgress = useRef(new Animated.Value(0));
  // const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: isLiked ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isLiked]);

  return (
    <Pressable
      style={{ height: 48, width: 48 }}
      onPress={onPress}
    >
      <LottieView
        source={require("../../assets/lotties/like.json")}
        progress={animationProgress.current}
        style={{ height: 48, width: 48 }}
      />
    </Pressable>
  );    
};