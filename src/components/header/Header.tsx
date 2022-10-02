import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { createTheme, MenuItem } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import categories from "../../data/category";

type Props = {
  category?: Category[] | string;
  setCategory: (string: string) => void;
  word: string;
  setWord: (string: string) => void;
};

export type Category = {
  value: string;
  label: string;
};

const Header = ({ setCategory, category, word, setWord }: Props) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleChange = (language: any) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            variant="standard"
            className="search"
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {Object.values(categories).map(({ label, value }) => (
              <MenuItem key={label} value={label}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
