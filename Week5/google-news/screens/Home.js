import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import MyText from "../components/Text";
import { Feather } from "@expo/vector-icons";

const NoArticle = (props) => {
  return (
    <View style={styles.footer}>
      <MyText weight="bold" size={18}>
        FINISH
      </MyText>
      <Feather name="check-circle" size={24} color="black" />
    </View>
  );
};

const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const filterForUniqueArticles = (arr) => {
    const cleaned = [];
    arr.forEach((itm) => {
      let unique = true;
      cleaned.forEach((itm2) => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };

  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=8f7d4609510947a39e04f290832556ad&page=${pageNumber}`
    );
    const jsonData = await response.json();
    const newArticleList = filterForUniqueArticles(
      articles.concat(jsonData.articles)
    );
    setArticles(newArticleList);
    setPageNumber(pageNumber + 1);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" loading={loading} />
      ) : (
        <FlatList
          data={articles}
          renderItem={({ item }) => <ArticleCard article={item} />}
          keyExtractor={(item) => item.title}
          onEndReached={getNews}
          onEndReachedThreshold={1}
          ListFooterComponent={NoArticle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Home;
