function table(){
    let table = document.createElement('table')
    document.body.append(table)
    table.style.borderSpacing = '0'

    let num = 0;

    for (let x = 0; x < 10; x++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        
        for (let y = 0; y < 10; y++){
            let td = document.createElement('td');
            td.style.border = "1px solid #000"
            td.style.textAlign = 'center'
            td.style.padding = '10px'
            td.innerHTML = ++num
            tr.appendChild(td);
        }
    }
}

table()
