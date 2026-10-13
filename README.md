# Portafolio de Clases de Baile para Hoteles

Portafolio online profesional e inmersivo para servicios de clases de baile dirigidos a hoteles. Diseño moderno, responsive, con música de fondo y integración directa de WhatsApp para contacto.

## 🎯 Características

- ✨ Diseño premium y moderno con UX mejorada
- 🎵 **Música de fondo** con control de reproducción
- 📸 **Galería de imágenes** del portafolio original
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 💬 **Múltiples botones de WhatsApp** para contacto directo
- 🎭 Secciones organizadas de servicios
- 🌟 Animaciones suaves, parallax y efectos de scroll
- 📊 Estadísticas animadas en el hero
- 🎨 Tipografía profesional con Font Awesome
- 🚀 Fácil de desplegar y compartir

## 📁 Estructura del Proyecto

```
baile/
├── index.html          # Página principal
├── styles.css          # Estilos CSS modernos
├── script.js           # Funcionalidad JavaScript
├── vercel.json         # Configuración de Vercel
├── images/             # Galería de imágenes
│   ├── page_1.png
│   ├── page_2.png
│   ├── page_3.png
│   └── page_4.png
├── .gitignore          # Archivos a ignorar
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Configurar el número de WhatsApp

Antes de desplegar, debe configurar su número de WhatsApp en múltiples lugares:

**En `index.html` (3 lugares):**
- Línea 34: Header CTA button
- Líneas 101, 113, 124, 135, 146, 157: Service cards
- Líneas 179, 189, 199, 209: Gallery items
- Línea 228: Contact card
- Línea 242: Contact card
- Línea 256: Contact card
- Línea 340: Floating WhatsApp button

Busque: `https://wa.me/1234567890`
Reemplace `1234567890` con su número (incluyendo código de país, sin el símbolo +)
Ejemplo: `https://wa.me/521234567890`

**En `script.js`:**
- Línea 83: `const whatsappNumber = '1234567890';`
Reemplace con su número (incluyendo código de país, sin el símbolo +)

### 2. Configurar la música de fondo (opcional)

El portafolio incluye música de fondo. Puede cambiarla editando `index.html`:
- Línea 18: `<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">`

Reemplace la URL con su propia música o use una fuente diferente.

### 3. Actualizar información de contacto

En `index.html`, actualice:
- Email: `info@bailehoteles.com` (línea 230)
- Teléfono en la sección de contacto
- Estadísticas del hero (líneas 65-75)
- Cualquier otra información específica

### 4. Ver localmente

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

1. **Hero**: Sección principal inmersiva con estadísticas animadas y CTAs
2. **Servicios**: 6 tipos de servicios con botones directos de WhatsApp
3. **Galería**: Imágenes del portafolio original con efectos hover
4. **Estilos de Baile**: 6 estilos disponibles con diseño interactivo
5. **Por Qué Elegirnos**: 4 diferenciadores clave
6. **CTA Section**: Llamada a la acción destacada
7. **Contacto**: Formulario e información de contacto con múltiples opciones
8. **Footer**: Información adicional, enlaces y redes sociales

## 🎵 Características Inmersivas

### Música de Fondo
- Botón flotante para activar/desactivar música
- Animación de pulso cuando está reproduciendo
- Volumen inicial bajo (30%) para no ser intrusivo
- Se puede personalizar fácilmente

### Animaciones y Efectos
- **Parallax**: Efecto de profundidad en el hero
- **Scroll Animations**: Elementos aparecen al hacer scroll
- **Counter Animation**: Estadísticas animadas
- **Hover Effects**: Tarjetas con efectos al pasar el mouse
- **Smooth Scroll**: Navegación suave entre secciones

### WhatsApp Integration
- **Botón flotante** siempre visible
- **Botones en cada servicio** con mensaje predefinido
- **Header CTA** para contacto rápido
- **Galería** con botones de contacto
- **Formulario** que envía directamente a WhatsApp

## 🌟 Características de UX/UI

- Navegación fija con efecto de scroll y backdrop blur
- Menú hamburguesa animado para móviles
- Animaciones suaves al hacer scroll (fade-in, slide-up)
- Botón flotante de WhatsApp con tooltip
- Formulario con validación y envío a WhatsApp
- Diseño completamente responsive
- Tipografía premium (Playfair Display + Poppins)
- Iconos de Font Awesome
- Gradientes y sombras modernas
- Efectos hover en tarjetas y botones
- Indicador de scroll animado

## 📝 Notas

- El portafolio está listo para usar, solo necesita configurar el número de WhatsApp
- Todas las animaciones son optimizadas y no afectan el rendimiento
- El código está optimizado para carga rápida con lazy loading de imágenes
- Compatible con todos los navegadores modernos
- La música de fondo requiere interacción del usuario para reproducirse (política de navegadores)
- Las imágenes del portafolio original están en la carpeta `images/`
- Se recomienda usar música libre de derechos para evitar problemas de copyright

## 🤝 Soporte

Si necesita ayuda con la personalización o despliegue, no dude en contactar.

---

**¡Disfrute su nuevo portafolio profesional!** 💃🕺