import Container from "@mui/material/Container";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import Entries from "./components/Entries/Entries";

import Header from "./components/header/Header";

import type { Entry } from "./types";

function App() {
  const [word, setWord] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        // `https://api.dictionaryapi.dev/api/v2/entries/en/plane`
      );
      setEntries(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
    // eslint-ignore-next-line
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        <Entries entries={entries} />
      </Container>
    </div>
  );
}

export default App;
