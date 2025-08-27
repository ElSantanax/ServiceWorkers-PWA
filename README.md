# Administrador de Pacientes Veterinaria PWA

Una Progressive Web App (PWA) para administrar citas de pacientes veterinarios.

## Características Principales

- Aplicación PWA instalable en dispositivos móviles y escritorio
- Funciona offline gracias a Service Workers
- Interfaz responsive con Bootstrap
- Cache de archivos estáticos
- Manejo de errores offline

## Tecnologías Utilizadas

- HTML5
- CSS3 
- JavaScript (ES6+)
- Service Workers
- Manifest.json
- Bootstrap 4

## Funcionalidades

### Gestión de Citas
- Crear nuevas citas con información del paciente
- Editar citas existentes
- Eliminar citas
- Validación de formularios
- Alertas y mensajes de feedback

### PWA
- Service Worker implementado para cache de archivos
- Manifest para instalación como aplicación
- Iconos en múltiples resoluciones (72px hasta 512px)
- Pantalla de error personalizada para modo offline
- Tema y colores personalizados

### Interfaz
- Diseño responsive
- Tema personalizado con gradientes
- Formularios optimizados para móvil
- Iconos SVG para acciones
- Animaciones y transiciones

## Estructura del Proyecto

```
├── css/
│   ├── bootstrap.css
│   └── styles.css
├── img/
│   └── icons/
├── js/
│   ├── app.js
│   └── apv.js
├── index.html
├── error.html
├── manifest.json
└── sw.js
```

## Instalación

1. Clona este repositorio
2. Abre index.html en un servidor web
3. La aplicación se puede instalar desde el navegador compatible con PWA

## Modo Offline

La aplicación funciona sin conexión gracias al Service Worker que cachea:

- Archivos HTML
- Estilos CSS
- JavaScript
- Iconos
- Página de error personalizada

## Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Haz push a la rama
5. Abre un Pull Request
