import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { User } from "domain/entities/user.entity";

const user : User = { email: "test@mail.com" };

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome {user.email}</Text>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});