import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../Hooks/useDarkSide";


export const Switcher = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked:boolean) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (

		<>
			<DarkModeSwitch
				style={{ marginLeft: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}

export default Switcher;
