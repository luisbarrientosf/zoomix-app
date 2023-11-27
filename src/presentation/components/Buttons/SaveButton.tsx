import React, { FC, useRef, useState, useEffect } from "react";
import { Animated, Easing, Pressable } from "react-native";
import LottieView from "lottie-react-native";

type SaveButtonProps = {
  onPress: () => void;
  isSaved: boolean;
}

export const SaveButton: FC<SaveButtonProps> = ({ onPress, isSaved }) => {
  const animationProgress = useRef(new Animated.Value(0));
  // const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: isSaved ? 1 : 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isSaved]);

  return (
    <Pressable
      style={{ height: 48, width: 48 }}
      onPress={onPress}
    >
      <LottieView
        source={require("../../assets/lotties/save.json")}
        progress={animationProgress.current}
        style={{ height: 48, width: 48 }}
      />
    </Pressable>
  );
};