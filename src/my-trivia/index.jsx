import { createRoot } from 'react-dom/client';
import { useWidgetProps } from '../use-widget-props';
import { FlashcardViewer } from './flashcard-viewer';
import { ThemeContext, Themes } from './theme-context';
import { useContext } from 'react';
import classNames from 'classnames';
function App() {
    return (
        <ThemeContext value={Themes.real}>
            <InnerApp />
        </ThemeContext>
    );
}

function InnerApp() {
    const theme = useContext(ThemeContext);
    // const { flashcards } = useWidgetProps({
    //     flashcards: [
    //         {
    //             question: 'What is the China Basin in SF?',
    //             answer: `China Basin in San Francisco is a waterfront neighborhood that blends a historic industrial past with a modern hub for technology, life sciences, and entertainment`,
    //         },
    //         {
    //             question: "Who did the 'cream of the crop speech' in WWE?",
    //             answer: 'Randy Savage',
    //         },
    //     ],
    // });
    const { flashcards } = useWidgetProps({});
    if (!flashcards) {
        <div>Loading...</div>;
    }
    return (
        <div className={classNames(theme.bg_bg, 'w-screen', 'h-screen')}>
            <FlashcardViewer flashcards={flashcards} title="MyTrivia Woaoh" />
        </div>
    );
}

createRoot(document.getElementById('my-trivia-root')).render(<App />);
