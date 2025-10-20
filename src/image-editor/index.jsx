import { createRoot } from "react-dom/client";
import { useWidgetProps } from "../use-widget-props";


function App() {

	const { tailwind_classnames } = useWidgetProps({});
	return (
		<div className="min-w-[220px] bg-gray-900">
			<DisplayImage className={tailwind_classnames} />
		</div>
		)
}


function DisplayImage({src, className=""}) {
	return <img src={src}
				className={"aspect-square rounded-2xl object-cover ring ring-black/5 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] " + className}/>
}



createRoot(document.getElementById("image-editor-root")).render(<App />);