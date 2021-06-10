import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
// import SetQuestion from './setQuestion';
// import AnswerPost from './answerPost';
import Header from "./common/header";
import Footer from "./footer";

const App = () => {
	const [disp, setdisp] = useState('none');
	

	// window.addEventListener(  )
	function tyui(eve) {
		console.log(eve);
		console.log(window.scrollTop);
		console.log(window.document.body);
		console.log(window.document.body.scrollTop);
		if (window.scrollY >= 100) {
			setdisp('block');
		} else {
			setdisp('none');
		}
	}

	return (
		<div
			onScroll={(e)=>tyui(e)}
			className="rootContainer"
			style={{ width: "100vw", height: "100vh" }}
		>
			<Header display={'block'} style={{ height: "10vh" }}></Header>
			<Header display={disp} ></Header>
			<div style={{ width: "100vw" }}></div>
			<Router>
				<Route path="/" exact component={Home} />
			</Router>
			<Footer></Footer>
		</div>
	);
};
export default App;
