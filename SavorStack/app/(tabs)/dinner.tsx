import { View, Text, ScrollView, Pressable } from "react-native";
// import { router } from "expo-router";
import { Link } from 'expo-router'

export default function Info() {
  return (
   <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-4xl font-extrabold text-primary text-center tracking-widest">
        Dinner Recipes
      </Text>

      {/* Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          Fried Rice
        </Text>

        <Text className="text-lg text-primary mt-2">
          Leftover rice turns into dinner fast. Toss everything in a pan and call it done.
            <ul>
               Ingredients:
            </ul>
            <ul>
                Instructions:
            </ul>
        </Text>
        <Link href="https://www.thefrenchcookingacademy.com/recipes/french-best-recipe-for-crepes"> Go to Recipe </Link>
      </View>

      {/* Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          Sheet Pan Chicken + Potatoes
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
            A chicken rice bowl is a reliable balanced meal with carbs, protein, and vegetables. It works well for meal prep and easy reheating.
             <ul>
               Ingredients:
            </ul>
            <ul>
                Instructions:
            </ul>
          </Text>
        </View>
      </View>
      {/*Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
         Baked Ziti
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
           Boil pasta, mix with jar sauce and cheese, bake. It’s minimal effort but feels like real dinner.
            <ul>
               Ingredients:
            </ul>
            <ul>
                Instructions:
            </ul>
          </Text>
        </View>
      </View>
      <Link href="/" className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"> Back to Home</Link>

    </View>
  );
}