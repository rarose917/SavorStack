import { View, Text } from "react-native";
import { Link } from 'expo-router'

export default function Menu() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-4xl font-extrabold text-primary text-center tracking-widest">
        Breakfast Recipes
      </Text>
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary/30">
        <Text className="text-2xl font-bold text-primary mb-4">
          Avocado Egg Toast
        </Text>

        <Text className="text-lg text-primary mt-2">
          Creamy avocado spread over toast with a protein-rich egg makes a balanced, quick breakfast. It’s simple but keeps you full and energized.
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
          Breakfast Sandwich
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
            Egg + cheese on bread or an English muffin is filling and takes like 5 minutes. Add bacon or sausage if you want.
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
         French Toast
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
           Dip bread in egg, cook in butter, add syrup. Feels fancy but it’s very low skill.
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