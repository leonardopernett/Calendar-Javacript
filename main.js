let today = new Date();
let Month = today.getMonth();
let Year = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let monthAndYear = document.getElementById("monthAndYear");
MostrarCalendario(Month, Year);


function siguientes() {
           Year = (Month === 11) ? Year + 1 : Year;
           Month = (Month + 1) % 12;
    MostrarCalendario(Month, Year);
}

function antes() {
    Year = (Month === 0) ? Year - 1 : Year;
    Month = (Month === 0) ? 11 : Month - 1;
    MostrarCalendario(Month, Year);
}



function MostrarCalendario(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendario"); // body of the calendar

    // se limpia las celdas individuales
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // crear todas las celdas
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // crear tablas
      
        let row = document.createElement("div");
            var rows = row.setAttribute('class','cuerpo');
        //crear la celdas individuales
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
				let cell = document.createElement("div");
				var cells= cell.setAttribute('class','col result');
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
				let cell = document.createElement("div");
				var cells = cell.setAttribute('class','col result');
                let cellText = document.createTextNode(date);
                
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); 
    }

}	