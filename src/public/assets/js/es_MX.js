define("translations",["require"],function(define){return define.amd=!0,function(a,b){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?b(require("../moment")):"function"==typeof define&&define.amd?define(["moment"],b):b(a.moment)}(this,function(a){"use strict";var b="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),c="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),d=a.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return d}),{"Please enter your name.":"Por favor escribe tu nombre.","Please enter your email address.":"Por favor escribe tu correo.","Invalid email address.":"Dirección de email inválida.","Please enter a password.":"Por favor escribe una contraseña.","Password must have at least 6 characters.":"La contraseña debe tener como mínimo 6 caracteres.","Name must have at least %(minLength)s characters.":"Nombre debe tener al menos %(minLength)s caracteres.","Name must have less than %(maxLength)s characters.":"Nombre debe tener menos de %(maxLength)s caracteres.","Location must have less than %(maxLength)s characters.":"Ubicación debe tener menos de %(maxLength)s caracteres.","Site must have less than %(maxLength)s characters.":"Sitio debe tener menos de %(maxLength)s caracteres.","Please enter a valid site.":"Por favor escribe un sitio válido.","1 comment":"1 comentario","%(numPosts)s comments":"%(numPosts)s comentarios",Avatar:"Avatar","Also on %(forumName)s":"También en %(forumName)s","Comments can't be blank.":"Los comentarios no pueden dejarse en blanco.","Comments must have at least 2 characters.":"Los comentarios deben tener al menos 2 caracteres.","Please sign in or enter a name and email address.":"Debe iniciar sesión o introduzca un nombre y dirección de correo electrónico.","Please enter both a name and email address.":"Por favor, introduzca un nombre y dirección de correo electrónico.","Invalid email address format.":"Formato inválido de dirección de correo electrónico.","Description must have at least %(minLength)s characters.":"La descripción debe tener al menos %(minLength)s caracteres.","Description must have less than %(maxLength)s characters.":"La descripción debe tener menos de %(maxLength)s caracteres.",Gray:"Gris",Blue:"Azul",Green:"Verde",Yellow:"Amarillo",Orange:"Naranja",Red:"Rojo",Purple:"Morado","Recommend this discussion":"Recomienda esta discusión",Recommend:"Recomendar",Recommended:"Recomendado!","Your 1st recommended discussion!":"Su 1a discusión recomendada!","Recommending means this is a discussion worth sharing. It gets shared to your followers' %(Disqus)s feeds if you log in, and gives the creator kudos!":"Recomienda temas de esta discusión compartiéndolo. Comienza compartiéndolo con tus seguidores %(Disqus)s RSS que inician, así le da el prestigio creador!","Discussion Recommended!":"Discusión recomendada!","Recommending means this is a discussion worth sharing. It gets shared to your followers' %(Disqus)s feeds, and gives the creator kudos!":"Recomienda temas de esta discusión compartiéndolo. Comienza compartiéndolo con tus seguidores %(Disqus)s RSS, así le da el prestigio creador!","See Your Feed":"Ver tu RSS","Find More Discussions":"Encontrar más discusiones","Comment Policy":"Política de Comentarios","Please read our %(commentPolicyLink)s before commenting.":"Por favor lee nuestra %(commentPolicyLink)s antes de comentar.","%(forumName)s Comment Policy":"Política de Comentarios de %(forumName)s",Comments:"Comentarios",Community:"Comunidad","Disqus' Privacy Policy":"Política de Privacidad de Disqus","Privacy Policy":"Políticas de Privacidad","Sort by Best":"ordenar por el mejor","Sort by Newest":"ordenar por el más nuevo","Sort by Oldest":"ordenar por el más viejo",Best:"Mejor",Newest:"Lo más nuevo",Oldest:"Más antiguo","Load more comments":"Cargar más comentarios","Powered by Disqus":"Desarrollado por Disqus","Subscribe and get email updates from this discussion":"Suscribirse y recibir actualizaciones de esta discusión por correo electrónico",Subscribe:"Suscribirse","Add Disqus to your site":"Agrega Disqus a tu sitio","Add Disqus":"Agregar Disqus",Add:"Agregar","Enter email address":"Introduce correo electrónico","Hide this message":"Ocultar este mensaje","Unfortunately your image upload failed. Please verify that the file is valid and in a supported format (JPEG, PNG, or GIF).":"Desafortunadamente la carga de tu imagen falló. Por favor verifica que el archivo sea válido y esté en un formato compatible (JPEG, PNG, o GIF).","Unfortunately your image upload failed. Please verify that the file is in a supported format (JPEG, PNG, or GIF).":"Desafortunadamente la carga de tu imagen falló. Por favor verifica que el archivo esté en un formato compatible (JPEG, PNG, o GIF).","Unfortunately your image upload failed. Please verify that your image is under 5MB.":"Desafortunadamente la carga de tu imagen falló. Por favor verifica que tu imagen sea inferior a 5MB.","You must be logged in to upload an image.":"Debes haber iniciado sesión para subir una imagen.","Unfortunately your image upload failed. Please verify that your image is in a supported format (JPEG, PNG, or GIF) and under 5MB. If you continue seeing this error, please try again later.":"Desafortunadamente la carga de tu imagen falló. Por favor verifica que tu imagen esté en un formato compatible (JPEG, PNG, o GIF) y no exceda los 5MB. Si continúas viendo este error, por favor inténtalo más tarde.","Sorry we didn't catch that. Try again?":"Lo sentimos, no entendimos. ¿Intentamos de nuevo?","Did you know you can drag and drop images too? Try it now!":"¿Sabias que también puedes arrastrar y soltar imágenes? ¡Inténtalo ahora!","Join the discussion…":"Únete a la discusión...","Start the discussion…":"Comienza la discusión...","Please wait until your images finish uploading.":"Por favor, espere hasta que sus imágenes terminen de cargar.","Oops! We're having trouble posting your comment. Check your internet connection and try again.":"Oops! Estamos teniendo problemas al publicar su comentario. Revise su coneccion de internet e intente nuevamente.","in this conversation":"en esta conversación","That email address is already registered with a Disqus account. Log in or enter another email.":"Este email ya está registrado con una cuenta de ONPETV. Inicie sesión o ingrese otro email.","The e-mail address you specified is already in use.":"El nombre de usuario que usted ha especificado está en uso.","Try logging in.":"Intente acceder","Connect with %(forumName)s":"Conectar con %(forumName)s","%(forumName)s needs permission to access your account.":"%(forumName)s necesita permiso para acceder a tu cuenta.",Next:"Siguiente","Terms of Service":"Términos de Servicio","I agree to Disqus' %(terms)s":"Estoy de acuerdo con los %(terms)sde Disqus","I agree to Disqus' processing of email and IP address, and the use of cookies, to facilitate my authentication and posting of comments, explained further in the %(policy)s":"Acepto el procesamiento por parte de Disqus del correo electrónico y la dirección IP, y el uso de cookies, para facilitar mi autenticación y publicación de comentarios, explicado más detalladamente en la %(policy)s","Data Sharing Policy":"Política de Intercambio de Datos","I agree to additional processing of my information, including first and third party cookies, for personalized content and advertising as outlined in our %(policy)s":"Estoy de acuerdo con el procesamiento adicional de mi información, incluidas las cookies de primeros y terceros, para el contenido personalizado y la publicidad tal como se describe en nuestra %(policy)s","or sign up with Disqus":"o registrarse con Disqus","or pick a name":"o elija un nombre","Disqus is a discussion network":"Disqus es una red de discusión","Don't be a jerk or do anything illegal. Everything is easier that way.":"No seas imprudente o hagas algo ilegal. Todo es más fácil de esa manera.","Read full terms and conditions":"Lee los términos y condiciones",Name:"Nombre",Email:"Correo electrónico",Password:"Contraseña","I'd rather post as a guest":"Prefiero comentar como invitado",Post:"Publicar","Log in with":"Iniciar sesión con","Drag and drop your images here to upload them.":"Arrastra y suelta tus imágenes para subirlas.","Post as %(name)s":"Publicar como %(name)s","Save Edit":"Guardar Cambios",Cancel:"Cancelar",Link:"Enlace","We are unable to post your comment because %(blocker)s has placed your account in a timeout. You will be able to comment again when your timeout expires %(expirationRelative)s.":"No nos fue posible publicar tu comentario porque %(blocker)s ha puesto tu cuenta en tiempo de espera. Podrás comentar de nuevo cuando tu tiempo de espera expire en %(expirationRelative)s.","We are unable to post your comment because you have been banned by %(blocker)s.":"No podimos publicar tu comentario porque fuiste bloquado por %(blocker)s.","Find out more.":"Saber más.","%(forumName)s requires you to verify your email address before posting.":"%(forumName)s requiere que usted para verificar su dirección de correo electrónico antes de publicar.","Verify Email":"Confirmar correo electrónico","Send verification email to %(email)s":"Enviar correo electrónico de verificación a %(email)s",Play:"Reproducir",Hide:"Ocultar",View:"Ver","Edit profile":"Editar perfil",Private:"Privado",Following:"Siguiendo",Follow:"Seguir","Full profile":"Perfil completo","1 vote":"1 voto","%(numLikesReceived)s votes":"%(numLikesReceived)s votos",MOD:"MOD","Disqus Pro gives you access to exclusive features like auto-moderation, shadow banning, and customization options.":"Disqus Pro te brinda acceso a funciones exclusivas como moderación automática, bloqueo invisible y opciones de personalización.","Subscriptions and Billing":"Subscripciones y Facturación","1 day":"1 día","1 week":"1 semana","2 weeks":"2 semanas","Adding this person to the whitelist will automatically approve his or her new comments from now on.":"Al agregar esta persona a la lista blanca automáticamente aprobará sus nuevos comentarios a partir de ahora.",Timeout:"Tiempo de espera","Restrict a user's ability to comment for a period of time. This notifies the user of their timeout. If discussions get heated, enforce timeouts so that users cool off and improve their behavior.":"Restringe la capacidad del usuario para comentar durante un período de tiempo. Esto notifica al usuario de su tiempo de espera. Si las discusiones se calientan, aplica tiempos de espera para que los usuarios se moderen y mejoren su comportamiento.",Custom:"Personalizado","Shadow Ban":"Bloqueo Oculto","Ban a user without them knowing. The user can still comment, however, their posts will only be visible to themselves. Use it against trolls and spammers who attempt to circumvent a ban with new accounts.":"Bloquea a un usuario sin que se entere. El usuario podrá seguir comentando, sin embargo,  sus publicaciones serán será sólo visibles para él mismo.  Úsalo contra trolls y spammers que intentan eludir una prohibición con cuentas nuevas.","Permanently ban the user so they can no longer post, vote, or flag comments on your site. If the user repeatedly violates your comment policy, revoke their ability to participate.":"Prohibir permanentemente al usuario para que ya no pueda publicar, votar o marcar comentarios en su sitio. Si el usuario incumple reiteradamente tu política de comentarios, revoca su capacidad para participar.","Last 30 days of comments:":"Comentarios de los últimos 30 días:","Do nothing":"No hacer nada",Delete:"Eliminar comentario","Mark as spam":"Marcar como spam","User:":"Usuario:","Email:":"Correo electrónico:","IP Address:":"Dirección IP:","Note:":"Nota:","Adding an IP address to the banned list may also unintentionally block others who may share this IP address.":"El agregar una dirección IP a la lista de bloqueados puede también de manera no intencional bloquear a otros que pudieran compartir esta dirección IP.","Reason for banning:":"Motivo del bloqueo:","You can remove the user from the banned list at any time.":"Puedes eliminar al usuario de la lista de bloqueados en cualquier momento.","Add to Trusted List":"Agregar a Lista de Confianza","Add to Banned List":"Agregar a Lista de Bloqueados","One other person is typing…":"Otra persona esta tipeando...","%(num)s other people are typing…":"%(num) personas están escribiendo...","I disagree with this user":"No estoy de acuerdo con este usuario","Targeted harassment":"Acoso dirigido","posted or encouraged others to post harassing comments or hate speech targeting me, other individuals, or groups":"publicío o animó a otros a publicar comentarios de hostigamiento o discurso de odio dirigido hacia mí, a otras personas o grupos",Spam:"Spam","posted spam comments or discussions":"publicó comentarios o discusiones spam","Inappropriate profile":"Perfil inapropiado","profile contains inappropriate images or text":"el perfil contiene imágenes o texto inapropiados","Threatening content":"Contenido amenazante","posted directly threatening content":"publicó contenido directamente amenazador",Impersonation:"Suplantación de identidad","misrepresents themselves as someone else":"se hace pasar por otra persona","Private information":"Informacion privada","posted someone else's personally identifiable information":"publicó información de identificación personal de otra persona","Flag Comment":"Marcar Comentario","Why are you flagging this comment?":"¿Por qué estás marcando este comentario?","Before flagging, please keep in mind that %(disqus)s does not moderate communities. Your username will be shown to the moderator, so you should only flag this comment for one of the reasons listed above.":"Antes de marcar, toma en cuenta que %(disqus)s no modera las comunidades. Tu nombre de usuario se mostrará al moderador, por lo que solo deberías marcar este comentario por uno de los motivos enumerados anteriormente.","Thanks for your feedback!":"¡Gracias por tus comentarios!",Done:"Hecho","Other tools for you:":"Otras herramientas para ti:","Blocking this user will hide all of their activity and comments from your %(disqus)s content, feeds, and notifications.":"Al bloquear este usuario se ocultará toda su actividad y comentarios del contenido, noticias y notificaciones de tu %(disqus)s.","Would you like to block %(user)s?":"¿Te gustaría bloquear a %(user)s?","Block User":"Bloquear Usuario","No Thanks":"No Gracias","Blocked User":"Usuario Bloqueado","You've blocked %(user)s.":"Has bloqueado a %(user)s.","You won't see comments from this user on %(disqus)s in discussions, notifications, and more.":"No verás más comentarios de este usuario en %(disqus)s discusiones, notificaciones y más.","Manage Blocked Users":"Administrar Usuarios Bloqueados","Something went wrong while trying to block this user. Please try again later.":"Algo salió mal mientras intentamos bloquear a este usuario. Por favor intenta mas tarde.","Unfortunately this user could not be blocked; you have reached the limit for number of users blocked.":"Desafortunadamente este usuario no pudo ser bloqueado; has alcanzado el limite de usuarios bloqueados.","Vote up":"Votar a favor","Vote down":"Votar en contra",Edit:"Editar",Reply:"Responder","View all comments":"Ver todos los comentarios","All Comments":"Todos los comentarios",Share:"Compartir","Click to copy post link":"Haz clic para copiar vínculo a publicación","Leave Feedback":"Dejar su opinion","Mark as Spam":"Marcar como Spam","Ban User":"Expulsar Usuario",Moderate:"Moderar","Stop featuring":"Detener destacados","Feature this comment":"Destacar este comentario",Flagged:"Marcado","Flag as inappropriate":"Marcar como no apropiado",Collapse:"Contraer",Expand:"Expandir",Mod:"Moder.","All-Star":"All-Star","This comment has no content.":"Este comentario no tiene contenido","see more":"ver más","This comment was deleted.":"Este comentario fue eliminado.","This user is blocked.":"Este usuario está bloqueado.","Comment score below threshold.":"Puntuación de comentario por debajo del umbral.","Show comment.":"Mostrar comentario.","Your comment is awaiting moderation.":"Tu comentario está esperando ser moderado.","See your comment.":"Ver tu comentario.","Why?":"¿Por qué?","This comment is awaiting moderation.":"Este comentario está en espera de moderación.","You must sign in to up-vote this post.":"Debes iniciar sesión para votar positivo en este post.","You must sign in to down-vote this post.":"Debes iniciar sesión para votar negativo este comentario.","Featured by %(forum)s":"Patrocinado por %(forums)s","Sponsored on Disqus":"Patrocinado por Disqus","Hold on, this is waiting to be approved by %(forum)s.":"Un momento, esta a la espera de ser aprobado por %(forum)s","You've featured a comment! This comment will now also appear at the top of the discussion.":"Tu tienes destacado un comentario! Este comentario ahora aparecerá primero en la discusion","Are you sure you want to block this user?":"¿Estás seguro que deseas bloquear a este usuario?","Are you sure you want to delete this comment? You cannot undo this action.":"¿Seguro que quieres borrar este comentario? No se puede deshacer esta acción.","This discussion has been closed.":"Esta discusión se ha cerrado.","Be the first to comment.":"Sé el primero en comentar.","Nothing in this discussion yet.":"Nada en esta discusión todavía.","Welcome to %(Disqus)s! Discover more great discussions just like this one. We're a lot more than comments.":"¡Bienvenido a %(Disqus)s! Descubre más conversaciones geniales como esta. Somos mucho más que comentarios.","Get Started":"Comenzar",Dismiss:"Descartar","Featured Comment":"Destacado por","Show One New Comment":"Mostrar Un Comentario Nuevo","Show %(comments)s New Comments":"Mostrar %(comments)s Nuevos Comentarios","Show 1 new reply":"Mostrar 1 nueva respuesta","Show %(replies)s new replies":"Mostrar %(replies)s nuevas respuestas",Login:"Iniciar sesión","Your Profile":"Tu Perfil","Display Media":"Mostrar Medios","Hide Media":"Ocultar Medios","Edit Settings":"Editar Configuración","Don't Premoderate Thread":"No Moderar Previamente el Hilo","Premoderate Thread":"Moderar Previamente el Hilo","Open Thread":"Abrir Tema","Close Thread":"Cerrar Tema",Help:"Ayuda",Debug:"Depurar",Repair:"Reparar",Logout:"Cerrar sesión","Important Update":"Actualización Importante","When you log in with Disqus, we process personal data to facilitate your authentication and posting of comments. We also store the comments you post and those comments are immediately viewable and searchable by anyone around the world.":"Cuando inicias sesión con Disqus, procesamos los datos personales para facilitar tu autenticación y publicación de comentarios. También almacenamos los comentarios que publicas y esos comentarios son inmediatamente visibles y buscables por cualquier persona en todo el mundo.",Proceed:"Proceder","One new comment above.":"Un nuevo comentario arriba.","%(num)s new comments above.":"%(num)snuevos comentarios arriba.","One new comment below.":"Un nuevo comentario abajo.","%(num)s new comments below.":"%(num)s nuevos comentarios abajo.","The Disqus comment system is temporarily in maintenance mode. You can still read comments during this time, however posting comments and other actions are temporarily delayed.":"El sistema de comentarios de Disqus está en modo de mantenimiento temporalmente. Puedes leer comentarios durante este tiempo, sin embargo publicar comentarios y otras acciones están temporalmente demoradas.","Comments on this entire site are premoderated (only moderators can see this message).":"Los comentarios en este sitio son moderados previamente (sólo los moderadores pueden ver este mensaje).","Change site settings.":"Cambiar configuración del sitio.","Comments on this thread are premoderated (only moderators can see this message).":"Los comentarios en este hilo son moderados previamente (sólo los moderadores pueden ver este mensaje).","An error occurred while opening the thread. Please try again.":"Ha ocurrido un error cuando se abría la publicación. Inténtalo nuevamente","An error occurred while closing the thread. Please try again.":"Ha ocurrido un error cuando se cerraba la publicación. Inténtalo nuevamente","An error occurred while updating the thread. Please try again.":"Se produjo un error al actualizar el hilo. Inténtalo de nuevo.","%(guestCount)s Guest Votes":"%(guestCount)s votos de invitados","1 Guest Vote":"1 voto de invitado","%(guestCount)s Others":"Otros %(guestCount)","1 Other":"1 más",Channels:"Canales","Places to start your own discussions.":"Lugares para comenzar tus propias discusiones.","Upload Images":"Cargar Imágenes","Media attachment":"Archivo multimedia adjunto","Media preview placeholder":"Enfoque de previsualización",Thumbnail:"Miniaturas"}});