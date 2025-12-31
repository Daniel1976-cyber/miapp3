// Consultor de Precios Pro - JavaScript Mejorado
// Datos cargados del Excel
let catalogo = [];
let catalogoFiltrado = [];
let ultimaBusqueda = '';
let searchCount = 0;
let copyCount = 0;
let categoriaActiva = 'all';

// Categorías de productos
const categorias = {
    'all': { name: 'Todos', icon: 'fas fa-list' },
    'bebidas': { name: 'Bebidas Alcohólicas', icon: 'fas fa-wine-glass' },
    'vinos': { name: 'Vinos', icon: 'fas fa-wine-bottle' },
    'cervezas': { name: 'Cervezas', icon: 'fas fa-beer' },
    'refrescos': { name: 'Refrescos', icon: 'fas fa-glass-water' },
    'otros': { name: 'Otros', icon: 'fas fa-box' }
};

// Cargar Excel al iniciar
async function cargarCatalogo() {
    try {
        showLoadingState();
        
        const response = await fetch('/data/productos.xlsx');
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const datos = XLSX.utils.sheet_to_json(sheet, { raw: false });
        
        // Procesar datos con categorización
        catalogo = datos.map((p, index) => {
            const producto = {
                id: index,
                Producto: p.Producto.toString().toUpperCase().trim(),
                USD: parseFloat(p.USD) || 0,
                CUP: parseFloat(p.CUP) || 0,
                categoria: categorizarProducto(p.Producto.toString().toUpperCase().trim())
            };
            return producto;
        });
        
        catalogoFiltrado = [...catalogo];
        
        updateStats();
        console.log(`✓ Catálogo cargado: ${catalogo.length} productos`);
        
        hideLoadingState();
        showToast('Catálogo cargado exitosamente', 'success');
        
    } catch (error) {
        console.error('Error cargando Excel:', error);
        hideLoadingState();
        showToast('Error al cargar el catálogo', 'error');
    }
}

// Categorizar productos automáticamente
function categorizarProducto(nombre) {
    const nombreLower = nombre.toLowerCase();
    
    if (nombreLower.includes('ron') || nombreLower.includes('whisky') || 
        nombreLower.includes('vodka') || nombreLower.includes('tequila') ||
        nombreLower.includes('brandy') || nombreLower.includes('gin') ||
        nombreLower.includes('licor') || nombreLower.includes('crema')) {
        return 'bebidas';
    }
    
    if (nombreLower.includes('vino') || nombreLower.includes('cava') ||
        nombreLower.includes('espumoso')) {
        return 'vinos';
    }
    
    if (nombreLower.includes('cerveza') || nombreLower.includes('beer')) {
        return 'cervezas';
    }
    
    if (nombreLower.includes('refresco') || nombreLower.includes('cola') ||
        nombreLower.includes('agua') || nombreLower.includes('gaseosa') ||
        nombreLower.includes('materva') || nombreLower.includes('tukola')) {
        return 'refrescos';
    }
    
    return 'otros';
}

// Mostrar estado de carga
function showLoadingState() {
    document.getElementById('resultados').innerHTML = `
        <div class="empty-state">
            <div class="loading-spinner mx-auto mb-3"></div>
            <h5>Cargando catálogo...</h5>
            <p>Procesando productos y precios</p>
        </div>
    `;
}

function hideLoadingState() {
    // Se llamará después de cargar
}

// Filtrar por categoría
function filtrarPorCategoria(categoria) {
    categoriaActiva = categoria;
    
    // Actualizar chips activos
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    document.querySelector(`[data-category="${categoria}"]`).classList.add('active');
    
    if (categoria === 'all') {
        catalogoFiltrado = [...catalogo];
    } else {
        catalogoFiltrado = catalogo.filter(p => p.categoria === categoria);
    }
    
    // Si hay búsqueda activa, filtrar resultados
    const busquedaActual = document.getElementById('buscador').value;
    if (busquedaActual.length >= 4) {
        buscarYMostrar(busquedaActual);
    }
}

// Búsqueda inteligente mejorada
function buscarProductos(query) {
    if (!query || query.length < 3) {
        return [];
    }

    query = query.toUpperCase();
    
    // Filtrar por categoría activa
    let resultados = catalogoFiltrado.filter(p => 
        p.Producto.startsWith(query)
    ).slice(0, 10);

    // Si hay pocos resultados, buscar productos que contengan el texto
    if (resultados.length < 5) {
        const contiene = catalogoFiltrado.filter(p => 
            p.Producto.includes(query) && !resultados.some(r => r.id === p.id)
        ).slice(0, 10 - resultados.length);
        resultados = resultados.concat(contiene);
    }

    return resultados;
}

