import React, { useEffect, useState } from "react";
import Components from "../../ReactNativeElements";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <Components.ActivityIndicator size="large" />;
  if (error) return <Components.Text>{error}</Components.Text>;

  return (
    <Components.FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Components.TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Detail", { id: item.id })}
        >
          <Components.Image
            source={{ uri: item.image }}
            style={styles.thumbnail}
          />
          <Components.Text style={styles.name}>{item.title}</Components.Text>
        </Components.TouchableOpacity>
      )}
    />
  );
}

const styles = Components.StyleSheet.create({
  list: { padding: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  thumbnail: { width: 60, height: 60, marginRight: 12, resizeMode: "contain" },
  name: { flex: 1, fontSize: 16, fontWeight: "bold" },
});
