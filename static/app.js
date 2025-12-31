// Datos cargados del Excel
let catalogo = [];
let ultimaBusqueda = '';

// Cargar Excel al iniciar
async function cargarCatalogo() {
    try {
        const response = await fetch('/data/productos_precios.xlsx');
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const datos = XLSX.utils.sheet_to_json(sheet, { raw: false });
        
        // Procesar datos
        catalogo = datos.map(p => ({
            Producto: p.Producto.toString().toUpperCase().trim(),
            USD: parseFloat(p.USD) || 0,
            CUP: parseFloat(p.CUP) || 0
        }));
        
        console.log(`✓ Catálogo cargado: ${catalogo.length} productos`);
    } catch (error) {
        console.error('Error cargando Excel:', error);
        document.getElementById('resultados').innerHTML = 
            '<div class="alert alert-danger">Error: No se pudo cargar el catálogo</div>';
    }
}

// Búsqueda inteligente con lista de validación
function buscarProductos(query) {
    if (!query || query.length < 3) {
        document.getElementById('listaValidacion').innerHTML = '';
        return [];
    }

    query = query.toUpperCase();
    
    // Filtrar productos que comienzan con el texto
    let resultados = catalogo.filter(p => 
        p.Producto.startsWith(query)
    ).slice(0, 10); // Máximo 10 sugerencias

    // Si hay pocos resultados, buscar productos que contengan el texto
    if (resultados.length < 5) {
        const contiene = catalogo.filter(p => 
            p.Producto.includes(query) && !resultados.includes(p)
        ).slice(0, 10 - resultados.length);
        resultados = resultados.concat(contiene);
    }

    return resultados;
}

// Mostrar lista de validación (dropdown)
function mostrarListaValidacion(sugerencias) {
    const lista = document.getElementById('listaValidacion');
    
    if (sugerencias.length === 0) {
        lista.innerHTML = '';
        return;
    }

    let html = '';
    sugerencias.forEach((prod, idx) => {
        html += `
            <a href="#" class="list-group-item list-group-item-action" 
               onclick="seleccionarProducto('${prod.Producto}')">
                <strong>${prod.Producto}</strong>
                <small class="float-end text-success">$${prod.USD}</small>
            </a>
        `;
    });
    
    lista.innerHTML = html;
}

// Seleccionar producto de la lista
function seleccionarProducto(nombre) {
    document.getElementById('buscador').value = nombre;
    document.getElementById('listaValidacion').innerHTML = '';
    buscarYMostrar(nombre);
}

// Buscar y mostrar resultados
function buscarYMostrar(query = null) {
    const texto = query || document.getElementById('buscador').value;
    ultimaBusqueda = texto;
    
    if (texto.length < 4) {
        document.getElementById('resultados').innerHTML = 
            '<div class="alert alert-info">Escribe al menos 4 letras...</div>';
        return;
    }

    const resultados = buscarProductos(texto);
    
    if (resultados.length === 0) {
        document.getElementById('resultados').innerHTML = 
            '<div class="alert alert-warning">No se encontraron productos.</div>';
        return;
    }

    // Mostrar tabla
    let tabla = `
        <div class="table-responsive">
            <table class="table table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Producto</th>
                        <th style="width: 100px;">USD</th>
                        <th style="width: 100px;">CUP</th>
                    </tr>
                </thead>
                <tbody>
    `;

    resultados.forEach(prod => {
        tabla += `
            <tr class="resultado" onclick="copiarPrecio('${prod.Producto}', ${prod.USD}, ${prod.CUP})">
                <td><strong>${prod.Producto}</strong></td>
                <td class="text-success">$${prod.USD.toFixed(2)}</td>
                <td class="text-primary">$${prod.CUP.toFixed(2)}</td>
            </tr>
        `;
    });

    tabla += '</tbody></table></div>';
    document.getElementById('resultados').innerHTML = tabla;
}

// Copiar precio al portapapeles (útil para vendedores)
function copiarPrecio(producto, usd, cup) {
    const texto = `${producto} - USD: $${usd.toFixed(2)} / CUP: $${cup.toFixed(2)}`;
    navigator.clipboard.writeText(texto).then(() => {
        // Mostrar toast
        const toast = document.createElement('div');
        toast.className = 'alert alert-success position-fixed top-0 end-0 m-3';
        toast.style.zIndex = '9999';
        toast.innerHTML = '✓ Precio copiado al portapapeles';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    });
}

// Event listeners
document.getElementById('buscador').addEventListener('input', function(e) {
    const texto = e.target.value;
    
    // Mostrar sugerencias mientras escribe
    if (texto.length >= 3) {
        const sugerencias = buscarProductos(texto).slice(0, 8);
        mostrarListaValidacion(sugerencias);
    } else {
        document.getElementById('listaValidacion').innerHTML = '';
    }
    
    // Buscar automáticamente después de 4 letras
    if (texto.length >= 4) {
        setTimeout(() => buscarYMostrar(), 300); // Debounce
    }
});

// Cargar catálogo al iniciar
window.onload = function() {
    cargarCatalogo();
    
    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✓ Service Worker registrado'))
            .catch(err => console.log('✗ Error SW:', err));
    }
};