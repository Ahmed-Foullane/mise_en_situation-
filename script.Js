let selectedDate = document.querySelector("input");
let searchBtn = document.querySelector(".search");
let citysContainerDev = document.querySelector(".citys");
let citys = [];
async function getAllCitys() {
  let respons = await fetch("./data.json");
  let data = await respons.json();
  citys = data.citys;

  for (let i = 0; i < citys.length; i++) {
    citysContainerDev.innerHTML += `
        <div>
        <h2>city: ${citys[i].city}</h2>
            <h2>id: ${citys[i].id}</h2>
            <h2>origin: ${citys[i].origin}</h2>
            <h2>created at: ${citys[i].createAt}</h2>
            <hr>
        </div>
        `;
  }
}

searchBtn.addEventListener("click", () => {
  citysContainerDev.innerHTML = "";
  let showSearchCitysByDate = [];
  let userInputDat = selectedDate.value.split("-");
  for (let i = 0; i < citys.length; i++) {
    let date = citys[i].createAt.split("-");
    if (date[0] >= userInputDat[0]) {
      if (showSearchCitysByDate.indexOf(citys[i].id) === -1) {
        showSearchCitysByDate.push(citys[i].id);
      }

      if (date[1] >= userInputDat[1]) {
        if (showSearchCitysByDate.indexOf(citys[i].id) === -1) {
          showSearchCitysByDate.push(citys[i].id);
        }
      }
      if (date[2] >= userInputDat[2]) {
        if (showSearchCitysByDate.indexOf(citys[i].id) === -1) {
          showSearchCitysByDate.push(citys[i].id);
        }
      }
    }
  }

  for (let i = 0; i < citys.length; i++) {
    if (showSearchCitysByDate.includes(citys[i].id)) {
      citysContainerDev.innerHTML += `
        <div>
        <h2>city: ${citys[i].city}</h2>
            <h2>id: ${citys[i].id}</h2>
            <h2>origin: ${citys[i].origin}</h2>
            <h2>created at: ${citys[i].createAt}</h2>
            <hr>
        </div>
        `;
    }
  }
});

getAllCitys();
