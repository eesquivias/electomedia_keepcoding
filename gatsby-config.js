module.exports = {
  siteMetadata: {
    siteUrl: `https://keepcoding.io/`,
    name: `Keepcoding Tech School`,
    description: `Trabajo Final Bootcamp BDMLAI7`,
    last_updated: `Uso práctico de tecnologías disruptivas en la gestión de datos electorales`,
    data_source: `<a target="_blank" href="http://www.interior.gob.es/" rel="noopener noreferrer">Ministerio del Interior</a> 
    | <a target="_blank" href="http://www.cis.es/" rel="noopener noreferrer">CIS</a>
    | <a target="_blank" href="http://www.twitter.com/" rel="noopener noreferrer">Twitter</a>`,

    //order of provinces is important!
    data: [{"PROVINCIA":"Melilla","PSOE":0.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Ceuta","PSOE":0.0,"PP":0.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Zaragoza","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Zamora","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Bizkaia","PSOE":2.0,"PP":1.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Valladolid","PSOE":2.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Valencia","PSOE":4.0,"PP":4.0,"VOX":3.0,"UP":2.0,"CS":1.0},
    {"PROVINCIA":"Toledo","PSOE":2.0,"PP":2.0,"VOX":2.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Teruel","PSOE":1.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Tarragona","PSOE":2.0,"PP":0.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Soria","PSOE":1.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Sevilla","PSOE":5.0,"PP":2.0,"VOX":2.0,"UP":2.0,"CS":1.0},
    {"PROVINCIA":"Segovia","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Cantabria","PSOE":1.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Salamanca","PSOE":1.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Pontevedra","PSOE":3.0,"PP":3.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Palencia","PSOE":1.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Asturias","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Ourense","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Navarra","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Murcia","PSOE":3.0,"PP":3.0,"VOX":3.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Málaga","PSOE":4.0,"PP":3.0,"VOX":2.0,"UP":1.0,"CS":1.0},
    {"PROVINCIA":"Madrid","PSOE":10.0,"PP":10.0,"VOX":7.0,"UP":5.0,"CS":3.0},
    {"PROVINCIA":"Lugo","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"La Rioja","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Lleida","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"León","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Jaén","PSOE":3.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Huesca","PSOE":2.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Huelva","PSOE":3.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Gipuzkoa","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Guadalajara","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Granada","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Girona","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Cuenca","PSOE":2.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"A Coruña","PSOE":3.0,"PP":3.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Córdoba","PSOE":2.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Ciudad Real","PSOE":2.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Castellón","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Cádiz","PSOE":3.0,"PP":2.0,"VOX":2.0,"UP":1.0,"CS":1.0},
    {"PROVINCIA":"Cáceres","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Burgos","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Barcelona","PSOE":8.0,"PP":2.0,"VOX":2.0,"UP":0.0,"CS":2.0},
    {"PROVINCIA":"Illes Balears","PSOE":2.0,"PP":2.0,"VOX":2.0,"UP":2.0,"CS":0.0},
    {"PROVINCIA":"Badajoz","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Ávila","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Almería","PSOE":2.0,"PP":2.0,"VOX":2.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Alicante","PSOE":4.0,"PP":3.0,"VOX":3.0,"UP":1.0,"CS":1.0},
    {"PROVINCIA":"Albacete","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Álava","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":1.0,"CS":0.0}],
    
    /*
    [
      { province: "Melilla", psoe: 2, pp: 50 },
      { province: "Ceuta", psoe: 3, pp: 49 },
      { province: "Zaragoza", psoe: 4, pp: 48 },
      { province: "Zamora", psoe: 5, pp: 47 },
      { province: "Bizkaia", psoe: 6, pp: 46 },
      { province: "Valladolid", psoe: 7, pp: 45 },
      { province: "Valencia", psoe: 8, pp: 44 },
      { province: "Toledo", psoe: 9, pp: 43 },
      { province: "Teruel", psoe: 10, pp: 42 },
      { province: "Tarragona", psoe: 11, pp: 41 },
      { province: "Soria", psoe: 12, pp: 40 },
      { province: "Sevilla", psoe: 13, pp: 39 },
      { province: "Segovia", psoe: 14, pp: 38 },
      { province: "Cantabria", psoe: 15, pp: 37 },
      { province: "Salamanca", psoe: 16, pp: 36 },
      { province: "Pontevedra", psoe: 17, pp: 35 },
      { province: "Palencia", psoe: 18, pp: 34 },
      { province: "Asturias", psoe: 19, pp: 33 },
      { province: "Ourense", psoe: 20, pp: 32 },
      { province: "Navarra", psoe: 21, pp: 31 },
      { province: "Murcia", psoe: 22, pp: 30 },
      { province: "Málaga", psoe: 23, pp: 29 },
      { province: "Madrid", psoe: 24, pp: 28 },
      { province: "Lugo", psoe: 25, pp: 27 },
      { province: "La Rioja", psoe: 26, pp: 26 },
      { province: "Lleida", psoe: 27, pp: 25 },
      { province: "León", psoe: 28, pp: 24 },
      { province: "Jaén", psoe: 29, pp: 23 },
      { province: "Huesca", psoe: 30, pp: 22 },
      { province: "Huelva", psoe: 31, pp: 21 },
      { province: "Guipuzkoa", psoe: 32, pp: 20 },
      { province: "Guadalajara", psoe: 33, pp: 19 },
      { province: "Granada", psoe: 34, pp: 18 },
      { province: "Girona", psoe: 35, pp: 17 },
      { province: "Cuenca", psoe: 36, pp: 16 },
      { province: "A Coruña", psoe: 37, pp: 15 },
      { province: "Córdoba", psoe: 38, pp: 14 },
      { province: "Ciudad Real", psoe: 39, pp: 13 },
      { province: "Castellón", psoe: 40, pp: 12 },
      { province: "Cádiz", psoe: 41, pp: 11 },
      { province: "Cáceres", psoe: 42, pp: 10 },
      { province: "Burgos", psoe: 43, pp: 9 },
      { province: "Barcelona", psoe: 44, pp: 8 },
      { province: "Illes Balears", psoe: 45, pp: 7 },
      { province: "Badajoz", psoe: 46, pp: 6 },
      { province: "Ávila", psoe: 47, pp: 5 },
      { province: "Almería", psoe: 48, pp: 4 },
      { province: "Alicante", psoe: 49, pp: 3 },      
      { province: "Albacete", psoe: 50, pp: 2 },
      { province: "Álava", psoe: 51, pp: 1 },
    ],
    */
    faqs: [
      {
        question: `Definición del Data Set`,
        answer: `<img id="data_img"></img>
        <p>La naturaleza del presente proyecto se sintetiza en el despliegue de un laboratorio de investigación, en base a las actuales tecnologías disruptivas de gestión de datos, sobre comportamiento electoral de los españoles.</p>
        <p>En este sentido la principal dificultad radica en el propio proceso de selección de variables, obligando a delimitar un espacio acotado de trabajo sobre datos de acceso publico:</p>     
        <p><h4>Datos electorales</h4></p>  
        <p>Los datos electorales son la base de la Práctica, y constan de los resultados electorales detallados de las secciones censales en los comicios generales de 2011, 2015, 2016, y los dos celebrados en 2019. Los datos se han extraído de la página web del Ministerio del Interior. Se trata de, para cada elección, de un conjunto de ficheros .DAT. Los dos fundamentales son los que definen las distintas mesas electorales, y el resultado de cada partido en ellas.</p>   
        <p><h4>Datos sociodemográficos</h4>
        <p>Hemos complementado los datos electorales de las secciones con datos sociodemográficos, también a nivel de sección censal cuando fue posible, o a nivel de municipio en su defecto. El origen de los datos ha sido el INE, el Ministerio de Inclusión Social y Migraciones, y el Ministerio de Trabajo y Economía Social.</p>
        <p> Esta decisión se justifica ante el hecho de que una vez considerados los resultados electorales como variable objetivo en nuestro estudio, es necesario establecer una imagen fija de las personas que ya sabemos como vota. Evidentemente el objetivo es conocer las posibles relaciones entre ambos conjuntos de datos.
        <p><h4>Microdatos del Centro de Investigaciones Sociológicas</h4></p>
        <p>Los estudios del Centro de Investigaciones Sociológicas son una importante fuente de datos en materia electoral. Concretamente, realización de los Macrobarómetros en las semanas previas a los comicios análizados, son considerados una importante fuente para el ejercicio actual</p>
        <p><h4>Twitter</h4></p>
        <p>Esta fuente puede considerarse como uno de los pilares de la práctica final: aportar una fuente de datos dinámica a escenarios dibujados por datos estáticos. Las encuestas tradicionales (CIS) suscitan numerosas críticas en su aportación a la investigación por varios factores (sesgo en el trabajo de campo, cocina estadística, etc.), sin embargo, las redes sociales, con la debida gestión y rigor científico, pueden mostrar una increíble dinamismo sobre la actualidad y la opinión generada y cómo ambas podríam estar relacionadas con nuestra variable objetivo.</p>
        <p><h4>Cruzado De Fuentes</h4></p>
        <p>De esta forma, se justifica el primer bloque de la práctica con la intencionalidad de abordar tres grandes bloques de datos: </p>
        <li>Resultados electorales</li>
        <li>Perfiles sociales</li>
        <li>Análisis de sentimiento</li>
        `,
      },
      {
        question: `Análisis Exploratorio`,
        answer: `<img id="explo_img"></img>
        <p>Se seleccionaron las fuentes de datos más importantes Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>`,
      },
      {
        question: `¿Por qué están locos los romanos?`,
        answer: `<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>`,
      },
      {
        question: `¿Quedan argentinos en Argentina?`,
        answer: `<p>Me alegra que me haga esa pregunta...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>`,
      },
      {
        question: `Guacamole, ¿Mercadona o Alcampo?`,
        answer: `<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. </p><a target="_blank" rel="noopener noreferrer" href="https://www.mercadona.es">La respuesta aquí</a>`,
      },
      {
        question: `Y así sucesivamente para abajo...`,
        answer: `<p>Nos vamos todos al carajo....Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>`,
      },
      
    ],

  },
  plugins: [
        {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-111111111-1",
          head: true,
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-less`,
    ],
}


