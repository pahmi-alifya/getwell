import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native"
import React from "react"
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { useNavigation } from "expo-router"

const DATA = [
  {
    id: "1",
    title: "Get Doctor",
    date: "27 Okt 22",
    name: "dr. Nanda Wibowo",
    profession: "Dokter Umum",
    resultCode: "APT-20230117-0003",
    image: "https://avatar.iran.liara.run/public/boy?username=Bas",
    type: "doctor",
  },
  {
    id: "2",
    title: "Get Counseling",
    date: "14 Jul 22",
    name: "Ratih Andrini",
    profession: "Psikolog - Kesehatan mental",
    resultCode: "APT-20230117-0003",
    image: "https://avatar.iran.liara.run/public/boy?username=Pah",
    type: "counseling",
  },
]

type AppointmentCardProps = {
  title: string
  date: string
  name: string
  profession: string
  resultCode: string
  image: string
  type: string
}

const AppointmentCard = ({
  title,
  date,
  name,
  profession,
  resultCode,
  image,
  type,
}: AppointmentCardProps) => {
  const navigation = useNavigation<any>()
  const icon =
    type === "doctor" ? (
      <FontAwesome6 name="user-doctor" size={20} color="#1F978D" />
    ) : (
      <MaterialCommunityIcons
        name="head-heart-outline"
        size={20}
        color="#1F978D"
      />
    )

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("teleconsultation-result")}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          {icon}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Feather name="calendar" size={16} color="#A2ABAC" />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
          <View style={styles.resultContainer}>
            <Feather name="file-text" size={16} color="#1F978D" />
            <Text style={styles.resultText}>{resultCode}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const ElectronicMedicalRecord = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AppointmentCard {...item} />}
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
    color: "#1F978D",
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
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
  },
  resultText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 8,
  },
})

export default ElectronicMedicalRecord
