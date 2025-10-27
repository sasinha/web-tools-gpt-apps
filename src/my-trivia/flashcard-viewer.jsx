import { useState } from 'react';
import { Flashcard } from './flashcard';
import classNames from 'classnames';
import { eventListener } from '../event-listener';

export const FlashcardViewer = ({ flashcards, title = '' }) => {
    const [revealed, setRevealed] = useState(false);
    const [fi, setFi] = useState(0);

    const next = () => {
        setFi((cFi) => (cFi < flashcards.length - 1 ? cFi + 1 : cFi));
        setRevealed(false);
    };

    const prev = () => {
        setFi((cFi) => (cFi > 0 ? cFi - 1 : cFi));
        setRevealed(false);
    };

    eventListener('keydown', (e) => {
        if (e.code === 'Space') {
            setRevealed((currRev) => !currRev);
        } else if (e.code === 'ArrowRight') {
            next();
        } else if (e.code === 'ArrowLeft') {
            prev();
        }
    });

    return (
        <div className={classNames('h-full', 'w-full', 'flex', 'flex-col')}>
            <div className={classNames('grow-1', 'flex', 'justify-center', 'items-center')}>
                {title + ' ' + (fi + 1) + '/' + flashcards.length}
            </div>
            <div className={classNames('grow-4', 'basis-0')}>
                <Flashcard
                    {...flashcards[fi]}
                    revealed={revealed}
                    setRevealed={setRevealed}
                    swipeLeft={() => {
                        console.log('Next');
                        next();
                    }}
                    swipeRight={() => {
                        console.log('Prev');
                        prev();
                    }}
                />
            </div>
            <div className="grow-2"></div>
        </div>
    );
};
