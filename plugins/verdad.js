let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶  👩‍💻 [VERDAD]👩‍🏫
├⇶“${pickRandom(global.verdad)}”
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯`, m)
}
handler.help = ['verdad']
handler.tags = ['General']
handler.command = /^(verdad)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.verdad = [
"¿Alguna vez te ha gustado alguien? ¿Cuánto tiempo?",
  "Si es posible o si quieres, en gc / fuera de gc, ¿con quién harás amistad? (Puede ser diferente / del mismo tipo)",
  "¿cual es tu mas grande miedo?",
  "¿Alguna vez te ha gustado alguien y has sentido a esa persona como tú también?",
  "¿Cuál es el nombre del exnovio de tu amiga que una vez te gustó en secreto?",
  "¿Alguna vez has robado el dinero de tu madre o de tu padre? ¿La razón?",
  "lo que te hace feliz cuando estás triste",
  "¿Alguna vez has sido amor no correspondido? ¿Si has estado con quién? ¿Cómo se siente brou?",
  "¿Alguna vez has tenido una aventura con alguien?",
  "lo más temido",
  "quién es la persona más influyente en tu vida",
  "qué orgullo tienes este año",
  "quién es la persona que puede enfermarte",
  "quien es la persona que alguna vez te puso cachondo",
  "(para los musulmanes) ¿nunca has rezado en todo el día?",
  "¿Quién es el más cercano a su tipo de pareja ideal aquí",
  "¿Con quién te gusta jugar?",
  "¿Alguna vez has rechazado a alguien? ¿Por qué?",
  "Menciona el incidente que te hizo daño y que aún recuerdas",
  "¿Qué logros has obtenido este año?",
  "¿Cuál es tu peor hábito en la escuela?", "¿Qué programa de televisión odias más? ¡Da la razón!", "¿Cuál es el vestido más feo (en su opinión) que ha usado y cuándo lo usó?", "¿Qué es lo peor (chisme) que has dicho sobre tu amigo?","¿Qué es lo más vergonzoso de ti?"," ¿Qué es lo primero que ves cuando miras a otra persona (del sexo opuesto)?", 
"¿Qué es lo primero que te viene a la mente cuando te miras al espejo?","¿Que es lo mas tonto que has hecho en tu vida?"," ¿Cuál es el peor sueño que has tenido?"," ¿Cuál es el sueño más loco que puedes recordar hasta ahora?",
" ¿Cuál es tu peor rasgo en tu opinión?", 
" ¿Qué rasgo te gustaría cambiar de ti mismo?", 
" ¿Qué rasgo te gustaría cambiar en tu amigo?", 
" ¿Qué harías si tu novio te dijera que tienes mala nariz o dedos?", 
" ¿En qué piensas antes de dormir? ej .: fantasear con una pareja, etc.", 
"¿Qué crees que se destaca más de ti?"," ¿Qué parte del cuerpo de tu amigo te gusta más y desearías tener?", 
"¿Qué parte de tu cuerpo odias más?"," De todas las clases de la escuela, ¿a qué clase le gustaría ingresar y qué clase le gustaría evitar?", 
"¡Describe a tu amigo más cercano!"," ¡Descríbete en una palabra!"," ¿Qué películas y canciones te han hecho llorar?", 
" ¿Qué es algo que has mantenido en secreto hasta ahora y nadie lo ha descubierto?", 
" ¿Qué es lo más romántico que alguien (del sexo opuesto) te ha hecho o regalado?", 
"¿Qué es lo más desagradable que has experimentado?", 
" Si nacieras de nuevo y tuvieras que ser uno de tus amigos, ¿a quién elegirías ser?", 
" Si tienes superpoder / superpoder, ¿qué quieres hacer?", 
" Si el apocalipsis llega pronto, ¿qué haces?", 
" Si te pidieran que te sometieras a una cirugía plástica con una muestra de rostro de tu compañero de clase, ¿a quién imitarías?", 
" Alguna vez has robado algo?", 
" ¿Tiene miedo a morir? ¿Por qué?", 
" ¿Cuándo fue la última vez que lloraste y por qué?", 
" ¿Cuáles son tus habilidades especiales?", 
" ¿Cómo te puede gustar la persona que te gusta?", 
" ¿Cuál crees que es un buen rasgo de tu amigo más cercano que él o ella no conozca?", 
" ¿Con qué tipo de persona te gustaría casarte algún día?", 
" En tu opinión, ¿cuál es el trabajo más atractivo para el amigo que está sentado a tu lado? ¿Y por qué?", 
" ¿Con quién quieres intercambiar por un día? (amigos más cercanos que ambos conocen) y por qué", 
" ¿Alguna vez has esperado en secreto que la relación de alguien con su novia se rompiera? ¿Quién?", 
" ¿Prefiere AMIGAS o AMIGOS? ¿Por qué?", 
" ¿Qué cita recuerdas más y te gusta?", 
" ¿Qué secretos nunca les has contado a tus amigos hasta ahora?", 
" ¿Quiénes son sus verdaderos modelos a seguir?", 
" ¿Cuál de tus amigos crees que es matre?", 
" ¿Cuál de tus amigos crees que tiene menos corte de pelo?", 
" ¿Cuál de tus amigos es el más fotogénico? ", 
" ¿Quién es tu mejor ex? ¡¿Y por qué rompieron ?!", 
" ¿Cómo se llama el artista con el que hablaste en secreto?", 
" ¿Cómo se llamaba el profesor que te gustaba?", 
" ¿Cuál es el nombre de la exnovia de tu amigo que te ha gustado en secreto?", 
" ¿Cuál es el nombre de la persona (del sexo opuesto) que crees que sería divertido ser novia?", 
" ¿Cuál es el nombre de la persona que odias, pero crees que le gustas a esa persona (no necesariamente del sexo opuesto)?", 
" ¿Cuál es el nombre de la persona a la que has estado señalando en secreto?", 
" ¿Quién es la persona (del sexo opuesto) que más se te pasa por la cabeza?", 
" ¿Quién es la persona más molesta entre tus amigos? ¡la razón!", 
" ¿A quién de tus amigos crees que debería renovarse?", 
" ¿Quién está más cerca de tu pareja ideal aquí?", 
"Padre o madre", 
"La parte del cuerpo que no te gusta", 
"¿Alguna vez has hecho trampa?", 
"¿Alguna vez te han besado?", 
"¿Qué es lo primero que harías si te despertaras como del sexo opuesto?", 
"¿Alguna vez has dejado que alguien más se meta en problemas por algo que hiciste?", 
"¿Qué es lo más embarazoso que has hecho en tu vida?", 
" ¿Cuál es la razón más ridícula por la que has roto con alguien?", 
" ¿Cuál es el peor hábito que tienes?", 
" ¿Cuál crees que es tu mejor característica? ¿Y que es lo peor?", 
" ¿Cuál es la cosa más valiente que has hecho?", 
" ¿Cuándo fue la última vez que mojaste la cama?", 
" ¿Con qué sueñas más sobre dormir?", 
" Si va a ganar dinero ilegalmente, ¿cómo lo hace?", 
" ¿Qué cosas infantiles sigues haciendo?", 
" Si fueras ciego, ¿quién sería tu perro guía?", 
" ¿Qué es lo que más te impresiona?", 
" Si se le permitiera usar solo 3 palabras durante el resto de la noche a partir de ahora, ¿cuál sería?", 
" Si fueras un dictador, ¿qué ley promulgarías primero?", 
"Si vivieras durante la era nazi, ¿quién serías?", 
"¿Cuál fue la experiencia más vergonzosa en la escuela / tiempo de estudio / educación / el año pasado?", 
"¿Cuál es el mayor error de tu vida?", 
"¿Qué no harías nunca, incluso si supieras que solo te quedan 12 horas de vida?", 
" ¿Qué delitos ha cometido?", 
" Cuéntame un secreto de tu infancia.", 
" ¿Cuál es su mayor representante (secreto)?", 
" ¿Qué quieres hacer conmigo… ( x persona), si luego puedes borrar su memoria (él,…)?", 
" ¿Qué es lo peor que le has hecho a alguien?", 
" ¿Quién te gusta más?", 
"¿Alguna vez te has enamorado de alguno de los presentes?", 
" Si fueras un vampiro, ¿a cuál de nosotros morderías ahora?", 
" ¿Ha defecado alguna vez en público?", 
" ¿Cuál es tu fantasía más oscura?", 
" ¿Qué es lo mejor que has tenido con alguien más?", 
" ¿Cuál es el mayor desvío para ti?", 
" ¿Qué es lo que más te gusta de tu cuerpo y qué es lo más feo?", 
" ¿A quien te gustaría ver desnuda?", 
" ¿Quién en esta ronda puede enamorarte?", 
" ¿Alguna vez has tenido un sueño erótico donde sucedió alguien de este grupo?", 
" Si te vas a tatuar en el área genital, ¿que habrá allí?", 
" ¿Qué es más importante en una relación: el sexo o el amor?", 
" ¿Crees que el sexo es genial, bueno, bueno, divertido a veces, o realmente no te importa?", 
" ¿Qué te hace realmente amar?", 
"¿Cuántas veces a la semana / mes tiene relaciones sexuales y con qué frecuencia desea tener relaciones sexuales?", 
" ¿Con cuántas parejas sexuales te has acostado?",
" ¿Qué parte del cuerpo te hace más?", 
" ¿Cómo, dónde y con quién estuviste primero?", 
" ¿Qué importancia tienen para ti los juegos previos prolongados?", 
" ¿Qué debe hacer un hombre o una mujer para seducirte?", 
" ¿Alguna vez has tenido sexo con un buen amigo?", 
" ¿Alguna vez ha tenido relaciones sexuales con alguno de estos grupos, excepto con su pareja?", 
"¿Qué animal se adapta mejor a ti y por qué?", 
" ¿Cuál es tu peor cita?", 
" ¿A quién quieres besar ahora?", 
" ¿Cuál es tu oscura fantasía secreta?", 
" ¿Prefieres tatuarte el culo o perforarte la lengua?", 
" ¿Eres siempre leal?", 
" ¿Tienes un enamoramiento adolescente?", 
" ¿De qué persona te enamoraste?", 
" ¿Con qué celebridad te gustaría salir?", 
" ¿Cuál fue el momento más embarazoso de tu vida?", 
" ¿Qué boca te gusta más del grupo de aquí?", 
" ¿Qué jugador tiene la mano más hermosa?", 
" ¿Dónde fue tu primer beso?", 
" ¿A quién del grupo te gustaría besar más?", 
" ¿Quién en la mesa es quizás el más divertido?", 
" ¿Cuál es el mayor error de tu vida?", 
" ¿Te pasó algo vergonzoso en una cita?", 
" ¿Ha estado alguna vez en contacto con drogas?", 
" ¿A qué persona quieres besar ahora?", 
" ¿Cuándo fue la última vez que estuvo borracho?", 
" ¿Alguna vez has hecho trampa en un examen escolar?", 
" ¿Has robado algo en el pasado?", 
" ¿Roncas por la noche?", 
" ¿Cuales tu cancion favorita?", 
" ¿Con qué jugadores comerciará durante 1 semana y por qué?", 
" Te mudaste a una isla desierta, ¿a quién te llevaste de aquí?", 
" ¿A que temes más?", 
" ¿Dónde te afeitas en todas partes?", 
"¿Tienes un apodo?", 
" ¿Miras en el baño antes de lavarte?", 
"¿Quién te dio la peor angustia?", 
" Cuantas veces te has besado", 
"¿Qué es lo más embarazoso que te ha pasado?", 
"¿Cuántos chicos / chicas has besado?", 
"¿De quien estas enamorado(a) ?", 
"Que estrella te gusta", 
"¿Empezaste algo con XY (insertar nombre)?", 
"Alguna vez has robado algo?"

] 
