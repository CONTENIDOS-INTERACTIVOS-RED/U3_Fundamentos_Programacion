<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el desarrollo de software, la capacidad de estructurar el código de manera reutilizable es fundamental para construir programas escalables y mantenibles. En este contexto, las funciones y la modularidad cumplen un papel clave, ya que permiten dividir un problema en partes más pequeñas y manejables, facilitando tanto la organización del código como su comprensión y mantenimiento.  
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta unidad proporciona una base sólida en el uso de funciones y el diseño modular, abordando tres aspectos esenciales. Primero, se estudiará la declaración y uso de funciones, explorando cómo encapsular bloques de código que pueden ejecutarse múltiples veces sin necesidad de repetición, lo que mejora la claridad y organización de los programas.
    

    
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")

    .row.mb-5.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
      .col-lg-8

        p(data-aos="fade-left").mb-4 Luego, se analizará el concepto de recursión, una técnica en la que una función se llama a sí misma para resolver problemas de manera estructurada. Se examinarán los principios detrás de este enfoque, sus aplicaciones más comunes y las mejores prácticas para evitar errores.
    
        .bg-color-8.p-4(data-aos="fade-left")
          p.mb-0 Finalmente, se profundizará en la modularidad en proyectos, un principio clave en el diseño de software que permite dividir grandes sistemas en componentes más pequeños e independientes. Se estudiará cómo organizar el código en módulos, gestionar dependencias y facilitar la colaboración en entornos de desarrollo.
    

</template>
