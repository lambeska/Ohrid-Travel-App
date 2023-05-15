import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { City } from "../assets";

const OhridCity = () => {
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
                    <Image source={City}
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
                        <Text className="text-[#428288] text-[30px] font-bold">City of Ohrid</Text>
                    </View>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        Ohrid is one of the most ancient settlements on the European continent. The shores have been inhabited since prehistoric times. The first signs of humans were found at Dolno Trnovo and the Bay of Bones at Gradiste, both dating back to the Bronze Age, 12 000-7000 BC. The latter was reconstructed in modern times, but some related artifacts can be found on display at the Ohrid Museum.
                    </Text>

                    <View className="mt-6">
                        <Text className="text-[#428288] text-[20px] font-bold">Brief History</Text>
                    </View>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        After the Bronze Age, Brigians, Ohrygians and Enhelians lived on the lake’s shores. These tribed were later substituted by the Desaretes, who made their capital city Lychnidos, located in the heart of the Ohrid we see today. Lychnidos was founded and named by Cadmus the Phoenician, who created Thebes in the 14th century. He abdicated to favor his grandson, traveling to the North to fight for the Enhelians. It is said that when Lychnidos was founded, water levels were much lower compared to its level today.
                    </Text>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        In the 4th century BC the area was conquered by a Macedonian ruler called Philip II. In the late second century BC, Romans overcame the Lake Ohrid area. The region was further developed in Roman times, mostly by travelers who journeyed on the Via Egnatia, which passed through Lychnidos and Radoza. These travelers also brought Christian preachers with them.
                    </Text>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        In the 5th century AD the first basilicas were built in Lychnidos. Rumor has it that there were 12 of them, but only 6 have been discovered by archaeologists, of which the monastery of Saint Kliment at Plaosnik is the largest.
                    </Text>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        In 879 the Slavs started referring to the area as “Ohrid”, originating most probably from the words “vo hrid”, meaning “on a hill”.
                    </Text>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        In the 10th century Tsar Samoil moved his empire’s capital to Ohrid, also making it the head of its own autocephalous patriarchate. In 1014 he was defeated by Basilius II, who introduced Byzantine rule over Lake Ohrid. Even though the patriarchate of Ohrid was reduced to archbishopric during the Byzantine Empire, it still remained a strong religious center. At the end of the 16th century the jurisdiction of Archbishopric of Ohrid went as far as the Orthodox communities in Dalmati, Venice, Malta and Sicily.
                    </Text>

                    <View className="mt-6">
                        <Text className="text-[#428288] text-[20px] font-bold">Fun Fact</Text>
                    </View>

                    <Text className="mt-4 mb-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
                        Lychnidos has two different meanings in two different languages. In ancient Greek it signifies a “tower of lamps” often interpreted as “City of Light”, whilst in Phoenician it simply means “water reeds”.
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OhridCity;