import { Question } from "../../../domain/entities/question.entity";
import React, { FC } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface DeleteQuestionModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  data: Question | null;
}

export const DeleteQuestionModal: FC<DeleteQuestionModalProps> = ({ data, isVisible, setIsVisible }) => {
  
  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <Pressable
        style={styles.background}
        onPress={() => setIsVisible(false)}
      >
        <View style={styles.container}>
          <Text>{data?.question}</Text>
          <TouchableOpacity>
            <Text>Delete from My Questions</Text>
          </TouchableOpacity>
          <Button
            title="close"
            onPress={() => setIsVisible(false)} 
          />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 30,
    elevation: 10
  }
});