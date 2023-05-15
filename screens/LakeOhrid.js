import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Ohrid } from "../assets";

const LakeOhrid = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image source={Ohrid}
            className="w-full h-72 top-5 object-cover rounded-2xl" />
          <View className="absolute flex-row inset-x-0 top-8 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
          </View>
          <View className="mt-6">
            <Text className="text-[#428288] text-[30px] font-bold">Lake Ohrid</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            The Ohrid and Prespa Lakes are the two largest in a north–south chain of tectonic basins (grabens) including the Korca basin, and Lake Ioannina in NW Greece, known as the Dessaret group. The Dessaret chain is a poorly developed rift valley. Worldwide, rift valley lakes with similarly ancient origins include Lake Baikal, Lake Titicaca, Lake Tanganyika and the Dead Sea. Most lakes have much shorter life spans as they rapidly fill with sediments. Lake Ohrid is being infilled at its north end by its modest main tributaries, but is preserved by its great depth, by continuing tectonic subsidence, and by the main inflows being by underground karstic channels from Lake Prespa carrying minimal sediment. The graben system is still tectonically active and Lake Ohrid sits in a seismogenic landscape, with many visible traces including fresh fault scarps, displaced sediment and soil sequences, stepped hillsides, and a hydrothermal field near Kosel. Moderate earthquakes are frequent, with the strongest yet measured here on 18 February 1911, with a magnitude 6.6 at a focal depth of 15 km, destroying houses but with no loss of life.
          </Text>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            Lakes rarely survive for such a long time, since they usually fill up with sediments. This process was delayed in Lake Ohrid’s case, due to its depth and small sediment inflow from its tributary streams. The Ohrid-Korca graben, at the Southern end of the lake, is still tectonically active and might compensate sedimentation by subduction. On the other hand, Lake Prespa might have dried up several times in the past as a result of its karstic underground activity. Lake Ohrid has been a center for limnological investigations for scientists since 1892.
          </Text>

          <View className="mt-6">
            <Text className="text-[#428288] text-[20px] font-bold">Origin of Lake Ohrid</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            Lake Ohrid draws almost half its water via shoreline or underwater springs from Lake Prespa which lies on the other side of Mount Galichica east of the lake. This lake is 158 meters higher in level, is almost as large as Lake Ohrid, and greatly enlarges the catchment area. The strongest spring, at Sveti Naum on the southeast coast of Lake Ohrid, has 15 outlets which spring above and 30 which rise below the water level, providing a quarter of the lake’s total inflow. It is therefore fairly free from enriching sediments and is extremely clear, with a very slow water turnover rate of 60-70 years and temperatures at depth of around 6ºC. However the catchment was enlarged by diversion of the Sateska River in the north into the lake.
          </Text>

          <View className="mt-6">
            <Text className="text-[#428288] text-[20px] font-bold">Researches and Studies</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            There have been many studies of the area’s cultural relics from the Iron Age through to late Byzantine buildings and icons. The lake has also been well studied for over 100 years and hundreds of studies published. Continuous systematic study of the lake and its water began in 1922 and was taken on by the Ohrid Hydrobiological Institute, founded in 1934, which concentrated on Ohrid trout production. In 1972 it cooperated in a limnological study supported by the Smithsonian Institution, Washington. It is now the Macedonian centre for monitoring pollution. A similar Hydrometeorological Institute with a capacity-building program for scientists has been set up in Podgradec for the Albanian part of the lake.
          </Text>

          <View className="mt-6">
            <Text className="text-[#428288] text-[20px] font-bold">Deep drilling in Lake Ohrid</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            An international research team led by the Justus Liebig University Giessen and the University of Cologne, in collaboration with BGS, gained these new insights into evolution by drilling deep into the sediments of Lake Ohrid. To study the evolutionary dynamics of Lake Ohrid since its formation, the scientists combined the environmental and climate data of a 568-meter-long sediment core with the fossil records of over 150 endemic diatom species. The data show that shortly after the formation of the lake, new species emerged within a few thousand years. Many of them died out again very quickly in the relatively small and shallow lake.
          </Text>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            The research team explains this by the fact that young lakes of small size offer many new ecological opportunities, but are also particularly sensitive to environmental changes such as fluctuations in temperature, lake level, and nutrient availability. After the lake became deeper and larger, as indicated by shifts in the geochemistry, the speciation and extinction processes slowed down dramatically.
          </Text>

          <Text className="mt-4 mb-10 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            The scientists attribute this to fewer new habitats emerging, the species richness approaching an ecological carrying capacity, and an increasing environmental and climate buffering of the lake. The finding that, in the history of Lake Ohrid, a volatile assemblage of evolutionarily short-lived species developed into a stable community of long-lived species provides a new understanding of the evolutionary dynamics in ecosystems.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LakeOhrid;