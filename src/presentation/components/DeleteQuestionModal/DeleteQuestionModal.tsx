import React, { FC, useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Question } from "../../../domain/entities/question.entity";
import { User } from "../../../domain/entities/user.entity";
import { deleteQuestion } from "../../../infrastructure/redux/actions/deleteQuestion.actions";
import { useAppDispatch, useAppSelector } from "../../../infrastructure/redux/hooks";

interface DeleteQuestionModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  question: Question;
  user: User;
}

export const DeleteQuestionModal: FC<DeleteQuestionModalProps> = ({ question, user, isVisible, setIsVisible }) => {
  const { loading, value, error } = useAppSelector(state => state.deleteQuestion);

  const deleteButtonPending = <Text style={styles.deleteText}>Delete</Text>;
  const deleteButtonLoading = <Text style={styles.deleteText}>Loading...</Text>;
  const deleteButtonSuccess = <Text style={styles.deleteText}>Deleted :)</Text>;

  const [deleteButtonContent, setDeleteButtonContent] = useState(deleteButtonPending);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(loading){
      setDeleteButtonContent(deleteButtonLoading);
    } else {
      if(value !== null) {
        setDeleteButtonContent(deleteButtonSuccess);
        const id = setTimeout(() => setIsVisible(false), 1200);
        setTimeoutId(id);
      } else {
        setDeleteButtonContent(deleteButtonPending);
      }
    }
  }, [loading, value, error]);

  const hideModal = () => {
    if(timeoutId){
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <Pressable
        style={styles.background}
        onPress={hideModal}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.title}>Are you sure?</Text>
            <Text style={styles.questionText}>{question.question}</Text>
            <Text style={styles.warningText}>This action will delete this question from your saved questions.</Text>
      
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => dispatch(deleteQuestion(question.id, user.id))}
                disabled={loading}
              >
                { deleteButtonContent }
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={hideModal}
                disabled={loading}
              >
                <Text style={styles.cancelText}>Cancel</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    zIndex: 0,
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 26,
    paddingHorizontal: 26,
    elevation: 10,
    zIndex: 1
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center"
  },
  warningText: {
    textAlign: "center",
    color: "#666666",
    fontWeight: "300",
    fontSize: 16
  },
  questionText: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    color: "#222222",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  deleteButton: {
    borderRadius: 50,
    padding: 10,
    width: "46%",
    backgroundColor: "red",
    elevation: 1
  },
  cancelButton: {
    borderRadius: 50,
    padding: 10,
    width: "46%",
    backgroundColor: "#EFEFEF",
    elevation: 1
  },
  deleteText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "600"
  },
  cancelText: {
    textAlign: "center",
    color: "#777777",
    fontSize: 15,
    fontWeight: "600"
  }
});