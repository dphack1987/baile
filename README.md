# Portafolio de Clases de Baile para Hoteles

Portafolio online profesional para servicios de clases de baile dirigidos a hoteles. Diseño moderno, responsive y con integración directa de WhatsApp para contacto.

## 🎯 Características

- ✨ Diseño elegante y profesional
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 💬 Contacto directo por WhatsApp
- 🎭 Secciones organizadas de servicios
- 🌟 Animaciones suaves y modernas
- 🚀 Fácil de desplegar y compartir

## 📁 Estructura del Proyecto

```
baile/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Configurar el número de WhatsApp

Antes de desplegar, debe configurar su número de WhatsApp en dos lugares:

**En `index.html`:**
- Busque: `https://wa.me/TUNUMERO`
- Reemplace `TUNUMERO` con su número (incluyendo código de país, sin el símbolo +)
- Ejemplo: `https://wa.me/1234567890`

**En `script.js`:**
- Busque: `const whatsappNumber = '1234567890';`
- Reemplace con su número (incluyendo código de país, sin el símbolo +)

### 2. Actualizar información de contacto

En `index.html`, actualice:
- Email: `info@bailehoteles.com`
- Teléfono en la sección de contacto
- Cualquier otra información específica

### 3. Ver localmente

Simplemente abra el archivo `index.html` en su navegador web.

O use un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tiene http-server instalado)
npx http-server
```

Luego abra `http://localhost:8000` en su navegador.

## 🌐 Despliegue en Vercel (Recomendado)

### Pasos para desplegar en Vercel:

1. **Crear cuenta en Vercel**
   - Vaya a [vercel.com](https://vercel.com)
   - Regístrese con su cuenta de GitHub

2. **Importar el repositorio**
   - Haga clic en "Add New Project"
   - Seleccione el repositorio `dphack1987/baile`
   - Haga clic en "Import"

3. **Configurar el proyecto**
   - Framework Preset: "Other"
   - Root Directory: `./`
   - Build Command: (dejar vacío)
   - Output Directory: `./`

4. **Desplegar**
   - Haga clic en "Deploy"
   - Espere unos segundos
   - ¡Su sitio estará en línea!

5. **Personalizar dominio (opcional)**
   - Vaya a Settings > Domains
   - Puede usar un dominio personalizado o el dominio gratuito de Vercel

**URL del sitio:** `https://baile.vercel.app` (o el dominio que Vercel asigne)

### Otras opciones de despliegue:

**GitHub Pages:**
1. Vaya al repositorio en GitHub
2. Settings > Pages
3. Source: `main` branch
4. URL: `https://dphack1987.github.io/baile/`

**Netlify:**
1. Vaya a [netlify.com](https://netlify.com)
2. Arrastre la carpeta del proyecto
3. Listo

## 📱 Compartir el Portafolio

Una vez desplegado, puede compartir el link de su portafolio:
- En tarjetas de presentación
- En correos electrónicos
- En redes sociales
- En WhatsApp
- En materiales de marketing

## 🎨 Personalización

### Colores

Para cambiar los colores, edite las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #D4AF37;        /* Color principal (dorado) */
    --secondary-color: #1a1a2e;      /* Color secundario (oscuro) */
    --accent-color: #16213e;         /* Color de acento */
    --text-color: #333;              /* Color del texto */
    --light-text: #f5f5f5;           /* Texto claro */
    --white: #ffffff;                /* Blanco */
    --gradient: linear-gradient(135deg, #D4AF37 0%, #f4e4bc 100%);
}
```

### Imágenes

Puede agregar imágenes reales de sus clases de baile:
1. Cree una carpeta `images/`
2. Agregue sus imágenes
3. Actualice las referencias en `index.html` o `styles.css`

### Texto

Todo el texto se puede editar directamente en `index.html`. Busque y reemplace el contenido según sus necesidades.

## 📞 Funcionalidad de WhatsApp

El formulario de contacto envía el mensaje directamente a WhatsApp con toda la información estructurada:

- Nombre del hotel
- Nombre de contacto
- Teléfono
- Email
- Tipo de servicio solicitado
- Mensaje adicional

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (con Grid y Flexbox)
- JavaScript (Vanilla)
- Sin dependencias externas (excepto fuentes de Google Fonts)

## 📄 Secciones del Portafolio

1. **Hero**: Sección principal con llamada a la acción
2. **Servicios**: 6 tipos de servicios ofrecidos
3. **Modalidades**: 4 formatos de clases
4. **Estilos de Baile**: 6 estilos disponibles
5. **Por Qué Elegirnos**: 4 razones clave
6. **Contacto**: Formulario e información de contacto
7. **Footer**: Información adicional y enlaces

## 🌟 Características de UX/UI

- Navegación fija con efecto de scroll
- Menú hamburguesa para móviles
- Animaciones suaves al hacer scroll
- Botón flotante de WhatsApp
- Formulario con validación
- Diseño responsivo
- Tipografía profesional (Playfair Display + Poppins)

## 📝 Notas

- El portafolio está listo para usar, solo necesita configurar el número de WhatsApp
- Todas las animaciones son sutiles y no afectan el rendimiento
- El código está optimizado para carga rápida
- Compatible con todos los navegadores modernos

## 🤝 Soporte

Si necesita ayuda con la personalización o despliegue, no dude en contactar.

---

**¡Disfrute su nuevo portafolio profesional!** 💃🕺