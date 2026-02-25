import { View, Text, Pressable } from "react-native";
// import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-5xl font-extrabold text-primary text-center tracking-widest">
        Welcome to Savor Stack!
      </Text>

      <Text className="text-lg text-secondary text-center mt-3 italic">
        From Pantry to plate, Savor Stack offers a personalized recipes based off your current pantry ingredients!
      </Text>
      <Text className="align-middle md:align-top text-center text-2xl font-extrabold"> 
        <Link href="/breakfast" > View Breakfast Recipes | </Link>
        <Link href="/lunch" > View Lunch Recipes |</Link>
        <Link href="/dinner"> View Dinner Recipes |</Link>
        <Link href="/recipe"> Create Your Own Recipe</Link>
      </Text>
    </View>
  );
}