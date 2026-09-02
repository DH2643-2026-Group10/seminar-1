import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeExtra() {
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme === "dark" ? "#222" : "#eee",
                color: theme === "dark" ? "#eee" : "#222",
                padding: "1rem",
            }}>
            Current theme: {theme}
        </div>
    );
}

export default ThemeExtra;