import { createRoot } from "react-dom/client";
import { useWidgetProps } from "../use-widget-props";

// function App() {
// 	return <div>Hello there!</div>
// }

function App() {
	// let image_urls = [
	// 	"https://persistent.oaistatic.com/pizzaz/pizzaz-1.png",
	// 	"https://persistent.oaistatic.com/pizzaz/pizzaz-2.png",
	// 	"https://persistent.oaistatic.com/pizzaz/pizzaz-6.png",
	// 	"https://persistent.oaistatic.com/pizzaz/pizzaz-5.png"

	// ]
	const { image_urls } = useWidgetProps({});
	console.log({image_urls})
	return (
		<div className="min-w-[220px] bg-gray-900">
			<div>Here are your pics</div>
			<Carousel sources={image_urls} />
		</div>
		)
}

function Carousel({sources}) {
	return (<div className="flex overflow-x-auto overflow-y-visible snap-x scroll-px-4">
			{sources.map((s,i )=> <DisplayImage src={s} key={i} className="snap-start m-4"/>)}
		</div>)
}


function DisplayImage({src, className=""}) {
	return <img src={src}
				className={"aspect-square rounded-2xl object-cover ring ring-black/5 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] " + className}/>
}



createRoot(document.getElementById("display-pics-root")).render(<App />);