import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"

const ProfileCard = () => {
  return (
    <View style={styles.profileCard}>
      <Image
        source={{
          uri: "https://avatar.iran.liara.run/public/boy?username=Ash",
        }}
        style={[
          styles.profileImage,
          { height: 50, width: 50, marginRight: 20 },
        ]}
      />
      <View>
        <Text style={styles.nameText}>Bayu Prabu</Text>
        <Text style={styles.detailText}>Pria • 24 thn • Golongan Darah A</Text>
        <LinearGradient
          colors={["#1F978D", "#25B2A6"]}
          start={{ x: 0.3, y: 0.5 }}
          style={styles.wellnessButton}
        >
          <Text style={styles.buttonText}>Wellness Program</Text>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: "white",
    height: 100,
    marginHorizontal: 20,
    top: -70,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
    padding: 15,
    flexDirection: "row",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  detailText: {
    fontSize: 16,
    color: "#A2ABAC",
  },
  wellnessButton: {
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    width: 120,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
})

export default ProfileCard
