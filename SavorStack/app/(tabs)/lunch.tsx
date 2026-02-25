import { View, Text } from "react-native";
import { Link } from 'expo-router'

export default function Info() {
  return (
   <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-4xl font-extrabold text-primary text-center tracking-widest">
        Lunch Recipes
      </Text>
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          Quesadilla
        </Text>

        <Text className="text-lg text-primary mt-2">
          Tortilla + cheese in a pan is basically foolproof. Add leftovers if you want.
           <ul>
               Ingredients:
            </ul>
            <ul>
                Instructions:
            </ul>
        </Text>
      </View>

      {/* Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          Chicken Rice Bowl
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
      {/* Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
         Pasta Salad
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
           Cold, filling, and no cooking if you buy it ready. Good lazy lunch option.
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