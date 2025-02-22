const projects = [
  {
    id: 'pozos-del-cielo',
    title: 'Pozos del Cielo (Llum 2025)',
    category: 'Instalaciones y obras artísticas',
    description: `
      <p>This is a description of project</p>
      <p>This is a description of project</p>
      <p>This is a description of project</p>
      `,
    visuals: [
      { image: '1_Pozos.jpg' },
      { image: '2_Pozos.jpg' },
      { image: '3_Pozos.JPG' },
      { image: '4_Pozos.JPG' },
      { image: '5_Pozos.jpg' },
      { image: '6_Pozos.JPG' },
      { image: '7_Pozos.JPG' },
      { image: '8_Pozos.JPG' },
      { image: '9_Pozos.JPG' },
      { image: '10_Pozos.JPG' },
      { image: '11_Pozos.JPG' },
      //{ image: '12_Pozos.JPG' },
      //{ image: '13_Pozos.jpg' },
      //{ image: '15_Pozos.JPG' },
      { image: '16_Pozos.JPG' },
      { image: '14_Pozos.jpg' }
    ],
  },
  { 
    id: `la-loba-capitulo-3`, 
    title: `La Loba (Capítulo 3)`, 
    category: 'Instalaciones y obras artísticas', 
    description: `
      <p>This is a description of project</p>
    `,
    visuals: [
      { image: 'Loba_1.jpg' },
      { image: 'Loba_2.JPG' },
      { image: 'Loba_3.JPG' },
      { image: 'Loba_4.JPG' },
      { image: 'Loba_5.JPG' },
      { image: 'Loba_6.JPG' },
      { image: 'Loba_7.1.jpg' },
      { image: 'Loba_8.jpg' },
      { image: 'Loba_9.jpg' },
      //{ image: 'Loba_10.JPG' },
      { image: 'Loba_11.jpg' },
      //{ image: 'Loba_12.JPG' },
      //{ image: 'Loba_13.JPG' },
      //{ image: 'Loba_14.JPG' },
      //{ image: 'Loba_15.JPG' },
      { image: 'Loba_16.jpg' },
      { image: 'Loba_17.JPG' },
      //{ image: 'Loba_18.JPG' }
    ],
  },
  {
    id: `simbioc3no`,
    title: `Simbioc3no`,
    category: `Instalaciones y obras artísticas`,
    description: `
      <p>La instalación artística inmersiva “Simbioc3no: Temporalidades ecoicas y memorias futuras”  pretende retratar un escenario futuro de la naturaleza donde el ser humano ya no es parte de ella pero la huella de nuestra existencia si.</p>
      <p>Luego de una sexta extinción masiva y con unas condiciones planetarias que impiden el funcionamiento de los ecosistemas tal cual como los conocemos hoy en día, se requieren de nuevos sistemas de colaboración y comunicación intraespecie para retomar el balance natural.</p>
      <p>En colaboración con Andrea Galano, Pierantonio Mangia y Rocío Gomez, proponemos un sistema simbiótico en el que la naturaleza se apoya en la tecnología que dejamos los humanos y los residuos de nuestra actividad, para continuar con su existencia.</p>
      <p>Partiendo de la reformulación del neo fosil, nos encontramos viajando por distintas eras geológicas que nos ayudaran a imagina una nueva, representada en una fábula especulativa de cuatro partes y una instalación audiovisual que implementara sistemas electrónicos de control, biofeedback, creative coding, iluminación programada y audio generativo.  </p>
      <p>Obra creada y presentada como Proyecto Final de Master en el master de Innovación Audiovisual y Entronos Interactivos (2023-2024) de la BAU Centre Universitari d’Arts i Disseny en Barcelona, España.</p>
    `,
    visuals: [
      { vimeo: `985765109` },
      { image: `Foto_retocada-48.jpeg` },
      { image: `Foto_retocada-51.jpeg` },
      { image: `Simbioc3no.jpeg` },
    ],
  },
  { 
    id: `planta-kinetica`, 
    title: `Planta Kinética`, 
    category: 'Instalaciones y obras artísticas', 
    description: `
      <p>Obra artística producto de la exploración de conexión entre organismos digitales y materia orgánica, dando como resultado una planta digital que en conexión con el suelo que la sostiene detecta los cambios en la humedad para iniciar su actividad.</p>
      <p>La planta entra en un ciclo de movimiento que persiste hasta que la humedad del suelo baja. Incorporando un juego lumínico en su estructura que acompaña el movimiento y envíos de señales OSC que la permiten conectar con otros organismos digitales. </p>
      <p>Obra creada en colaboración con Andrea Galano y Rocío Gomez</p>
      <p>Presentada en la exhibición de arte y web3 “Estados Correlacionados” en Buenos Aires, Argentina (2024).</p>    
    `,
    links: {
      instagram: `https://www.instagram.com/p/C4izxUGozWT/?img_index=7`,
      instagram: `https://www.instagram.com/p/C6cXMfzv_dw/?img_index=5g`,
    },
    visuals: [
      { image: 'Foto_retocada-23.jpeg' },
      { vimeo: `985023216` },
      { vimeo: `985773543` },
      //{ image: 'Foto_retocada-13.jpeg' },
    ],
  },
  { 
    id: `fusión-botánica`, 
    title: `Fusión Botánica`, 
    category: 'Instalaciones y obras artísticas', 
    description: `
      <p>This is a description of project</p>
    `,
    visuals: [
      { image: 'image3.jpg' },
      { image: 'image2.jpg' },
      { image: 'image.jpg' }
    ],
  },
  { 
    id: `nou-space`, 
    title: `Nou Space`, 
    category: 'Instalaciones y obras artísticas', 
    description: `
      <p>Instalación sonora cuadrafónica creada bajo el concepto “Diálogos del Siglo XXI: Del físico al digital” para ambientar la primera exposición de Nou Lab.</p>
      <p>Secuencias aleatorias digitales controlando sintetizadores analógicos y grabaciones de campo procesadas y modificadas por computadoras. Sonidos distribuidos por el espacio que cambiarían el caracter contemplativo de la exposición en una experiencia inmersiva.</p>
      <p>Experiencia que culminaría al intervenir en el paisaje sonoro para transformarlo en un Live performance, añadiendo así un grado más de complejidad en el diálogo constante del mundo físico con el mundo digital de esta cápsula artística.</p>
      <p>Artistas involucradxs: Stella Rahola, Riviersneda, Francisco M Lucini y Noob Stuff. </p>
      <p>Evento Inaugural del estudio de diseño multidisciplinal Nou Lab en Barcelona, España (2022). </p>
    `,
    links: {
      instagram: `https://www.instagram.com/p/CcVkzZyswew/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==`,
      soundcloud: `https://soundcloud.com/anderground/nou-space-live-at-noulab?si=cb1eabe3a443461ba3efa455f980ea1f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`,
    },
    visuals: [
      { image: `7D30501D-13E2-4AD0-9088-A4EF4CCFDAC8.JPG` },
      { image: `9E3417FA-14B7-478D-9B28-609C98D1F381.JPG` },
      { image: `000027.JPG`},
      { image: `848784B3-212C-48DE-8437-8DF6E3659008.jpg` },
      { image: `A56D7302-34FE-41B6-8BDE-1D3727A18AFD.JPG` }
    ],
  },
  { 
    id: `when-plants-sing`, 
    title: `When... Plants... Sing`, 
    category: 'Investigación artística', 
    description: `
      <p>Proyecto personal enfocado en conocer el mundo vegetal desde un punto ecológico/artístico, sirviéndose de la tecnología como puente de conexión con lo que estos organismos tienen para enseñarnos.</p>
      <p>Con herramientas tecnológicas como el biofeedback se habilitan posibilidades de interracción que al ponerse en practica invitan inmediatamente a reflexionar en su papel en el mundo y de nuestra relación con ellxs.</p>
      <p>Como objetivo, este proyecto pretende poner a disposición de todos el conocimiento adquirido en el curso de esta investigación es por esto que, desde su creacíon en 2022 se han llevado a cabo una serie de actividades interactivas, experiencias inmersivas y actuaciones músicales destinadas a esta labor.</p>
    `,
    links: {
      instagram: `https://www.instagram.com/when.plants.sing/`,
      soundcloud: `https://soundcloud.com/anderground/sets/when-plants-sing?si=e2387011c2ce47729ba9a40bd0d6d180&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`,
    },
    visuals: [
      //{ image: 'W... P... S (Final).jpg' },
      { image: 'IMG_1047.JPG' },
    ],
  },
   { 
    id: `radio-y-curaduría-sonora`, 
    title: `Radio Show (Dublab.es)`, 
    category: 'Investigación artística', 
    description: `
      <p>This is a description of project</p>
    `,
    visuals: [
      { image: 'image3.jpg' },
      { image: 'image2.jpg' },
      { image: 'image.jpg' }
    ],
  },
  { 
    id: `holobiont-spell`, 
    title: `A Holobiont Spell`, 
    category: 'Producción musical', 
    description: `
      <p>This is a description of project</p>
    `,
    visuals: [
      { image: 'image3.jpg' },
      { image: 'image2.jpg' },
      { image: 'image.jpg' }
    ],
  },
  {
    id: 'ander',
    title: 'ANDER',
    category: 'Producción musical',
    description: `
      <p>Proyecto personal destinado a la exploración de técnicas de producción y composición dentro de la música electrónica.</p>
      <p>Este proyecto topa distintos géneros dentro del estilo para así abrir la gama de temas a poder ser analizados, experimentados e incorporados. </p>
      <p>Los temas publicados y su secuencia reflejan el crecimiento del artista, lo que va llamando su atención en el camino y algo de su curiosidad a nivel conceptual que busca reflejar en cada tema.</p>
      <p>Ultimo trabajo publicado: Face It (Single; Independiente; 2024)</p>
    `,
    links: {
      instagram: `https://www.instagram.com/_ander.wav/`,
      spotify: `https://open.spotify.com/artist/1E9QjpLJoDNyQYwHBur3fk?si=DAbTtrInSp21fTTp5fwXPg`,
    },
    visuals: [
      { image: 'Spotify.jpg' },
      { image: '003337--32--VK.JPG' },
      { image: '003339--23--VK.JPG' },
      { image: '003337--41--VK.JPG' },
      { vimeo: `985012270?h=e38d3b1611` },
      { vimeo: `985788851?h=bfded2fb90` },
      //{ image: 'ander1.jpg' },
    ],
  },
  {
    id: 'proyectos-externos',
    title: 'Otras producciones',
    category: 'Producción musical',
    description: `
      <p>Como productor musical ha sido importante la participación en proyectos externos que involucrara el trabajo directo con otros artistas, bandas, productores y equipos de trabajo.</p>
      <p>Participando en temas musicales como la composición y arreglos, de ingeniería de sonido como grabación, mezcla y sound design, además de labores logísticos y organizacionales a la hora de trabajar con otros ingenieros, agentes y distribuidoras.</p>
      <p>Ultimo trabajo publicado:  Midaz - Piscis (EP; Independiente; 2024) Trabajo hecho: arreglos, edición, sound design y mezcla.</p>
    `,
    visuals: [
      { image: 'image3.jpg' },
      { image: 'image2.jpg' },
      { image: 'image.jpg' }
    ],
  },
]

