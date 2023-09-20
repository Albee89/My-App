import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import ErrorBoundary from "./Components/Error_boundary/Error_boundary";

ReactDOM.render(
 <React.StrictMode>
 <ErrorBoundary>
 <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/about" element={<About/>}/>
 </Routes>
 </HashRouter>
 </ErrorBoundary>
 </React.StrictMode>,
 document.getElementById("root")
);