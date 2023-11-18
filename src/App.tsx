import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function App() {
	return (
		<div className="main">
			<RouterProvider router={router} />;
		</div>
	);
}

export default App;
