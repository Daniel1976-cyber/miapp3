# 🚀 COMO SUBIR TU PROYECTO A GITHUB - PASO A PASO

¡Perfecto! Tu proyecto **Consultor de Precios Pro** está listo. Aquí te explico exactamente cómo subirlo a GitHub en 5 minutos.

## 🎯 RESUMEN RÁPIDO

1. **Crear repositorio en GitHub** (2 minutos)
2. **Subir archivos con Git** (3 minutos)
3. **Activar GitHub Pages** (1 minuto)
4. **¡Listo!** Tu app estará online

---

## 📋 PASO 1: Crear Repositorio en GitHub

### 1.1 Ve a GitHub
- **Abre**: https://github.com
- **Inicia sesión** en tu cuenta

### 1.2 Crear Nuevo Repositorio
- **Haz clic** en el botón verde **"New"** o **"+"** → **"New repository"**

### 1.3 Configurar Repositorio
```
Repository name: consultor-precios-pro
Description: 🍷 Aplicación moderna para consultar precios de productos
Visibility: Public (para GitHub Pages gratuito)
❌ NO marques "Add a README file" (ya tenemos uno)
❌ NO añadas .gitignore (ya lo tenemos)
❌ NO elijas licencia (opcional)
```

### 1.4 Crear Repositorio
- **Haz clic** en **"Create repository"**

---

## 📤 PASO 2: Subir Archivos con Git

### 2.1 Abrir Terminal/PowerShell
**En Windows**:
- **Busca** "PowerShell" o "CMD"
- **O presiona** `Windows + R` → escribe `cmd`

### 2.2 Navegar a tu Proyecto
```cmd
cd ruta\donde\guardaste\consultor-precios-pro

# Ejemplo:
cd C:\Users\TuUsuario\Desktop\consultor-precios-pro
```

### 2.3 Inicializar Git (Solo la primera vez)
```cmd
git init
git config --global user.name "TU NOMBRE"
git config --global user.email "tu-email@gmail.com"
```

### 2.4 Añadir Archivos
```cmd
git add .
git commit -m "🚀 Initial commit: Consultor de Precios Pro

✨ Características:
- Interfaz moderna con glassmorphism
- Búsqueda inteligente con autocompletado
- Categorización automática
- Dashboard con estadísticas
- PWA instalable
- Funciona offline"
```

### 2.5 Conectar con GitHub
```cmd
git branch -M main
git remote add origin https://github.com/TU-USUARIO/consultor-precios-pro.git
```

### 2.6 Subir a GitHub
```cmd
git push -u origin main
```

---

## 🌐 PASO 3: Activar GitHub Pages (GRATIS)

### 3.1 Ir a Settings
- **En tu repositorio** de GitHub
- **Haz clic** en **"Settings"** (tab superior)

### 3.2 Configurar Pages
- **Scroll down** hasta **"Pages"** (sidebar izquierdo)
- **Source**: "Deploy from a branch"
- **Branch**: "main" / "(root)"
- **Haz clic** en **"Save"**

### 3.3 ¡Listo!
- **URL de tu app**: `https://TU-USUARIO.github.io/consultor-precios-pro`
- **Espera 1-2 minutos** para que se active

---

## ✅ PASO 4: Verificar que Funciona

### 4.1 Probar tu App
1. **Abre** la URL: `https://TU-USUARIO.github.io/consultor-precios-pro`
2. **Escribe** "RON" en el buscador
3. **Verifica** que aparezcan resultados

### 4.2 Probar PWA
**En móvil**:
1. **Abre** la URL en Chrome
2. **Menú** → **"Instalar aplicación"**
3. **Confirma** la instalación

---

## 📱 PASO 5: Añadir tus Datos

### 5.1 Crear archivo de productos
1. **Abre Excel** o Google Sheets
2. **Crea tabla** con estas columnas:

| A | B | C |
|---|---|---|
| Producto | USD | CUP |
| RON AÑEJO 3 AÑOS | 100.00 | 500.00 |
| WHISKY 12 AÑOS | 200.00 | 1000.00 |

3. **Guarda** como `productos.xlsx`
4. **Sube** a la carpeta `data/` de tu proyecto

### 5.2 Actualizar GitHub
```cmd
git add data/productos.xlsx
git commit -m "📊 Añadir datos de productos"
git push
```

---

## 🎨 PASO 6: Personalizar (Opcional)

### 6.1 Cambiar Título
**Edita** `index.html` línea 6:
```html
<title>Tu Empresa - Consultor de Precios</title>
```

### 6.2 Cambiar Descripción
**Edita** `README.md`:
```markdown
# Tu Empresa - Consultor de Precios Pro
Una aplicación moderna para consultar precios de productos de Tu Empresa
```

### 6.3 Actualizar GitHub
```cmd
git add .
git commit -m "🎨 Personalizar para Tu Empresa"
git push
```

---

## 🚨 COMANDOS RÁPIDOS PARA EL FUTURO

### Actualizar tu proyecto:
```cmd
git add .
git commit -m "📝 Descripción de cambios"
git push
```

### Ver estado:
```cmd
git status
git log --oneline
```

### Descargar cambios en otro equipo:
```cmd
git pull
```

---

## 🆘 SI ALGO SALE MAL

### ❌ Error: "Authentication failed"
**Solución**:
```cmd
git remote set-url origin https://TU-USUARIO:ghp_TOKEN@github.com/TU-USUARIO/consultor-precios-pro.git
```
*Necesitas crear un token en GitHub → Settings → Developer settings → Personal access tokens*

### ❌ Error: "Repository not found"
**Solución**:
- Verifica que el repositorio existe en GitHub
- Confirma que la URL es correcta
- Asegúrate de estar logueado

### ❌ No se puede instalar como PWA
**Solución**:
- Usa la URL de GitHub Pages (no local)
- Añade iconos en la carpeta `/icons/`

### ❌ GitHub Pages no actualiza
**Solución**:
- Espera 5-10 minutos
- Fuerza refresh: `Ctrl + F5`
- Verifica en Settings → Pages

---

## 🎉 ¡FELICITACIONES!

Si llegaste hasta aquí, ya tienes:

✅ **Proyecto en GitHub**  
✅ **App funcionando online**  
✅ **URL pública para compartir**  
✅ **PWA instalable**  
✅ **Funciona en móviles**  

### 🎯 Tu URL Final:
`https://TU-USUARIO.github.io/consultor-precios-pro`

### 📱 Compartir en Redes:
```
🚀 ¡Mi nueva app está lista!

🍷 Consultor de Precios Pro
🔗 https://TU-USUARIO.github.io/consultor-precios-pro

✨ Características:
- Búsqueda inteligente
- Interfaz moderna
- PWA instalable
- Funciona offline

#JavaScript #PWA #WebDev
```

---

## 📞 SOPORTE

Si necesitas ayuda:

1. **Revisa** `INSTALACION.md` para problemas técnicos
2. **Consulta** `README.md` para documentación completa
3. **Usa** `GITHUB.md` para funciones avanzadas

---

**🔥 ¡Tu proyecto está listo para impresionar a clientes y empleadores!**