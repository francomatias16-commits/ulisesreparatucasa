# 🚀 CHECKLIST DE PUBLICACIÓN – Ulises Repara Tu Casa
## Sitio: ulisesreparatucasa.com.ar

---

## 📁 ARCHIVOS INCLUIDOS EN ESTE PAQUETE

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal optimizada |
| `404.html` | Página de error personalizada |
| `robots.txt` | Instrucciones para buscadores |
| `sitemap.xml` | Mapa del sitio para Google |
| `.htaccess` | Configuración Apache (HTTPS, caché, compresión, seguridad) |
| `manifest.json` | Configuración PWA / ícono en pantalla de inicio |
| `img/logo.png` | ⚠️ PENDIENTE: Subir tu logo |
| `img/og-preview.jpg` | ⚠️ PENDIENTE: Imagen para compartir en redes (1200×630px) |

---

## ✅ ANTES DE SUBIR AL HOSTING

### 1. Google Analytics
- [ ] Crear cuenta en https://analytics.google.com
- [ ] Copiar el ID (formato: G-XXXXXXXXXX)
- [ ] Reemplazar **AMBAS** apariciones de `G-XXXXXXXXXX` en index.html

### 2. Imágenes (carpeta /img/)
- [ ] `logo.png` → 500×500px mínimo, fondo transparente o blanco
- [ ] `og-preview.jpg` → 1200×630px (imagen de portada para WhatsApp/Facebook)
- [ ] Todas las imágenes de trabajos/galería (cuando las tengas)
- [ ] Convertir imágenes pesadas a .webp con https://squoosh.app

### 3. Dominio y Hosting
- [ ] SSL/HTTPS activo en el hosting
- [ ] Subir TODOS los archivos incluyendo `.htaccess` (los archivos con punto suelen ocultarse, verificar)
- [ ] Verificar que el hosting use Apache (para que funcione el .htaccess)
- [ ] Si es Nginx, pedir la versión nginx.conf equivalente

---

## ✅ DESPUÉS DE PUBLICAR

### Google Search Console
- [ ] Ir a https://search.google.com/search-console
- [ ] Agregar propiedad: ulisesreparatucasa.com.ar
- [ ] Verificar propiedad (método HTML tag o DNS)
- [ ] Enviar sitemap: `https://ulisesreparatucasa.com.ar/sitemap.xml`

### Google My Business
- [ ] Crear / reclamar negocio en https://business.google.com
- [ ] Nombre: "Ulises – Repara Tu Casa"
- [ ] Categoría: "Plomero" (+ Electricista, Empresa de construcción)
- [ ] Agregar fotos, horarios, descripción y sitio web
- [ ] Pedir reseñas a clientes anteriores ⭐

### Test de Velocidad
- [ ] PageSpeed Insights: https://pagespeed.web.dev
  → Objetivo: 90+ en mobile, 95+ en desktop
- [ ] GTmetrix: https://gtmetrix.com
- [ ] WebPageTest: https://webpagetest.org

### Test de SEO
- [ ] Verificar Schema.org: https://search.google.com/test/rich-results
- [ ] Verificar Open Graph: https://developers.facebook.com/tools/debug/
- [ ] Verificar Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Test mobile: https://search.google.com/test/mobile-friendly

---

## 🔧 MEJORAS OPCIONALES (AVANZADO)

### Imágenes de Trabajos
- Sacar fotos de trabajos realizados (antes/después)
- Nombrar: `trabajo-plomeria-01.webp`, `trabajo-electricidad-01.webp`, etc.
- Agregar en la sección Galería (descomentar el script de galería)

### Performance extra
- Usar CDN (Cloudflare gratis: https://cloudflare.com)
  → Activar "Auto Minify" para HTML, CSS, JS
  → Activar "Polish" para imágenes
  → Activar "Rocket Loader"

### Email profesional
- Crear: ulises@ulisesreparatucasa.com.ar
- Opciones: Zoho Mail (gratis) o Google Workspace

---

## 📊 OPTIMIZACIONES APLICADAS EN ESTE PAQUETE

### Performance
✅ Google Analytics con carga diferida (no bloquea render)
✅ Fuentes con `preload` + `rel=preconnect`
✅ Imagen hero con `fetchpriority="high"` + `loading="eager"`
✅ Todas las demás imágenes con `loading="lazy"` + `decoding="async"`
✅ Compresión GZIP via .htaccess
✅ Caché del navegador configurado (CSS/JS: 1 año, imágenes: 6 meses)
✅ HTTP → HTTPS redirect automático
✅ www → sin www redirect (301)

### SEO
✅ Title y meta description optimizados
✅ Schema.org LocalBusiness completo
✅ Schema.org FAQPage (4 preguntas frecuentes)
✅ Open Graph completo (Facebook/WhatsApp)
✅ Twitter Card configurada
✅ Sitemap.xml
✅ robots.txt
✅ Canonical URL
✅ hreflang implícito (lang="es")

### Accesibilidad
✅ Skip-to-content link
✅ ARIA labels en navegación
✅ aria-expanded en menú móvil
✅ prefers-reduced-motion respetado
✅ Roles semánticos (nav, main, footer, etc.)
✅ Alt text en todas las imágenes

### Seguridad
✅ X-Content-Type-Options: nosniff
✅ X-Frame-Options: SAMEORIGIN
✅ X-XSS-Protection
✅ HSTS (SSL obligatorio)
✅ Directorios protegidos (no indexables)
✅ Archivos sensibles bloqueados
✅ rel="noopener" en todos los target="_blank"

### Responsive
✅ Mobile: < 640px – columna única
✅ Tablet: 640px–960px – 2 columnas
✅ Desktop: 960px+ – layout completo
✅ Cursor personalizado desactivado en touch
✅ Canvas de partículas desactivado en mobile
✅ min-height:44px en botones táctiles

---

## 📞 SOPORTE

Si tenés dudas sobre algún paso, podés consultar:
- Hosting/dominio: soporte técnico de tu proveedor
- Google Search Console: https://support.google.com/webmasters
- Schema.org: https://schema.org/LocalBusiness
