export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Funciones y modularidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Declaración y uso de funciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sintaxis y declaración de funciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Parámetros y argumentos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Alcance de variables en funciones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recursión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura de una función recursiva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estructura de una función recursiva',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Moreno Pérez, J. C. (2015). Programación: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62476',
    },
    {
      referencia:
        'Menchaca García, F. R. (2010). Fundamentos de programación en Lenguaje C: ( ed.). Instituto Politécnico Nacional.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/74076',
    },
    {
      referencia:
        'Juganar Mathieu, M. (2015). Introducción a la programación: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39449',
    },
    {
      referencia:
        'Ceballos Sierra, F. J. (2015). C/C++ curso de programación: (3 ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62476',
    },
    {
      referencia:
        'Moreno Pérez, J. C. (2014). Programación en lenguajes estructurados: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106445',
    },
    {
      referencia:
        'González Harbour, M., & Aldea, M. (2016). Programación en lenguaje Java. Tema 7. Modularidad y abstracción. Universidad de Cantabria.',
      link:
        'https://www.unican.es/pluginfile.php/2330/course/section/2281/cap7-modularidad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ámbito',
      significado:
        'definición del espacio dentro del cual una variable o función es accesible en un programa. Puede ser local o global, dependiendo de dónde se declare.',
    },
    {
      termino: 'Argumento',
      significado:
        'valor que se pasa a una función cuando es invocada. Puede ser de diferentes tipos de datos y se usa dentro de la función para realizar cálculos o modificaciones.',
    },
    {
      termino: 'Cabecera de función',
      significado:
        'primera línea de una función donde se especifica su nombre, los parámetros que recibe y su tipo de retorno. Define cómo debe ser llamada la función en el programa.',
    },
    {
      termino: 'Código modular',
      significado:
        'práctica de estructurar un programa en partes más pequeñas e independientes (módulos o funciones), facilitando la reutilización y el mantenimiento del código.',
    },
    {
      termino: 'Declaración de función',
      significado:
        'definición de una función que indica su existencia en el programa. Puede incluir solo la cabecera (prototipo) o su implementación completa con instrucciones.',
    },
    {
      termino: 'Función',
      significado:
        'bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes del programa. Puede recibir argumentos y devolver un resultado.',
    },
    {
      termino: 'Llamado de función',
      significado:
        'acción de ejecutar una función en un programa, proporcionando los valores de los argumentos requeridos y esperando un resultado.',
    },
    {
      termino: 'Modularidad',
      significado:
        'principio de diseño de software que permite dividir un programa en módulos.',
    },
    {
      termino: 'Parámetro',
      significado:
        'variable definida en la cabecera de una función que recibe valores cuando la función es invocada. Existen parámetros opcionales y obligatorios.',
    },
    {
      termino: 'Recursión',
      significado:
        'técnica de programación donde una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños. Se debe definir una condición base para evitar bucles infinitos.',
    },
    {
      termino: 'Retorno de función',
      significado:
        'valor devuelto por una función después de su ejecución. Se especifica con la palabra clave return en la mayoría de los lenguajes de programación.',
    },
    {
      termino: 'Subrutina',
      significado:
        'bloque de código similar a una función, pero que no devuelve un valor. Se usan en algunos lenguajes para estructurar el código en procedimientos reutilizables.',
    },
  ],
}
