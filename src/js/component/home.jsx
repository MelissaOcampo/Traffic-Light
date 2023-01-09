import React, {useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
const Home = () => {
	const [sombra1,setSombra1]= useState("");
	const [color1,setColor1]= useState("");
	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}else{
			setColor2("")
			setColor3("")
		setColor1("btn-danger")
		setSombra1("0 0 15px 10px red");
		setSombra2("")
		setSombra3("")
	}}
	const [sombra2,setSombra2]= useState("");
	const [color2,setColor2]= useState("");
	function encenderAmarillo() {
		if(color2 === "btn-warning"){
		setColor2("")
		}else{
			setColor1("")
			setColor3("")
		setColor2("btn-warning")
		setSombra2("0 0 15px 10px yellow");
		setSombra1("")
		setSombra3("")

	}};
	const [sombra3,setSombra3]= useState("");
	const [color3,setColor3]= useState("");
	function encenderVerde() {
		if(color3 === "btn-success"){
		setColor3("")
		
		}else{
			setColor2("")
			setColor1("")
		setColor3("btn-success")
		setSombra3("0 0 15px 10px green");
		setSombra2("")
		setSombra1("")
	}};
return (
	<div className="container d-flex justify-content-center"> 
	<div className="text-center d-flex flex-column Estructura justify-content-center">
		<button className={"btn Red "+color1} style={{boxShadow:sombra1}} onClick={encenderRojo}></button>
		<button className={"btn Yellow "+color2} style={{boxShadow:sombra2}} onClick={encenderAmarillo}></button>
		<button className={"btn Green "+color3} style={{boxShadow:sombra3}} onClick={encenderVerde}></button>
	</div>
	</div>
);
};

export default Home;
