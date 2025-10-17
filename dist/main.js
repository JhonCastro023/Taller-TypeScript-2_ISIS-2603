import { series } from "./data.js";
const seriesTbody = document.getElementById("series-tbody");
const averageSeasonsElm = document.getElementById("average-seasons");
const seriesCard = document.getElementById("series-card");
function renderSeriesTable(seriesList) {
    seriesTbody.innerHTML = "";
    seriesList.forEach((serie) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary serie-link" style="cursor:pointer">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tr.addEventListener("click", () => showSerieCard(serie));
        seriesTbody.appendChild(tr);
    });
}
function showSerieCard(serie) {
    seriesCard.innerHTML = `
    <div class="card shadow-sm">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}" style="width:100%; height:auto;">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.url}" target="_blank" class="card-link">${serie.url}</a>
      </div>
    </div>
  `;
}
function getAverageSeasons(seriesList) {
    const totalSeasons = seriesList.reduce((acc, serie) => acc + serie.seasons, 0);
    return Math.round(totalSeasons / seriesList.length);
}
renderSeriesTable(series);
averageSeasonsElm.textContent = `Seasons average: ${getAverageSeasons(series)}`;
