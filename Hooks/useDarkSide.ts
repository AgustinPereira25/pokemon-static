import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
  
const useDarkSide = ():[string, React.Dispatch<React.SetStateAction<string>>] => {

    const [theme, setTheme] = useState<string>(Cookies.get('theme')!);
    const colorTheme:string = theme === "dark" ? "light" : "dark";
  
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        Cookies.set('theme', theme);
    }, [theme, colorTheme]);
  
    return [colorTheme, setTheme]
}

export default useDarkSide;