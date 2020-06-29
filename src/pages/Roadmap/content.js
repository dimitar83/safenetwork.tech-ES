export default {
  banner: {
    pageTitle: 'La Red ~~Im~~Possible',
    pageDesc: `14 años de investigación y desarrollo se está materializando a medida que unimos los ultimos bloques de construcción de lo que algunos dijeron que era imposible: Acceso seguro para todos.`,
    latestUpdate: {
      overline: 'ULTIMA ACTUALIZACIÓN',
      date: '29 Agosto 2019',
      title: 'Bóveda Fase 1',
      para: `La última pieza del rompecabezas está completa y ahora tenemos la CLI SEGURO, LIBS de Cliente SEGURO, Bóveda SEGURA y Navegador SEGURO.`,
       CTA: {
         name: 'Foro de SAFE Network',
         url: 'https://safenetforum.org/t/safe-network-dev-update-march-26-2020/31360'
       }
    }
  },
  subscribe: {
    title: 'Suscribase para recibir datos actuales:'
  },
  releases: {
    release1: {
      overline: 'VIVIR AHORA',
      title: 'Phase 1 Bóvedas',
      para:[
        `Esta versión de Phase 1 bóveda es principalmente para mostrar las características de red a los consumidores (personas que usan la red para navegar, compartir datos, etc.) y creadores (desarrolladores o aquellos que publican contenido). Permite a los usuarios probar características como SAFE CLI y SAFE Client Libs, así como introducir los nuevos tipos de datos.`,
        'Es fácil de usar. Sólo tiene que descargar un binario de bóveda que se ejecutará localmente en su ordenador. Los detalles y enlaces se encuentran en esta publicación del foro.'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },
    release2: {
      overline: 'PRÓXIMO HITO',
      title: 'SAFE Fleming Network',
      para: ['El siguiente hito importante para SAFE Network. Aunque la red de almacenes compartidos seguirá funcionando, se tratará de una red independiente que permitirá a las personas ejecutar bóvedas - almacenamiento descentralizado desde ordenadores domésticos. El lanzamiento de Fleming será notable por muchas razones, entre ellas el hecho de que con el almacenamiento de datos, la red ahora también contar con Test Safecoin.'],
      accordion: {
        header: [
          'Característica Fleming',
          'Descripción',
          'Estado'
        ],
        items: [
          {
            feature: 'Autoautenticación',
            desc: 'La capacidad de iniciar sesión en una red descentralizada sin el permiso o la existencia de un tercero',
            status: 'Completo',
            para: [
              'MaidSafe inventó la tecnología que permite a alguien iniciar sesión en una red descentralizada de forma segura sin necesidad de la participación de un tercero. La red de bóveda compartida es el único lugar en el mundo hoy en día que puede ver esto en acción.'
            ],
            // CTA: {
            //   name: 'Leer más',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
          }, {
            feature: 'Autocifrado',
            desc: 'Los datos se cifran en su ordenador antes de ser almacenados en la red: ninguna clave o contraseña nunca sale de su máquina',
            status: 'Completo',
            para: [
              'Inventado por MaidSafe, este es el proceso por el cual cualquier archivo que se almacenará en la red es primero dividido en fragmentos, hasheado, y luego cifrado. Estos fragmentos se cifran a sí mismos mediante el hash de otro fragmento del mismo archivo.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Autocifrado explicado'
            }
          }, {
            feature: 'Secciones desarticuladas',
            desc: 'También conocidas como Partición, esto permite que la red se escale dividiendo las responsabilidades de funciones de red específicas.',
            status: 'Completo',
            para: [
              'Garantiza que la Red pueda escalar gestionando las responsabilidades y ubicaciones de cada nodo sin necesidad de intervención humana. Esto también actúa como una medida de seguridad para garantizar que un atacante no puede elegir su ubicación o responsabilidades.'
            ],
            CTA: {
              name: 'Leer más',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Retransmisión de mensajes',
            desc: 'Garantiza que se puede enviar un mensaje entre nodos en diferentes Secciones desarticuladas',
            status: 'Completo',
            para: [
              'Garantiza que se puede enviar un mensaje entre nodos en diferentes Secciones desarticuladas. En esta iteración temprana, cada mensaje contiene firmas de los miembros de las Secciones desarticuladas, pero aún no verifica las firmas en sí.'
            ],
          },
          {
            feature: 'PARSEC',
            desc: 'Algoritmo de consenso asincrónico',
            status: 'Completo',
            para: [
              'Garantiza que una red global descentralizada y sin permiso puede llegar a un acuerdo sobre los eventos permitidos y el orden en que se van a registrar. Un algoritmo basado en DAG que alcanza el más alto estándar de seguridad posibile, inventado por MaidSafe de tal manera que asegura que es matemáticamente seguro que cada parte de la Red alcanzará un acuerdo final. En Fleming, lanzaremos una versión altamente asincrónica de PARSEC.'
            ],
            CTA: {
              name: 'Leer más',
              url: 'https://hub.safedev.org/parsec/'
            },
          }, {
            feature: 'Envejecimiento de nodo',
            desc: 'Un sistema descentralizado para clasificar el comportamiento, el rendimiento y las capacidades de los nodos de la Red que no requiere intervención humana.',
            status: 'Completo',
            para: [
              'La propia red da a cada nodo de SAFE Network una edad. La edad del nodo aumenta cada vez que un nodo se mueve entre las Secciones Desarticuladas, con solo los mayores con derecho a voto durante el algoritmo de consenso DE PARSEC.',
              'Profundice en los detalles en el RFC y [únase a la discusión](https://forum.safedev.org/t/rfc-45-node-ageing/157) en el foro.'
            ],
            CTA: {
              name: 'Lea el RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Entrega Segura de Mensajes',
            desc: 'Comunicación de confianza entre nodos - mensajes con origen autenticado',
            status: 'Completo',
            para: [
              'Garantiza que los mensajes se envían y se firman de tal manera que permite a los nodos confiar en el contenido de cada mensaje a pesar de no tener ninguna relación previa con el remitente. Esto resuelve un problema que enfrentan muchos proyectos basados en cadena de bloques existentes y es esencial al tener una red que moverá nodos de forma autónoma según sea necesario.'
            ],
            CTA: {
              name: 'Lea el RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Entrega Confiable de Mensajes',
            desc: 'Comunicación que garantiza la entrega exitosa de mensajes.',
            status: 'Completo',
            para: [
              'Garantiza que todos los mensajes enviados se entregarán correctamente a sus destinos, incluso cuando algunos nodos responsables de la entrega están fallando.'
            ],
            CTA: {
              name: 'Lea el RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'El lenguaje de bajo nivel que los usuarios que se conectan a SAFE utilizarán para todas las comunicaciones de red',
            status: 'Completo',
            para: [
              'Software que permite a los equipos comunicarse de forma cifrada en SAFE Network. El software proporciona la infraestructura para que los mensajes viajen, mientras que la capa de enrutamiento de la red establece las reglas sobre las direcciones en las que pueden viajar esos mensajes.'
            ],
          }, {
            feature: 'Detección de malicia',
            desc: 'Evitar nodos maliciosos que subverten el algoritmo de consenso, PARSEC',
            status: 'Completo',
            para: [
              'La forma en que los nodos identifican los nodos malintencionados que están dañando la Red dentro de una Sección Desarticulada y el mecanismo por el cual aceptan expulsar ese nodo o mitigar el riesgo.'
            ],
            CTA: {
              name: 'Lea el RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Prueba Safecoin & Monedero',
            desc: 'Permita a la Red cargar, y un usuario enviar y recibir pagos en una billetera, en unidades llamadas Test Safecoins',
            status: 'Completo',
            para: [
              'Safecoin es el mecanismo de incentivos que alienta a las personas a proporcionar los recursos informáticos que la Red requiere: almacenamiento, banda ancha y recursos de CPU.',
            ]
          }, {
            feature: 'Agricultura',
            desc: 'El proceso de proporcionar recursos y recibir Safecoin a cambio',
            status: 'Desarrollo',
            para: [
              'Las personas que eligen suministrar los recursos que la Red requiere, tienen la oportunidad de ser recompensadas con Safecoin. Este trabajo garantiza que la Red premia a quienes le proporcionan recursos valiosos.',
            ],
          }, {
            feature: 'Bóvedas desde casa',
            desc: 'La capacidad de cualquier persona para descargar software y ejecutar Vaults desde casa, creando almacenamiento descentralizado para la red',
            status: 'Desarrollo',
            para: [
              'El almacenamiento de datos descentralizado es un elemento clave de SAFE Network. Esta versión permitirá a los nodos participar independientemente de los recursos que ofrezcan.'
            ],
          }, {
            feature: 'Tipos de datos publicados y no publicados',
            desc: 'Permitir que la red almacene datos publicados y no publicados a través de los tipos AppendOnlyData o MutableData',
            status: 'Completo',
            para: [
              'Los datos publicados se refieren al contenido que se publica (se pone a disposición) para todos, como sitios web, blogs o artículos de investigación. Para este tipo de contenido público, se hace importante conservar un historial de cambios. No se debe permitir que el historial sea manipulado y los datos publicados deben permanecer para siempre. Los datos no publicados no deberían ser públicos, como datos personales o datos de organizaciones almacenados en la red'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Tipo de datos InmutableData no publicado',
            desc: 'Mejore ImmutableData para que no se publique o si se publique, con la diferencia de que no se puede eliminar',
            status: 'Completo',
            para: [
              'En muchas ocaciones, el usuario necesitará crear datos inmutables para almacenar contenido privado. Mientras este contenido no se publique (puesto a disposición de otros), solo el propietario de los datos podrá eliminarlo.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'Lo que sigue',
      title: 'SAFE Maxwell Network',
      para: ['El lanzamiento de SAFE Maxwell se basa en Fleming y permite a la red actualizar, mejorar la seguridad y establecer el trabajo de tierra para cambiar la prueba SAFE Coin a SAFEcoin real.'],
      accordion: {
        header: [
          'Característica Maxwell',
          'Descripción',
          'Estado'
        ],
        items: [
          {
            feature: 'Manejo de Spam',
            desc: 'Capacidad para manejar ataques de spam',
            status: 'Concepto',
            para: [
              'El spam incluye nodos que intentan llevar a cabo actividades que no deberían o actividades válidas a una escala destinada a ahogar la red. La red debe ser capaz de soportar un volumen razonable de tales ataques.'
            ],
          }, {
            feature: 'Gestión de identidades',
            desc: 'Capacidad para que los usuarios creen y administren múltiples identidades para su uso en la red',
            status: 'Concepto',
            para: [
              'Los usuarios podrán crear varias identidades en la red. Cada identidad se puede utilizar según lo requiera el Usuario y cada una debe ser independiente a menos que el Usuario desee conectarlas explícitamente. Esto ayuda a proteger la identidad y la privacidad.'
            ],
          },
          {
            feature: 'Actualizaciones',
            desc: 'La capacidad de la Red de actualizarse a sí misma, sin consecuencias',
            status: 'Concepto',
            para: [
              'La Red tendrá la capacidad de actualizarse a sí misma con el fin de permitir que las características y mejoras se difundan a través de la Red. Las actualizaciones deben hacerse de tal manera que no causen daño a ella.',
              'Esta es una etapa importante en la evolución de la red, ya que significa que el nuevo software puede continuar siendo desplegado en la red existente sin interrumpir la funcionalidad existente.'
            ],
            CTA: {
              name: 'Sigue la discusión',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Próximamente',
      title: 'Próximas características de red',
      para: ['La siguiente lista representa el trabajo de red que queda por completar. El orden del trabajo no es fijo como en ciertos casos, sino que será llevado a cabo en paralelo por diferentes equipos.'],
      accordion: {
        header: [
          'Característica',
          'Descripción',
          'Estado'
        ],
        items: [
          {
            feature: 'Enclaves seguros',
            desc: 'Un entorno ejecutable de confianza dentro de los ordenadores existentes',
            status: 'Concepto',
            para: [
              'Crea un área dentro del hardware de un equipo que es un entorno seguro y de confianza, pues se encuentra separado del resto del equipo. Funciona como un mini-ordenador, dentro de los ordenadores existentes, que no se puede abrir.'
            ],
          }, {
            feature: 'Crecimiento de la red',
            desc: 'Permita que la red crezca y se escale de manera sostenible',
            status: 'Concepto',
            para: [
              'La red permite un crecimiento controlado para garantizar que la mayoría de los responsables de la toma de decisiones sean nodos sanos que siguen las reglas de la red. Este crecimiento será sostenible para evitar fusiones innecesarias entre secciones.'
            ],
          }, {
            feature: 'Reinicios de red',
            desc: 'Capacidad para que la red se reinicie después de una catástrofe',
            status: 'Concepto',
            para: [
              'En caso de una interrupción catastrófica, la Red debe ser capaz de reconstruirse a sí misma, ya que mantiene la integridad de los datos esenciales (como el historial de la cadena) que le permite comenzar a funcionar de nuevo sobre la base del último estado conocido de la red.'
            ],
          }, {
            feature: 'Soporte de RDF',
            desc: 'La Red tendrá soporte nativo para RDF, lo que permitirá que los datos sean compatibles con la Red Semántica',
            status: 'RFC',
            para: [
              'Garantiza que los datos de SAFE Network se almacenen de manera que el formato pueda ser entendido por otros proyectos Web semánticos, como Solid.'
            ],
            CTA: {
              name: 'Lea el RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Ofuscación los datos almacenados',
            desc: 'Todos los datos almacenados en la bóveda del ordenador de un individuo estarán completamente encriptados e ilegibles',
            status: 'Concepto',
            para: [
              'Garantiza que incluso la parte más pequeña de los datos guardados en un almacén no pueda ser leída por la persona que controla el equipo en el que se almacena.'
            ],
          }, {
            feature: 'Moneda común',
            desc: 'Reemplace nuestra moneda físoca con una moneda común para hacer que PARSEC sea totalmente asíncrono',
            status: 'Diseño',
            para: [
              'Moneda común es un dispositivo que los nodos pueden utilizar para generar un valor binario “aleatorio” (verdadero o falso). Cada vez que un nodo voltea la moneda, todos los demás nodos están garantizados para mantener el mismo valor. Además, el valor será impredecible, lo que significa que ningún nodo malintencionado puede conocer el resultado antes de que un nodo honesto lo haya observado.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Aplicaciones y experiencia de usuario',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'La última versión incluye algunos de los comienzos de la Web Perpetua, así como el Authenticator: le permite iniciar sesión de forma segura en SAFE Network y administrar el acceso y los permisos de las aplicaciones SAFE.',
        status: 'ULTIMA VERSION v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'HITO ACTUAL',
      title: 'La Web Perpetua',
      para: 'SAFE Network está diseñada para garantizar que los datos públicos sean permanentes y nunca se puedan eliminar. Las personas y los grupos pueden optar por mantener sus datos privados, pero una vez que se hayan publicado, permanecerán permanentemente disponibles. Este hito tiene como objetivo mostrar el increíble poder de esta faceta de la Red, mediante la construcción de la experiencia del usuario, y la iteración en ella hasta el lanzamiento.',
      accordion: {
        header: [
          'Características de hito',
          'Descripción',
          'Estado'
        ],
        items: [
          {
            feature: 'SAFE NAVEGADOR',
            desc: 'Mejoras en el navegador diseñadas específicamente para aprovechar las funcionalidades de la Red Perpetua',
            status: 'Completo',
            para: [
              'La funcionalidad del navegador SAFE se ampliará para incorporar nuevas características que son exclusivas de la Web Perpetua, como la capacidad de revertir a través del historial de las versiones de cualquier sitio web o activo de SAFE.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Completo',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'Desarrollo',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Completo',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'Completo',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Lea el RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Concept',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Lea el RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'Completo',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'Development',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
