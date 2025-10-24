import { createRoot } from "react-dom/client";
import { useWidgetProps } from "../use-widget-props";
import { FlashcardViewer } from "./flashcard-viewer";

function App() {
  const { flashcards } = useWidgetProps({
    flashcards: [
      {
        question: "What is the China Basin in SF?",
        answer: `China Basin in San Francisco is a waterfront neighborhood that blends a historic industrial past with a modern hub for technology, life sciences, and entertainment`,
      },
    ],
  });
  return (
    <div className="w-screen h-screen">
      <p>Hello</p>
      <FlashcardViewer flashcards={flashcards} />
    </div>
  );
}

createRoot(document.getElementById("my-trivia-root")).render(<App />);
