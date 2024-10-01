const table = document.createElement('table');
document.body.prepend(table);
const pythagor = document.querySelector('table');

for (let i = 1; i <= 10; i++) {

    const tr = document.createElement('tr');
    pythagor.appendChild(tr);

        for (let x = 1; x <= 10; x++) {

            const td = document.createElement('td');
            const row = pythagor.lastElementChild;
            row.appendChild(td);
            td.textContent = `${i * x}`;
            td.style.width = '40px';
            td.style.height = '40px';
            td.style.border = '1px solid black';
            td.style.textAlign = 'center';
            td.style.fontWeight = 'bold';
        };
};