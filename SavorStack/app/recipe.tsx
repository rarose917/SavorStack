import { View, Text, TextInput } from "react-native";
// import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Recipe() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">
      <Text className="text-5xl font-extrabold text-primary text-center py-8">
        Create a Recipe
      </Text>
      <TextInput
        placeholder="Title"
        className="border border-amber-700 bg-amber-50 p-3 rounded-md mb-4 py-4"
      />
      <TextInput
        placeholder="Description"
        className="border border-amber-700 bg-amber-50 p-3 rounded-md mb-4 py-4"
      />
      <TextInput
        placeholder="Nutrional Information"
        className="border border-amber-700 bg-amber-50 p-3 rounded-md mb-4 py-4"
      />
      <TextInput
        placeholder="Ingredients"
        className="border border-amber-700 bg-amber-50 p-3 rounded-md mb-4 py-4"
      />
      <TextInput
        placeholder="Instructions"
        className="border border-amber-700 bg-amber-50 p-3 rounded-md mb-4 py-4"
      />
      <Text className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl">Submit</Text>
      <Link href="/" className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"> Back to Home</Link>
    </View>
  );
}