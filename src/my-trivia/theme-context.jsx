import { createContext } from 'react';
import classNames from 'classnames';

export const Themes = Object.freeze({
    light: {
        text: 'text-slate-800',
        bg: 'bg-green-300',
        bg_hover: 'hover:bg-green-400',
        bg_focus: 'bg-green-400',
        bg_bg: 'bg-white',
    },
    dark: {
        text: 'text-gray-50',
        bg: 'bg-slate-800',
        bg_hover: 'hover:bg-slate-700',
        bg_focus: 'bg-slate-700',
        bg_bg: 'bg-gray-600',
    },
    real: {
        text: classNames('text-neutral-950', 'font-sans'),
        bg: 'bg-slate-100',
        bg_hover: 'hover:bg-slate-300',
        bg_focus: 'bg-slate-300',
        bg_bg: 'bg-white',
    },
});

export const ThemeContext = createContext(Themes.light);
