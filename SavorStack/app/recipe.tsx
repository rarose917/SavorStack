import { View, Text, ScrollView, Pressable } from "react-native";
// import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Recipe() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text>
        This page will be a form for user to create a new recipe
      </Text>
      <Link href="/" className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"> Back to Home</Link>

    </View>
  );
}