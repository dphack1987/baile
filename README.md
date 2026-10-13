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

## 🌐 Despliegue

### Opción 1: GitHub Pages (Recomendado - Gratis)

1. Suba este repositorio a GitHub
2. Vaya a Settings > Pages
3. En "Source", seleccione la rama `main`
4. Haga clic en Save
5. Su sitio estará disponible en: `https://dphack1987.github.io/baile/`

### Opción 2: Netlify (Gratis)

1. Vaya a [netlify.com](https://netlify.com)
2. Arrastre la carpeta del proyecto al área de "Sites"
3. Espere unos segundos y su sitio estará en línea

### Opción 3: Vercel (Gratis)

1. Vaya a [vercel.com](https://vercel.com)
2. Conecte su cuenta de GitHub
3. Importe este repositorio
4. Haga clic en Deploy

### Opción 4: Servidor tradicional

Suba los archivos (`index.html`, `styles.css`, `script.js`) a cualquier servidor web tradicional (cPanel, Plesk, etc.).

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