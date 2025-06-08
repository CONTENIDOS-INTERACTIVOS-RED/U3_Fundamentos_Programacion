<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Recursión'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La recursión es una técnica esencial en programación que permite que una función se llame a sí misma para resolver un problema dividiéndolo en subproblemas más simples. Se basa en el enfoque de dividir y resolver, donde el problema se reduce progresivamente hasta alcanzar un punto de salida, conocido como condición base, que detiene las llamadas recursivas.
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Estructura de una función recursiva

      .row.mb-4.align-items-center
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Para que una función recursiva funcione correctamente, debe cumplir con tres componentes fundamentales. Estos elementos garantizan que el problema se resuelva de forma controlada, evitando bucles infinitos o errores de ejecución.


          h2 Componentes de una función recursiva
      
          p(data-aos="fade-left").mb-4 Una función recursiva bien estructurada debe incluir un caso base, un caso recursivo y una reducción del problema. A continuación se explican cada uno:

          h3 #[u Caso base (condición de terminación)]
      
          p(data-aos="fade-left") El caso base es la condición que determina cuándo debe detenerse la ejecución de la función. Sin esta condición, la función continuaría llamándose indefinidamente, lo que podría causar un error conocido como desbordamiento de pila (stack overflow). Generalmente, el caso base corresponde a una situación simple que no requiere más llamadas recursivas.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")


      .titulo-figura.mb-2
        h5 Figura 24. 
        span Caso base en Python

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f24.png", data-aos="zoom-in", style="max-width: 678px").mx-auto


      .row.mb-5
        .col-lg-4.order-lg-2
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
        .col-lg-8
          p En este ejemplo, la función se ejecuta con valores decrecientes hasta que n alcanza 0, momento en el cual se detiene.
      
          h3 #[u Caso recursivo (llamado a sí misma)]

          p El caso recursivo corresponde al punto donde la función se llama a sí misma, utilizando una versión simplificada del problema original. Esta reducción debe ser significativa y asegurar que la función se aproxime progresivamente al caso base.

      .titulo-figura.mb-2
        h5 Figura 25. 
        span Caso recursivo en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f25.png", data-aos="zoom-in", style="max-width: 678px").mx-auto


      .row.mb-5
        .col-lg-8
          p Una vez que se alcanza el caso base (n == 1), las funciones comienzan a retornar sus valores acumulados, lo que permite resolver la operación completa: 5 + 4 + 3 + 2 + 1 = 15.

          h4 Reducción del problema

          p Cada llamada recursiva debe trabajar con una forma reducida del problema, acercándose al caso base. Si no se aplica una reducción adecuada, la función puede entrar en un ciclo infinito y agotar la pila de llamadas.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="")
      

      .titulo-figura.mb-2
        h5 Figura 26. 
        span Reducción incorrecta en Python

      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f26.png", data-aos="zoom-in", style="max-width: 678px").mx-auto


      p En este caso, al no reducir el valor de n, la función nunca llega a su condición base, generando una recursión infinita.


      .titulo-figura.mb-2
        h5 Figura 27. 
        span Reducción correcta en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f27.png", data-aos="zoom-in", style="max-width: 678px").mx-auto


      p.mb-5 Aquí, con cada llamada, n se reduce en 1, garantizando que eventualmente se alcance el caso base y finalice la ejecución.


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Tipos de Recursión


      .row
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La recursión puede clasificarse en diferentes tipos, según la forma en que la función se invoca a sí misma y cómo se estructura la resolución del problema. A continuación, se presentan los tipos más comunes de recursión junto con sus características y ejemplos ilustrativos.


          h3 #[u Recursión directa]
      
          p(data-aos="fade-left") Ocurre cuando una función se llama directamente a sí misma.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")


      .titulo-figura.mb-2
        h5 Figura 28. 
        span Recursión directa en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f28.png", data-aos="zoom-in", style="max-width: 678px").mx-auto
      

      h3 #[u Recursión indirecta]

      p.mb-4 Tiene lugar cuando una función llama a otra función, la cual vuelve a invocar a la función original, generando así un ciclo de llamadas recursivas.

      .titulo-figura.mb-2
        h5 Figura 29. 
        span Recursión indirecta en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-4
        img(src="@/assets/curso/tema2/f29.png", data-aos="zoom-in", style="max-width: 661px").mx-auto


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Aquí, la función par(n) llama a impar(n - 1), y viceversa, hasta que n sea 0, resolviendo el problema de manera recursiva.


          .bg-color-8.p-4(data-aos="fade-left").mb-4
            p.mb-0 En este ejemplo, la función par(n) llama a impar(n - 1) y esta, a su vez, vuelve a llamar a par, repitiendo el proceso hasta que n sea igual a 0.
      
          h3 #[u Recursión de cola]

          p(data-aos="fade-left") La recursión de cola es una forma particular de recursión en la que la llamada recursiva es la última operación ejecutada por la función antes de retornar un resultado. Este enfoque permite a ciertos lenguajes y compiladores aplicar técnicas de optimización conocidas como #[em tail call optimization (TCO)], que reducen el uso de memoria al evitar la acumulación de llamadas en la pila de ejecución.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      


      
      h2 Definición y características
      
      
      p A diferencia de la recursión tradicional, en la recursión de cola no se realizan operaciones adicionales después de la llamada recursiva. Esto facilita su optimización en tiempo de ejecución. Sus características principales incluyen:


      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/9.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | La llamada recursiva es la última instrucción antes de retornar el resultado.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | No se realizan cálculos adicionales tras la llamada recursiva.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Puede optimizarse en lenguajes que lo soportan.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Disminuye el riesgo de desbordamiento de pila.


      .titulo-figura.mb-2
        h5 Figura 30. 
        span Recursión de cola en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f30.png", data-aos="zoom-in", style="max-width: 724px").mx-auto
      


      .bg-full-width-2.bg-fondo-3
        .px-4.px-md-5.py-4

      
          .row
            .col-lg-8
              p.mb-4 En este ejemplo, la función factorial_tail utiliza un parámetro acumulador para almacenar el resultado parcial. La llamada recursiva es la última operación, sin cálculos posteriores, lo cual permite la posible optimización de la pila.

              h3 #[u Recursión anidada]
          
              p(data-aos="fade-left").mb-4 La recursión anidada se presenta cuando una función recursiva se llama a sí misma más de una vez dentro de su cuerpo. A diferencia de la recursión lineal (una única llamada por ciclo), en este caso se generan múltiples invocaciones por cada ejecución de la función.

              .bg-color-8.p-4(data-aos="fade-left")
                p.mb-0 Este tipo de recursión suele utilizarse en problemas que involucran estructuras jerárquicas, como árboles o grafos, y en ciertos algoritmos matemáticos.
          
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")


          p Las características de la recursión anidada son: 


          div.row.justify-content-center.align-items-stretch.mb-4
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/11.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Se generan varias llamadas recursivas dentro del mismo cuerpo de la función.
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/12.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Las invocaciones aumentan exponencialmente con cada nivel.
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/13.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Se emplea frecuentemente en estructuras jerárquicas (árboles, grafos, etc.).
          
            div.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/14.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-0.text-center Es fundamental definir un caso base claro para evitar recursiones infinitas y errores de ejecución.



      h4 Ejemplo de recursión anidada

      p Una función matemática que ejemplifica este tipo de recursión es la #[strong Función de Ackermann], reconocida por su crecimiento acelerado.


      .titulo-figura.mb-2
        h5 Figura 31. 
        span Función de Ackermann en Python
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f31.png", data-aos="zoom-in", style="max-width: 695px").mx-auto.mb-4
        p #[strong Explicación del ejemplo:] 
        
        ul.lista-ul--color.color-dark.mb-4
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Cuando m == 0, la función retorna n + 1.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Cuando n == 0, la función se llama con ackermann(m - 1, 1).
          li.mb-0
            i.fas.fa-arrow-circle-right
            | En otros casos, se ejecutan dos llamadas recursivas anidadas, incrementando rápidamente el número de invocaciones.
        

      h2 Recursión anidada en árboles

      p Una aplicación práctica muy común de la recursión anidada se encuentra en el recorrido de estructuras arbóreas, como en el recorrido en profundidad (depth-first search, DFS).

      .titulo-figura.mb-2
        h5 Figura 32. 
        span Árbol binario
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f32.png", data-aos="zoom-in", style="max-width: 604px").mx-auto.mb-4

        p #[strong Explicación del ejemplo:]

        ul.lista-ul--color.color-dark.mb-4
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Cada nodo del árbol ejecuta llamadas recursivas hacia sus subárboles izquierdo y derecho.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Este patrón genera múltiples ramas de ejecución recursiva, que se extienden hasta llegar a los nodos hoja.


      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/18.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ejemplos clásicos de recursión
              p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Ejemplos Clásicos de Recursión], donde se exploran problemas fundamentales resueltos mediante técnicas recursivas. Este material ofrece explicaciones conceptuales, definiciones matemáticas y ejemplos prácticos en Python, con el fin de fortalecer la comprensión de la recursión como herramienta esencial en algoritmos.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos clásicos de recursión
      

      .bg-full-width.bg-fondo-4
        .px-4.px-md-5.py-4

          h2.mt-4 Buenas Prácticas en el uso de la recursión

          .row.justify-content-center.align-items-center
            .col-lg-6
              p(data-aos="fade-left").mb-4 La recursión es una herramienta poderosa en programación, pero su uso inadecuado puede llevar a problemas de eficiencia y errores difíciles de detectar. A continuación, se presentan una serie de recomendaciones clave para un uso efectivo y seguro:
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Buenas prácticas en el uso de la recursión"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
            .col-lg-6
              figure
                img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in", style="max-width: 610px;").mx-auto.mb-4.mb-lg-0

      


      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/20.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Modularidad en proyectos
              p.mb-4(data-aos="fade-right") Se invita a leer el documento Modularidad en proyectos, donde se aborda el principio de modularidad en la programación y su aplicación en el desarrollo de software.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Modularidad en proyectos


        

        



      


      
      

      
      
      
      
      
      
      
      
  
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>





      





      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/34869" target="_blank" rel="noopener noreferrer") Ruiz Rodríguez, R. (2009). Fundamentos de la programación orientada a objetos: una aplicación a las estructuras de datos en Java: ( ed.). El Cid Editor. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://pro.iesdonana.org/pdf/programacion-modular-i.pdf" target="_blank" rel="noopener noreferrer") Pérez López, R. (2024). Programación modular (I). IES Doñana. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=CTMjHl_8sZg" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021, 22 de abril). Recursividad.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=WZAo15uKFqU" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021, 18 de marzo). Modularización de programas: funciones propias. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la principal ventaja de utilizar funciones en la programación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir la velocidad de ejecución del programa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mejorar la organización y reutilización del código',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evitar el uso de estructuras de control',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumentar la complejidad del código',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las funciones permiten dividir un programa en partes más pequeñas y reutilizables, facilitando la organización del código y reduciendo la repetición innecesaria.',
            mensaje_incorrecto:
              'Incorrecto. La principal ventaja es mejorar la organización y reutilización del código.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones es cierta sobre la recursión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Siempre es más eficiente que la iteración',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Una función recursiva siempre necesita una condición de parada',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La recursión no puede usarse en estructuras de datos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sólo los lenguajes funcionales permiten la recursión',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Una función recursiva debe incluir una condición de parada para evitar llamadas infinitas y consumo excesivo de memoria.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es que una función recursiva siempre necesita una condición de parada.',
          },
          {
            id: 3,
            texto:
              '¿Qué significa la modularidad en el desarrollo de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Dividir un programa en módulos independientes',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Escribir todo el código en una sola función',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Eliminar la reutilización de código',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evitar el uso de bibliotecas externas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La modularidad permite dividir un programa en partes más pequeñas y manejables, facilitando su mantenimiento y reutilización.',
            mensaje_incorrecto:
              'Incorrecto. La modularidad significa dividir un programa en módulos independientes.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes problemas es más adecuado para ser resuelto con recursión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Buscar un elemento en un arreglo ordenado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Encontrar el factorial de un número',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sumar los elementos de un arreglo con un bucle for',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Imprimir los números pares del 1 al 100',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El cálculo del factorial es un problema que se resuelve naturalmente con recursión.',
            mensaje_incorrecto:
              'Incorrecto. El cálculo del factorial es el problema más adecuado para recursión.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes beneficios no está relacionado con la modularidad en proyectos de software?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejora la organización del código',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Permite dividir el trabajo entre varios desarrolladores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Aumenta la dependencia entre módulos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Facilita la reutilización de código',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La modularidad busca reducir la dependencia entre módulos, no aumentarla.',
            mensaje_incorrecto:
              'Incorrecto. Aumentar la dependencia entre módulos no es un beneficio de la modularidad.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
