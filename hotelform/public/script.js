const hotelForm = document.getElementById('hotelForm');
const hotelTable = document.getElementById('hotelTable');
const hotelList = document.getElementById('hotelList');

hotelForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const hotelName = document.getElementById('hotelName').value;
    const location = document.getElementById('location').value;
    const rating = document.getElementById('rating').value;
    const pool = document.getElementById('pool').checked;
    const gym = document.getElementById('gym').checked;
    const spa = document.getElementById('spa').checked;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${hotelName}</td>
        <td>${location}</td>
        <td>${rating}</td>
        <td>${pool ? 'Yes' : 'No'}</td>
        <td>${gym ? 'Yes' : 'No'}</td>
        <td>${spa ? 'Yes' : 'No'}</td>
    `;

    hotelList.appendChild(newRow);

    // Clear the form
    hotelForm.reset();
});