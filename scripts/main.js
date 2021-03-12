console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js'
// import {Footer} from './Footer.js'

const navElement = document.querySelector("nav");
// const footerElement = document.querySelector("footer");


// event listener targeting all the red legos

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})


// event listener targeting all the green legos//

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})


// filtering by year//

// applicationElement.addEventListener("change", event => {
// 	if (event.target.id === "yearSelection") {
// 	  const yearAsNumber = parseInt(event.target.value)
// 	  console.log(`User wants to see posts since ${yearAsNumber}`)
// 	  //invoke a filter function passing the year as an argument
// 	  showFilteredYear(yearAsNumber);
// 	}
//   })



// const showFilteredYear = (year) => {
// 	//get a copy of the lego collection
// 	const epoch = Date.parse(`01/01/${year}`);
// 	//filter the data
// 	const filteredData = useLegos().filter(singleLego => {
// 	  if (singleLego.timestamp >= epoch) {
// 		return singleLego
// 	  }
// 	})
// 	const legoElement = document.querySelector(".legoList");
// 	legoElement.innerHTML = makeLegoList(filteredData);
//   }



// Making a click event for the search bar to filter out legos by their IDs//

const legoSearch = document.querySelector("#legoSearchButton")

legoSearch.addEventListener("click", event => {
	if(event.target.id === "legoSearchButton"){
		
		const legoSearch = document.querySelector("#legoSearch");
		filterLegosById(legoSearch.value);
	}
})

//  filtering legos by ID"

const filterLegosById= (filter) =>{
	const filterArray= useLegos().filter(singleLego=> {
		if( singleLego.LegoId === filter) {
			return singleLego;
		}
	})

	makeLegoList(filterArray);
}


//  getting the class from the html, adding an event listener to watch for the change event with the target id of materialOption, then filtering the array for the material targets. 

// filtering the materials//
const materialElement= document.querySelector("#materialOption");

materialElement.addEventListener("change", (event)=> {
	if(event.target.id === "materialOption") {
		const materialValue = (event.target.value)
		filterMaterial(materialValue)
	}
})

const filterMaterial= (filter) => {
	const filterArray= useLegos().filter(singleLego => {
		if(singleLego.Material.includes(filter)) {
			return singleLego;
		}
	})

	makeLegoList(filterArray);
}

// filtering legos to show one//
const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();