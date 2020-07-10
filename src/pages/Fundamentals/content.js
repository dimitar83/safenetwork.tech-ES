export default {
  title: 'Fundamentos de la red',
  desc: 'Hay ciertos conceptos que han impulsado cada etapa del diseño de la Red desde el comienzo del proyecto en 2006. Desde entonces, la comunidad SAFE ha crecido y estamos encantados de ver cuántas personas y proyectos han llegado a reconocer la importancia vital de una plataforma global, segura y privada descentralizada para el almacenamiento y la comunicación.',
  qa: {
    section: {
      title: 'La voluntad de la Red…',
      items: [
        {
          question: 'La Red permitirá a una persona crear una cuenta e iniciar sesión de forma anónima y sin intervención',
          answer: [
            'Crear una nueva cuenta e iniciar sesión en la Red nunca requerirá un tercero. Estos procesos siempre se llevarán a cabo directamente entre el Usuario y la Red. Vale la pena señalar que (por razones técnicas) la creación de cuentas puede requerir la presencia de Safecoin en la cuenta del usuario en ciertas circunstancias (si esto, por ejemplo, minimiza la posibilidad de que una entidad cree millones de nuevas cuentas para atacar la Red).'
          ]
        },
        {
          question: 'Permitie a los usuarios compartir información y mensajes de forma segura y sin control de intermediarios',
          answer: [
            'La Red SAFE nunca tendrá terceros que tengan la capacidad de leer o almacenar la información enviada por un Usuario (a menos que el Usuario lo consienta).'
          ]
        },
        {
          question: 'Permite la transferencia de Safecoin a cualquier Usuario sin costos de transacción.',
          answer: [
            'Cada Usuario podrá utilizar cualquiera de sus identidades como dirección de monedero para poder enviar y recibir Safecoin.'
          ]
        },
        {
          question: 'Permite a los usuarios crear y compartir datos de forma anónima en todo el mundo',
          answer: [
            'La Red siempre se asegurará de que el Usuario tenga la capacidad de enviar mensajes y publicaciones de transacciones con una identidad temporal descartable que no estará vinculada a ninguna otra identidad conocida en la Red.'
          ]
        },
        {
          question: 'Permite a cualquier persona navegar por el contenido de forma anónima y gratuita',
          answer: [
            'Es crucial que la nueva web descentralizada no tenga barreras. Una de las bases más importantes para una plataforma global y colaborativa es que cualquier persona puede acceder a contenido público de forma gratuita en cualquier momento sin necesidad de crear una cuenta.'
          ]
        },
        {
          question: 'Permitir a los usuarios asociar varias identidades a su cuenta',
          answer: [
            'Cada cuenta de cliente administra información sobre el usuario que incluirá varias identidades. Es posible que estas identidades sean pares de claves criptográficas.'
          ]
        },
        {
          question: 'Permitie a los usuarios utilizar cualquiera de sus identidades para enviar / recibir Safecoin',
          answer: [
            'Cada individuo debe ser capaz de utilizar cualquiera de sus identidades como una dirección de cartera con el fin de ser capaz de enviar y recibir Safecoin.'
          ]
        },
        {
          question: 'Almacenar datos a perpetuidad',
          answer: [
            'Todos los datos públicos/publicados en la Red serán inmutables y estarán disponibles en la Red a perpetuidad. De la misma manera que el Archivo de Internet almacena versiones del sitio web que se publicaron con errores, será imposible eliminar cualquier dato de la Red después de que se haya cargado. Eso no significa que no podrá cambiar los datos - usted será capaz de anexar cambios, es decir, versiones históricas anteriores de los datos siempre permanecerán almacenados en la red (ya sea que sean accesibles o no).'
          ]
        },
        {
          question: 'Nunca exije que las contraseñas se almacenen en la Red o en las máquinas utilizadas por los Clientes para acceder a la Red',
          answer: [
            'La red en sí nunca contendrá contraseñas, ya que esta es una causa común de pérdida de datos. En su lugar, un usuario sólo tendrá que introducir una contraseña localmente en el dispositivo que utiliza para acceder a la red.'
          ]
        },
        {
          question: 'Permite que cualquier Usuario, en cualquier máquina, acceda a la red, pero que no quede rastro de ese Usuario en la máquina',
          answer: [
            'En última instancia, la Red debe ser accesible para cualquier Usuario en cualquier dispositivo. Cuando ese usuario cierra sesión en la red y sale de esa máquina, no debe haber ninguna evidencia (excepto cualquier software descargado para acceder a la red, como el navegador) que muestre qué actividad emprendió el usuario en la SAFE Network.'
          ]
        },
        {
          question: 'Limpa todas las direcciones IP del cliente desde el Salto 1 de la red de superposición (es decir, en SAFE)',
          answer: [
            'Después de que un usuario haya comenzado a comunicarse directamente con cualquier otra persona,luego de conectarse con el primer nodo de red SAFE, la dirección IP del usuario se elimina y es imposible de seguir. Para ser mas claros, estamos utilizando la frase ‘Salto 1’ para referirse a la transferencia directa después de esa conexión al primer nodo safenetwork (no el salto que puede tener lugar desde su computadora a su router WiFi doméstico, por ejemplo).'
          ]
        },
        {
          question: 'Solo acepta más almacenes cuando las necesite',
          answer: [
            'Como cualquier especie o grupo de organismos, el crecimiento sin límites conduce al colapso. La red SAFE podría ser atacada por un mal actor simplemente agregando millones de nodos y luego cerrándolos (o peor). Para evitar esto, la red solo permitirá que nuevos nodos se unan cuando los necesite. Esto muy bien ralentiza a cualquier atacante y los diluye con buenos actores también tratando de unirse. A continuación, la Red puede equilibrar la oferta y la demanda a su antojo en lugar de depender de controles externos.'
          ]
        },
        {
          question: 'Aumenta las recompensas agrícolas cuando se necesitan más recursos (Bóvedas) y disminuye las recompensas cuando los recursos son abundantes',
          answer: [
            'Si la red simplemente acepta cualquier almacén que quisiera unirse, es probable que sea el objetivo de un ataque de botnet o que un atacante intente configurar un número abrumador de nodos malintencionados, al momento del lanzamiento, cuando la red es pequeña. La red debe ser capaz de equilibrar este suministro de Bóvedas para evitar que haya un gran número de nodos que tienen muy pocos datos, ya que esto empujaría las tasas de cultivo hacia abajo.'
          ]
        },
        {
          question: 'Clasificar nodos a lo largo del tiempo y aumentar la confianza en nodos de mayor clasificación',
          answer: [
            'Una parte esencial del Envejecimiento de Nodos (una de las formas en que la red SAFE previene los ataques Sybil) proviene del hecho de que la red solo permite a los nodos más confiables dentro los grupos más cercanos votar sobre las decisiones en la red.'
          ]
        },
        {
          question: 'No tener servidores',
          answer: [
            'La red SAFE nunca se basará en servidores (como el término se entiende tradicionalmente) ya que ésto introduce una debilidad hacia terceros que socava toda la red.'
          ]
        },
        {
          question: 'Firme digitalmente todas las transacciones',
          answer: [
            'Al firmar todas las transacciones digitalmente, la Red puede garantizar que las transacciones han sido autorizadas de acuerdo con las normas de la Red.'
          ]
        },
        {
          question: 'Asegúrese de que los mensajes directos de cliente a cliente sean gratuitos. Sin embargo, se cobrará por los mensajes de cliente a cliente que impliquen recorrido a través de la SAFE Network',
          answer: [
            'Los clientes son programas de software que permiten a los usuarios conectarse a la red SAFE. Nunca habrá un cargo cobrado por la Red si los mensajes se envían directamente entre dos Clientes. Sin embargo, los mensajes indirectos que se envíen entre clientes a través de la Red conllevarán un costo.'
          ]
        },
        {
          question: 'Nunca utilice el tiempo como herramienta de red (aunque los nodos pueden utilizar duraciones locales)',
          answer: [
            'No hay ningún concepto de tiempo en una red descentralizada como SAFE, a menos que llegue a servidores y servicios centralizados. SAFE utiliza un paradigma completamente basado en eventos para eludir la necesidad de intentar sincronizar y luego a utilizar períodos de tiempo como herramientas válidas en la red. Estos períodos requieren números mágicos que tendrían que ser establecidos por los desarrolladores y esto es algo que la Red evita con rigor.'
          ]
        },
        {
          question: 'Solo utilice servicios cifrados y tráfico cifrado',
          answer: [
            'Los servicios o el tráfico deben cifrarse si van a ser utilizados por la SAFE Network.'
          ]
        },
        {
          question: 'Permita actualizaciones en tiempo real de una manera segura (es decir, la red rechazará las actualizaciones que podrían romperla)',
          answer: [
            'La red debe ser capaz de implementar mejoras que sean compatibles con al menos la versión anterior del software de red, con el fin de garantizar que la nueva iteración es una mejora en la práctica. Como esto requiere un esfuerzo significativo, cada nodo puede ejecutar actualizaciones en paralelo al código de trabajo existente antes de actualizar.'
          ]
        },
      ]
    }
  },
  safecoin: {
    title: 'Safecoin',
    lists: [
      {
        name: 'A.',
        para: 'Safecoin es el mecanismo de incentivación único integrado en la red SAFE. Todas las Safecoins se reciclan cuando se pagan a la Red a cambio de recursos. En el lanzamiento, Safecoin se distribuirá de la siguiente manera: (1) Paga a los creadores de la Red (accionistas de MaidSafe) 5% del total de Safecoin; (2) Paga a los inversores de crowdsale 2014 de la Red 10% del total de Safecoin.'
      },
      {
        name: 'B.',
        para: 'Safecoin se distribuirá de forma continua: (1) Paga a las Bóvedas por proporcionar servicio (85% de las recompensas); (2) Paga a los desarrolladores que producen aplicaciones que las personas usan (10% de las recompensas); (3) Paga a los mantenedores del código de red (5% de las recompensas)'
      },
    ],
    notes: {
      title: 'Nota:',
      para: 'Mientras que la explicación anterior es una aproximación útil de la división, las recompensas se ajustarán dinámicamente de acuerdo con la tasa de cultivo determinada por la Red:',
      points: [
        'Los agricultores que manejan las bóvedas tienen un pago del 100% de la tasa de cultivo para todos los GET de la red. Es decir, el 86,95% (100/115) de todas las recompensas.',
        'A los desarrolladores de aplicaciones se les paga al 10% de la tasa de agricultura para todos los GET de la red (que se relacionan con sus aplicaciones). Es decir, 8.695% (10/115) de todas las recompensas.',
        'A los desarrolladores mantenedores se les paga al 5% de la tasa de agricultura para todos los GET de la Red. Es decir, 4.348% (5/115) de todas las recompensas.'
      ]
    }
  }
}
