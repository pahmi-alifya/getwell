import { View, Text, StyleSheet, Image, FlatList } from "react-native"
import React from "react"
import {
  Feather,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons"

const DATA = [
  {
    id: "1",
    date: "27 Okt 22",
    result: "Hasil MCU",
    file: "PRV-01-9/213123/1",
    clinic: "Klinik Getwell",
  },
  {
    id: "2",
    date: "27 Okt 22",
    result: "Hasil MRI",
    file: "PRV-01-9/213123/2",
    clinic: "Klinik Getwell",
  },
]

type ResultCardProps = {
  date: string
  result: string
  file: string
  clinic: string
}

const ResultCard = ({ date, file, result, clinic }: ResultCardProps) => {
  return (
    <View style={styles.cardContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <FontAwesome5 name="file-medical-alt" size={24} color="#25B2A6" />
          <Text style={styles.title}>{result}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Feather name="calendar" size={16} color="#A2ABAC" />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{clinic}</Text>
          <View style={styles.resultContainer}>
            <Text>Hasil:</Text>
            <View style={styles.result}>
              <FontAwesome5 name="file-medical-alt" size={16} color="#E25151" />
              <Text style={styles.resultText}>{file}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const LaboratoryTestResult = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultCard {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9",
  },
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#efefef",
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#efefef",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginLeft: 8,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#A2ABAC",
    marginLeft: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  result: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#F7F9FA",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  profession: {
    fontSize: 14,
    color: "#A2ABAC",
    marginTop: 4,
    marginBottom: 8,
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  resultText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 8,
  },
})

export default LaboratoryTestResult
