import { FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const ResultCard = () => {
  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("electronic-medical-record")}
      >
        <View style={styles.iconContainer}>
          <FontAwesome5 name="book-medical" size={24} color="#25B2A6" />
        </View>
        <View>
          <Text style={styles.title}>Hasil Konsultasi</Text>
          <Text style={styles.subtitle}>(2 hasil)</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("laboratory-test-result")}
      >
        <View style={styles.iconContainer}>
          <FontAwesome5 name="file-medical-alt" size={24} color="#E25151" />
        </View>
        <View>
          <Text style={styles.title}>Hasil Laboratorium</Text>
          <Text style={styles.subtitle}>(200 hasil)</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    top: -70,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 12,
    color: "#757575",
  },
})

export default ResultCard
