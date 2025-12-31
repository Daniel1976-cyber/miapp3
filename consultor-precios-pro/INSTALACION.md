# 🚀 Guía de Instalación - Consultor de Precios Pro

Esta guía te ayudará a instalar y configurar la aplicación **Consultor de Precios Pro** paso a paso.

## 📋 Prerrequisitos

- ✅ Navegador web moderno (Chrome, Firefox, Safari, Edge)
- ✅ Servidor web local o hosting
- ✅ Archivo Excel con tus productos

## 🎯 Paso 1: Preparar los Archivos

### 1.1 Descargar el Proyecto
```bash
# Si tienes el código fuente
# O descarga desde GitHub: https://github.com/tu-usuario/consultor-precios-pro

# Extrae todos los archivos a una carpeta
unzip consultor-precios-pro.zip
cd consultor-precios-pro
```

### 1.2 Verificar Estructura
Asegúrate de tener esta estructura:
```
consultor-precios-pro/
├── 📄 index.html              ← Página principal
├── 📄 manifest.json           ← Configuración PWA
├── 📄 sw.js                   ← Service Worker
├── 📁 js/
│   └── 📄 app.js              ← Lógica JavaScript
├── 📁 data/
│   └── 📄 productos.xlsx      ← Tus datos (crear este)
├── 📁 icons/                  ← Iconos PWA (opcional)
└── 📁 screenshots/            ← Screenshots (opcional)
```

## 📊 Paso 2: Configurar los Datos

### 2.1 Crear tu Archivo de Productos
1. **Abre Excel** o Google Sheets
2. **Crea una tabla** con estas columnas exactas:

| A | B | C |
|---|---|---|
| Producto | USD | CUP |
| RON AÑEJO 3 AÑOS | 100.00 | 500.00 |
| WHISKY 12 AÑOS | 200.00 | 1000.00 |
| VINO TINTO RESERVA | 50.00 | 250.00 |

### 2.2 Formato de Datos
- **Producto**: Texto, nombre del producto
- **USD**: Número, precio en dólares
- **CUP**: Número, precio en pesos cubanos

### 2.3 Guardar Archivo
1. **Guarda como Excel** (.xlsx)
2. **Nombra el archivo**: `productos.xlsx`
3. **Coloca en**: `/data/productos.xlsx`

## 🎨 Paso 3: Crear Iconos PWA (Opcional)

### 3.1 ¿Por qué son importantes?
Los iconos permiten que la aplicación se instale como PWA en móviles.

### 3.2 Crear Iconos Rápido
1. **Ve a**: https://www.pwabuilder.com/imageGenerator
2. **Sube una imagen** o usa el emoji 🍷
3. **Genera todos los tamaños**
4. **Descarga** y coloca en `/icons/`

### 3.3 Tamaños Necesarios
```
icons/
├── icon-192x192.png  ← Obligatorio
├── icon-512x512.png  ← Obligatorio
├── (otros tamaños opcionales)
```

## 🌐 Paso 4: Servir la Aplicación

### Opción A: Servidor Local Simple
```bash
# Python 3
python -m http.server 8000

# Python 2
python -M SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Opción B: GitHub Pages (Recomendado)
1. **Sube a GitHub**:
```bash
git init
git add .
git commit -m "Consultor de Precios Pro"
git branch -M main
git remote add origin https://github.com/tu-usuario/consultor-precios-pro.git
git push -u origin main
```

2. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Save

### Opción C: Netlify
1. **Conecta** tu repositorio de GitHub
2. **Deploy**: Automático
3. **URL**: `https://tu-app.netlify.app`

### Opción D: Vercel
1. **Import** desde GitHub
2. **Framework**: Other
3. **Deploy**: Automático
4. **URL**: `https://tu-app.vercel.app`

## ✅ Paso 5: Verificar Instalación

### 5.1 Pruebas Básicas
1. **Abre** la URL en tu navegador
2. **Escribe** en el buscador: "RON"
3. **Verifica** que aparezcan resultados
4. **Haz clic** en un producto
5. **Confirma** que se copie el precio

### 5.2 Pruebas PWA
1. **Chrome**: Menú → "Instalar aplicación"
2. **Firefox**: Menú → "Instalar"
3. **Safari**: Compartir → "Añadir a pantalla de inicio"

### 5.3 Pruebas Mobile
1. **Abre** en tu móvil
2. **Chrome Android**: Menú → "Añadir a pantalla de inicio"
3. **Safari iOS**: Compartir → "Añadir a pantalla de inicio"

## 🔧 Paso 6: Personalización (Opcional)

### 6.1 Cambiar Colores
Edita en `index.html`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Cambia los colores aquí */
}
```

### 6.2 Modificar Textos
- **Título**: En `index.html` línea 6
- **Placeholder**: En `index.html` línea 95
- **Descripción**: En `index.html` línea 99

### 6.3 Añadir Categorías
Edita en `js/app.js` líneas 11-18:
```javascript
const categorias = {
    'nueva-categoria': { 
        name: 'Mi Categoría', 
        icon: 'fas fa-icon' 
    }
};
```

## 🐛 Solución de Problemas

### ❌ Error: "No se puede cargar el catálogo"
**Solución**: 
- Verifica que `/data/productos.xlsx` existe
- Confirma que las columnas se llaman exactamente `Producto`, `USD`, `CUP`
- Revisa la consola del navegador (F12)

### ❌ Error: "Service Worker falló"
**Solución**:
- Usa HTTPS o localhost (no file://)
- Verifica que `sw.js` esté en la raíz

### ❌ No se puede instalar como PWA
**Solución**:
- Añade iconos en `/icons/`
- Usa HTTPS o localhost
- Verifica que `manifest.json` existe

### ❌ Búsqueda no funciona
**Solución**:
- Abre la consola del navegador (F12)
- Busca errores JavaScript
- Verifica que el archivo Excel tenga el formato correcto

### ❌ No se ven productos
**Solución**:
- Escribe al menos 4 letras en el buscador
- Verifica que el archivo Excel tenga datos
- Confirma que los precios sean números (no texto)

## 📱 Configuración para Producción

### 1. Personalizar manifest.json
```json
{
    "name": "Tu Empresa - Consultor de Precios",
    "short_name": "Precios",
    "description": "Catálogo de precios de Tu Empresa"
}
```

### 2. Añadir Analytics (Opcional)
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### 3. Optimizar Performance
- ✅ Comprimir imágenes
- ✅ Minificar CSS/JS (opcional)
- ✅ Usar CDN para librerías

## 🎯 Lista de Verificación Final

- [ ] Archivo `productos.xlsx` creado con datos reales
- [ ] Aplicación carga correctamente
- [ ] Búsqueda funciona con al menos 4 letras
- [ ] Productos se muestran en cards
- [ ] Función de copiar precios funciona
- [ ] Estadísticas se actualizan
- [ ] Filtros por categoría funcionan
- [ ] Responsive en móvil y desktop
- [ ] PWA se puede instalar (con iconos)
- [ ] Funciona offline después de la primera carga

## 📞 Soporte

Si necesitas ayuda:

1. **Revisa** esta guía paso a paso
2. **Consulta** el README.md principal
3. **Verifica** la consola del navegador para errores
4. **Contacta** al desarrollador

## 🎉 ¡Felicitaciones!

Si has llegado hasta aquí, ya tienes tu **Consultor de Precios Pro** funcionando. 

**¡Disfruta de tu nueva aplicación moderna y elegante! 🍷**

---

**💡 Tip**: Guarda esta guía para futuras referencias o para enseñar a otros cómo instalar la aplicación.