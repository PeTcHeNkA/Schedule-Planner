document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('scheduleForm');
  const tableBody = document.getElementById('scheduleTable').querySelector('tbody');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const row = document.createElement('tr');
    for (const value of Object.values(data)) {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    }
    tableBody.appendChild(row);

    form.reset();
  });
});
