import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	//reactDOM 2 sey alir:
	//ilki olusturlacak element; 
	//ikincisi nereye olusturulacak

  	//<React.StrictMode></React.StrictMode>
  	//element bunun arasina yazilmisti ekstra kontol icin

  	React.createElement(
  		"h1", //olusturulacak etiket
   		{style:{color:"pink"}},
   		//null olabilir, elementin ozelligi
   		"HELLO!" 
   		//any children, so this could be another tag, 
   		//or just simply some text to display.
   	),
  document.getElementById('first')
);

//ayni id de ikinciyi yazinca ilkinin ustune biniyor
ReactDOM.render(
	React.createElement(
		'ul',
		null,
		React.createElement("li", null, "eda"),
		React.createElement("li", null, "ayse"),
		React.createElement("li", null, "esma")
		),
	document.getElementById('first')
);

//bunu boyle uzun uzun yazmak yerine jsx kullanilabilir:
ReactDOM.render(
	<ul id="nurefsan">
		<li>eda</li>
		<li>esma</li>
		<li>ayse</li>
	</ul>,
	document.getElementById('second')
);
//babel.js diye bir sey var yukardakini kopyalayinca 
//React.createElemnt li sekilde yapiyor

let cityCountry ={
	city:"maras",
	country:"turkiye"
};

ReactDOM.render(
	<h1>
		{cityCountry.city}, {cityCountry.country}&apos;de
	</h1>,
	document.getElementById("third")
);

//jsxde id direk yazilirken 
//class className olarak tanimlanir

//props kullanmak yerine { } icerisine props degerleri yazilabilir
function Hello(props){ 
	//div icine yazmayinca kiziyor
	return (
		<div>
			<h1>merhaba {props.value}</h1>
			<p>merhaba {props.valueIki}</p>
			<p>{props.number}</p>
			<p><b>{Object.keys(props).length} tane props var.</b></p>
		</div>
	);
}

ReactDOM.render(
	<Hello 
		value="ayse" 
		valueIki="ikinci prorps degeri" 
		number={5}	
	/>, 
	//<Hello></Hello> seklinde de yazilir
	document.getElementById("forth")
);

//component ler buyuk harfle baslanir

//props degerleri kebab-case yapilmaz

////// Lake Component //////
//anladigim kadariyla jsx icerisinden style yazinca patliyor
//bu kodun hem inspect haline 
//hem de react icin olan components kismindaki haline bak

function LakeNames(props){
	return(
		<h1>{props.name}</h1>
	);
}

function LakeNamesComponent(){
	return (
		<div className="divStyle">
			<LakeNames name="Lake Tahoe"/>
			<LakeNames name="Lake Shirley"/>
		</div>
	);
}

ReactDOM.render(
	<LakeNamesComponent />,
	document.getElementById("fifth")
);

////// Rendering List ////// !!!!!!!!!
const kardesler = [ "eda", "esma", "nurefsan" ];

ReactDOM.render(
	<KardeslerComponent kardeslerim={kardesler} />,
	document.getElementById("sixth")
);

function KardeslerComponent({kardeslerim}){
	//https://medium.com/@galiciandeveloper/the-function-map-in-javascript-es6-79ea829abc7f
	return (
		<ul>
			{kardeslerim.map(kardesim => (<li>{kardesim}</li>))}
		</ul>
	);
}

//asagidaki ornekte id koyulma sebebi:
//essiz bir sey tanimlamalisin her bir deger icin diye
//bu yuzden div icerisine key eklendi.

//daha sonra sayidan olusan bir array olusturdu ve
//diziyi jsx ile yazdirirken gelen sayiya .toString() ekledi

//asagida kullanilmayan i parametresi key icin kullanilabilir

const siraliKardesler = [
	{name:"eda", trailhead:"ilk", id:"1"},
	{name:"esma", trailhead:"ikinci", id: "2"},
	{name:"nurefsan", trailhead:"ucuncu", id:"3"}
];

function SiraliKardeslerComponent({siralanmisKardeslerim}){
	return (
		<div>
			{siralanmisKardeslerim.map((siraliKardes, i) => (
				<div key={siraliKardes.id}>
					<h2>{siraliKardes.name}</h2>
					<p>kacinci kardes: {siraliKardes.trailhead}</p>
				</div>
			))}
		</div>
	)
}

ReactDOM.render(
	<SiraliKardeslerComponent siralanmisKardeslerim={siraliKardesler} />,
	document.getElementById("seventh")
);

////// IF-ELSE li rendering component //////

function Yaz({aciklama}){
	return (
		<div>
			<h1>sicak</h1>
			<p> {aciklama}</p>
		</div>
	);
}

function Kis({aciklama}){
	return (
		<div>
			<h1>soguk</h1>
			<p> {aciklama}</p>
		</div>
	);
}

function Mevsim ({season}){
	// if(season === "summer"){
	// 	return <Yaz aciklama="yaz ayi sicak" />;
	// } else if(season === "winter") {
	// 	return <Kis aciklama="kis ayi soguk" />;
	// }

	//ternary seklinde de yazilabilir:
	//1
	// return (
	// 	<div>
	// 		{season === "winter" ? (
	// 			<Kis aciklama="kis ayi soguk" />
	// 		) : (
	// 			<Yaz aciklama="yaz ayi sicak" />
	// 		)}
	// 	</div>
	// );

	//2
	return (
		<div>
			{season === "winter" ? (
				<Kis aciklama="kis ayi soguk" />
			) : season === "summer" ? (
				<Yaz aciklama="yaz ayi sicak" />
			) : (
				<h1>yaz veya kis degil</h1>
			)}
		</div>
	);

}

