import React, { useEffect, useState } from "react";
import Components from "../../ReactNativeElements";
import Styles from "../../styles";
import Product from "./Product";

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Components.ActivityIndicator size="large" />;
  if (!product) return <Components.Text>Product not found</Components.Text>;

  return (
    <Components.ScrollView contentContainerStyle={Styles.List}>
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        category={product.category}
        image={product.image}
        price={product.price}
        rate={product.rating?.rate}
        count={product.rating?.count}
        cardStyle={Styles.Container}
        imageStyle={Styles. Images}
        infoStyle={Styles.Lables}
      />
    </Components.ScrollView>
  );
}