const aboutContent = {
  image: 'profile.jpg',
  about: `
    <p>Ander Vallejo Larre es un productor musical, artista digital y researcher. Con especial interés en la conexión entre la ciencia y el arte, la utilización de nuevas tecnologías y el rol del artista/compositor como divulgador de conocimiento. Su práctica se ha basado en la investigación de herramientas electrónicas como extensión de la naturaleza, con especial interés en la sonificación y el uso de interfaces para la improvisación, técnicas que han sido desarrolladas a lo largo de su trabajo.</p>
    <p>Como músico ha participado en festivales y escenarios importantes de Ecuador y de España donde, como productor musical, participa en festivales como LAVS Mataró, Planteka Fest o medios importantes de televisión como rtve en el programa “Va de Verd”. En Barcelona empieza su incursión en la creación de instalaciones inmersivas y obras interactivas que se expondrían en distintos lugares de Barcelona, Buenos Aires, entre otras ciudades. Su actividad, el mensaje y su adentramiento en la escena local Barcelonés lo llevan a participar en [Dubla.es](http://Dubla.es) Radio comunitaria con un programa mensual didáctico y de entretenimiento.</p>
  `,
  bio:`
    <p>Estudié producción musical buscando comprender más de la parte técnica detrás de la música. Continue por completar esta formación estudiando piano Jazz al ver el potencial de la improvisación, además de las bases teóricas musicales. Trabajando tanto en estudios como escenarios de música en vivo, en producción de proyectos personales como para clientes, y en la utilización de instrumentos acústicos, electrónicos y digitales, conseguí soltura y confianza con estas herramientas para ser utilizadas en cualquier tipo de situación.</p>
    <p>Con el tiempo el interés constante por los intrumentos electrónicos/análogos me llevó a incursionar en la electrónica y la programación, esto junto con mi acercamiento hacia narrativas interactivas alrededor de la botánica y ecología me llevaron a retomar mis estudios en Barcelona con una carrera que ampliara mi conocimiento sobre estos aspectos y me impulsara a seguir desarrollando mi trabajo.</p>
  `,
  studies: `
    <p>MA Innovación Audiovisual y Entornos Interactivos. BAU Centro Universitario de Artes y Diseño en Barcelona, España. 2023 - 2024</p>
    <p>BA Música Contemporanea y Piano Jazz. Universidad San Francisco de Quito, Ecuador (Berklee International Network). 2015 - 2017</p>
    <p>BA Producción Musical y de Sonido. Universidad Sanfrancisco de Quito, Ecuador (Berklee International Network). 2010 - 2015</p>
  `
}

export { projects, aboutContent };