ReactDOM.render(
	<Mevsim season="fall"/>,
	document.getElementById("eighth")	
);

////// REACT FRAGMENTS //////
// ici bos tag yazilirsa anladigim kadariyla 
//react div ihtiyacini ortadan kaldiriyor
//React.Fragment da yazilabilir
//div de yazilabilir ic ice iki div olu o zaman
function Bir(){
	return <h1>birinci</h1>;
}

function Iki(){
	return <h1>ikinci</h1>;
}

function DivsizDeneme(){
	return (
		<>
			<Bir />
			<Iki />
		</>
	);
}

ReactDOM.render(
	<DivsizDeneme />,
	document.getElementById("ninth")
);

////// ARRAY DESTRUCTURING //////

const [birinci, ikinci, ucuncu] = ['elma', 'armut', 'erik'];
//const [, , ucuncu] = ['elma', 'armut', 'erik'];
//seklinde de yazilabilir

console.log(ucuncu)

////// useState //////
//import { useState } from 'react';
//en yukarda bu tanimlandi burda tanimlanmaz

//A hook is a function that 
//allows you to add functionality to a component.
//useState is a built-in hook that 
//we can use to handle state changes in our application.

function ChangeStatus(){
	const [status, changeStatus] = useState("Open");
	//useState("Open") denilerek sayfa ilk calistiginda
	//opened yazisinin cikmasini sagliyor
	
	//changeStatus useState fonksiyonundan geliyor 
	//ve status degerini guncelliyor
	return (
		<>
			<h1>Status: {status}</h1>
			<button className="button" onClick={() => changeStatus("Opened")}>
				Open
			</button>
			<button className="button" onClick={() => changeStatus("Closed")}>
				Close
			</button>
			<button className="button" onClick={() => changeStatus("Wait Please")}>
				Wait
			</button>
		</>
	);
}

ReactDOM.render(
	<ChangeStatus />,
	document.getElementById("tenth")
);

//the first value that is returned from the useState function 
//inside of this array destructuring is the state value.
//the second value is a function that 
//we can use to change that state value

////// useEffect //////

function Checkbox(){
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		//alert component olusmadan once checked degerini gostermis oldu
		// `` bilmiyorum
		alert(`checked: ${checked.toString()}`);
	});

	return (
		<>
			<input type="checkbox" 
				value={checked}
				onChange={() => 
					setChecked(checked => !checked)} 
			/>
			{checked ? "checked" : "not checked"}
		</>
	);
}

ReactDOM.render(
	<Checkbox />,
	document.getElementById("eleventh")
);

////// useEffect With Dependency Array //////

function DependencyUseEffect(){
	const [ayse, setAyse] = useState("");
	const [eda, setEda] = useState("");

	useEffect(() => {
		console.log(`ayse: ${ayse}`);
	}, [ayse]);

	useEffect(() => {
		console.log(`eda: ${eda}`);
	}, [eda]);

	//useEffectteki ikinci parametre olmasa
	//iki useEffect de input icerisine yazi yazinca tetiklenir
	//boylelikle hangi input hangi useEffect i etkiliyor anlasiliyor

	//[ayse,eda] seklinde birden fazla deger de alabilir

	return (
		<>
			<label>
				Ayse:
				<input value={ayse}
					onChange={e => setAyse(e.target.value)} />
			</label>
			<br />
			<label>
				Eda:
				<input value={eda}
					onChange={e => setEda(e.target.value)} />
			</label>
		</>
	)
}

ReactDOM.render(
	<DependencyUseEffect></DependencyUseEffect>,
	document.getElementById("twelfth")
);

////// FETCH DATA W{ITH useEffect //////

function GetGithubUser({user}){
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetch(`https://api.github.com/users/${user}`)
			.then(res => res.json())
			.then(setUserData)
			.catch(console.error)
	}, []);

	if(userData){
		return (
			<>
				<h1>{userData.login}</h1>
				<h2>{userData.id}</h2>
				<img src={userData.avatar_url} width={100} />
				<br />
				<br />
				<div>{JSON.stringify(userData)}</div>
			</>
		);
	}
	return null;
}

function GetUser(){
	return <GetGithubUser user="ayseren" />
}

ReactDOM.render(
	<GetUser />,
	document.getElementById("thirteenth")
);

////// useReducer //////

//ilk useEffect ornegi (300 civari bir satir)
//onChange icerisinde setChecked fonksiyonunu cagiriyoruz
//But instead, we could provide a function as a toggle(degistirme).

function CheckToggle(){
	const [checked, toggle] = useReducer(
		checked => !checked,
		false
	);

	return (
		<>
			<input type="checkbox" 
				value={checked}
				onChange={toggle} 
			/>
			{checked ? "checked" : "not checked"}
		</>
	);
}

ReactDOM.render(
	<CheckToggle />,
	document.getElementById("fourteenth")
);

//netlify