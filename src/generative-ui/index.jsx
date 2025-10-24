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

createRoot(document.getElementById("image-editor-root")).render(<App />);