// =====================
//  PREGUNTAS
// =====================
const preguntas = [
    //pregunta 1
    {
        pregunta: "Un administrador definió una cuenta de usuario local con una contraseña secreta en el router R1 para usarla con SSH. ¿Qué tres pasos adicionales se requieren para configurar R1 para aceptar solo conexiones SSH cifradas? (Escoja tres opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Habilitar las sesiones SSH de entrada vty.", correcto: true },
            { text: "Habilitar las sesiones Telnet de entrada VTY.", correcto: false },
            { text: "Configurar el DNS en el router.", correcto: false },
            { text: "Configurar el nombre de dominio IP en el router.", correcto: true },
            { text: "Generar las claves SSH.", correcto: true },
            { text: "Generar claves pre-compartidas bidireccionales.", correcto: false }
        ]
    },
    //pregunta 2
    {
        pregunta: "¿Qué información muestra el comando show startup-config?",
        tipo: "simple",
        respuesta: [
            { text: "El contenido del archivo de configuración en ejecución actual en la RAM", correcto: false },
            { text: "El contenido del archivo de configuración guardado en la NVRAM", correcto: true },
            { text: "La imagen de IOS copiada en la RAM", correcto: false },
            { text: "El programa de arranque en la ROM", correcto: false }
        ]
    },
    //pregunta 3
    {
        pregunta: "¿Cómo mejora la seguridad de las contraseñas en los routers y switches Cisco el comando service password-encryption?",
        tipo: "simple",
        respuesta: [
            { text: "Requiere que un usuario escriba contraseñas cifradas para obtener acceso a la consola del router o del switch.", correcto: false },
            { text: "Requiere que se utilicen contraseñas cifradas al conectarse a un router o switch de manera remota mediante Telnet.", correcto: false },
            { text: "Cifra las contraseñas a medida que se envían por la red.", correcto: false },
            { text: "Cifra las contraseñas que se almacenan en los archivos de configuración del router o del switch.", correcto: true }
        ]
    },
    //pregunta 4
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img10.jpg" style="width:500px; margin:10px 0;"><br>
            Los switches tienen su configuración predeterminada. El host A debe comunicarse con el host D, pero no tiene la dirección MAC del gateway predeterminado. ¿Qué hosts de la red reciben la solicitud de ARP que envía el host A?
        `,
        respuesta: [
            { text: "Solo el router R1", correcto: false },
            { text: "Solo los hosts A, B, C y D", correcto: false },
            { text: "Solo el host D", correcto: false },
            { text: "Solo los hosts B y C, y el router R1", correcto: true },
            { text: "Solo los hosts A, B y C", correcto: false },
            { text: "Solo los hosts B y C", correcto: false }
        ]
    },
    //pregunta 5
    {
        pregunta: "¿Qué servicio proporciona DHCP?",
        tipo: "simple",
        respuesta: [
            { text: "Utiliza el cifrado para proporcionar acceso remoto seguro a los dispositivos y servidores de red.", correcto: false },
            { text: "Permite el acceso remoto a dispositivos de red y servidores.", correcto: false },
            { text: "Asigna direcciones IP dinámicamente a dispositivos finales e intermedios.", correcto: true },
            { text: "Una aplicación que permite chatear en tiempo real entre usuarios remotos.", correcto: false }
        ]
    },
    //pregunta 6
    {
        pregunta: "¿Qué dos funciones se realizan en la subcapa MAC de la capa de enlace de datos OSI para facilitar la comunicación Ethernet? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "implementa CSMA/CD sobre medios semidúplex compartidos heredados", correcto: true },
            { text: "permite que IPv4 e IPv6 utilicen el mismo medio físico", correcto: false },
            { text: "gestiona la comunicación entre el software de red de capa superior y el hardware de NIC Ethernet", correcto: false },
            { text: "integra flujos de Capa 2 entre 10 Gigabit Ethernet sobre fibra y 1 Gigabit Ethernet sobre cobre", correcto: true },
            { text: "agrega información de control Ethernet a los datos de protocolo de red", correcto: false }
        ]
    },
    //pregunta 7
    {
        pregunta: "Un administrador de red está agregando una nueva LAN a una sucursal. La nueva LAN debe admitir 200 dispositivos conectados. ¿Cuál es la máscara de red más pequeña que el administrador de red puede usar para la nueva red?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.248", correcto: false },
            { text: "255.255.255.0", correcto: true },
            { text: "255.255.255.240", correcto: false },
            { text: "255.255.255.224", correcto: false }
        ]
    },
    //pregunta 8
    {
        pregunta: "¿Qué valor incluido en un campo de encabezado de IPv4 reduce cada router cuando recibe un paquete?",
        tipo: "simple",
        respuesta: [
            { text: "Longitud del encabezado", correcto: false },
            { text: "Desplazamiento de fragmentos", correcto: false },
            { text: "Tiempo de vida", correcto: true },
            { text: "Servicios diferenciados", correcto: false }
        ]
    },
    //pregunta 9
    {
        pregunta: "¿Cuáles dos instrucciones describen las características de una tabla de enrutamiento IPv4 en un router? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Si existiesen dos o más rutas posibles para llegar al mismo destino, se usa la métrica más alta para decidir cuál aparece en la tabla de enrutamiento.", correcto: false },
            { text: "Si se configura una ruta estática predeterminada en el router, se incluirá una entrada en la tabla de enrutamiento con el código fuente S.", correcto: true },
            { text: "Almacena información sobre rutas derivadas de las interfaces del router activas.", correcto: true },
            { text: "El comando netstat -r se puede utilizar para mostrar la tabla de enrutamiento de un router.", correcto: false },
            { text: "Las interfaces conectadas directamente tienen dos códigos de origen de ruta en la tabla de enrutamiento: : C and S .", correcto: false },
            { text: "La tabla de enrutamiento muestra las direcciones MAC de cada interfaz activa.", correcto: false }
        ]
    },
    //pregunta 10
    {
        pregunta: "¿Cuáles son los dos comandos que se pueden utilizar en un host de Windows para mostrar la tabla de enrutamiento? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "netstat -s", correcto: false },
            { text: "tracert", correcto: false },
            { text: "show ip route", correcto: false },
            { text: "netstat -r", correcto: true },
            { text: "route print", correcto: true }
        ]
    },
    //pregunta 11
    {
        pregunta: "Se asigna un bloque de direcciones IPv6 2001:db8:0:ca00::/56 a una organización. ¿Cuántas subredes se pueden crea sin usar bits en el espacio de ID de interfaz?",
        tipo: "simple",
        respuesta: [
            { text: "512", correcto: false },
            { text: "256", correcto: true },
            { text: "1024", correcto: false },
            { text: "4096", correcto: false }
        ]
    },
    //pregunta 12
    {
        pregunta: "¿Qué característica describe un adware?",
        tipo: "simple",
        respuesta: [
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: false },
            { text: "un ataque que ralentiza o bloquea un dispositivo o servicio de red", correcto: false },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false },
            { text: "software instalado en una computadora para recolectar información del usuario", correcto: true }
        ]
    },
    //pregunta 13
    {
        pregunta: "Se ha pedido a un nuevo administrador de red que introduzca un banner en un dispositivo Cisco. ¿Cuál es la forma más rápida en que un administrador de red podría probar si el banner está configurado correctamente?",
        tipo: "simple",
        respuesta: [
            { text: "Apagar y encender el dispositivo.", correcto: false },
            { text: "Escribir CTRL-Z en la solicitud de modo privilegiado.", correcto: false },
            { text: "Reiniciar el dispositivo.", correcto: false },
            { text: "Salir del modo EXEC privilegiado y pulsar Enter.", correcto: true },
            { text: "Salir del modo de configuración global.", correcto: false }
        ]
    },
    //pregunta 14
    {
        pregunta: "Un administrador de redes quiere utilizar la misma máscara de subred para tres subredes en un sitio pequeño. El sitio tiene las siguientes redes y cantidad de dispositivos: Subred A: teléfonos IP (10 direcciones) Subred B: PC (8 direcciones) Subred C: impresoras (2 direcciones) ¿Cuál sería la única máscara de subred adecuada para utilizar en las tres subredes?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.240", correcto: true },
            { text: "255.255.255.0", correcto: false },
            { text: "255.255.255.252", correcto: false },
            { text: "255.255.255.248", correcto: false }
        ]
    },
    //pregunta 15
    {
        pregunta: "Un administrador de redes quiere utilizar la misma máscara de red para todas las redes en un sitio pequeño en particular. El sitio tiene las siguientes redes y cantidad de dispositivos: Teléfonos IP: 22 direcciones, PC: 20 direcciones necesarias, Impresoras: 2 direcciones necesarias, Escáneres: 2 direcciones necesarias. El administrador de redes considera que la red que se utilizará en este sitio es 192.168.10.0/24. ¿Cuál es la máscara de subred única que utilizaría las direcciones disponibles para las cuatro subredes de la manera más eficaz?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.192", correcto: false },
            { text: "255.255.255.248", correcto: false },
            { text: "255.255.255.0", correcto: false },
            { text: "255.255.255.252", correcto: false },
            { text: "255.255.255.224", correcto: true },
            { text: "255.255.255.240", correcto: false }
        ]
    },
    //pregunta 16
    {
        pregunta: "Un usuario envía una solicitud HTTP a un servidor Web en una red remota. Durante la encapsulación para esta solicitud, ¿qué información se agrega al campo de dirección de una trama para indicar el destino?",
        tipo: "simple",
        respuesta: [
            { text: "La dirección IP del gateway predeterminado", correcto: false },
            { text: "la dirección MAC del host de destino", correcto: false },
            { text: "El dominio de red del host de destino", correcto: false },
            { text: "La dirección MAC del gateway predeterminado", correcto: true }
        ]
    },
    //pregunta 17
    {
        pregunta: "¿Qué son los protocolos exclusivos?",
        tipo: "simple",
        respuesta: [
            { text: "Protocolos desarrollados por organizaciones que tienen control sobre su definición y operación.", correcto: true },
            { text: "Protocolos que pueden ser utilizados libremente por cualquier organización o proveedor.", correcto: false },
            { text: "Protocolos desarrollados por organizaciones privadas para que operen en hardware de cualquier proveedor.", correcto: false },
            { text: "Un conjunto de protocolos conocidos como “suite de protocolos TCP/IP”", correcto: false }
        ]
    },
    //pregunta 18
    {
        pregunta: "Cuando la configuración de un switch incluye un umbral de error por puerto definido por el usuario, ¿a qué método de switching se revierte el switch cuando se alcanza el umbral de error?",
        tipo: "simple",
        respuesta: [
            { text: "Libre de fragmentos", correcto: false },
            { text: "Envío rápido", correcto: false },
            { text: "Método de corte", correcto: false },
            { text: "Almacenamiento y envío", correcto: true }
        ]
    },
    //pregunta 19
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img11.jpg" style="width:500px; margin:10px 0;"><br>
            Si el host A envía un paquete IP al host B, ¿cuál es la dirección de destino en la trama cuando deja el host A?
        `,
        respuesta: [
            { text: "BB:BB:BB:BB:BB:BB", correcto: true },
            { text: "172.168.10.65", correcto: false },
            { text: "DD:DD:DD:DD:DD:DD", correcto: false },
            { text: "CC:CC:CC:CC:CC:CC", correcto: false },
            { text: "AA:AA:AA:AA:AA:AA", correcto: false },
            { text: "172.168.10.99", correcto: false }
        ]
    },
    //pregunta 20
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 143. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "FTP", correcto: false },
            { text: "Telnet", correcto: false },
            { text: "IMAP", correcto: true },
            { text: "SSH", correcto: false }
        ]
    },
    //pregunta 21
    {
        pregunta: "¿Qué servicio proporciona Internet Messenger?",
        tipo: "simple",
        respuesta: [
            { text: "Una aplicación que permite chatear en tiempo real entre usuarios remotos.", correcto: true },
            { text: "Utiliza el cifrado para proporcionar acceso remoto seguro a los dispositivos y servidores de red.", correcto: false },
            { text: "Traduce los nombres de dominio tales como cisco.com a direcciones IP", correcto: false },
            { text: "Permite el acceso remoto a dispositivos de red y servidores.", correcto: false }
        ]
    },
    //pregunta 22
    {
        pregunta: "¿Qué característica describe mejor a un virus?",
        tipo: "simple",
        respuesta: [
            { text: "software malintencionado o código que se ejecuta en un dispositivo final", correcto: true },
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: false },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false },
            { text: "un ataque que ralentiza o bloquea un dispositivo o servicio de red", correcto: false }
        ]
    },
    //pregunta 23
    {
        pregunta: "¿Qué técnica se utiliza con el cable UTP para la protección contra la interferencia de señal del crosstalk?",
        tipo: "simple",
        respuesta: [
            { text: "Terminar el cable con conectores a tierra especiales.", correcto: false },
            { text: "Trenzar los cables entre sí en pares.", correcto: true },
            { text: "Recubrir los cables con un revestimiento de plástico flexible.", correcto: false },
            { text: "Envolver los pares de hilos en papel metálico.", correcto: false }
        ]
    },
    //pregunta 24
    {
        tipo: "multiple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img-show-ip-interface-brief.jpg" style="width:500px; margin:10px 0;"><br>
            ¿Cuáles son los tres hechos que se pueden determinar a partir del resultado visible del comando show ip interface brief? (Elija tres opciones.)
        `,
        respuesta: [
            { text: "El switch se puede administrar de manera remota.", correcto: true },
            { text: "Un dispositivo está conectado a una interfaz física.", correcto: true },
            { text: "Se configuraron contraseñas en el switch.", correcto: false },
            { text: "Se configuró la SVI predeterminada.", correcto: true },
            { text: "Dos dispositivos están conectados al switch.", correcto: false },
            { text: "Se configuraron dos interfaces físicas.", correcto: true }
        ]
    },
    //pregunta 25
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 69. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "TFTP", correcto: true },
            { text: "DHCP", correcto: false },
            { text: "DNS", correcto: false },
            { text: "SMTP", correcto: false }
        ]
    },
    //pregunta 26
    {
        pregunta: "Un dispositivo con IPv6 habilitado envía un paquete de datos con la dirección de destino FF02::2. ¿Cuál es el destino de este paquete?",
        tipo: "simple",
        respuesta: [
            { text: "Todos los dispositivos con IPv6 habilitado en el enlace local", correcto: false },
            { text: "Todos los routers con IPv6 configurado en el enlace local", correcto: true },
            { text: "Todos los servidores IPv6 DHCP", correcto: false },
            { text: "Todos los dispositivos con IPv6 habilitado en la red", correcto: false }
        ]
    },
    //pregunta 27
    {
        pregunta: "¿Cuál es el ID de subred asociado a la dirección IPv6 2001:DA48:FC5:A4:3D1B::1/64?",
        tipo: "simple",
        respuesta: [
            { text: "2001::/64", correcto: false },
            { text: "2001:DA48:FC5::A4:/64", correcto: false },
            { text: "2001:DA48:FC5:A4::/64", correcto: true },
            { text: "2001:DA48::/64", correcto: false }
        ]
    },
    //pregunta 28
    {
        pregunta: "¿Qué tipo de amenaza de seguridad sería responsable si un complemento de la hoja de cálculo deshabilita el firewall de software local?",
        tipo: "simple",
        respuesta: [
            { text: "DoS", correcto: false },
            { text: "Caballo de Troya", correcto: true },
            { text: "Desbordamiento del búfer", correcto: false },
            { text: "Ataque de fuerza bruta", correcto: false }
        ]
    },
    //pregunta 29
    {
        pregunta: "¿Qué dos tipos de mensajes ICMPv6 se deben permitir a través de listas de control de acceso IPv6 para permitir la resolución de direcciones de Capa 3 a direcciones MAC de Capa 2? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "solicitudes de echo", correcto: false },
            { text: "Anuncios de router (RA)", correcto: false },
            { text: "Solicitud de vecino (NS)", correcto: true },
            { text: "respuestas de echo", correcto: false },
            { text: "Anuncio de vecino (NA)", correcto: true },
            { text: "Solicitud de router (RS)", correcto: false }
        ]
    },
    //pregunta 30
    {
        pregunta: "¿Qué dos instrucciones describen con precisión una ventaja o una desventaja al implementar NAT para IPv4 en una red? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "NAT hace que las tablas de enrutamiento incluyan más información.", correcto: false },
            { text: "NAT mejora el manejo de paquetes.", correcto: false },
            { text: "NAT proporciona una solución para ralentizar el agotamiento de direcciones IPv4.", correcto: true },
            { text: "NAT tendrá un impacto negativo en el rendimiento del switch.", correcto: false },
            { text: "NAT agrega capacidad de autenticación a IPv4.", correcto: false },
            { text: "NAT presenta problemas para algunas aplicaciones que requieren conectividad de extremo a extremo.", correcto: true }
        ]
    },
    //pregunta 31
    {
        pregunta: "Un usuario se queja de que una página web externa está tardando más de lo normal en cargarse. La página web eventualmente se carga en el equipo del usuario. ¿Qué herramienta debe usar el técnico con privilegios de administrador para localizar dónde está el problema en la red?",
        tipo: "simple",
        respuesta: [
            { text: "ipconfig /displaydns", correcto: false },
            { text: "tracert", correcto: true },
            { text: "nslookup", correcto: false },
            { text: "ping", correcto: false }
        ]
    },
    //pregunta 32
    {
        pregunta: "Un técnico de red está investigando el uso del cableado de fibra óptica en un nuevo centro tecnológico. ¿Cuáles dos puntos deben considerarse antes de implementar medios de fibra óptica? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "El cableado de fibra óptica requiere una conexión a tierra específica para ser inmune a EMI.", correcto: false },
            { text: "El cableado de fibra óptica es susceptible a la pérdida de señal debido a RFI.", correcto: false },
            { text: "El cableado de fibra óptica requiere diferentes conocimientos de terminación y empalme de lo que requiere el cableado de cobre.", correcto: true },
            { text: "El cable de fibra óptica es capaz de soportar un manejo sin mucho cuidado.", correcto: false },
            { text: "La fibra óptica proporciona una mayor capacidad de datos, pero es más costosa que el cableado de cobre.", correcto: true }
        ]
    },
    //pregunta 33
    {
        pregunta: "Un administrador de red advierte que algunos cables Ethernet instalados recientemente transportan señales de datos distorsionadas y con errores. Los cables nuevos se instalaron en el cielo raso, cerca de tubos fluorescentes y equipos eléctricos. ¿Cuáles son los dos factores que pueden interferir con el cableado de cobre y provocar una distorsión de la señal y daños en los datos? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "EMI", correcto: true },
            { text: "Gran longitud de los cables", correcto: false },
            { text: "RFI", correcto: true },
            { text: "Atenuación de la señal", correcto: false },
            { text: "Crosstalk", correcto: false }
        ]
    },
    //pregunta 34
    {
        pregunta: "¿Qué característica describe el robo de identidad?",
        tipo: "simple",
        respuesta: [
            { text: "software en un router que filtra el tráfico basado en direcciones IP o aplicaciones", correcto: false },
            { text: "un protocolo de túnel que proporciona a los usuarios remotos acceso seguro a la red de una organización", correcto: false },
            { text: "software que identifica amenazas de propagación rápida", correcto: false },
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: true }
        ]
    },
    //pregunta 35
    {
        pregunta: "Los datos se envían de una PC de origen a un servidor de destino. ¿Qué afirmaciones describen correctamente la función del TCP o UDP en esta situación? (Elija tres opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "El campo del puerto de origen identifica la aplicación o el servicio en ejecución que maneja la devolución de datos a la PC.", correcto: true },
            { text: "El número de puerto de origen de TCP identifica el host emisor de la red.", correcto: false },
            { text: "El TCP es el protocolo preferido cuando una función requiere menor sobrecarga de red.", correcto: false },
            { text: "Los segmentos UDP se encapsulan en paquetes IP para ser transportados a través de la red.", correcto: true },
            { text: "El número de puerto de destino de UDP identifica la aplicación o los servicios en el servidor que maneja los datos.", correcto: true },
            { text: "El proceso del TCP en ejecución en la PC selecciona al azar el puerto de destino al establecer una sesión con el servidor", correcto: false }
        ]
    },
    //pregunta 36
    {
        pregunta: "¿Qué método de switching descarta las tramas que no pasan la revisión FCS?",
        tipo: "simple",
        respuesta: [
            { text: "Almacenamiento en búfer de puerto de entrada", correcto: false },
            { text: "Conmutación por método de corte", correcto: false },
            { text: "Switching por almacenamiento y envío", correcto: true },
            { text: "Switching sin fronteras", correcto: false }
        ]
    },
    //pregunta 37
    {
        pregunta: "¿Cuál es una característica principal de la capa de enlace de datos?",
        tipo: "simple",
        respuesta: [
            { text: "Protege el protocolo de la capa superior de conocer el medio físico que se utilizará en la comunicación.", correcto: true },
            { text: "Acepta paquetes de capa 3 y decide la ruta por la cual reenviar el paquete a una red remota.", correcto: false },
            { text: "Convierte una transmisión de bits de datos en un «código» predefinido.", correcto: false },
            { text: "Genera señales eléctricas u ópticas que representan 1 y en el medio.", correcto: false }
        ]
    },
    //pregunta 38
    {
        pregunta: "¿Cuáles son las dos responsabilidades principales de la subcapa MAC Ethernet? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Detección de errores", correcto: false },
            { text: "Asignación lógica de direcciones", correcto: false },
            { text: "Delimitación de tramas", correcto: false },
            { text: "encapsulamiento de datos", correcto: true },
            { text: "acceso a los medios de comunicación", correcto: true }
        ]
    },
    //pregunta 39
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img13.png" style="width:500px; margin:10px 0;"><br>
            Una compañía utiliza el bloque de direcciones 128.107.0.0/16 para su red. ¿Cuál de estas máscaras de subred proporcionaría la cantidad máxima de subredes de igual tamaño y, a la vez, suficientes direcciones de host para cada subred que se muestra en la ilustración?
        `,
        respuesta: [
            { text: "255.255.255.192", correcto: false },
            { text: "255.255.255.0", correcto: false },
            { text: "255.255.255.128", correcto: true },
            { text: "255.255.255.240", correcto: false },
            { text: "255.255.255.224", correcto: false }
        ]
    },
    //pregunta 40
    {
        pregunta: "Un administrador de red debe mantener la privacidad de la ID de usuario, la contraseña y el contenido de la sesión cuando establece conectividad remota con la CLI con un switch para administrarla. ¿Qué método de acceso se debe elegir?",
        tipo: "simple",
        respuesta: [
            { text: "Consola", correcto: false },
            { text: "AUX", correcto: false },
            { text: "Telnet", correcto: false },
            { text: "SSH", correcto: true }
        ]
    },
    //pregunta 41
    {
        pregunta: "¿Cuáles son dos problemas que pueden ser causados por un gran número de mensajes de solicitud y respuesta ARP? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "La solicitud ARP se envía como un broadcast e inundará toda la subred.", correcto: true },
            { text: "Un gran número de mensajes de solicitud y respuesta ARP puede ralentizar el proceso de switching, lo que lleva al switch a realizar muchos cambios en su tabla MAC.", correcto: false },
            { text: "Los switches se sobrecargan porque concentran todo el tráfico de las subredes conectadas.", correcto: false },
            { text: "La red puede sobrecargarse porque los mensajes de respuesta ARP tienen una carga útil muy grande debido a la dirección MAC de 48 bits y la dirección IP de 32 bits que contienen.", correcto: false },
            { text: "Todos los mensajes de solicitud ARP deben ser procesados por todos los nodos de la red local.", correcto: true }
        ]
    },
    //pregunta 42
    {
        pregunta: "Una impresora láser está conectada por cables a una computadora doméstica. Se compartió la impresora para que otras computadoras de la red doméstica también puedan usarla. ¿Qué modelo de red se usa?",
        tipo: "simple",
        respuesta: [
            { text: "Maestro/esclavo", correcto: false },
            { text: "Punto a punto", correcto: false },
            { text: "Entre pares (P2P)", correcto: true },
            { text: "Basada en clientes", correcto: false }
        ]
    },
    //pregunta 43
    {
        pregunta: "¿Cuáles son las tres características del proceso de CSMA/CD? (Elija tres opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "El dispositivo con el token electrónico es el único que puede transmitir luego de una colisión.", correcto: false },
            { text: "Antes de transmitir, un dispositivo escucha y espera hasta que los medios no se encuentren ocupados.", correcto: true },
            { text: "Una señal de congestión indica que se ha borrado la colisión y que los medios no se encuentran ocupados.", correcto: false },
            { text: "Luego de detectar una colisión, los hosts pueden intentar reanudar la transmisión después de que ha caducado el retardo de tiempo aleatorio.", correcto: true },
            { text: "Se pueden configurar los dispositivos con una mayor prioridad de transmisión.", correcto: false },
            { text: "Todos los dispositivos de un segmento ven los datos que pasan en el medio de red.", correcto: true }
        ]
    },
    //pregunta 44
    {
        pregunta: "Un cliente usa SLAAC para obtener una dirección IPv6 para su interfaz. Una vez que se genera una dirección y se aplica a la interfaz, ¿qué debe hacer el cliente antes de que pueda comenzar a usar esta dirección IPv6?",
        tipo: "simple",
        respuesta: [
            { text: "Debe enviar un mensaje DHCPv6 INFORMATION-REQUEST para solicitar la dirección del servidor DNS.", correcto: false },
            { text: "Debe enviar un mensaje ICMPv6 de solicitud de vecino para asegurarse de que la dirección no esté en uso en la red.", correcto: true },
            { text: "Debe enviar un mensaje ICMPv6 de solicitud de router para determinar qué gateway predeterminado debe usar.", correcto: false },
            { text: "Debe enviar un mensaje DHCPv6 REQUEST al servidor de DHCPv6 para solicitar permiso para usar esta dirección.", correcto: false }
        ]
    },
    //pregunta 44
    {
        pregunta: "Un cliente usa SLAAC para obtener una dirección IPv6 para su interfaz. Una vez que se genera una dirección y se aplica a la interfaz, ¿qué debe hacer el cliente antes de que pueda comenzar a usar esta dirección IPv6?",
        tipo: "simple",
        respuesta: [
            { text: "Debe enviar un mensaje DHCPv6 INFORMATION-REQUEST para solicitar la dirección del servidor DNS.", correcto: false },
            { text: "Debe enviar un mensaje ICMPv6 de solicitud de vecino para asegurarse de que la dirección no esté en uso en la red.", correcto: true },
            { text: "Debe enviar un mensaje ICMPv6 de solicitud de router para determinar qué gateway predeterminado debe usar.", correcto: false },
            { text: "Debe enviar un mensaje DHCPv6 REQUEST al servidor de DHCPv6 para solicitar permiso para usar esta dirección.", correcto: false }
        ]
    },
    //pregunta 45
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img14.jpg" style="width:500px; margin:10px 0;"><br>
            ¿Qué protocolo fue responsable de construir la tabla que se muestra?
        `,
        respuesta: [
            { text: "ICMP", correcto: false },
            { text: "ARP", correcto: true },
            { text: "DNS", correcto: false },
            { text: "DHCP", correcto: false }
        ]
    },
    //pregunta 46
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 80. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "HTTP", correcto: true },
            { text: "DHCP", correcto: false },
            { text: "DNS", correcto: false },
            { text: "SMTP", correcto: false }
        ]
    },
    //pregunta 47
    {
        tipo: "simple",
        pregunta: `
            Observe la ilustración.<br>
            <img src="img15.png" style="width:500px; margin:10px 0;"><br>
            A un ingeniero de red se le ha dado la dirección de red 192.168.99.0 y una máscara de subred 255.255.255.192 para dividirla en las cuatro redes mostradas. ¿Cuántas direcciones de host totales no se utilizan en las cuatro subredes?
        `,
        respuesta: [
            { text: "88", correcto: false },
            { text: "224", correcto: false },
            { text: "200", correcto: true },
            { text: "158", correcto: false },
            { text: "72", correcto: false }
        ]
    },
    //pregunta 48
    {
        tipo: "multiple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img16.png" style="width:500px; margin:10px 0;"><br>
            ¿Cuáles son las dos direcciones de red que se pueden asignar a la red con los 10 hosts? Sus respuestas deben desperdiciar la menor cantidad de direcciones posible, no se pueden reutilizar direcciones que ya se hayan asignado y se debe permanecer dentro del intervalo de direcciones 10.18.10.0/24. (Elija dos opciones.)
        `,
        respuesta: [
            { text: "10.18.10.200/28", correcto: false },
            { text: "10.18.10.208/28", correcto: true },
            { text: "10.18.10.240/27", correcto: false },
            { text: "10.18.10.200/27", correcto: false },
            { text: "10.18.10.224/27", correcto: false },
            { text: "10.18.10.224/28", correcto: true }
        ]
    },
    //pregunta 49
    {
        pregunta: "Un usuario intenta acceder a http://www.cisco.com/ sin éxito. ¿Cuáles son los dos valores de configuración que se deben establecer en el host para permitir el acceso? (Elija dos opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "Gateway predeterminado", correcto: true },
            { text: "Servidor DNS", correcto: true },
            { text: "Dirección MAC de origen", correcto: false },
            { text: "Servidor HTTP", correcto: false },
            { text: "Número de puerto de origen", correcto: false }
        ]
    },
    //pregunta 50
    {
        pregunta: "¿Cual es una función de la capa de enlace de datos?",
        tipo: "simple",
        respuesta: [
            { text: "proporciona entrega de datos de extreme a extremo entre hosts", correcto: false },
            { text: "proporciona el formato de los datos", correcto: false },
            { text: "proporciona entrega de datos entre dos aplicaciones", correcto: false },
            { text: "proporciona el intercambio de tramas a través de un medio común", correcto: true }
        ]
    },
    //pregunta 51
    {
        pregunta: "¿Qué servicio proporciona SMTP?",
        tipo: "simple",
        respuesta: [
            { text: "Permite el acceso remoto a dispositivos de red y servidores.", correcto: false },
            { text: "Utiliza el cifrado para proporcionar acceso remoto seguro a los dispositivos y servidores de red.", correcto: false },
            { text: "Permite a los clientes enviar correo electrónico a un servidor de correo y a los servidores enviar correo electrónico a otros servidores.", correcto: true },
            { text: "Una aplicación que permite chatear en tiempo real entre usuarios remotos.", correcto: false }
        ]
    },
    //pregunta 52
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img17.jpg" style="width:500px; margin:10px 0;"><br>
            Si el Host1 transfiriera un archivo al servidor, ¿qué capas del modelo TCP/IP se utilizarían?
        `,
        respuesta: [
            { text: "Solo las capas de aplicación, de Internet y de acceso a la red", correcto: false },
            { text: "Solo las capas de aplicación, de transporte, de Internet y de acceso a la red", correcto: true },
            { text: "Solo las capas de aplicación, de sesión, de transporte, de red, de enlace de datos y física", correcto: false },
            { text: "Solo las capas de aplicación, de transporte, de red, de enlace de datos y física", correcto: false },
            { text: "Solo las capas de aplicación y de Internet", correcto: false },
            { text: "Solo las capas de Internet y de acceso a la red", correcto: false }
        ]
    },
    //pregunta 53
    {
        pregunta: "Se emitieron dos pings desde un host en una red local. El primer ping se emitió a la dirección IP del gateway predeterminado del host y falló. El segundo ping se emitió a la dirección IP de un host fuera de la red local y se realizó correctamente. ¿Cuál de las siguientes es una posible causa del ping fallido?",
        tipo: "simple",
        respuesta: [
            { text: "El gateway predeterminado no está en funcionamiento.", correcto: false },
            { text: "El stack de TCP/IP en el gateway predeterminado no funciona correctamente.", correcto: false },
            { text: "Se aplican reglas de seguridad al dispositivo de gateway predeterminado, lo cual evita que procese solicitudes de ping.", correcto: true },
            { text: "El dispositivo de gateway predeterminado está configurado con la dirección IP incorrecta", correcto: false }
        ]
    },
    //pregunta 54
    {
        pregunta: "Se agregó un grupo de equipos Windows en una nueva subred a una red Ethernet. Al probar la conectividad, un técnico descubre que estas computadoras pueden acceder a los recursos de red local, pero no a los recursos de Internet. Para resolver el problema, el técnico desea confirmar inicialmente las configuraciones de direcciones IP y DNS en las computadoras, además de verificar la conectividad al router local. ¿Cuáles son los tres comandos y utilidades de CLI de Windows que proporcionan la información necesaria? (Elija tres).",
        tipo: "multiple",
        respuesta: [
            { text: "ping", correcto: true },
            { text: "nslookup", correcto: true },
            { text: "netsh interface ipv6 show neighbor", correcto: false },
            { text: "tracert", correcto: false },
            { text: "ipconfig", correcto: true },
            { text: "telnet", correcto: false },
            { text: "arp -a", correcto: false }
        ]
    },
    //pregunta 55
    {
        pregunta: "¿Qué capa del modelo TCP/IP proporciona una ruta para reenviar mensajes a través de una interconexión de redes?",
        tipo: "simple",
        respuesta: [
            { text: "Transporte", correcto: false },
            { text: "Acceso a la red", correcto: false },
            { text: "Internet", correcto: true },
            { text: "Aplicación", correcto: false }
        ]
    },
    //pregunta 56
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img18.jpg" style="width:500px; margin:10px 0;"><br>
            La PC1 emite una solicitud de ARP porque necesita enviar un paquete a la PC2. En esta situación, ¿qué sucede a continuación?
        `,
        respuesta: [
            { text: "El RT1 envía una respuesta de ARP con la dirección MAC de la PC2.", correcto: false },
            { text: "El SW1 envía una respuesta de ARP con la dirección MAC Fa0/1.", correcto: false },
            { text: "El SW1 envía una respuesta de ARP con la dirección MAC de la PC2.", correcto: false },
            { text: "La PC2 envía una respuesta de ARP con la dirección MAC.", correcto: true },
            { text: "El RT1 envía una respuesta de ARP con su dirección MAC Fa0/0.", correcto: false }
        ]
    },
