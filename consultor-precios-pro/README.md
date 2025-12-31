# 🍷 Consultor de Precios Pro

Una aplicación web progresiva (PWA) moderna y elegante para consultar precios de productos comerciales con una interfaz atractiva y funcionalidades avanzadas.

![Consultor de Precios Pro](https://img.shields.io/badge/Status-Activo-brightgreen?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-Ready-blue?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## 🎯 Características Principales

### ✨ Interfaz Moderna
- **Diseño Glassmorphism**: Efectos visuales modernos con fondos translúcidos
- **Gradientes Elegantes**: Paleta de colores profesional y atractiva
- **Animaciones Suaves**: Transiciones y micro-interacciones fluidas
- **Tipografía Inter**: Fuente moderna y legible

### 🔍 Búsqueda Inteligente
- **Autocompletado Dinámico**: Sugerencias instantáneas mientras escribes
- **Categorización Automática**: Los productos se clasifican automáticamente
- **Filtros Visuales**: Chips modernos para filtrar por categorías
- **Búsqueda Fuzzy**: Encuentra productos incluso con errores tipográficos

### 📊 Dashboard de Estadísticas
- **Contador de Productos**: Total de productos en el catálogo
- **Métrica de Búsquedas**: Seguimiento de consultas realizadas
- **Copias al Portapapeles**: Contador de precios copiados

### 📱 Progressive Web App (PWA)
- **Instalable**: Se puede instalar como aplicación nativa
- **Funciona Offline**: Service Worker para funcionamiento sin internet
- **Notificaciones**: Soporte para push notifications
- **Responsive**: Optimizado para todos los dispositivos

### 🎨 Categorización Automática
- **🍷 Bebidas Alcohólicas**: Ron, Whisky, Vodka, Tequila, Brandy, Gin, Licores
- **🍾 Vinos**: Tintos, blancos, rosados, cavas, espumosos
- **🍺 Cervezas**: Nacionales e importadas
- **🥤 Refrescos**: Colas, aguas, jugos
- **📦 Otros**: Productos diversos

## 🚀 Demo en Vivo

**🔗 [Ver Demo](https://tu-usuario.github.io/consultor-precios-pro)**

*Sube este proyecto a GitHub Pages para tener un demo público*

## 📸 Capturas de Pantalla

### 🖥️ Vista de Escritorio
```
┌─────────────────────────────────────────────────────────────┐
│ 🍷 Consultor de Precios Pro                    📊 298 prod  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 🍷 Catálogo de Precios                                      │
│ Consulta precios de productos de forma rápida y elegante   │
│                                                             │
│ ┌─ Productos ─┐ ┌─ Búsquedas ─┐ ┌─ Copias ─┐              │
│ │     298     │ │      0      │ │    0     │              │
│ │  Productos  │ │  Búsquedas  │ │  Copias  │              │
│ └─────────────┘ └─────────────┘ └─────────┘               │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ 🔍 Escribe el nombre del producto que buscas...    │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                             │
│ [🍷 Todos] [🍾 Vinos] [🍺 Cervezas] [🥤 Refrescos]       │
│                                                             │
│ ┌─────────────────┐ ┌─────────────────┐ ┌──────────────┐  │
│ │ RON AÑEJO 3 AÑOS│ │    🍷 Bebidas   │ │ $100 USD     │  │
│ │ $500 CUP        │ │                │ │ $500 CUP     │  │
│ └─────────────────┘ └─────────────────┘ └──────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 📱 Vista Móvil
```
┌─────────────────────┐
│ 🍷 Precios Pro      │
│           📊 298    │
├─────────────────────┤
│                     │
│ 🍷 Catálogo de      │
│ Precios             │
│                     │
│ ┌─────────────────┐ │
│ │ 🔍 Buscar...    │ │
│ └─────────────────┘ │
│                     │
│ [Todos] [Bebidas]   │
│ [Vinos] [Cervezas]  │
│                     │
│ ┌─────────────────┐ │
│ │ RON AÑEJO       │ │
│ │ 🍷 Bebidas      │ │
│ │ $100  |  $500   │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ WHISKY 12 AÑOS  │ │
│ │ 🍷 Bebidas      │ │
│ │ $200  | $1000   │ │
│ └─────────────────┘ │
└─────────────────────┘
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con variables y animaciones
- **JavaScript ES6+**: Lógica de aplicación moderna
- **Bootstrap 5.3**: Framework CSS responsive

### Librerías
- **Font Awesome 6**: Iconografía profesional
- **Google Fonts (Inter)**: Tipografía moderna
- **AOS Library**: Animaciones on scroll
- **XLSX.js**: Lectura de archivos Excel

### PWA Features
- **Service Worker**: Funcionamiento offline
- **Web App Manifest**: Configuración PWA
- **Cache API**: Almacenamiento local inteligente

## 📦 Instalación

### Opción 1: Descarga Directa
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/consultor-precios-pro.git

# Entra al directorio
cd consultor-precios-pro

# Abre en tu navegador
# Simplemente abre index.html en un servidor local
```

### Opción 2: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .

# Usando PHP
php -S localhost:8000
```

### Opción 3: GitHub Pages
1. Sube el código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. ¡Tu app estará disponible en `https://tu-usuario.github.io/consultor-precios-pro`!

## 📊 Estructura del Proyecto

```
consultor-precios-pro/
├── 📄 index.html              # Página principal
├── 📄 manifest.json           # Configuración PWA
├── 📄 sw.js                   # Service Worker
├── 📁 js/
│   └── 📄 app.js              # Lógica de la aplicación
├── 📁 data/
│   └── 📄 productos.xlsx      # Base de datos de productos
├── 📁 icons/                  # Iconos PWA (192x192, 512x512)
├── 📁 screenshots/            # Capturas para manifest
└── 📄 README.md              # Este archivo
```

## 📝 Configuración de Datos

### Formato del Excel
El archivo `data/productos.xlsx` debe tener las siguientes columnas:

| Columna | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| `Producto` | Texto | Nombre del producto | "RON AÑEJO 3 AÑOS" |
| `USD` | Número | Precio en dólares | 100.00 |
| `CUP` | Número | Precio en pesos cubanos | 500.00 |

### Ejemplo de datos:
```
Producto,USD,CUP
"RON AÑEJO 3 AÑOS",100.00,500.00
"WHISKY 12 AÑOS",200.00,1000.00
"VINO TINTO RESERVA",50.00,250.00
"AGUA MINERAL 1.5L",2.00,10.00
```

### Personalización
Para usar tus propios datos:
1. Reemplaza el archivo `data/productos.xlsx`
2. Mantén el formato de columnas
3. Los productos se categorizarán automáticamente

## 🎨 Personalización

### Colores
Edita las variables CSS en `index.html`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Categorías
Modifica las categorías en `js/app.js`:
```javascript
const categorias = {
    'categoria1': { name: 'Mi Categoría', icon: 'fas fa-icon' },
    'categoria2': { name: 'Otra Categoría', icon: 'fas fa-icon2' }
};
```

### Textos
Personaliza los textos en el HTML y JavaScript según tus necesidades.

## 🚀 Deployment

### GitHub Pages
```bash
# 1. Sube a GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/consultor-precios-pro.git
git push -u origin main

# 2. Activa GitHub Pages en Settings > Pages
```

### Netlify
1. Conecta tu repositorio
2. Configura build command: `echo "No build needed"`
3. Publish directory: `/`

### Vercel
1. Importa desde GitHub
2. Framework preset: `Other`
3. Build command: `echo "No build needed"`

## 🔧 Características Avanzadas

### Funcionamiento Offline
- **Cache Inteligente**: Los recursos se almacenan localmente
- **Fallbacks**: Páginas offline para mejor UX
- **Sync**: Sincronización automática cuando hay conexión

### Performance
- **Debounce**: Optimización de búsquedas
- **Lazy Loading**: Carga bajo demanda
- **Minificación**: CSS y JS optimizados

### Accesibilidad
- **ARIA Labels**: Etiquetas semánticas
- **Keyboard Navigation**: Navegación por teclado
- **Screen Reader**: Compatible con lectores de pantalla

## 📈 Estadísticas y Métricas

### KPIs Incluidos
- **Total de productos**: Contador dinámico
- **Búsquedas realizadas**: Seguimiento de uso
- **Copias al portapapeles**: Indicador de funcionalidad

### Analytics (Futuro)
```javascript
// Google Analytics 4
gtag('event', 'search', {
    'search_term': query,
    'category': category
});
```

## 🛡️ Seguridad

### Buenas Prácticas Implementadas
- **HTTPS**: Obligatorio para PWA
- **Content Security Policy**: Protección contra XSS
- **Sanitización**: Validación de datos de entrada
- **Error Handling**: Manejo seguro de errores

## 🐛 Solución de Problemas

### Problemas Comunes

**❌ No carga el catálogo**
```
✅ Solución: Verifica que data/productos.xlsx existe y tiene el formato correcto
```

**❌ No funciona offline**
```
✅ Solución: Asegúrate de servir desde HTTPS o localhost
```

**❌ No se puede instalar como PWA**
```
✅ Solución: Verifica que manifest.json y sw.js estén en la raíz
```

**❌ Búsqueda no funciona**
```
✅ Solución: Revisa la consola del navegador para errores JavaScript
```

## 🔮 Roadmap

### Próximas Características
- [ ] **Modo Oscuro**: Toggle para tema oscuro
- [ ] **Favoritos**: Guardar productos frecuentes
- [ ] **Historial**: Últimas búsquedas
- [ ] **Exportar**: PDF/Excel con precios
- [ ] **Multi-idioma**: Español, Inglés
- [ ] **Dashboard Admin**: Gestión de productos
- [ ] **API REST**: Backend opcional
- [ ] **Búsqueda por imagen**: Cámara para escanear

### Versiones Futuras
- **v2.0**: Backend con base de datos
- **v2.1**: Multi-usuario y autenticación
- **v2.2**: Notificaciones push
- **v3.0**: App móvil nativa

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

### Cómo Contribuir
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Áreas de Contribución
- 🎨 **UI/UX**: Mejoras de diseño
- 🐛 **Bugs**: Corrección de errores
- ✨ **Features**: Nuevas funcionalidades
- 📚 **Docs**: Documentación
- 🧪 **Tests**: Pruebas automatizadas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Desarrollado con ❤️ para la comunidad**

- 📧 **Email**: tu-email@ejemplo.com
- 💼 **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- 🐱 **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- 🌐 **Portfolio**: [tu-portfolio.com](https://tu-portfolio.com)

## 🙏 Agradecimientos

- **Bootstrap Team**: Por el framework CSS
- **Font Awesome**: Por la iconografía
- **Google Fonts**: Por las tipografías
- **AOS Library**: Por las animaciones
- **XLSX.js**: Por la funcionalidad Excel
- **Comunidad PWA**: Por las mejores prácticas

## 📞 Soporte

¿Necesitas ayuda? 

- 🐛 **Issues**: [Reportar bug](https://github.com/tu-usuario/consultor-precios-pro/issues)
- 💡 **Feature Requests**: [Solicitar característica](https://github.com/tu-usuario/consultor-precios-pro/issues)
- 📧 **Email**: tu-email@ejemplo.com

---

⭐ **Si este proyecto te resulta útil, no olvides darle una estrella en GitHub**

![GitHub stars](https://img.shields.io/github/stars/tu-usuario/consultor-precios-pro?style=social)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/consultor-precios-pro?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/tu-usuario/consultor-precios-pro?style=social)

---

**Hecho con ❤️ para hacer la consulta de precios más elegante y eficiente**