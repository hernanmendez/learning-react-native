import React, { useEffect } from "react";
import { useCommentsContext } from "../context/hooks";
import { FlatList } from "react-native";
import Comment from "../components/comment";

export default function Comments() {
  const { comments, setComments } = useCommentsContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then(setComments);
  }, []);

  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <Comment name={item.name} body={item.body} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
