import { useState } from "react";
import { Flashcard } from "./flashcard";

export const FlashcardViewer = ({ flashcards }) => {
  const [fi, setFi] = useState(0);
  return <Flashcard {...flashcards[fi]} />;
};
