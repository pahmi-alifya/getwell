import React from "react"
import { Link, Tabs } from "expo-router"
import { Image, Pressable, StyleSheet, View } from "react-native"

import Colors from "@/constants/Colors"
import { useColorScheme } from "@/components/useColorScheme"
import { useClientOnlyValue } from "@/components/useClientOnlyValue"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#25B2A6",
        tabBarInactiveTintColor: "#A2ABAC",
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.bgIcon : ""}>
              <MaterialCommunityIcons
                name="home-variant"
                size={28}
                color={color}
              />
            </View>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("@/assets/images/nav.png")}
              style={{ height: 50, width: 50, marginTop: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="phr"
        options={{
          title: "PHR",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.bgIcon : ""}>
              <MaterialCommunityIcons
                name="heart-pulse"
                size={28}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  bgIcon: {
    height: 51,
    width: 51,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
})
