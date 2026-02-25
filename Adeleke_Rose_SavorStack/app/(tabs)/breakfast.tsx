import { View, Text } from "react-native";
import { Link } from 'expo-router'

export default function Menu() {
  return (
    <View className="flex-1 bg-cream px-6 justify-center">

      {/* Title */}
      <Text className="text-4xl font-extrabold text-primary text-center tracking-widest">
        Breakfast Recipes
      </Text>
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary">
        <Text className="text-2xl font-bold text-primary mb-4">
          Avocado Egg Toast
        </Text>
        <Text className="text-lg text-primary">
          Simpe avocado and egg recipe
        </Text>
        <Text className="text-lg text-primary mt-2">
          <Link href="https://cookieandkate.com/avocado-toast-recipe/"> Go to Recipe </Link>
        </Text>
      </View>

      {/* Card */}
      <View className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-secondary">
        <Text className="text-2xl font-bold text-primary mb-4">
          Breakfast Sandwich
        </Text>

        <View className="space-y-3">
          <Text className="text-lg text-primary">
            Egg + cheese on bread or an English muffin is filling and takes like 5 minutes. Add bacon or sausage if you want.
          </Text>
          <Text className="text-lg text-primary mt-2">
            <Link href="https://pinchofyum.com/breakfast-sandwich> Go to Recipe"> Go to Recipe </Link>
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

          </Text>
          <Text className="text-lg text-primary mt-2">
            <Link href="https://www.mccormick.com/blogs/recipes/easy-french-toast?gclsrc=aw.ds&gad_source=1&gad_campaignid=20848228772&gbraid=0AAAAACaOk4uDEuPKwkcf6nCVGYYIULrj4&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4KAlR0yCXzGnEAzIOeArcXuCa6r4_husx-ClDFOuFWzlz8EmnQzxxoCb40QAvD_BwE"> Go to Recipe </Link>
          </Text>
        </View>
      </View>
      <Link href="/" className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"> Back to Home</Link>

    </View>
  );
}