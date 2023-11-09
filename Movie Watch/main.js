document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('addForm');
    const movieTable = document.getElementById('movieTable');
    const tbody = movieTable.querySelector('tbody');

    function validateForm() {
        let movieTitle = document.getElementById("movieTitle").value;
    
        if (movieTitle === "") {
            alert("Movie Title is required");
            return false;
        }
    
        return true;
        
    }

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const isValid = validateForm(); 
        if (!isValid) {
            return; 
        }


        const movieTitle = document.getElementById('movieTitle').value;
        const movieLanguage = document.querySelector('input[name="movieLanguage"]:checked').value;
        const movieGenre = document.getElementById('movieGenre').value;
        const isRRated = document.getElementById('ratedCheckbox').checked;

        // create new row in tabel
        const newRow = document.createElement('tr');

        const numCell = document.createElement('td');
        numCell.textContent = tbody.children.length + 1;

        const titleCell = document.createElement('td');
        titleCell.textContent = movieTitle;

        const languageCell = document.createElement('td');
        languageCell.textContent = movieLanguage;

        const genreCell = document.createElement('td');
        genreCell.textContent = movieGenre;

        const isR_RatedCell = document.createElement('td');
        isR_RatedCell.textContent = isRRated ? 'Yes' : 'No';

        const actionsCell = document.createElement('td');
        actionsCell.innerHTML = '<button>Delete</button>';

        // add the row into tabel
        newRow.appendChild(numCell);
        newRow.appendChild(titleCell);
        newRow.appendChild(languageCell);
        newRow.appendChild(genreCell);
        newRow.appendChild(isR_RatedCell);
        newRow.appendChild(actionsCell);
        tbody.appendChild(newRow);

        // delete the title after added it
        document.getElementById('movieTitle').value = '';
    });

    movieTable.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            // delete the row whene the "Delete" button is clicked
            const row = event.target.parentElement.parentElement;
            row.remove();
        }
    });
});