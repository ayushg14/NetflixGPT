import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggrstion from "./GptMovieSuggrstion";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggrstion />
      {/* 
    GptSearchBar
    GPT Suggestions
     */}
    </div>
  );
};

export default GPTSearch;