//pregunta 57
    {
        pregunta: "¿Qué servicio ofrece BOOTP?",
        tipo: "simple",
        respuesta: [
            { text: "Utiliza el cifrado para asegurar el intercambio de texto, imágenes gráficas, sonido y vídeo en la web.", correcto: false },
            { text: "Permite la transferencia de datos entre un cliente y un servidor.", correcto: false },
            { text: "Un Conjunto de reglas para intercambiar texto, imágenes gráficas, sonido, video y otros archivos multimedia en la World Wide Web.", correcto: false },
            { text: "Aplicación heredada que permite a una estación de trabajo sin disco descubrir su propia dirección IP y encontrar un servidor BOOTP en la red.", correcto: true }
        ]
    },
    //pregunta 58
    {
        pregunta: "¿Qué característica describe un VPN?",
        tipo: "simple",
        respuesta: [
            { text: "software que identifica amenazas de propagación rápida", correcto: false },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false },
            { text: "software en un router que filtra el tráfico basado en direcciones IP o aplicaciones", correcto: false },
            { text: "un protocolo de túnel que proporciona a los usuarios remotos acceso seguro a la red de una organización", correcto: true }
        ]
    },
    //pregunta 59
    {
        pregunta: "¿Qué característica describe un spyware?",
        tipo: "simple",
        respuesta: [
            { text: "un ataque que ralentiza o bloquea un dispositivo o servicio de red", correcto: false },
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: false },
            { text: "software instalado en una computadora para recolectar informacion del usuario", correcto: true },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false }
        ]
    },
    //pregunta 60
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 22. ¿Qué servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "SSH", correcto: true },
            { text: "DHCP", correcto: false },
            { text: "DNS", correcto: false },
            { text: "TFTP", correcto: false }
        ]
    },
];

