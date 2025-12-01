// =====================
//  PREGUNTAS
// =====================
const preguntas = [
    //pregunta 1
    {
        pregunta: "Un administrador de red esté diseñando la disposición de una nueva red inalámbrica. ¿Cuáles son las tres áreas de importancia que se deben tener en cuenta al crear una red inalámbrica? (Elija tres).",
        tipo: "multiple",
        respuesta: [
            { text: "Seguridad", correcto: true },
            { text: "Cableado extenso", correcto: false },
            { text: "Opciones de movilidad", correcto: false },
            { text: "Interferencia", correcto: true },
            { text: "Colisión de paquetes", correcto: false },
            { text: "Área de cobertura", correcto: true },
        ]
    },
    //pregunta 2
    {
        pregunta: "¿Cuáles son los tres estándares comúnmente seguidos para construir e instalar cableado? (Escoja tres opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "longitudes de cable", correcto: true },
            { text: "clavijas", correcto: true },
            { text: "resistencia a la tracción del aislante de plástico", correcto: false },
            { text: "color del conector", correcto: false },
            { text: "costo por metro (pie)", correcto: false },
            { text: "Tipos de conector", correcto: true },
        ]
    },
    //pregunta 3
    {
        pregunta: "¿Qué tecnología inalámbrica tiene requisitos de baja potencia y de velocidad de transmisión de datos que la convierte en popular para las aplicaciones de automatización doméstica?",
        tipo: "simple",
        respuesta: [
            { text: "ZigBee", correcto: true },
            { text: "5G", correcto: false },
            { text: "LoRaWAN", correcto: false },
            { text: "Wi-Fi", correcto: false },
        ]
    },
    //pregunta 4
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 21. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "FTP", correcto: true },
            { text: "DHCP", correcto: false },
            { text: "SSH", correcto: false },
            { text: "TFTP", correcto: false }
        ]
    },
        //pregunta 5
    {
        pregunta: "¿Cuáles son los dos protocolos que operan en la capa superior del modelo TCP/IP? (Elija dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Ethernet", correcto: false },
            { text: "DNS", correcto: true },
            { text: "TCP", correcto: false },
            { text: "IP", correcto: false },
            { text: "UDP", correcto: false },
            { text: "POP", correcto: true }
        ]
    },
        //pregunta 6
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img1.jpg" class="img-pregunta"><br>
            Si la PC1 envía un paquete a la PC2 y se configuró el routing entre los dos routers, 
            ¿qué hará el R1 con el encabezado de la trama de Ethernet conectado por la PC1?
        `,
        respuesta: [
            { text: "Abrir el encabezado y utilizarlo para determinar si los datos se deben enviar a través de S0/0/0.", correcto: false },
            { text: "Abrir el encabezado y reemplazar la dirección MAC de destino por una nueva.", correcto: false },
            { text: "Eliminar el encabezado de Ethernet y configurar un nuevo encabezado de capa 2 antes de enviarlo a través de S0/0/0.", correcto: true },
            { text: "Nada, dado que el router tiene una ruta hacia la red de destino.", correcto: false }
        ]
    },
        //pregunta 7
    {
        pregunta: "Un empleado de una gran corporación inicia sesión de forma remota en la empresa utilizando el nombre de usuario y la contraseña apropiados. El empleado está asistiendo a una importante videoconferencia con un cliente sobre una gran venta. Es importante que la calidad del video sea excelente durante la reunión. El empleado no sabe que después de un inicio de sesión exitoso, la conexión con el ISP de la empresa falló. La conexión secundaria, sin embargo, se activa en cuestión de segundos. La interrupción no fue notada por el empleado u otros empleados. ¿Qué tres características de red se describen en este escenario? (Elija tres opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Integridad", correcto: false },
            { text: "Redes por línea eléctrica", correcto: false },
            { text: "Seguridad", correcto: true },
            { text: "Escalabilidad", correcto: false },
            { text: "Calidad de servicio", correcto: true },
            { text: "Tolerancia a fallas", correcto: true }
        ]
    },
        //pregunta 8
    {
        pregunta: "¿Cuál es la consecuencia de configurar un router con el comando de configuración global ipv6 unicast-routing?",
        tipo: "simple",
        respuesta: [
            { text: "Las interfaces de router habilitadas para IPv6 comienzan a enviar mensajes RA de ICMPv6.", correcto: true },
            { text: "Cada interfaz de router generará una dirección local de vínculo IPv6.", correcto: false },
            { text: "Todas las interfaces del router se activarán automáticamente.", correcto: false },
            { text: "Estáticamente crea una dirección de unicast global en este router.", correcto: false }
        ]
    },
        //pregunta 9
    {
        pregunta: "9. ¿Cuál de las siguientes subredes incluiría la dirección 192.168.1.96 como dirección de host utilizable?",
        tipo: "simple",
        respuesta: [
            { text: "192.168.1.64/29", correcto: false },
            { text: "192.168.1.32/27", correcto: false },
            { text: "192.168.1.32/28", correcto: false },
            { text: "192.168.1.64/26", correcto: true }
        ]
    },
        //pregunta 10
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img2.jpg" class="img-pregunta"><br>
            El host B en la subred Teachers transmite un paquete al host D en la subred Students. 
            ¿Qué direcciones de Capa 2 y Capa 3 están contenidas en las PDU que se transmiten desde el host B al router?
        `,
        respuesta: [
            { text: "Dirección de destino de capa 2 = 00-00-0c-94-36-ab | Dirección de origen de capa 2 = 00-00-0c-94-36-bb | Dirección de destino de capa 3 = 172.16.20.200 | Dirección de origen de capa 3 = 172.16.100.200", correcto: false },
            { text: "Dirección de destino de capa 2 = 00-00-0c-94-36-ab | Dirección de origen de capa 2 = 00-00-0c-94-36-bb | Dirección de destino de capa 3 = 172.16.20.200 | Dirección de origen de capa 3 = 172.16.10.200", correcto: true },
            { text: "Dirección de destino de capa 2 = 00-00-0c-94-36-dd | Dirección de origen de capa 2 = 00-00-0c-94-36-bb | Dirección de destino de capa 3 = 172.16.20.200 | Dirección de origen de capa 3 = 172.16.10.200", correcto: false },
            { text: "Dirección de destino de capa 2 = 00-00-0c-94-36-cd | Dirección de origen de capa 2 = 00-00-0c-94-36-bb | Dirección de destino de capa 3 = 172.16.20.99 | Dirección de origen de capa 3 = 172.16.10.200", correcto: false }
        ]
    },
        //pregunta 11
    {
        pregunta: "¿Cuáles son las tres capas del modelo OSI que se asignan a la capa de aplicación del modelo TCP/IP? (Elija tres opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "Transporte", correcto: false },
            { text: "Aplicación", correcto: true },
            { text: "Presentación", correcto: true },
            { text: "Enlace de datos", correcto: false },
            { text: "Red", correcto: false },
            { text: "Sesión", correcto: true }
        ]
    },
        //pregunta 12
    {
        pregunta: "¿Cuáles de las siguientes son dos características de IP? (Elija dos opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "Garantiza la distribución de los paquetes.", correcto: false },
            { text: "No requiere una conexión completa exclusiva.", correcto: true },
            { text: "Rearma los paquetes desordenados en el orden correcto en el lado del receptor.", correcto: false },
            { text: "Vuelve a transmitir los paquetes si se producen errores.", correcto: false },
            { text: "Opera independientemente de los medios de red.", correcto: true }
        ]
    },
        //pregunta 13
    {
        pregunta: "¿Cuáles de las siguientes son dos características de ARP? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "Cuando un host encapsula un paquete en una trama, consulta la tabla de direcciones MAC para determinar la asignación de direcciones IP a direcciones MAC.", correcto: false },
            { text: "Se envía una solicitud de ARP a todos los dispositivos en la LAN Ethernet que contiene la dirección IP del host de destino y su dirección MAC multicast.", correcto: false },
            { text: "Si hay un dispositivo que recibe una solicitud de ARP y tiene la dirección IPv4 de destino, responde con una respuesta de ARP.", correcto: true },
            { text: "Si un host está listo para enviar un paquete a un dispositivo de destino local y tiene la dirección IP pero no la dirección MAC de destino, este genera un broadcast de ARP.", correcto: true },
            { text: "Si ningún dispositivo responde a la solicitud de ARP, entonces el nodo de origen transmite el paquete de datos a todos los dispositivos en el segmento de red.", correcto: false }
        ]
    },
        //pregunta 14
    {
        pregunta: "¿Cuáles son los tres requisitos definidos por los protocolos utilizados en las comunicaciones de red para permitir la transmisión de mensajes a través de la red? (Elija tres opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "Tamaño del mensaje", correcto: true },
            { text: "Codificación del mensaje", correcto: true },
            { text: "Especificaciones de los conectores", correcto: false },
            { text: "Instalación del terminal", correcto: false },
            { text: "Selección de medios", correcto: false },
            { text: "Opciones de entrega", correcto: true }
        ]
    },
        //pregunta 15
    {
        pregunta: "¿Cuál de estas situaciones describe una función proporcionada por la capa de transporte?",
        tipo: "simple",
        respuesta: [
            { text: "Un estudiante reproduce una película corta con sonido basada en Web. La película y el sonido están codificados dentro del encabezado de la capa de transporte.", correcto: false },
            { text: "Un alumno utiliza un teléfono VoIP del aula para llamar a su casa. El identificador único grabado en el teléfono es una dirección de capa de transporte utilizada para establecer contacto con otro dispositivo de red en la misma red.", correcto: false },
            { text: "Un trabajador de una empresa accede a un servidor Web ubicado en una red corporativa. La capa de transporte da formato a la pantalla para que la página Web se visualice de manera adecuada, independientemente del dispositivo que se utilice para ver el sitio Web.", correcto: false },
            { text: "Un alumno tiene dos ventanas de explorador Web abiertas a fin de acceder a dos sitios Web. La capa de transporte garantiza que se entregue la página Web correcta a la ventana de explorador adecuada.", correcto: true }
        ]
    },
        //pregunta 16
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img3.jpg" class="img-pregunta"><br>
            Un administrador intenta configurar el switch pero recibe el mensaje de error que se muestra en la ilustración. ¿Cuál es el problema?
        `,
        respuesta: [
            { text: "El administrador ya se encuentra en el modo de configuración global.", correcto: false },
            { text: "Se debe utilizar el comando completo configure terminal.", correcto: false },
            { text: "El administrador se debe conectar a través del puerto de consola para acceder al modo de configuración global.", correcto: false },
            { text: "El administrador primero debe ingresar al modo EXEC privilegiado antes de emitir el comando.", correcto: true }
        ]
    },
        //pregunta 17
    {
        pregunta: "Una compañía tiene un servidor de archivos que comparte una carpeta con el nombre Pública. La política de seguridad de la red especifica que, en relación con la carpeta Pública, se asignen derechos de solo lectura a cualquier persona que puede iniciar sesión en el servidor y derechos de edición solo al grupo de administradores de la red. ¿Qué componente se aborda en la estructura de servicios de red de AAA?",
        tipo: "simple",
        respuesta: [
            { text: "Autenticación", correcto: false },
            { text: "Autorización", correcto: true },
            { text: "Automatización", correcto: false },
            { text: "Registro", correcto: false }
        ]
    },
        //pregunta 18
    {
        pregunta: "¿Qué sucede si se configura de forma incorrecta la dirección de gateway predeterminado en un host?",
        tipo: "simple",
        respuesta: [
            { text: "El host no puede comunicarse con otros hosts en la red local.", correcto: false },
            { text: "El switch no reenvía paquetes iniciados por el host.", correcto: false },
            { text: "El host debe utilizar el protocolo ARP para determinar la dirección de gateway predeterminado correcta.", correcto: false },
            { text: "El host no puede comunicarse con hosts en otras redes.", correcto: true },
            { text: "Un ping del host a 127.0.0.1 no se realizaría en forma correcta.", correcto: false }
        ]
    },
        //pregunta 19
    {
        pregunta: "¿Cuáles son dos causas comunes de degradación de la señal cuando se utiliza el cableado UTP? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "terminación incorrecta", correcto: true },
            { text: "instalación de cables en el conducto", correcto: false },
            { text: "pérdida de luz en largas distancias", correcto: false },
            { text: "cable o conectores de baja calidad", correcto: true },
            { text: "blindaje de baja calidad en el cable", correcto: false }
        ]
    },
        //pregunta 20
    {
        pregunta: "¿Qué significa el término «atenuación» en la comunicación de datos?",
        tipo: "simple",
        respuesta: [
            { text: "tiempo para que una señal llegue a su destino", correcto: false },
            { text: "fuga de señales de un par de cables a otro", correcto: false },
            { text: "fortalecimiento de una señal mediante un dispositivo de red", correcto: false },
            { text: "pérdida de intensidad de la señal a medida que aumenta la distancia", correcto: true }
        ]
    },
        //pregunta 21
    {
        pregunta: "¿Cuáles son las dos afirmaciones que describen cómo evaluar los patrones de flujo de tráfico y los tipos de tráfico de red mediante un analizador de protocolos? (Elija dos opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "Capturar solamente tráfico WAN dado que el tráfico a la Web es responsable de la mayor cantidad de tráfico en una red.", correcto: false },
            { text: "Realizar la captura en diferentes segmentos de la red.", correcto: true },
            { text: "Capturar tráfico solamente en las áreas de la red que reciben el mayor tráfico, como el centro de datos.", correcto: false },
            { text: "Capturar tráfico en horas de uso pico para obtener una buena representación de los diferentes tipos de tráfico.", correcto: true },
            { text: "Capturar tráfico los fines de semana, cuando la mayoría de los empleados no está trabajando.", correcto: false }
        ]
    },
        //pregunta 22
    {
        pregunta: "Los usuarios informan que el acceso a la red es lento. Después de preguntar a los empleados, el administrador de red descubrió que un empleado descargó un programa de análisis de terceros para la impresora. ¿Qué tipo de malware puede introducirse, que provoque el rendimiento lento de la red?",
        tipo: "simple",
        respuesta: [
            { text: "Gusano", correcto: true },
            { text: "Virus", correcto: false },
            { text: "Suplantación de identidad", correcto: false },
            { text: "Correo no deseado", correcto: false }
        ]
    },
        //pregunta 23
    {
        pregunta: '<img src="img4.jpg" class="img-pregunta"><br>¿Cuál de las siguientes opciones muestra el emparejamiento correcto de las direcciones IP con su tipo de clasificación?',
        tipo: "simple",
        respuesta: [
            { text: "A. Dirección de bucle invertido: 127.0.0.1 ; Dirección link-local: 198.133.219.2 ; Dirección pública: 169.254.1.5", correcto: false },
            { text: "B. Dirección pública: 240.2.6.255 ; Dirección experimental: 198.133.219.2 ; Dirección link-local: 169.254.1.5", correcto: false },
            { text: "C. Dirección de bucle invertido: 169.254.1.5 ; Dirección link-local: 127.0.0.1 ; Dirección experimental: 240.2.6.255", correcto: false },
            { text: "D. Dirección link-local: 169.254.1.5 ; Dirección de bucle invertido: 127.0.0.1 ; Dirección experimental: 240.2.6.255", correcto: true }
        ]
    },
        //pregunta 24
    {
        tipo: "multiple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img5.jpg" class="img-pregunta"><br>
            Según el resultado, ¿cuáles son las dos afirmaciones correctas sobre la conectividad de red? Elija dos opciones.
        `,
        respuesta: [
            { text: "Hay conectividad entre este dispositivo y el que se encuentra en 192.168.100.1.", correcto: true },
            { text: "El tiempo de transmisión promedio entre estos dos hosts es de 2 milisegundos.", correcto: false },
            { text: "La conectividad entre estos dos hosts admite llamadas de videoconferencia.", correcto: false },
            { text: "Hay cuatro saltos entre este dispositivo y el que se encuentra en 192.168.100.1.", correcto: true },
            { text: "Este host no tiene configurado un gateway predeterminado.", correcto: false }
        ]
    },
        //pregunta 25
    {
        pregunta: "Los usuarios informan retrasos más prolongados en la autenticación y en el acceso a los recursos de red durante determinados períodos de la semana. ¿Qué tipo de información deben revisar los ingenieros de red para descubrir si esta situación forma parte del comportamiento normal de la red?",
        tipo: "simple",
        respuesta: [
            { text: "Los registros y mensajes de syslog", correcto: false },
            { text: "Los archivos de configuración de la red", correcto: false },
            { text: "La línea de base de rendimiento de la red", correcto: true },
            { text: "El resultado de debug y las capturas de paquetes", correcto: false }
        ]
    },
        //pregunta 26
    {
        pregunta: "¿Qué dos tipos de tráfico utilizan el Protocolo de transporte en tiempo real (RTP)? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Video", correcto: true },
            { text: "transferencia de archivos", correcto: false },
            { text: "Web", correcto: false },
            { text: "Voz", correcto: true },
            { text: "Peer-to-Peer", correcto: false }
        ]
    },
    //pregunta 27
    {
        pregunta: "Un empleado descontento está usando algunas herramientas de red inalámbrica gratuitas para determinar información sobre las redes inalámbricas de la empresa. Esta persona está planeando usar esta información para hackear la red inalámbrica. ¿Qué tipo de ataque es este?",
        tipo: "simple",
        respuesta: [
            { text: "Reconocimiento", correcto: true },
            { text: "Caballo de Troya", correcto: false },
            { text: "DoS", correcto: false },
            { text: "Acceso", correcto: false }
        ]
    },
    //pregunta 28
    {
        pregunta: "¿Cuáles son los dos métodos más eficaces para defenderse del malware? (Elija dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Implementar una RAID.", correcto: false },
            { text: "Actualizar el sistema operativo y otro software de la aplicación.", correcto: true },
            { text: "Implementar una VPN.", correcto: false },
            { text: "Implementar firewalls de red.", correcto: false },
            { text: "Instalar y actualizar el software antivirus.", correcto: true },
            { text: "Implementar contraseñas seguras.", correcto: false }
        ]
    },
    //pregunta 29
    {
        pregunta: "El comando de configuración global ip default-gateway 172.16.100.1 se aplica a un switch. ¿Cuál es el efecto de este comando?",
        tipo: "simple",
        respuesta: [
            { text: "El switch puede comunicarse con otros hosts de la red 172.16.100.0.", correcto: false },
            { text: "El switch se puede administrar de forma remota desde un host en otra red.", correcto: true },
            { text: "El switch está limitado a enviar y recibir tramas desde y hacia la puerta de enlace 172.16.100.1.", correcto: false },
            { text: "El switch tendrá una interfaz de administración con la dirección 172.16.100.1.", correcto: false }
        ]
    },
    //pregunta 30
    {
        pregunta: "¿Qué sucede cuando se ingresa el comando transport input ssh en las líneas vty del switch?",
        tipo: "simple",
        respuesta: [
            { text: "El cliente SSH en el switch está habilitado.", correcto: false },
            { text: "El switch requiere una combinación de nombre de usuario/contraseña para el acceso remoto.", correcto: false },
            { text: "El switch requiere conexiones remotas a través de un software cliente propietario.", correcto: false },
            { text: "La comunicación entre el switch y los usuarios remotos está cifrada.", correcto: true }
        ]
    },
    //pregunta 31
    {
        pregunta: "¿Qué tipo de servidor se basa en tipos de registro como A, NS, AAAA y MX para proporcionar servicios?",
        tipo: "simple",
        respuesta: [
            { text: "DNS", correcto: true },
            { text: "Correo electrónico", correcto: false },
            { text: "Web", correcto: false },
            { text: "archivo", correcto: false }
        ]
    },
    //pregunta 32
    {
        pregunta: "¿Cuál de las siguientes es una ventaja de adoptar IMAP en lugar de POP para organizaciones pequeñas?",
        tipo: "simple",
        respuesta: [
            { text: "IMAP envía y recupera correo electrónico, pero POP solamente lo recupera.", correcto: false },
            { text: "Cuando el usuario se conecta a un servidor POP, se mantienen copias de los mensajes en el servidor de correo durante un tiempo breve, pero IMAP los mantiene durante un tiempo prolongado.", correcto: false },
            { text: "Los mensajes se mantienen en los servidores de correo electrónico hasta que se eliminan manualmente del cliente de correo electrónico.", correcto: true },
            { text: "POP solo permite que el cliente almacene mensajes de manera centralizada, mientras que IMAP permite el almacenamiento distribuido.", correcto: false }
        ]
    },
    //pregunta 33
    {
        pregunta: "¿Qué dos funciones se realizan en la subcapa LLC de la capa de enlace de datos OSI para facilitar la comunicación Ethernet? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "integra flujos de Capa 2 entre 10 Gigabit Ethernet sobre fibra y 1 Gigabit Ethernet sobre cobre", correcto: false },
            { text: "agrega información en la trama Ethernet que identifica cual protocolo de la capa de red esta siendo encapsulado en la trama.", correcto: true },
            { text: "implementa un trailer con secuencia de verificación de trama para la detección de errores", correcto: false },
            { text: "permite que IPv4 e IPv6 utilicen el mismo medio físico", correcto: true },
            { text: "aplica direcciones MAC de origen y destino a la trama Ethernet", correcto: false }
        ]
    },
    //pregunta 34
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img6.jpg" class="img-pregunta"><br>
            <img src="img7.jpg" class="img-pregunta"><br>
            Una la red con la dirección IP y el prefijo correctos que cumplan con los requisitos de direccionamiento de host utilizable para cada red. (No se utilizan todas las opciones).
        `,
        respuesta: [
            { text: "A: 192.168.0.0/25; B: 192.168.0.128/26; C: 192.168.0.192/27; D: 192.168.0.224/30", correcto: true },
            { text: "A: 192.168.0.0/26; B: 192.168.0.64/25; C: 192.168.0.192/27; D: 192.168.0.224/30", correcto: false },
            { text: "A: 192.168.0.0/24; B: 192.168.0.128/25; C: 192.168.0.192/26; D: 192.168.0.224/30", correcto: false },
            { text: "A: 192.168.0.0/25; B: 192.168.0.64/26; C: 192.168.0.192/27; D: 192.168.0.224/30", correcto: false }
        ]
    },
    //pregunta 35
    {
        pregunta: "¿Qué máscara de subred se necesita si una red IPv4 tiene 40 dispositivos que necesitan direcciones IP y si no se debe desperdiciar espacio de direcciones?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.192", correcto: true },
            { text: "255.255.255.224", correcto: false },
            { text: "255.255.255.128", correcto: false },
            { text: "255.255.255.240", correcto: false },
            { text: "255.255.255.0", correcto: false }
        ]
    },
    //pregunta 36
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img8.jpg" class="img-pregunta"><br>
            El administrador de red ha asignado a la LAN de LBMISS un rango de direcciones de 192.168.10.0. Este intervalo de direcciones se ha segregado utilizando un prefijo /29. Para acomodar un nuevo edificio, el técnico ha decidido utilizar la quinta subred para configurar la nueva red (la subred cero es la primera subred). Según las directivas de la empresa, a la interfaz del router siempre se le asigna la primera dirección de host utilizable y al servidor del grupo de trabajo se le asigna la última dirección de host utilizable. ¿Qué configuración se debe introducir en las propiedades del servidor de grupo de trabajo para permitir la conectividad a Internet?
        `,
        respuesta: [
            { text: "Dirección IP: 192.168.10.41 máscara de subred: 255.255.255.248, puerta de enlace predeterminada: 192.168.10.46", correcto: false },
            { text: "Dirección IP: 192.168.10.254 máscara de subred: 255.255.255.0, puerta de enlace predeterminada: 192.168.10.1", correcto: false },
            { text: "Dirección IP: 192.168.10.65 máscara de subred: 255.255.255.240, puerta de enlace predeterminada: 192.168.10.76", correcto: false },
            { text: "Dirección IP: 192.168.10.38 máscara de subred: 255.255.255.240, puerta de enlace predeterminada: 192.168.10.33", correcto: false },
            { text: "Dirección IP: 192.168.10.38 máscara de subred: 255.255.255.248, puerta de enlace predeterminada: 192.168.10.33", correcto: true }
        ]
    },
    //pregunta 37
    {
        pregunta: "¿Cuáles son dos mensajes ICMPv6 que no están presentes en ICMP para IPv4? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Solicitud de vecino", correcto: true },
            { text: "Destino inalcanzable", correcto: false },
            { text: "Anuncio de router", correcto: true },
            { text: "Confirmación de host", correcto: false },
            { text: "Redirección de ruta", correcto: false },
            { text: "Tiempo excedido", correcto: false }
        ]
    },
    //pregunta 38
    {
        pregunta: "¿Qué característica describe el software antivirus?",
        tipo: "simple",
        respuesta: [
            { text: "un protocolo de túnel que proporciona a los usuarios remotos acceso seguro a la red de una organización", correcto: false },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false },
            { text: "aplicaciones que protegen a los dispositivos finales de infectarse con software malintencionado", correcto: true },
            { text: "software en un router que filtra el tráfico basado en direcciones IP o aplicaciones", correcto: false }
        ]
    },
    //pregunta 39
    {
        pregunta: "Un usuario está ejecutando el comando tracert a un dispositivo remoto. ¿En qué momento dejaría de reenviar el paquete un router que se encuentra en la ruta hacia el dispositivo de destino?",
        tipo: "simple",
        respuesta: [
            { text: "Cuando los valores de los mensajes de solicitud de eco y de respuesta de eco llegan a cero", correcto: false },
            { text: "Cuando el valor de RTT llega a cero", correcto: false },
            { text: "Cuando el host responde con un mensaje de respuesta de eco ICMP", correcto: false },
            { text: "Cuando el valor en el campo TTL llega a cero", correcto: true },
            { text: "Cuando el router recibe un mensaje de ICMP de tiempo superado", correcto: false }
        ]
    },
    //pregunta 40
    {
        pregunta: "¿Qué servicio proporciona DNS?",
        tipo: "simple",
        respuesta: [
            { text: "Permite la transferencia de datos entre un cliente y un servidor.", correcto: false },
            { text: "Utiliza el cifrado para asegurar el intercambio de texto, imágenes gráficas, sonido y vídeo en la web.", correcto: false },
            { text: "Traduce los nombres de dominio tales como cisco.com a direcciones IP", correcto: true },
            { text: "Un Conjunto de reglas para intercambiar texto, imágenes gráficas, sonido, video y otros archivos multimedia en la World Wide Web.", correcto: false }
        ]
    },
    //pregunta 41
    {
        pregunta: "¿Por qué un switch de capa 2 necesitaría una dirección IP?",
        tipo: "simple",
        respuesta: [
            { text: "Para habilitar el switch para que envíe tramas de broadcast a las PC conectadas.", correcto: false },
            { text: "Para habilitar el switch de modo que se administre de forma remota.", correcto: true },
            { text: "Para habilitar el switch para que funcione como un gateway predeterminado.", correcto: false },
            { text: "Para habilitar el switch para que reciba tramas de las PC conectadas.", correcto: false }
        ]
    },
    //pregunta 42
    {
        pregunta: "¿Cuál de estos comandos se puede utilizar en un equipo Windows para ver la configuración IP de esa PC?",
        tipo: "simple",
        respuesta: [
            { text: "show ip interface brief", correcto: false },
            { text: "ipconfig", correcto: true },
            { text: "ping", correcto: false },
            { text: "show interfaces", correcto: false }
        ]
    },
    //pregunta 43
    {
        pregunta: "¿Qué atributo de una NIC lo colocaría en la capa de enlace de datos del modelo OSI?",
        tipo: "simple",
        respuesta: [
            { text: "Dirección MAC", correcto: true },
            { text: "Pila del protocolo TCP/IP", correcto: false },
            { text: "Puerto RJ-45", correcto: false },
            { text: "Conectar el cable de Ethernet.", correcto: false },
            { text: "Dirección IP", correcto: false }
        ]
    },
    //pregunta 44
    {
        pregunta: "¿Cual campo/sección de una trama es creado por un nodo de origen y utilizado por un nodo de destino para garantizar que una señal de datos transmitida no se ha alterado por interferencia, distorsión o pérdida de señal?",
        tipo: "simple",
        respuesta: [
            { text: "campo de verificación de errores de la capa de transporte", correcto: false },
            { text: "campo de proceso de corrección de errores", correcto: false },
            { text: "campo Protocolo de datagrama de usuario (UDP)", correcto: false },
            { text: "campo Secuencia de Verificación de la Trama (FCS)", correcto: true },
            { text: "campo de control de flujo", correcto: false }
        ]
    },
    //pregunta 45
    {
        pregunta: "¿Qué método se utiliza para administrar el acceso por contienda en una red inalámbrica?",
        tipo: "simple",
        respuesta: [
            { text: "Orden de prioridades", correcto: false },
            { text: "Paso de tokens", correcto: false },
            { text: "CSMA/CD", correcto: false },
            { text: "CSMA/CA", correcto: true }
        ]
    },
    //pregunta 46
    {
        pregunta: "¿Cuál es la ventaja de utilizar un protocolo definido por un estándar abierto?",
        tipo: "simple",
        respuesta: [
            { text: "Un protocolo de estándar abierto no está controlado ni regulado por las organizaciones de estandarización.", correcto: false },
            { text: "Fomenta la competencia y promueve las opciones.", correcto: true },
            { text: "El protocolo solamente se puede ejecutar en equipos de un proveedor específico.", correcto: false },
            { text: "Una empresa puede monopolizar el mercado.", correcto: false }
        ]
    },
    //pregunta 47
    {
        pregunta: "¿Cuáles de las siguientes son dos funciones que proporciona la capa de red? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "Proporcionar conexiones de extremo a extremo dedicadas.", correcto: false },
            { text: "Transportar datos entre los procesos que se ejecutan en los hosts de origen y destino.", correcto: false },
            { text: "Proporcionar a los dispositivos finales un identificador de red único.", correcto: true },
            { text: "Colocar datos en el medio de red.", correcto: false },
            { text: "Dirigir los paquetes de datos a los hosts de destino en otras redes.", correcto: true }
        ]
    },
    //pregunta 48
    {
        pregunta: "Durante el proceso de reenvío de tráfico, ¿qué hace el router de inmediato después de identificar la dirección IP de destino con una red en una entrada de la tabla de enrutamiento conectada directamente?",
        tipo: "simple",
        respuesta: [
            { text: "Descartar el tráfico después de consultar la tabla de la ruta.", correcto: false },
            { text: "Buscar la dirección de siguiente salto para el paquete.", correcto: false },
            { text: "Conmutar el paquete a la interfaz conectada directamente.", correcto: true },
            { text: "Analizar la dirección IP de destino.", correcto: false }
        ]
    },
    //pregunta 49
    {
        pregunta: "¿Cuáles son las dos afirmaciones correctas en una comparación de encabezados de paquetes IPv4 e IPv6? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "En IPv6, el campo Límite de saltos reemplazó al campo Tiempo de vida de IPv4.", correcto: true },
            { text: "El nombre del campo Dirección de origen del encabezado de IPv4 se mantiene en IPv6.", correcto: true },
            { text: "El campo Dirección de destino es nuevo en IPv6.", correcto: false },
            { text: "El nombre del campo Checksum del encabezado de IPv4 se mantiene en IPv6.", correcto: false },
            { text: "El campo Versión de IPv4 no se mantiene en IPv6.", correcto: false }
        ]
    },
    //pregunta 50
    {
        pregunta: "¿Cuál es el propósito de la ventana deslizante de TCP?",
        tipo: "simple",
        respuesta: [
            { text: "Finalizar la comunicación cuando se completa la transmisión de datos.", correcto: false },
            { text: "Informar a un origen que debe retransmitir datos desde un punto específico en adelante.", correcto: false },
            { text: "Solicitar a un origen que reduzca la velocidad de transferencia de datos.", correcto: true },
            { text: "Asegurar que los segmentos lleguen en orden al destino.", correcto: false }
        ]
    },
    //pregunta 51
    {
        pregunta: "¿Cuáles son las tres partes de una dirección IPv6 unicast global? (Elija tres).",
        tipo: "multiple",
        respuesta: [
            { text: "Dirección de broadcast", correcto: false },
            { text: "ID de interfaz", correcto: true },
            { text: "Máscara de subred", correcto: false },
            { text: "ID de subred", correcto: true },
            { text: "Prefijo de enrutamiento global", correcto: true }
        ]
    },
    //pregunta 52
    {
        pregunta: "¿Cuál sería el ID de interfaz, de una interfaz habilitada para IPv6 con una dirección MAC de 1C-6F-65-C2-BD-F8, cuando el ID de interfaz se genera mediante el proceso EUI-64?",
        tipo: "simple",
        respuesta: [
            { text: "1E6F:65FF:FEC2:BDF8", correcto: true },
            { text: "106F:65FF:FEC2:BDF8", correcto: false },
            { text: "0C6F:65FF:FEC2:BDF8", correcto: false },
            { text: "C16F:65FF:FEC2:BDF8", correcto: false }
        ]
    },
    //pregunta 53
    {
        pregunta: "¿Cuál de estos intervalos de direcciones link-local se puede asignar a una interfaz con IPv6 habilitado?",
        tipo: "simple",
        respuesta: [
            { text: "FF00::/8", correcto: false },
            { text: "FDEE::/7", correcto: false },
            { text: "FE80::/10", correcto: true },
            { text: "FEC0::/10", correcto: false }
        ]
    },
    //pregunta 54
    {
        pregunta: "¿Cuál de los siguiente es un beneficio del uso de la computación en la nube en las redes?",
        tipo: "simple",
        respuesta: [
            { text: "La tecnología se integra a los dispositivos que se utilizan a diario, lo que permite que se interconecten con otros dispositivos y que se vuelvan más “inteligentes” o automatizados.", correcto: false },
            { text: "Los usuarios finales tienen la libertad de utilizar herramientas personales para acceder a información y comunicarse en una red comercial.", correcto: false },
            { text: "Se extienden las funcionalidades de red sin necesidad de invertir en infraestructura, personal ni software nuevos.", correcto: true },
            { text: "Las redes domésticas utilizan el cableado eléctrico existente para conectar los dispositivos a la red donde haya un tomacorriente, lo que permite ahorrar el costo de instalación de cables de datos.", correcto: false }
        ]
    },
    //pregunta 55
    {
        pregunta: "Un administrador de red está agregando una nueva LAN a una sucursal. La nueva LAN debe admitir 4 dispositivos conectados. ¿Cuál es la máscara de red más pequeña que el administrador de red puede usar para la nueva red?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.240", correcto: false },
            { text: "255.255.255.224", correcto: false },
            { text: "255.255.255.192", correcto: false },
            { text: "255.255.255.248", correcto: true }
        ]
    },
    //pregunta 56
    {
        pregunta: "¿Cuáles son las dos afirmaciones correctas sobre direcciones MAC e IP durante la transmisión de datos si no hay NAT? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "Un paquete que cruzó cuatro routers cambió la dirección IP de destino cuatro veces.", correcto: false },
            { text: "Cada vez que una trama se encapsula con una nueva dirección MAC de destino, se necesita una nueva dirección IP de destino.", correcto: false },
            { text: "Las direcciones MAC de destino nunca cambian en una trama que atraviesa siete routers.", correcto: false },
            { text: "Las direcciones IP de destino en un encabezado del paquete se mantienen constantes a lo largo de toda la ruta a un host de destino.", correcto: true },
            { text: "Las direcciones MAC de destino y de origen tienen importancia local y cambian cada vez que una trama va de una LAN a otra", correcto: true }
        ]
    },
    //pregunta 57
    {
        tipo: "simple",
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img9.jpg" class="img-pregunta"><br>
            ¿Cuál es el problema con la terminación que se muestra?
        `,
        respuesta: [
            { text: "Los cables son demasiado gruesos para el conector que se utiliza.", correcto: false },
            { text: "La longitud de la parte sin trenzar de cada cable es demasiado larga.", correcto: true },
            { text: "No se debería haber quitado la malla de cobre tejida.", correcto: false },
            { text: "Se está utilizando el tipo de conector incorrecto.", correcto: false }
        ]
    },
    //pregunta 58
    {
        pregunta: "Un técnico con una PC está utilizando varias aplicaciones mientras está conectado a Internet. ¿Cómo hace la PC para no perder de vista el flujo de datos entre las sesiones de varias aplicaciones y para que cada una de ellas reciba los flujos de paquetes correctos?",
        tipo: "simple",
        respuesta: [
            { text: "Se realiza el seguimiento del flujo de datos según el número de puerto de origen utilizado por cada aplicación.", correcto: true },
            { text: "Se realiza el seguimiento del flujo de datos según la dirección IP de destino utilizada por la PC del técnico.", correcto: false },
            { text: "Se realiza el seguimiento del flujo de datos según la dirección MAC de destino de la PC del técnico.", correcto: false },
            { text: "Se realiza el seguimiento del flujo de datos según la dirección IP de origen utilizada por la PC del técnico.", correcto: false }
        ]
    },
    //pregunta 59
    {
        pregunta: "Tres empleados de un banco utilizan la red corporativa. El primer empleado utiliza un explorador Web para ver una página Web de la compañía con el objetivo de leer algunos anuncios. El segundo empleado accede a la base de datos corporativa para realizar algunas transacciones financieras. El tercer empleado participa en una importante conferencia de audio en vivo con otros gerentes corporativos ubicados en sucursales. Si se implementa QoS en esta red, ¿cuál será el orden de prioridad de los diversos tipos de datos, de mayor a menor importancia?",
        tipo: "simple",
        respuesta: [
            { text: "Transacciones financieras, página Web, conferencia de audio", correcto: false },
            { text: "Conferencia de audio, transacciones financieras, página Web", correcto: true },
            { text: "Conferencia de audio, página Web, transacciones financieras", correcto: false },
            { text: "Transacciones financieras, conferencia de audio, página Web", correcto: false }
        ]
    },
    //pregunta 60
    {
        pregunta: "Un técnico puede hacer ping a la dirección IP del servidor web de una empresa remota, pero no puede hacer ping correctamente a la dirección URL del mismo servidor web. ¿Qué utilidad de software puede utilizar para diagnosticar el problema?",
        tipo: "simple",
        respuesta: [
            { text: "netstat", correcto: false },
            { text: "ipconfig", correcto: false },
            { text: "tracert", correcto: false },
            { text: "nslookup", correcto: true }
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
