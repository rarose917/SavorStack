import { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { Link } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function Recipe() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setMessage("Image selected!");
      console.log(result);
    } else {
      setMessage("You did not select any image");
    }
  };

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
        placeholder="Nutritional Information"
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

      <Button title="Upload Image for this Recipe" onPress={pickImageAsync} />

      {message !== "" && (
        <Text className="text-center mt-4 text-red-500 font-bold">
          {message}
        </Text>
      )}

      {image && (
          <Image
            source={{ uri: image }}
            style={{
             width: 250, 
             height: 250, 
             marginTop: 20, 
             borderRadius: 12,
            }}
          />
      )}

      <Text className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl">
        Submit
      </Text>

      <Link
        href="/"
        className="bg-accent mt-8 py-4 rounded-xl shadow-lg text-center text-white font-bold text-3xl"
      >
        Back to Home
      </Link>
    </View>
  );
}