const preguntaElement = document.getElementById("pregunta");
const botonRespuesta = document.getElementById("botonRespuesta");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let correctChoicesSelected = 0;  

//  INICIAR EXAMEN
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente pregunta";
    showQuestion();
}

//  MOSTRAR PREGUNTA

function showQuestion() {
    resetState();

    let currentQuestion = preguntas[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;

    preguntaElement.innerHTML = questionNO + ". " + currentQuestion.pregunta;

    correctChoicesSelected = 0; // Reiniciar para múltiples

    currentQuestion.respuesta.forEach(respuesta => {
        const button = document.createElement("button");
        button.innerHTML = respuesta.text;
        button.classList.add("btn");

        button.dataset.correcto = respuesta.correcto;

        button.addEventListener("click", selectrespuesta);

        botonRespuesta.appendChild(button);
    });
}

//  LIMPIAR PANTALLA
function resetState() {
    nextButton.style.display = "none";

    while (botonRespuesta.firstChild) {
        botonRespuesta.removeChild(botonRespuesta.firstChild);
    }
}

//  SELECCIONAR RESPUESTA
function selectrespuesta(e) {

    const selectedBtn = e.target;
    const currentQuestion = preguntas[currentQuestionIndex];

    const isCorrecto = selectedBtn.dataset.correcto === "true";

    //     PARA PREGUNTA SIMPLE
    if (currentQuestion.tipo === "simple") {

        if (isCorrecto) {
            selectedBtn.classList.add("correcto");
            score++;
        } else {
            selectedBtn.classList.add("incorrecto");
        }

        // Mostrar correctas y deshabilitar todo
        Array.from(botonRespuesta.children).forEach(button => {
            if (button.dataset.correcto === "true") {
                button.classList.add("correcto");
            }
            button.disabled = true;
        });

        nextButton.style.display = "block";
        return;
    }

    //     PARA PREGUNTA MÚLTIPLE
    if (currentQuestion.tipo === "multiple") {

        // SI LE PICA A UNA INCORRECTA = pierde la pregunta
        if (!isCorrecto) {
            selectedBtn.classList.add("incorrecto");

            Array.from(botonRespuesta.children).forEach(button => {
                if (button.dataset.correcto === "true") {
                    button.classList.add("correcto");
                }
                button.disabled = true;
            });

            nextButton.style.display = "block";
            return;
        }

        // SI ES CORRECTA:
        selectedBtn.classList.add("correcto");
        selectedBtn.disabled = true;
        correctChoicesSelected++;

        const totalCorrectas = currentQuestion.respuesta.filter(r => r.correcto).length;

        // SI YA SELECCIONÓ TODAS LAS CORRECTAS = gana punto
        if (correctChoicesSelected === totalCorrectas) {

            score++;  // gana la pregunta

            // Deshabilitar todo
            Array.from(botonRespuesta.children).forEach(button => {
                button.disabled = true;
            });

            nextButton.style.display = "block";
        }
    }
}

//  MOSTRAR PUNTUACIÓN FINAL
function showScore(){
    resetState();
    preguntaElement.innerHTML = `Obtuviste ${score} de ${preguntas.length}!`;
    nextButton.innerHTML = "Volver a intentarlo";
    nextButton.style.display = "block";
}

//  AVANZAR ENTRE PREGUNTAS
function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < preguntas.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Listener para el botón Next
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < preguntas.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Iniciar el quiz
startQuiz();
