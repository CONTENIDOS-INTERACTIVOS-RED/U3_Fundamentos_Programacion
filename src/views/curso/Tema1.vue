<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Declaración y uso de funciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En programación, una función es un bloque de código que realiza una tarea específica y puede ser reutilizado en distintas partes de un programa. Son fundamentales para estructurar el código de manera modular, reducir la redundancia y mejorar la mantenibilidad.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Menchaca García (2010), las funciones permiten dividir un programa en secciones más pequeñas, cada una con una responsabilidad bien definida. Su principal propósito es evitar la repetición de código, promover la organización y facilitar la depuración.
    
        p(data-aos="fade-left").mb-4 Por ejemplo, si un programa necesita calcular varias veces el área de un rectángulo, en lugar de escribir la operación repetidamente, se puede definir una función que encapsule dicha lógica. De esta forma, cada vez que se necesite calcular el área, solo se invoca la función.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.py-4


        .titulo-figura.mb-2
          h5 Figura 1. 
          span Ejemplo de función
        
        figure.bg-color-info.p-4.p-md-5.mb-4
          img(src="@/assets/curso/tema1/f1.png", data-aos="zoom-in", style="max-width: 568px").mx-auto.mb-4
        
        p(data-aos="fade-left").mb-4 Con esta definición, siempre que sea necesario calcular un área, solo se invoca la función en lugar de repetir la fórmula.


        h2 Elementos que conforman una función

        p Cada función consta de los siguientes elementos:

        div.row.justify-content-center.align-items-stretch
          div.col-xl-3.col-md-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/3.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Nombre
              p.mb-0.text-center Identificador único que permite referenciar la función.
        
          div.col-xl-3.col-md-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Parámetros (opcionales)
              p.mb-0.text-center Valores de entrada que modifican el comportamiento de la función. 
        
          div.col-xl-3.col-md-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Cuerpo
              p.mb-0.text-center Instrucciones que se ejecutan al invocar la función.

          div.col-xl-3.col-md-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Valor de retorno (opcional)
              p.mb-0.text-center Resultado que la función devuelve tras su ejecución.
    

    .titulo-figura.mb-2
      h5 Figura 2. 
      span Ejemplo de función Suma

    
    figure.bg-color-info.p-4.p-md-5.mb-4
      img(src="@/assets/curso/tema1/f2.png", data-aos="zoom-in", style="max-width: 678px").mx-auto
    
    p.mb-5 En este caso, la función suma toma dos valores de entrada, los suma y devuelve el resultado.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Sintaxis y declaración de funciones


    p La declaración de funciones consiste en definir un bloque de código reutilizable que realiza una tarea específica. Aunque la sintaxis varía entre lenguajes, su estructura lógica es común (Moreno Pérez, 2015):


    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 628px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="58%" y="45%" numero="+")
                h5 Palabra clave de definición
                p Señala que se está creando una función (por ejemplo, def en Python, function en JavaScript).
    
              .bg-color-white.box-shadow.p-3(x="76%" y="45%" numero="+")
                h5 Nombre de la función
                p Permite identificar e invocar la función.
    
              .bg-color-white.box-shadow.p-3(x="38%" y="90%" numero="+")
                h5 Parámetros (opcionales)
                p Determinan los valores de entrada que la función puede recibir.
    
              .bg-color-white.box-shadow.p-3(x="58%" y="90%" numero="+")
                h5 Cuerpo de la función
                p Bloque de instrucciones que ejecuta la función.
    
              .bg-color-white.box-shadow.p-3(x="76%" y="90%" numero="+")
                h5 Valor de retorno (opcional)
                p Resultado que la función devuelve, si es necesario.
    

    p.mb-4 A continuación, se muestran ejemplos de sintaxis en distintos lenguajes:

    h4 Python

    .titulo-figura.mb-2
      h5 Figura 3. 
      span Ejemplo de sintaxis en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f3.png", data-aos="zoom-in", style="max-width: 572px").mx-auto


    h4 JavaScript

    .titulo-figura.mb-2
      h5 Figura 4. 
      span Ejemplo de sintaxis en JavaScript
    
    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f4.png", data-aos="zoom-in", style="max-width: 572px").mx-auto


    p.mb-5 En ambos ejemplos, la función toma dos parámetros, realiza una operación y devuelve un resultado.


    h2 Declaración de funciones en distintos lenguajes

    p Además de la estructura general, es importante conocer cómo se declaran las funciones en diferentes lenguajes de programación. Aunque cada uno tiene su propia sintaxis, todos comparten la misma lógica fundamental de definición, parámetros, cuerpo y retorno.


    .tabla-a.color-acento-contenido.mb-5.d-none.d-lg-block
      table

        tbody
          tr
            td(style="width: 10%") #[strong Python]
            td(style="width: 35%") Se utiliza la palabra clave #[strong def] para definir la función. Si no se incluye return, la función devuelve None por defecto.
            td(style="width: 55%") 
              .titulo-figura.mb-1
                h5 Figura 5. 
                span Declaración en Python

              figure
                img(src="@/assets/curso/tema1/f5.png", data-aos="zoom-in", style="max-width: 567px")
          tr
            td(style="width: 10%") #[strong JavaScript]
            td(style="width: 35%") Se utiliza la palabra clave #[strong function] para definir la función, aunque también permite definir funciones mediante expresiones o funciones de flecha =>. Si no se incluye return, la función devuelve undefined por defecto.
            td(style="width: 55%") 
              .titulo-figura.mb-1
                h5 Figura 6. 
                span Declaración en JavaScript

              figure
                img(src="@/assets/curso/tema1/f6.png", data-aos="zoom-in", style="max-width: 567px")
          tr  
            td(style="width: 10%") #[strong Java]
            td(style="width: 35%") Se utiliza la palabra clave #[strong public static] para definir la función.  Las funciones deben pertenecer a una clase y se conocen como métodos.

            td(style="width: 55%") 
              .titulo-figura.mb-1
                h5 Figura 7. 
                span Declaración en Java

              figure
                img(src="@/assets/curso/tema1/f7.png", data-aos="zoom-in", style="max-width: 567px")


    .d-lg-none.mb-5
      h4 Python
      p Se utiliza la palabra clave #[strong def] para definir la función. Si no se incluye return, la función devuelve None por defecto.
      .titulo-figura.mb-2
        h5 Figura 5. 
        span Declaración en Python

      figure.mb-5
        img(src="@/assets/curso/tema1/f5.png", data-aos="zoom-in", style="max-width: 567px").mx-auto
      h4 JavaScript
      p Se utiliza la palabra clave #[strong function] para definir la función, aunque también permite definir funciones mediante expresiones o funciones de flecha =>. Si no se incluye return, la función devuelve undefined por defecto.
      .titulo-figura.mb-2
        h5 Figura 6. 
        span Declaración en JavaScript
            
      figure.mb-5
        img(src="@/assets/curso/tema1/f6.png", data-aos="zoom-in", style="max-width: 567px").mx-auto
      h4 Java
      p Se utiliza la palabra clave #[strong public static] para definir la función. Las funciones deben pertenecer a una clase y se conocen como métodos.
      .titulo-figura.mb-2
        h5 Figura 7. 
        span Declaración en Java

      figure.mb-5
        img(src="@/assets/curso/tema1/f7.png", data-aos="zoom-in", style="max-width: 567px").mx-auto

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Parámetros y argumentos
    
    p.mb-4 En programación, las funciones pueden recibir valores de entrada que modifican su comportamiento y permiten operar sobre distintos datos (Menchaca García, 2010). Estos valores son conocidos como #[strong parámetros] y #[strong argumentos], términos estrechamente relacionados pero con una distinción importante. La diferencia entre parámetros y argumentos es: 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Parámetro
              p.mb-0 Variable declarada en la definición de una función; actúa como marcador de posición para los valores que se recibirán (Menchaca García, 2010).
    
      .col-lg-6
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Argumento
              p.mb-0 Valor específico que se pasa a la función cuando esta es llamada.
    
    
    
    TabsA.color-acento-botones.mb-5.d-none
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros")
        h4 Parámetros
        p Variable declarada en la definición de una función; actúa como marcador de posición para los valores que se recibirán (Menchaca García, 2010).

      .tarjeta.color-acento-botones--borde.p-4(titulo="Argumentos")
        h4 Argumentos
        p Valor específico que se pasa a la función cuando esta es llamada.


    .titulo-figura.mb-2
      h5 Figura 8. 
      span Parámetros y argumentos, ejemplo en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f8.png", data-aos="zoom-in", style="max-width: 568px").mx-auto


    h2 Tipos de parámetros en funciones

    p.mb-5 Las funciones pueden manejar distintos tipos de parámetros según cómo se pasen los valores al momento de la invocación:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        LineaTiempoD.color-primario.large(data-aos="fade-right")
          div(numero="1" titulo="Parámetros posicionales.")
            p Se asignan en el mismo orden en que aparecen en la definición de la función.

            .titulo-figura.mb-2
              h5 Figura 9. 
              span Parámetros posicionales en Python
            
            figure.bg-color-info.p-4.p-md-5.mb-5
              img(src="@/assets/curso/tema1/f9.png",style="max-width: 568px").mx-auto


            .titulo-figura.mb-2
              h5 Figura 10. 
              span Parámetros posicionales en JavaScript
            
            figure.bg-color-info.p-4.p-md-5
              img(src="@/assets/curso/tema1/f10.png", style="max-width: 432px").mx-auto
            
            

          div(numero="2" titulo="Parámetros con valores por defecto")
            p Permiten ejecutar funciones sin proporcionar todos los argumentos, gracias a valores predeterminados.

            .titulo-figura.mb-2
              h5 Figura 11. 
              span Parámetros con valores por defecto en Python
            
            figure.bg-color-info.p-4.p-md-5.mb-5
              img(src="@/assets/curso/tema1/f11.png",  style="max-width: 568px").mx-auto

            .titulo-figura.mb-2
              h5 Figura 12. 
              span Parámetros con valores por defecto en JavaScript
            
            figure.bg-color-info.p-4.p-md-5
              img(src="@/assets/curso/tema1/f12.png", style="max-width: 381px").mx-auto

          div(numero="3" titulo="Parámetros nombrados <em>(keyword arguments)</em>")
            p Se pasan especificando el nombre del parámetro, sin importar el orden. Solo en algunos lenguajes como Python.
            .titulo-figura.mb-2
              h5 Figura 13. 
              span Parámetros nombrados en Python
            
            figure.bg-color-info.p-4.p-md-5
              img(src="@/assets/curso/tema1/f13.png", style="max-width: 568px").mx-auto

          div(numero="4" titulo="Parámetros variables")
            p Permiten recibir un número indefinido de argumentos mediante estructuras como *args en Python.

            .titulo-figura.mb-2
              h5 Figura 14. 
              span Parámetros de longitud variable en Python
            
            figure.bg-color-info.p-4.p-md-5.mb-4
              img(src="@/assets/curso/tema1/f14.png", style="max-width: 381px").mx-auto


            p Aquí, #[strong *números] permite recibir cualquier cantidad de valores y los trata como una tupla.

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.py-4
        
        h2.mt-4 Importancia del uso correcto de parámetros y argumentos
        p El manejo adecuado de parámetros y argumentos en funciones ofrece varios beneficios clave:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-md-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Modularidad
              p.mb-0.text-center Evita la duplicación de código, favoreciendo la reutilización en múltiples contextos.
        
          div.col-md-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/12.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Claridad
              p.mb-0.text-center Nombres descriptivos en los parámetros facilitan la comprensión del propósito de la función.
        
          div.col-md-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Flexibilidad
              p.mb-0.text-center El uso de valores por defecto y parámetros variables permite que las funciones se adapten a distintas situaciones.

          div.col-md-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/14.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Eficiencia
              p.mb-0.text-center Pasar datos por referencia (en lugar de por valor) puede mejorar el rendimiento al trabajar con estructuras de datos grandes.
        
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Alcance de variables en funciones


    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El alcance de una variable (scope) se refiere a la región del código en la que una variable es accesible y puede utilizarse. Comprender este concepto es clave para evitar errores, organizar mejor el código y aprovechar adecuadamente la memoria. El lugar donde se declara una variable determina su alcance, que puede clasificarse como global, local o no local, dependiendo del lenguaje de programación.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/15.png', alt='')

    h2 Tipos de alcance en las funciones

    p.mb-5 En el contexto de las funciones, el alcance de las variables se manifiesta de diferentes maneras según su ubicación y el lenguaje de programación utilizado. A continuación, se explican los tres tipos principales de alcance: global, local y no local.

    h3 Alcance global
    
    .bg-color-4.p-4.mb-4.mb-5
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Una variable con alcance global se declara fuera de cualquier función y puede utilizarse en cualquier parte del código, incluidas las funciones. No obstante, modificar una variable global dentro de una función puede requerir una declaración explícita, dependiendo del lenguaje.

    h4.mb-5 Alcance global en Python
    p.mb-4 En Python, por ejemplo, una función puede acceder sin problemas a una variable global. Sin embargo, si intenta modificarla dentro de su cuerpo sin declarar previamente que es global, se generará un error.

    
    .titulo-figura.mb-2
      h5 Figura 15. 
      span Variable global en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-4
      img(src="@/assets/curso/tema1/f15.png", data-aos="zoom-in", style="max-width: 423px").mx-auto
    
    p.mb-4 En este caso, la función puede leer la variable global sin problemas. Sin embargo, si se intenta modificar la variable global dentro de la función sin declararla explícitamente como global, se generará un error.

    .titulo-figura.mb-2
      h5 Figura 16. 
      span Variable global 2 en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-4
      img(src="@/assets/curso/tema1/f16.png", data-aos="zoom-in", style="max-width: 568px").mx-auto
    
    .titulo-figura.mb-2
      h5 Figura 17. 
      span Palabra clave global en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f17.png", data-aos="zoom-in", style="max-width: 381px").mx-auto
    
    h4 Alcance global en JavaScript
    p.mb-4 En JavaScript, una variable global se declara sin usar #[strong var], #[strong let] o #[strong const], se vuelve automáticamente global, lo cual es una mala práctica, ya que puede causar conflictos en el código.

    .titulo-figura.mb-2
      h5 Figura 18. 
      span Variable global en JavaScript

    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f18.png", style="max-width: 509px").mx-auto

    .titulo-figura.mb-2
      h5 Figura 19. 
      span Variable global ejemplo 2 en JavaScript

    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f19.png", style="max-width: 568px").mx-auto

    h3 Alcance local

    .row.mb-5
      .col-lg-8
        .bg-color-4.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 Una variable con alcance local se declara dentro de una función y solo puede utilizarse dentro de esta. Cuando una variable es local, existe y es accesible únicamente mientras se ejecuta la función en la que fue creada.
        
        p(data-aos="fade-left") Este tipo de alcance permite encapsular valores y evitar interferencias con otras partes del código.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    h4 Alcance local en Python
    
    .titulo-figura.mb-2
      h5 Figura 20. 
      span Alcance local en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-4
      img(src="@/assets/curso/tema1/f20.png", data-aos="zoom-in", style="max-width: 568px").mx-auto
    

    h4 Alcance local en JavaScript

    .titulo-figura.mb-2
      h5 Figura 21. 
      span Alcance local en Javascript
    
    figure.bg-color-info.p-4.p-md-5.mb-4
      img(src="@/assets/curso/tema1/f21.png", data-aos="zoom-in", style="max-width: 560px").mx-auto

    p.mb-5 Cuando una variable se declara dentro de una función, solo existe y es accesible mientras la función se ejecuta.

    h2 Alcance de variables en funciones anidadas

    p Algunos lenguajes permiten definir funciones dentro de otras funciones, lo que introduce el concepto de #[strong alcance no local].

    .bg-color-4.p-4.py-lg-5.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
        .col-lg
          h4 Alcance no local (o intermedio)
          p.mb-0 Este tipo de alcance se presenta cuando una función interna accede a variables de una función externa, que no son globales pero tampoco locales en la función anidada.


    p.mb-4 #[strong En Python], se puede utilizar la palabra clave #[strong nonlocal] para modificar una variable que pertenece a una función externa.

    .titulo-figura.mb-2
      h5 Figura 22. 
      span Uso de nonlocal en Python
    
    figure.bg-color-info.p-4.p-md-5.mb-4
      img(src="@/assets/curso/tema1/f22.png", data-aos="zoom-in", style="max-width: 568px").mx-auto



    p #[strong En JavaScript], las funciones internas pueden acceder a variables de funciones externas gracias a los #[strong closures]. A diferencia de Python, no se requiere ninguna declaración adicional para lograrlo.

    .titulo-figura.mb-2
      h5 Figura 23. 
      span Uso Closures en Javascript
    
    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f23.png", data-aos="zoom-in", style="max-width: 560px").mx-auto


    .bg-full-width.bg-color-7
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Una estrategia clave para organizar el código y fomentar la modularidad
            p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Una estrategia clave para organizar el código y fomentar la modularidad], donde se exploran las funciones como herramienta esencial en la estructuración de software. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Título del anexo
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/29402" target="_blank" rel="noopener noreferrer") Castillo Martínez, C. P. (2009). Trabajo de programación básica: ( ed.). El Cid Editor | apuntes. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/MWtGS1aCTKM?si=H3yztUJO9-HHwm1P" target="_blank" rel="noopener noreferrer") Universidad Continental (2021, 22 de abril) Funciones propias del lenguaje de programación: Definición

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
