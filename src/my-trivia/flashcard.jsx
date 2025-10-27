import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from './theme-context';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const TRANSITION_DURATION = 'duration-200';
const SWIPE_CLIENTX_THRESHOLD = 100;

export const Flashcard = ({
    question,
    answer,
    revealed = false,
    setRevealed = () => {},
    swipeLeft = () => {},
    swipeRight = () => {},
}) => {
    const [startX, setStartX] = useState(null);
    const [touchId, setTouchId] = useState(null);

    const onTouchStart = (e) => {
        // console.log({ touchStart: e });
        if (e.touches.length === 1) {
            setStartX(e.touches[0].clientX);
            setTouchId(e.touches[0].identifier);
            setTimeout(() => {
                if (touchId === e.touches[0].identifier) {
                    setTouchId(null);
                    setStartX(null);
                }
            }, 1000);
        }
    };
    const onTouchEnd = (e) => {
        // console.log(e.changedTouches.length, e.changedTouches[0].identifier, touchId);
        if (e.changedTouches.length === 1 && e.changedTouches[0].identifier === touchId) {
            const diff = e.changedTouches[0].clientX - startX;

            if (Math.abs(diff) > SWIPE_CLIENTX_THRESHOLD) {
                diff < 0 ? swipeLeft() : swipeRight();
            }
        }
        setStartX(null);
        setTouchId(null);
    };

    const theme = useContext(ThemeContext);

    return (
        <div
            className={classNames(
                // layout
                'w-full',
                'h-full',
                'flex',
                'flex-col',
                'md:flex-row',
                'items-center',
                'p-4',

                // Styling
                'shadow-xl/10',
                {
                    [theme.bg]: !revealed,
                    [theme.bg_focus]: revealed,
                },

                // Dynamics
                'hover:cursor-pointer',
                'transition-colors',
                theme.bg_hover,
                TRANSITION_DURATION,
                'ease-in-out',
            )}
            onClick={() => setRevealed(!revealed)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <p
                className={classNames(
                    theme.text,
                    'text-center',
                    'text-wrap',
                    'w-full',
                    'break-normal',
                    'grow',
                )}
            >
                {question}
            </p>
            <p
                className={classNames(
                    'w-full',
                    'grow-3',

                    theme.text,
                    'text-center',
                    'text-wrap',
                    'break-normal',

                    { 'transition-opacity': revealed, 'transition-none': !revealed },
                    TRANSITION_DURATION,
                    {
                        'opacity-0': !revealed,
                        'opacity-100': revealed,
                    },
                )}
            >
                {answer}
            </p>
        </div>
    );
};
