import { Feather } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const Header = ({
  title,
  subTitle,
  headerRight,
}: {
  title: string
  subTitle: string
  headerRight?: React.ReactNode
}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>

      {headerRight ? (
        headerRight
      ) : (
        <View style={styles.actionsContainer}>
          <View style={styles.notificationContainer}>
            <Feather name="bell" size={24} color="#000" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>3</Text>
            </View>
          </View>
          <Image
            source={{
              uri: "https://avatar.iran.liara.run/public/boy?username=Ash",
            }}
            style={styles.profileImage}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  backButton: {
    marginRight: 8,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    fontSize: 12,
    color: "#A2ABAC",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationContainer: {
    position: "relative",
    marginRight: 16,
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FF3D00",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    fontSize: 10,
    color: "#FFF",
    fontWeight: "700",
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
})

export default Header
