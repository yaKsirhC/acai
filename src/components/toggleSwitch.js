import { useState, useContext, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import btn from "./css/toggleBtn.module.css";
import {setToogleSwitch} from './darktheme';
const ToggleSwitch = () => {
    // const [_isDark, _setIsDark] = useState(true);
    // const { isDark, toggleTheme } = useContext(ThemeContext);
    const {isDark, toggleTheme,theme} = setToogleSwitch();
    // const updateState = () => {
    //     _setIsDark(!_isDark);
    // }
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])


    return (
        <label for="theme" className={`${btn.theme} `}>
            <span className={`${btn.theme__toggle_wrap} cursor-grab`}>
                <input id="theme" className={`${btn.theme__toggle} cursor-pointer`} type="checkbox" role="switch" name="theme" value="dark" onClick={toggleTheme} />
                <span className={btn.theme__fill}></span>
                <span className={btn.theme__icon}>
                    {theme !== "dark" ? <FaMoon /> : <FaSun />}
                </span>
            </span>
        </label>
    );
};

export default ToggleSwitch;
