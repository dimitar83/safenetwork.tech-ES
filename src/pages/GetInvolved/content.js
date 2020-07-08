import CONSTANT from 'constant'

export default {
  title: 'Es el amanecer de una nueva red.\n Ayúdenos a crearla.',
  pageDesc: 'Safe Network es un esfuerzo de código abierto y colaboración entre los desarrolladores y la comunidad que la utiliza. Puede participar probando, sugiriendo, codificando o promoviendo. Se hace así.',
  develop: {
    trySafeNet: {
      title: 'Pruebe la SAFE Network',
      para: [
        'SAFE cambiará la forma en la que interactuamos con la web y con nuestros propios datos. Un salto tan grande como este requiere continuas pruebas y criticismo de las personas para las que está diseñado, y ahí es donde puede ayudar.',
        'Descargue el navegador SAFE para navegar por la red o, por qué no, unase a la comunidad y sea uno de los muchos que proporcionan comentarios, contribuyen al código y esencialmente, ayudan a dar forma a la red.'
      ]
    },
    startDevelop: {
      title: 'Comience a desarrollar en SAFE',
      para: [
        'The SAFE Network is a platform for creating decentralised apps. It is secure, privacy focussed, has a built-in revenue stream, and next to no infrastructure costs.',
        'Right now development of simpler, dev-facing APIs is underway. As such documentation is still to be finalised, but you can access the latest SAFE API documentation in this repo.'
      ],
      CTA: {
        name: 'SAFE API GitHub Repo',
        url: 'https://github.com/maidsafe/safe-api/blob/master/README.md'
      }
    },
    joinForum: {
      title: 'Unase a la comunidad de desarrolladores',
      para: [
        'Además del centro de desarrolladores, también tenemos un foro de desarrolladores en crecimiento. Una gran manera de obtener apoyo y colaborar.'
      ],
      CTA: {
        name: 'Foro de desarrolladores',
        url: 'https://forum.safedev.org'
      }
    },
    coreNetwork: {
      title: 'Ayude a construir la red principal',
      para: [
        'Usted también puede participar ayudando a mantener las bibliotecas de código abierto subyacentes a las redes. A medida que alcancemos el lanzamiento beta será posible ser recompensado en Safecoin por la corrección de errores, la optimización de código y el desarrollo de nuevas características.'
      ],
      CTA: {
        name: 'Contribuir en GitHub',
        url: 'https://github.com/maidsafe/'
      }
    }
  },
  engage: {
    community: {
      title: 'Sea parte de la comunidad',
      para: [
        'La comunidad de SAFE Network está compuesta por miles de personas de todo el mundo apasionadas por el acceso y el intercambio de datos sin restricciones.',
        'The SAFE Network Forum es el principal foro de discusión de esta creciente comunidad y es un gran lugar para probar nuevas versiones por parte de los equipos de desarrollo, para recibir apoyo, discutir las últimas tendencias de Internet y para leer las actualizaciones semanales de desarrollo. Para conocer a otros en persona, eche un vistazo a los diversos encuentros que tienen lugar en todo el mundo.'
      ],
      CTA: {
        name: 'Unase al Foro',
        url: 'https://safenetforum.org'
      }
    },
    subscribe: {
      title: 'Manténgase al día'
    }
  },
  invite: {
    title: 'Empiece ya',
    joinNetwork: {
      id: 'joinNetwork',
      title: 'Connect to the Baby Fleming Public Shared Section',
      para: 'This shared section is hosted on DigitalOcean and consists of eight vaults on eight separate droplets, all connected together in one section. Please note that this testnet may require to be taken down.',
      CTA: {
        button: {
          name: 'Learn more',
          url: 'https://safenetforum.org/t/baby-fleming-public-shared-section/31377'
        },
        link: {
          name: 'CLI User Guide',
          url: 'https://github.com/maidsafe/safe-api/blob/master/safe-cli/README.md#download'
        }
      }
    },
    installBrowser: {
      id: 'installBrowser',
      title: 'Instale el navegador SAFE',
      para: '¡Escoja el último navegador SEGURO para empezar a navegar por la red hoy mismo!',
      CTA: {
        button: {
          name: 'Descargar para',
          url: '/'
        },
        link: {
          name: 'Más opciones',
          url: CONSTANT.downloadApps.browser.others
        }
      }
    },
    feedback: {
      id: 'feedback',
      title: 'Comentarios & Contribuciones',
      para: 'Construir la Red SAFE es un esfuerzo de equipo. Puede ayudar haciendo sugerencias, reportando errores o aportando código.',
      CTA: {
        button: {
          name: 'Unase al foro',
          url: 'https://safenetforum.org'
        }
      }
    }
  },
  faqs: {
   sections: [
    {
      title: 'Getting Started: Frequently Asked Questions',
      items: [
        {
          question: 'How do I get involved with the SAFE Network community?',
          answer: [
            'The Community is most active on the [SAFE Network Forum](https://safenetforum.org/) and we’d suggest starting in the [beginners section](https://safenetforum.org/c/beginners )',
            '_[Visit the Forum](https://safenetforum.org/)_'
          ]
        },
        {
          question: 'How do I get help?',
          answer: [
            'The [SAFE Network Forum](https://safenetforum.org) is the place to head to for all questions on the Network.',
            '_[Visit the Forum](https://safenetforum.org/)_'
          ]
        }
      ]
    },
   ],
   CTA: {
     name: 'More FAQs',
     url: '/faq'
   }
  }
}
