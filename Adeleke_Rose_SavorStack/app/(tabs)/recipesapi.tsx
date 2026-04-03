import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Linking,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strSource: string | null;
};

type ApiResponse = {
  meals: Meal[];
};

export default function APIMeals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);


  const fetchMeal = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(URL);
      const result: ApiResponse = await response.json();
      setMeals(result.meals || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <View className="flex-1 bg-cream px-6">
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={{ paddingVertical: 40 }}
        ListHeaderComponent={
          <View>
            <Text className="text-4xl font-extrabold text-primary text-center tracking-widest mb-6">
              Random Recipe
            </Text>

            {/* ✅ Refresh Button */}
            <Pressable
              onPress={fetchMeal}
              className="bg-accent py-3 rounded-xl shadow-lg mb-6"
            >
              <Text className="text-center text-white font-bold text-lg">
                Get Another Recipe
              </Text>
            </Pressable>
          </View>
        }
        ListFooterComponent={
          <Link
            href="/"
            className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"
          >
            Back to Home
          </Link>
        }
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-secondary">
            <Text className="text-2xl font-bold text-primary mb-4">
              {item.strMeal}
            </Text>

            <Text className="text-lg text-primary mb-2">
              Category: {item.strCategory}
            </Text>

            <Text className="text-lg text-primary mb-4">
              Area: {item.strArea}
            </Text>

            <Text className="text-lg font-bold text-primary mb-2">
              Instructions
            </Text>

            <Text className="text-lg text-primary">
              {item.strInstructions}
            </Text>

            {item.strSource ? (
              <Pressable onPress={() => Linking.openURL(item.strSource)}>
                <Text className="text-lg text-primary mt-4 underline">
                  Go to Recipe
                </Text>
              </Pressable>
            ) : (
              <Text className="text-lg text-primary mt-4"> 
                No recipe source available
              </Text> //fallback for unavailable external recipe link
            )}
          </View>
        )}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" />
          ) : error ? (
            <Text className="text-lg text-primary text-center">
              Error: Unable to load data
            </Text>
          ) : (
            <Text className="text-lg text-primary text-center">
              No meals found
            </Text>
          )
        }
      />
    </View>
  );
}