// Mostrar lista de sugerencias mejorada
function mostrarListaValidacion(sugerencias) {
    const lista = document.getElementById('listaValidacion');
    
    if (sugerencias.length === 0) {
        lista.style.display = 'none';
        return;
    }

    let html = '';
    sugerencias.forEach(prod => {
        const categoria = categorias[prod.categoria];
        html += `
            <div class="suggestion-item" onclick="seleccionarProducto('${prod.Producto}')">
                <div>
                    <div class="suggestion-name">${prod.Producto}</div>
                    <small class="text-muted">
                        <i class="${categoria.icon} me-1"></i>
                        ${categoria.name}
                    </small>
                </div>
                <div class="suggestion-price">$${prod.USD.toFixed(2)}</div>
            </div>
        `;
    });
    
    lista.innerHTML = html;
    lista.style.display = 'block';
}

// Seleccionar producto de la lista
function seleccionarProducto(nombre) {
    document.getElementById('buscador').value = nombre;
    document.getElementById('listaValidacion').style.display = 'none';
    buscarYMostrar(nombre);
}

// Buscar y mostrar resultados con cards mejoradas
function buscarYMostrar(query = null) {
    const texto = query || document.getElementById('buscador').value;
    ultimaBusqueda = texto;
    searchCount++;
    updateStats();
    
    if (texto.length < 4) {
        document.getElementById('resultados').innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <i class="fas fa-search"></i>
                </div>
                <h5>Comienza tu búsqueda</h5>
                <p>Escribe al menos 4 letras para ver productos</p>
            </div>
        `;
        return;
    }

    const resultados = buscarProductos(texto);
    
    if (resultados.length === 0) {
        document.getElementById('resultados').innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h5>No se encontraron productos</h5>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }

    // Mostrar productos con cards mejoradas
    let html = '<div class="row">';
    
    resultados.forEach(prod => {
        const categoria = categorias[prod.categoria];
        html += `
            <div class="col-lg-6 col-xl-4 mb-3">
                <div class="product-card" onclick="copiarPrecio('${prod.Producto.replace(/'/g, "\\'")}', ${prod.USD}, ${prod.CUP})" data-aos="fade-up">
                    <div class="product-header">
                        <div class="product-name">${prod.Producto}</div>
                        <div class="product-category">
                            <i class="${categoria.icon} me-1"></i>
                            ${categoria.name}
                        </div>
                    </div>
                    <div class="product-prices">
                        <div class="price-item">
                            <div class="price-label">USD</div>
                            <div class="price-value price-usd">$${prod.USD.toFixed(2)}</div>
                        </div>
                        <div class="price-item">
                            <div class="price-label">CUP</div>
                            <div class="price-value price-cup">$${prod.CUP.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    document.getElementById('resultados').innerHTML = html;
    
    // Re-initialize AOS for new elements
    AOS.refresh();
}

// Copiar precio al portapapeles mejorado
function copiarPrecio(producto, usd, cup) {
    copyCount++;
    updateStats();
    
    const texto = `${producto} - USD: $${usd.toFixed(2)} / CUP: $${cup.toFixed(2)}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(() => {
            showToast('✓ Precio copiado al portapapeles', 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(texto);
        });
    } else {
        fallbackCopyTextToClipboard(texto);
    }
}

// Fallback para navegadores antiguos
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('✓ Precio copiado al portapapeles', 'success');
    } catch (err) {
        showToast('Error al copiar', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Mostrar toast notifications mejoradas
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    toast.innerHTML = `<i class="${icon} me-2"></i>${message}`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Actualizar estadísticas
function updateStats() {
    document.getElementById('totalProducts').textContent = catalogo.length;
    document.getElementById('searchCount').textContent = searchCount;
    document.getElementById('copyCount').textContent = copyCount;
    document.getElementById('productCount').textContent = catalogo.length;
}

// Event listeners mejorados
document.getElementById('buscador').addEventListener('input', function(e) {
    const texto = e.target.value;
    
    // Ocultar lista al borrar
    if (texto.length < 3) {
        document.getElementById('listaValidacion').style.display = 'none';
        return;
    }
    
    // Mostrar sugerencias mientras escribe
    const sugerencias = buscarProductos(texto).slice(0, 8);
    mostrarListaValidacion(sugerencias);
    
    // Buscar automáticamente después de 4 letras con debounce
    if (texto.length >= 4) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => buscarYMostrar(), 300);
    }
});

// Event listener para clics fuera de la lista
document.addEventListener('click', function(e) {
    if (!e.target.closest('#listaValidacion') && !e.target.closest('#buscador')) {
        document.getElementById('listaValidacion').style.display = 'none';
    }
});

// Event listeners para filtros
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
        const categoria = this.getAttribute('data-category');
        filtrarPorCategoria(categoria);
    });
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

// Exportar funciones para uso global
window.seleccionarProducto = seleccionarProducto;
window.copiarPrecio = copiarPrecio;

// Agregar estilos para animaciones de salida
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);