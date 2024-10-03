<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="healthSOS" content="healthSOS">
    <title></title>
   
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body class="bg-gray-100 font-sans">

    <!-- Encabezado con Navegación -->
    <header class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-blue-600">MiSitio</div>
            <nav>
                <ul class="flex space-x-6">
                    <li><a href="#inicio" class="text-gray-700 hover:text-blue-600">Inicio</a></li>
                    <li><a href="#sobre-nosotros" class="text-gray-700 hover:text-blue-600">Sobre Nosotros</a></li>
                    <li><a href="#aplicacion" class="text-gray-700 hover:text-blue-600">Aplicación</a></li>
                    <li><a href="#contacto" class="text-gray-700 hover:text-blue-600">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Sección Principal con Imagen Grande -->
    <section id="inicio" class="relative">
        <img src="aaas.png" alt="Imagen Principal" class="w-full h-auto">
        <div class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <h1 class="text-4xl md:text-6xl font-bold">Bienvenido a HealthSOS</h1>
            <p class="mt-4 text-lg md:text-2xl"></p>
            <a href="#sobre-nosotros" class="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Saber Más</a>
        </div>
    </section>

    <!-- Sección Sobre Nosotros -->
    <section id="sobre-nosotros" class="py-12 bg-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-semibold mb-6">Sobre Nosotros</h2>
            <p class="text-gray-700 mb-6">
            Bienvenido a nuestra aplicación de salud
Somos una herramienta innovadora diseñada para cuidar de ti en momentos críticos. Con nuestra aplicación, puedes registrar y almacenar tus datos esenciales de salud, asegurando que, en caso de una emergencia, la información necesaria esté siempre a tu alcance.
Desde alergias y condiciones médicas hasta medicaciones.

Tu salud es nuestra prioridad, ¡regístrate hoy y da el primer paso hacia una vida más segura!
            </p>
            <img src="https://via.placeholder.com/800x400" alt="Sobre Nosotros" class="mx-auto rounded shadow-lg">
        </div>
    </section>

    <!-- Sección Descarga de la Aplicación -->
    <section id="aplicacion" class="py-12 bg-gray-100">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-semibold mb-6">Descarga Nuestra Aplicación</h2>
            <p class="text-gray-700 mb-6">Disponible en las siguientes plataformas:</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded shadow">
                    <i class="fab fa-apple fa-2x mr-3"></i>
                    <span>App Store</span>
                </a>
                <a href="#" class="flex items-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded shadow">
                    <i class="fab fa-google-play fa-2x mr-3"></i>
                    <span>Google Play</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Sección Contacto -->
    <section id="contacto" class="py-12 bg-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-semibold mb-6">Contacto</h2>
            <p class="text-gray-700 mb-6">¿Tienes alguna pregunta? Envíanos un correo electrónico.</p>
            <a href="mailto:contacto@misitio.com" class="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">contácto@healthsos.com</a>
            <div class="mt-6 flex justify-center space-x-4">
                <a href="#" class="text-gray-700 hover:text-blue-600">
                    <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" class="text-gray-700 hover:text-blue-600">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" class="text-gray-700 hover:text-blue-600">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" class="text-gray-700 hover:text-blue-600">
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <ul class="flex space-x-6">
                    <li><a href="#inicio" class="hover:text-blue-400">Inicio</a></li>
                    <li><a href="#sobre-nosotros" class="hover:text-blue-400">Sobre Nosotros</a></li>
                    <li><a href="#aplicacion" class="hover:text-blue-400">Aplicación</a></li>
                    <li><a href="#contacto" class="hover:text-blue-400">Contacto</a></li>
                </ul>
            </div>
            <div>
                <p>&copy;2024 por HealthSOS </p>
            </div>
        </div>
    </footer>

</body>

</html>
