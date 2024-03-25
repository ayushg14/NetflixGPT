import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggrstion from "./GptMovieSuggrstion";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="max-sm:h-screen object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggrstion />
        {/* 
    GptSearchBar
    GPT Suggestions
     */}
      </div>
    </>
  );
};

export default GPTSearch;
