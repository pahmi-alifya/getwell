import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native"
import React, { useMemo, useRef, useState } from "react"
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"

const { width, height } = Dimensions.get("window")

const DATA = [
  {
    id: "1",
    label: "Cardiovascular",
    src: require("@/assets/images/body.png"),
  },
  { id: "2", label: "Digestive", src: require("@/assets/images/body.png") },
  { id: "3", label: "Endocrine", src: require("@/assets/images/body.png") },
  { id: "4", label: "Nervous", src: require("@/assets/images/body.png") },
  { id: "5", label: "Respiratory", src: require("@/assets/images/body.png") },
  { id: "6", label: "Immune", src: require("@/assets/images/body.png") },
]

const BodySystem = () => {
  const flatListRef = useRef<FlatList>(null)
  const bottomSheetRef = useRef(null)
  const [selectedTab, setSelectedTab] = useState(0)

  const snapPoints = useMemo(() => [height * 0.6, height * 0.3], [])

  const handleItemClick = (index: number) => {
    setSelectedTab(index)
    flatListRef.current?.scrollToIndex({ index, animated: true })
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x
    const newIndex = Math.round(offsetX / width)

    if (newIndex !== selectedTab) {
      setSelectedTab(newIndex)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {DATA.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                selectedTab === index && styles.selectedTab, // Kondisi untuk tab yang dipilih
              ]}
              onPress={() => handleItemClick(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === index && styles.selectedTabText,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.image} />
        )}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetScrollView>
          <View style={styles.bottomSheetContent}>
            <Text style={styles.sectionTitle}>Cardiovascular</Text>
            <Text style={styles.statusBadge}>Need Improvement</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, styles.cell]}>
                  Pemeriksaan
                </Text>
                <Text style={[styles.tableHeader, styles.cell]}>Hasil MCU</Text>
                <Text style={[styles.tableHeader, styles.cell]}>
                  Range Normal
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.cell}>Cholesterol LDL</Text>
                <Text style={[styles.cell, { color: "red" }]}>140 mg/dL</Text>
                <Text style={styles.cell}>90-130 mg/dL</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.cell}>Glucose</Text>
                <Text style={[styles.cell, { color: "red" }]}>213 mg/dL</Text>
                <Text style={styles.cell}>90-150 mg/dL</Text>
              </View>
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerHeader: {
    padding: 10,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
  },
  selectedTab: {
    backgroundColor: "#e0f7f3",
    borderColor: "#20c997",
    borderWidth: 1,
  },
  tabText: {
    color: "#888",
    fontSize: 14,
  },
  selectedTabText: {
    color: "#20c997",
  },
  image: {
    width: width,
    height: height * 0.5,
    resizeMode: "contain",
  },
  bottomSheetBackground: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.1)",
  },
  handleIndicator: {
    backgroundColor: "#ccc",
    height: 4,
    width: 40,
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 8,
  },
  bottomSheetContent: {
    backgroundColor: "white",
    padding: 20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  statusBadge: {
    backgroundColor: "#ffcccc",
    color: "red",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  table: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
})

export default BodySystem
