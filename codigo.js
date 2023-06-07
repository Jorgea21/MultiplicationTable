function generarTabla() {
    let base = +document.getElementById('numero').value;
    let tabla = document.getElementById('resultado');
    
    let salida = `<h2>Tabla del ${base}</h2>`;

    salida += '<table>';
    for(let i = 1; i<=10; i++){
        salida += `
         <tr>
            <td>${base}</td>
            <td>*</td>
            <td>${i}</td>
            <td>=</td>
            <td>${base * i}</td>
        </tr>}`;

    }
    salida +='</table>';
    tabla.innerHTML = salida;

}