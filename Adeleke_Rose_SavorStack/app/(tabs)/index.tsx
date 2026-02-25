import { View, Text, Pressable } from "react-native";
// import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-5xl font-extrabold text-primary text-center ">
        Welcome to Savor Stack!
      </Text>

      <Text className="text-3xl text-secondary text-center mt-3 italic py-8">
        From Pantry to plate, Savor Stack offers a personalized recipes based off your current pantry ingredients!
      </Text>

      <Text className=" text-secondary align-middle md:align-top text-center text-2xl  py-6"> 
        <Link href="/recipe"> Create Your Own Recipe</Link>
      </Text>
    </View>
  );
}