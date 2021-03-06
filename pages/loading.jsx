import React from "react";
import { View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>준비중입니다...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdc453",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Loading;
