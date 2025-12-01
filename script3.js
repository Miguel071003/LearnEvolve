// =====================
//  PREGUNTAS
// =====================
const preguntas = [
    //pregunta 1
    {
        pregunta: "¿Cuáles de las siguientes son dos características que comparten TCP y UDP? (Elija dos opciones.)",
        tipo: "multiple",
        respuesta: [
            { text: "Numeración de puertos", correcto: true },
            { text: "Capacidad de transportar voz digitalizada", correcto: false },
            { text: "Tamaño predeterminado de la ventana", correcto: false },
            { text: "Uso de checksum", correcto: true },
            { text: "Comunicación sin conexión", correcto: false },
            { text: "Protocolo de enlace de tres vías", correcto: false }
        ]
    },
    //pregunta 2
    {
        pregunta: "¿Qué mecanismo utiliza un router para evitar que un paquete IPv4 recibido viaje interminablemente en una red?",
        tipo: "simple",
        respuesta: [
            { text: "Comprueba el valor del campo TTL y, si es 100, descarta el paquete y envía un mensaje Destination Unreachable al host de origen.", correcto: false },
            { text: "Comprueba el valor del campo TTL y, si es 0, descarta el paquete y envía un mensaje Destination Unreachable al host de origen.", correcto: false },
            { text: "Reduce el valor del campo TTL en 1 y si el resultado es 0, descarta el paquete y envía un mensaje de Tiempo excedido al host de origen.", correcto: true },
            { text: "Incrementa el valor del campo TTL en 1 y si el resultado es 100, descarta el paquete y envía un mensaje de problema de parámetro al host de origen.", correcto: false }
        ]
    },
    //pregunta 5
    {
        tipo: "simple",
        pregunta: `
            Observe la ilustración.<br>
            <img src="img19.jpg" style="width:500px; margin:10px 0;"><br>
            ¿Cual es la dirección IP se debe utilizar como puerta de enlace predeterminada del host H1?
        `,
        respuesta: [
            { text: "R1: G0/0", correcto: true },
            { text: "R1: S0/0/0", correcto: false },
            { text: "R2: S0/0/1", correcto: false },
            { text: "R2: S0/0/0", correcto: false }
        ]
    },
    //pregunta 6
    {
        pregunta: "Un administrador de red está agregando una nueva LAN a una sucursal. La nueva LAN debe admitir 90 dispositivos conectados. ¿Cuál es la máscara de red más pequeña que el administrador de red puede usar para la nueva red?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.248", correcto: false },
            { text: "255.255.255.240", correcto: false },
            { text: "255.255.255.224", correcto: false },
            { text: "255.255.255.128", correcto: true }
        ]
    },
    //pregunta 7
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 53. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "Telnet", correcto: false },
            { text: "FTP", correcto: false },
            { text: "SSH", correcto: false },
            { text: "DNS", correcto: true }
        ]
    },
    //pregunta 8
    {
        pregunta: "¿Cuáles son las dos soluciones de seguridad más probables que se utilizan solo en un entorno corporativo? (Escoja dos opciones).",
        tipo: "multiple",
        respuesta: [
            { text: "Sistemas de prevención de intrusiones", correcto: true },
            { text: "antispyware", correcto: false },
            { text: "Software antivirus", correcto: false },
            { text: "contraseñas seguras", correcto: false },
            { text: "Redes privadas virtuales", correcto: true }
        ]
    },
    //pregunta 9
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 110. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "DHCP", correcto: false },
            { text: "DNS", correcto: false },
            { text: "POP3", correcto: true },
            { text: "SMTP", correcto: false }
        ]
    },
    //pregunta 10
    {
        pregunta: "¿Cuáles son los dos datos que se muestran en el resultado del comando show ip interface brief? (Elija dos).",
        tipo: "multiple",
        respuesta: [
            { text: "direcciones IP", correcto: true },
            { text: "Configuración de velocidad y dúplex", correcto: false },
            { text: "Direcciones de siguiente salto", correcto: false },
            { text: "Estados de la capa 1", correcto: true },
            { text: "direcciones MAC", correcto: false },
            { text: "Descripción de las interfaces", correcto: false }
        ]
    },
    //pregunta 11
    {
        pregunta: "¿Qué servicio proporciona HTTP?",
        tipo: "simple",
        respuesta: [
            { text: "Un Conjunto de reglas para intercambiar texto, imágenes gráficas, sonido, video y otros archivos multimedia en la World Wide Web.", correcto: true },
            { text: "Una aplicación que permite chatear en tiempo real entre usuarios remotos.", correcto: false },
            { text: "Utiliza el cifrado para asegurar el intercambio de texto, imágenes gráficas, sonido y vídeo en la web.", correcto: false },
            { text: "Permite la transferencia de datos entre un cliente y un servidor.", correcto: false }
        ]
    },
    //pregunta 12
    {
        pregunta: "Un administrador de red está agregando una nueva LAN a una sucursal. La nueva LAN debe admitir 25 dispositivos conectados. ¿Cuál es la máscara de red más pequeña que el administrador de red puede usar para la nueva red?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.240", correcto: false },
            { text: "255.255.255.128", correcto: false },
            { text: "255.255.255.224", correcto: true },
            { text: "255.255.255.192", correcto: false }
        ]
    },
    //pregunta 13
    {
        pregunta: "Un administrador de red está agregando una nueva LAN a una sucursal. La nueva LAN debe admitir 10 dispositivos conectados. ¿Cuál es la máscara de red más pequeña que el administrador de red puede usar para la nueva red?",
        tipo: "simple",
        respuesta: [
            { text: "255.255.255.240", correcto: true },
            { text: "255.255.255.128", correcto: false },
            { text: "255.255.255.224", correcto: false },
            { text: "255.255.255.192", correcto: false }
        ]
    },
    //pregunta 14
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 67. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "simple",
        respuesta: [
            { text: "FTP", correcto: false },
            { text: "DHCP", correcto: true },
            { text: "SSH", correcto: false },
            { text: "Telnet", correcto: false }
        ]
    },
    //pregunta 15
    {
        pregunta: "Un técnico ha capturado paquetes en una red que se ejecuta lentamente en el acceso a Internet. ¿Qué número de puerto debe buscar el técnico en el material capturado para ubicar los paquetes HTTP?",
        tipo: "simple",
        respuesta: [
            { text: "110", correcto: false },
            { text: "80", correcto: true },
            { text: "20", correcto: false },
            { text: "21", correcto: false },
            { text: "53", correcto: false }
        ]
    },
    //pregunta 16
    {
        pregunta: "¿Qué característica describe el antispyware?",
        tipo: "simple",
        respuesta: [
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false },
            { text: "aplicaciones que protegen a los dispositivos finales de infectarse con software malintencionado", correcto: true },
            { text: "software en un router que filtra el tráfico basado en direcciones IP o aplicaciones", correcto: false },
            { text: "un protocolo de túnel que proporciona a los usuarios remotos acceso seguro a la red de una organización", correcto: false }
        ]
    },
    //pregunta 17
    {
        pregunta: "Se ha agregado un grupo de PC con Windows en una nueva subred a una red Ethernet. Al probar la conectividad, un técnico descubre que estas PC pueden acceder a los recursos de la red local pero no a los recursos de Internet. Para solucionar el problema, el técnico desea confirmar inicialmente la dirección IP y las configuraciones de DNS en las PC, y también verificar la conectividad al enrutador local. ¿Qué tres comandos y utilidades de la CLI de Windows proporcionarán la información necesaria? (Elija tres).",
        tipo: "multiple",
        respuesta: [
            { text: "interfaz netsh ipv6 show vecino", correcto: false },
            { text: "arp -a", correcto: false },
            { text: "tracert", correcto: false },
            { text: "ping", correcto: true },
            { text: "ipconfig", correcto: true },
            { text: "nslookup", correcto: true },
            { text: "telnet", correcto: false }
        ]
    },
    //pregunta 18
    {
        pregunta: "¿Qué característica describe el software espía?",
        tipo: "simple",
        respuesta: [
            { text: "un dispositivo de red que filtra el acceso y el tráfico que ingresa a una red", correcto: false },
            { text: "software que se instala en el dispositivo de un usuario y recopila información sobre el usuario", correcto: false },
            { text: "un ataque que ralentiza o bloquea un dispositivo o servicio de red", correcto: true },
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: false }
        ]
    },
        //pregunta 19
    {
        pregunta: "¿Qué característica describe un caballo de Troya?",
        tipo: "multiple",
        respuesta: [
            { text: "un dispositivo de red que filtra el acceso y el tráfico que entra en una red", correcto: false },
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: false },
            { text: "software malintencionado o código que se ejecuta en un dispositivo final", correcto: true },
            { text: "un ataque que ralentiza o bloquea un dispositivo o servicio de red", correcto: false }
        ]
    },
        //pregunta 20
    {
        pregunta: "¿Qué característica describe un ataque DoS?",
        tipo: "multiple",
        respuesta: [
            { text: "el uso de credenciales robadas para acceder a datos privados", correcto: false },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que ingresa a una red", correcto: false },
            { text: "software que está instalado en el dispositivo de un usuario y recopila información sobre el usuario", correcto: false },
            { text: "un ataque que ralentiza o bloquea un dispositivo o servicio de red", correcto: true }
        ]
    },
        //pregunta 21
    {
        pregunta: "¿Qué característica describe un IPS?",
        tipo: "multiple",
        respuesta: [
            { text: "un protocolo de tunelización que proporciona a los usuarios remotos un acceso seguro a la red de una organización", correcto: false },
            { text: "un dispositivo de red que filtra el acceso y el tráfico que ingresa a una red", correcto: false },
            { text: "software que identifica amenazas de rápida propagación", correcto: true },
            { text: "software en un router que filtra el tráfico según las direcciones IP o las aplicaciones", correcto: false }
        ]
    },
    //pregunta 22
    {
        pregunta: `
            Consulte la ilustración.<br>
            <img src="img20.png" style="width:500px; margin:10px 0;"><br>
            Los switches tienen una configuración predeterminada. El host A necesita comunicarse con el host D, pero el host A no tiene la dirección MAC de la gateway predeterminado. ¿Qué dispositivos de red recibirán la solicitud ARP enviada por el host A?
        `,
        tipo: "multiple",
        respuesta: [
            { text: "solo host D", correcto: false },
            { text: "solo hosts A, B, C y D", correcto: false },
            { text: "solo hosts B y C", correcto: false },
            { text: "solo hosts B, C y enrutador R1", correcto: true },
            { text: "solo hosts A, B y C", correcto: false },
            { text: "solo enrutador R1", correcto: false }
        ]
    },
    //pregunta 23
    {
        pregunta: "¿Qué tecnología inalámbrica tiene requisitos de baja potencia y baja velocidad de datos que la hacen popular en entornos de IoT?",
        tipo: "multiple",
        respuesta: [
            { text: "Bluetooth", correcto: false },
            { text: "Zigbee", correcto: true },
            { text: "WiMAX", correcto: false },
            { text: "Wi-Fi", correcto: false }
        ]
    },
    //pregunta 24
    {
        pregunta: "¿Qué servicio proporciona HTTPS?",
        tipo: "multiple",
        respuesta: [
            { text: "Utiliza el cifrado para proporcionar acceso remoto seguro a los dispositivos y servidores de red.", correcto: false },
            { text: "Traduce los nombres de dominio tales como cisco.com a direcciones IP", correcto: false },
            { text: "Permite el acceso remoto a dispositivos de red y servidores.", correcto: false },
            { text: "Utiliza el cifrado para asegurar el intercambio de texto, imágenes gráficas, sonido y vídeo en la web.", correcto: true }
        ]
    },
    //pregunta 25
    {
        pregunta: "¿En qué capa OSI se agrega una dirección IP de origen a una PDU durante el proceso de encapsulación?",
        tipo: "multiple",
        respuesta: [
            { text: "Capa de enlace de datos", correcto: false },
            { text: "Capa de transporte", correcto: false },
            { text: "Capa de red", correcto: true },
            { text: "Capa de aplicación", correcto: false }
        ]
    },
    //pregunta 26
    {
        pregunta: "¿Qué paso en el proceso de enrutamiento del estado del vínculo es descrito por un router que ejecuta un algoritmo para determinar la mejor ruta a cada destino?",
        tipo: "multiple",
        respuesta: [
            { text: "seleccionando la ID del enrutador", correcto: false },
            { text: "Ejecucuta el algoritmo SPF", correcto: true },
            { text: "construye la tabla de topología", correcto: false },
            { text: "declarando que un vecino es inaccesible", correcto: false }
        ]
    },
    //pregunta 27
    {
        pregunta: "¿Qué banda de RF inalámbrica utilizan los dispositivos IEEE 802.11b/g?",
        tipo: "multiple",
        respuesta: [
            { text: "Banda de 60 GHz", correcto: false },
            { text: "5 GHz", correcto: false },
            { text: "900 MHz", correcto: false },
            { text: "2.4 GHz", correcto: true }
        ]
    },
    //pregunta 28
    {
        pregunta: "Un servidor recibe un paquete del cliente. El paquete tiene el número de puerto de destino 548. ¿Qué aplicación de servicio solicita el cliente?",
        tipo: "multiple",
        respuesta: [
            { text: "AFP", correcto: true },
            { text: "HTTP", correcto: false },
            { text: "TFTP", correcto: false },
            { text: "POP3", correcto: false }
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
