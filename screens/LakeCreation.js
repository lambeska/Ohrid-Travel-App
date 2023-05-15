import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Lake } from "../assets";

const LakeCreation = () => {
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
          <Image source={Lake}
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
            <Text className="text-[#428288] text-[30px] font-bold">Myths about the creation of Lake Ohrid</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            The fact that Lake Ohrid is protected by UNESCO is proof that we are talking about a serious natural and unique beauty. If we remain reasonable, we should thank Nature for this creature. However, if we go a little bit more imaginative, we can discuss further whose “fault” it is for the formation of this jewelry like water surface.
          </Text>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            There are several legends about the way the lake was created. Here is one of the legends about the perfect lake.
          </Text>

          <View className="mt-6">
            <Text className="text-[#428288] text-[20px] font-bold">The myth with the flower fields</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            Back then, where Lake Ohrid peacefully existed, there were beautiful flower fields where everyone around was proud. Ohrid people took special care of their fields by watering them with the special water. This water was coming from the water well and everyone in the town had to be very careful while using it. After use, one should cover the well with a stone slab, so that the water will not tip over in a huge amount and drown the flowers. People believed that when a young girl is watering the field, the flowers became even more beautiful. That was a tradition-every day a different girl gets ‘’the honor’’ or the task to water the field. The instructions were strict and constantly repeated. After a certain amount of water, the girl had to cover the well. One girl got amazed by a boy who came and simply forgot to cover the well, as we can all expect. During the night the water came out and covered the beautiful flowers. Today, if you are lucky to be near the surface of this beautiful lake, you can have exactly the feeling of drowning in an infinite flower field which is gardened with beauty and youth while it’s covered with water because of love sparks.
          </Text>

          <View className="mt-6">
            <Text className="text-[#428288] text-[20px] font-bold">The myth with the dragon</Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
            The legend of Ohrid speaks of a dragon who stood in the middle of the lake, consuming all the small boats that passed by. Only a huge boat of four or five tons would be brave enough and might succeed to cross the lake, otherwise the boat would disappear. Many people drown in Lake Ohrid. No one can give a good enough reason. It happens that for a moment the lake looks very calm and peaceful, and people take a ride in their boat or go to fish. But suddenly the boat disappears and no one survives. It has happened to people who knew how to swim very well—suddenly they are stuck somewhere and the lake keeps them. But, despite the strange disappearance and death of many people in Lake Ohrid, it always gives back the dead body a few days later. No one is unaccounted for. When something bad happens, the old people living by the lake say: “Don’t worry, the lake will bring the body to the shore.” So the lake is bad and good to the end.
          </Text>

          <View className="mt-6">
            <Text className="text-[#428288] text-[20px] font-bold">Myth about the city Struga</Text>
          </View>

          <Text className="mt-4 mb-10 tracking-wide text-[16px] font-semibold text-[#97A6AF] text-justify">
          There is a similar legend for Struga. When God created Ohrid Lake, he said: “I created the most beautiful place in the world, but people are too sinful to live in peace on the banks of this lake. So, I will send a monster. Nobody knew what the monster looked like, but all were all scared and no one had the courage to live next to the lake. One day a young man named Struga came to the lake and dived into the waters, seeking to confront the monster. It was a fight to the death. In the end, the monster won the battle and ate the young man. After this fight, people decided to challenge the monster. They had found the courage to set up a village on the lake shore, naming him in honor of the hero, Struga.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LakeCreation;