import React from "react"
import { Image, ScrollView, StyleSheet, View } from "react-native"

import { Text } from "@/components/Themed"
import { LinearGradient } from "expo-linear-gradient"
import { Feather } from "@expo/vector-icons"
import ResultCard from "@/components/ResultCard"
import BodySystem from "@/components/BodySystem"
import ProfileCard from "@/components/ProfileCard"

export default function TabPHRScreen() {
  return (
    <>
      <View style={styles.stickyHeader}>
        <LinearGradient
          colors={["#1F978D", "#25B2A6"]}
          style={styles.headerContainer}
        >
          <View style={styles.stickyContent}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.bodyImage}
                resizeMode="contain"
              />
              <Text style={styles.logo}>getwell</Text>
            </View>
            <View style={styles.profileSection}>
              <Feather name="bell" size={24} color="white" />
              <View style={styles.profileContainer}>
                <Image
                  source={{
                    uri: "https://avatar.iran.liara.run/public/boy?username=Ash",
                  }}
                  style={styles.profileImage}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerBackground}>
          <Text style={styles.titleText}>Personal Health Record</Text>
        </View>

        {/* Konten Lainnya */}
        <ProfileCard />
        <ResultCard />
        <BodySystem />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
    height: 70,
    backgroundColor: "transparent",
  },
  headerContainer: {
    flex: 1,
    height: 80,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  stickyContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  bodyImage: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 50,
    marginLeft: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerBackground: {
    backgroundColor: "#25B2A6",
    height: 200,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleText: {
    textAlign: "center",
    top: -70,
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    zIndex: 9,
  },
})
