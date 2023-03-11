let actorsList = [
    {
        id: "btn_broderick", name: "Matthew Broderick", portrait: "res/portrait-broderick",
        data1: "Matthew Quincy Broderick (Nueva York, 21 de marzo de 1962) es un actor y cantante estadounidense conocido por sus papeles en Lady Halcón, Juegos de guerra, Ferris Bueller's Day Off, Tiempos de gloria, Inspector Gadget, Adictos al amor, Election y Godzilla, aunque también es conocido por darle voz a Simba en su etapa adulta en El rey león y sus secuelas. Ha ganado dos premios Tony además de recibir nominaciones para los premios Emmy y los premios Globo de Oro.",
        born_date: "21/03/1962", death: "...",
        born_place: "Manhattan (USA)", nationality: "EEUU",
        known_as: ["WarGames", "Ladyhawke", "El rey león"]
    }, {
        id: "btn_hauer", name: "Rutger Hauer", portrait: "res/portrait-hauer",
        data1: "Rutgerus Oelsen Hauer (Breukelen, Utrecht, 23 de enero de 1944-Utrecht, 19 de julio de 2019),1​ más conocido como Rutger Hauer, fue un actor neerlandés que trabajó en Hollywood.2​ Conocido principalmente por su actuación en la película de culto Blade Runner (1982), donde encarnó al replicante Roy Batty, apareció también en películas como Delicias Turcas (1973), Soldaat van Oranje (1977), Nighthawks (1981), The Osterman Weekend (1983), Ladyhawke (1985), Flesh and Blood (1985), The Hitcher (1986), Escape de Sobibor (1987), Confesiones de una mente peligrosa (2002), Sin City (2005), Batman Begins (2005) y Valerian y la ciudad de los mil planetas (2017). En 1988 recibió un Globo de Oro por Escape de Sobibor.",
        born_date: "23/01/1944", death: "19/07/2019",
        born_place: "Beetsterzwaag (NL)", nationality: "Países Bajos",
        known_as: ["Blade Runner", "Delicias Turcas", "Drácula (2012)"]

    }, {
        id: "btn_pfeiffer", name: "Michelle Pfeiffer", portrait: "res/portrait-hauer",
        data1: "Michelle Marie Pfeiffer (Santa Ana, California, 29 de abril de 1958) es una actriz estadounidense, una de las más aclamadas y populares de su generación. Si bien en un principio fue su belleza lo que llamó la atención de los productores y del público, ha sido su talento y carisma lo que la ha mantenido en primera línea a lo largo de sus cuarenta años de trayectoria. En ellos, ha interpretado todo tipo de personajes, desde mujeres mundanas y distantes hasta osadas y decididas con gran atractivo sexual, siempre con cierto halo de misterio.",
        born_date: "29/04/1958", death: "...",
        born_place: "Santa Ana(USA)", nationality: "EEUU",
        known_as: ["Ant-Man", "Batman returns", "El príncipe de egipto"]

    }, {
        id: "btn_wood", name: "John Wood", portrait: "res/portrait-wood",
        data1: "John Wood estudió Derecho en el Jesus College en Oxford. Fue allí donde descubrió su interés por una carrera como actor. Más tarde, como actor teatral, estaba en el Old Vic Theatre, donde trabajó, entre otros, junto a Richard Burton  y estaba también activo en el Royal Court. Tuvo un tremendo éxito como actor teatral hasta el punto de retirarse una vez temporlmente durante seis ańos en su desesperación al respecto.​ Es considerado además como uno de los mejores actores teatrales del siglo pasado, sobre todo en las obras de Tom Stoppard y William Shakespeare.3​ También hizo apariciones en Broadway aunque no fueron en gran número.​        Su primera papel en una película la interpretó Wood en la película A Stolen Face del año 1952. En la comedia Somebody Killed her Husband (1978) apareció por primera vez en un papel importante junto a Farrah Fawcett y Jeff Bridges. Por su papel como Dr. Stephen Falken en el thriller de ciencia ficción WarGames(1983), fue nominado en el año 1984 para el Premio Saturn. En la comedia Jumpin' Jack Flash apareció junto a Whoopi Goldberg, en Heartburn junto a Meryl Streep y Jack Nicholson. En el remake de Sabrina rodado en 1995, interpretó al papá de Sabrina. Por su papel en la película Chocolat (2000), fue nominado para el Screen Actors Guild Award en el año 2001. Wood ganó en el año 1976 el Premio Tony por su papel en la obra de teatro Travesties.5​ En los años 1968 y 1975 él fue nominado para el mismo premio. En el año 1991 él recibió el Premio London Evening Standard Theatre y en 1998 él fue nombrado para el Premio Laurence Olivier. Se retiró de su carrera en el 2008, cuando contrajo entonces una enfermedad.3​ John Wood se casó dos veces y tuvo dos hijos y dos hijas.",
        born_date: "05/07/1930", death: "06/08/2011",
        born_place: "Gloucesteshire (GB)", nationality: "Reino Unido",
        known_as: ["WarGames","Chocolat","The Purple Rose of Cairo"]

    }, {
        id: "btn_mckern", name: "Leo McKern", portrait: "res/portrait-mckern",
        data1: "Leo McKern fue el hijo de Vera Martin y de Norman Walton McKern. En 1935 él quiso ser ingeniero, pero tuvo un accidente y perdió por ello el ojo izquierdo, por lo que lo dejó e hizo arte comercial.2​ Participó en la Segunda Guerra Mundial entre 1942 y 1944 y, después de ser licenciado, él decidió ser entonces actor. Como tal empezó su carrera en esa profesión en el mismo año en Australia y, viendo su fututo como actor en Inglaterra, McKern se fue allí en 1946. Su primera película fue Asesinato en la catedral en 1952. Se volvió conocido como un santo malvado en la película de los Beatles Socorro! (1965) y como el exorcista Bugenhagen en la película de terror del fin del mundo La profecía (1976). Finalmente , en 1966, él ganó también el reconocimiento crítico interpretando a Thomas Cromwell en Un hombre para la eternidad (1966).3​ Sin embargo su papel más famoso fue el de interpretar a Horace Rumpole en la serie Rumpole of the Bailey (1978–1992). En 1989 Leo McKern fue galardonado como Mejor Actor en los London Critics Circle Film Awards para ese año. También recibió otros tres premios y tres nominaciones durante su carrera, la cual él dejó en 1999 después de participar en el documental Federation (1999). McKern murió a la edad de 82 años de diabetes en un hogar de ancianos cerca de Bath, Inglaterra.",
        born_date: "16/03/1920", death: "23/07/2002",
        born_place: "Sidney(Au)", nationality: "Australia",
        known_as: ["Un hombre para la eternidad","La profecía","El buen rey"]

    }
]

const indexById = (element) => element.id == window.localStorage.getItem("actor_id")

let actor = actorsList[actorsList.findIndex(indexById)]

console.log(actor)

document.getElementById("actor_text_name").innerHTML = "Nombre: " + actor.name
document.getElementById("actor_text_data").innerHTML = actor.data1
document.getElementById("actor_text_borndate").innerHTML = actor.born_date
document.getElementById("actor_text_death").innerHTML = actor.death
document.getElementById("actor_text_bornplace").innerHTML = actor.born_place
document.getElementById("actor_text_nationality").innerHTML = actor.nationality
document.getElementById("actor_text_films").innerHTML = actor.known_as