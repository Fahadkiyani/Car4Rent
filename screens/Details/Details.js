import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  SectionList,
  ScrollView,
  SafeAreaView,
} from "react-native";

// icons import
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Details(props) {
  let properties = props.navigation.state.params.properties;
  let images = properties.image;
  console.log(properties.gear);
  // console.log(images);
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#444e"
        translucent={false}
      />

      <ScrollView style={styles.container}>
        {/* <Text style={{ marginTop: 80 }}>Bellow is the image</Text> */}
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "white",
          }}
        >
          {images.map((image, index) => {
            // console.log('image result', image);
            return (
              <Image
                key={index.toString()}
                source={{
                  uri: image,
                }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover",
                  // margin: 15,
                  backgroundColor: "#000",
                }}
              />
            );
          })}
        </View>
        <View style={styles.price}>
          {/* This price will be for maximum time period that a tenant will hold the car */}
          <Text style={{ fontSize: 16 }}>Rent </Text>
          <Text style={styles.priceText}>
            {" "}
            {properties.price.month} PKR/mth
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.headingContainer}>
            <Text lineBreakMode={2} style={styles.heading}>
              {properties.heading}
            </Text>
          </View>
          <View style={styles.cityContainer}>
            <Text
              style={{ color: "#999", fontFamily: "LatoRegular", marginTop: 5 }}
            >
              {properties.location}
            </Text>
          </View>

          {/* price list with renting periods */}
          <View style={styles.priceListContainer}>
            <Text style={{borderWidth:1,borderColor:'#dedede',borderBottomWidth:0,paddingVertical:10,textAlign:'center',fontSize:16,fontFamily:'LatoBold',backgroundColor:'rgba(220,220,220,0.31)'}}>Price list</Text>
            <View style={styles.priceListContentContainer}>
              <View style={styles.priceForDayContainer}>
                <Text style={styles.priceForDayText}>One Day</Text>
                <Text style={styles.priceDay}>{properties.price.day}</Text>
              </View>
              <View style={styles.priceForWeek}>
                <Text style={styles.priceForWeekText}>One Week</Text>
                <Text style={styles.priceWeek}>{properties.price.week}</Text>
              </View>
              <View style={styles.priceForMonth}>
                <Text style={styles.priceForMonthText}>One Month</Text>
                <Text style={styles.priceMonth}>{properties.price.month}</Text>
              </View>
            </View>
          </View>
          {/* engine type, gear auto or man, year , milage */}
          <View style={styles.specsContainer}>
            <View style={styles.itemOne}>
              <Ionicons name="calendar-outline" size={22} color="#999" />
              <Text style={styles.year}>{properties.year}</Text>
            </View>
            <View style={styles.itemTwo}>
              <Ionicons name="speedometer-outline" size={22} color="#999" />
              <Text style={styles.milage}>{properties.milage} Km</Text>
            </View>
            <View style={styles.itemThree}>
              <Ionicons name="color-palette-outline" size={22} color="#999" />
              {/* <MaterialIcons name="colorize" size={32} color="#999" /> */}
              <Text style={styles.color}>{properties.color}</Text>
            </View>
            <View style={styles.itemFour}>
              <MaterialCommunityIcons
                name="engine-outline"
                size={22}
                color="#999"
              />
              <Text style={styles.engineType}>{properties.engineType}</Text>
            </View>
            <View style={styles.itemFive}>
              {/* <MaterialCommunityIcons name="engine-outline" size={24} color="#999" /> */}
              <MaterialCommunityIcons
                name="car-shift-pattern"
                size={22}
                color="#999"
              />
              <Text style={styles.gear}>{properties.gear}</Text>
            </View>
          </View>
          <View style={styles.featuresContainer}>
            <Text style={styles.featuresHeading}>Features</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f9f9f9",
  },
  price: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: "rgba(240,240,240,0.51)",
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  priceText: {
    fontSize: 18,
    fontFamily: "RobotoBlack",
    color: "#333",
    // textTransform:'capitalize'
  },
  headingContainer: {
    paddingTop: 15,
    // paddingVertical: 20,
    // backgroundColor:'rgba(245,245,245,0.15)',
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#f9f9f9",
  },
  heading: {
    fontSize: 20,
    fontFamily: "LatoRegular",
    color: "#444",
    textTransform: "capitalize",
  },
  // priceListContainer
  priceListContainer: {
    display: "flex",
    flex: 1,
    maxHeight: 50,
    flexDirection: "column",
    marginTop: 20,
  },
  priceListContentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 80,
  },
  priceForDayContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  priceForDayText: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(220,220,220,0.31)",
    height: 40,
    borderColor: "#dedede",
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  priceDay: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#f8f8f8",
    height: 40,
    borderWidth:1,
    borderColor:'#dedede'
  },
  priceForWeek: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  priceForWeekText: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(220,220,220,0.31)",
    height: 40,
    borderColor: "#dedede",
    borderLeftWidth: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  priceWeek: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#f8f8f8",
    height: 40,
    borderWidth:1,
    borderColor:'#dedede',
    borderLeftWidth:0,
  },
  priceForMonth: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  priceForMonthText: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(220,220,220,0.31)",
    height: 40,
    borderColor: "#dedede",
    borderLeftWidth: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  priceMonth: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#f8f8f8",
    height: 40,
    borderWidth:1,
    borderColor:'#dedede',
    borderLeftWidth:0,
  },

  // specs Container
  specsContainer: {
    paddingVertical: 15,
    backgroundColor: "#f8f8f8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  itemOne: {
    marginRight: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemTwo: {
    marginRight: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemThree: {
    marginRight: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemFour: {
    marginRight: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemFive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  year: {
    marginTop: 2,
    fontFamily: "LatoBold",
    fontWeight: "400",
    color: "#222",
    fontSize: 12,
  },
  milage: {
    marginTop: 2,
    fontFamily: "LatoBold",
    fontWeight: "400",
    color: "#222",
    fontSize: 12,
  },
  color: {
    textTransform: "capitalize",
    marginTop: 2,
    fontFamily: "LatoBold",
    fontWeight: "600",
    color: "#222",
    fontSize: 12,
  },
  engineType: {
    textTransform: "capitalize",
    marginTop: 2,
    fontFamily: "LatoBold",
    fontWeight: "400",
    color: "#222",
    fontSize: 12,
  },
  gear: {
    textTransform: "capitalize",
    marginTop: 2,
    fontFamily: "LatoBold",
    fontWeight: "400",
    color: "#222",
    fontSize: 12,
  },
  featuresHeading: {
    paddingVertical: 15,
    backgroundColor: "#f8f8f8",
    color: "#222",
    fontFamily: "LatoBold",
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
});
