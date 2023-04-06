const ProductsArray= [
  {
    id: 1,
    title:"GPU (Video Card)",
    description: "The NVIDIA® GeForce RTX™ 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.",
    price: "1600",
    image: 
    "https://lh3.googleusercontent.com/uijuuEMw3d9Xq2lSLl7HIi7GsXNmWZt0aoWPtubnZz05W8mUqTiNoEg8_WbsIkdgnuZYQ-lxOZlN-ymeSeXjdrc6G81WWme2iosOM24khw"
  },
  {
    id:2,
    title: "CPU (Central Processing Unit)",
    description:"The portion of a computer that retrieves and executes instructions. These processors feature a performance hybrid architecture designed for intelligent performance, optimized creating, and enhanced tuning to allow gamers to game with up to 5.8 GHz clock speed.",
    price: "570",
    image:
    "https://lh3.googleusercontent.com/stV1mMvZpxN2QISqoJLqkLVWVQChaoYp-EogN-qetcMEt3OEJYDMmNga5TrjQNm0swmf8wvVgwHg0xLoyjAfVoWTse1r-Su8VXfaxVup"
  },
  {
    id: 3,
    title:"CPU Cooler",
    description: "Why should you use an AIO cooler? Just as a swimming pool cools you down quicker than a fan, AIO coolers are much better at chilling CPUs than air.",
    price: "255",
    image:
    "https://lh3.googleusercontent.com/oLoOPVOTiW3uljdpiSSf0818aTiB5cadN6s7vw3daw6JkGFmDO2ZUUauBCqf8kElz7yJ4VGN7VUvuZavx-HPbeTeYb07GEdPEWWnblEY"
  },
  {
    id:4,
    title: "SSD (Solid State Drive)",
    description:"An SSD, or solid-state drive, is a type of storage device used in computers. This non-volatile storage media stores persistent data on solid-state flash memory.",
    price:"60",
    image:
    "https://lh3.googleusercontent.com/htOM6S9o9ymLJf7QJUMXVGwckuMgtomuRj1ALaTz9VWByMwhq3UsFKBJlq4NylYjc4AoZz9Uelml3z2QFPa0qr3Ct_vGNVcO3oSOh6uP"
  },
  {
    id: 5,
    title: "Hard Drive",
    description:"A kind of technology that stores the operating system, applications, and data files such as documents, pictures and music that your computer uses.",
    price: "80",
    image:
    "https://lh3.googleusercontent.com/f3UQXDAP7807eVEYvODIwB63mLuw_vGIOc-_X7ChM6XBRJqClMMtriwZ44n_cbuYApdbBp-zVOwL43I7P8H8h3-eoszW1LIvcLDB-ao"
  },
  {
    id: 6,
    title: "RAM (Random Access Memory)",
    description: "RAM stands for random-access memory, but what does that mean? Your computer RAM is essentially short term memory where data is stored as the processor needs it.",
    price: "55",
    image: "https://lh3.googleusercontent.com/CR-LBB8dmEmZM5dVs2p-04bTRErZi1ghPx-sBoKGDuvJfYBejPJVDRWgwxA2KZqJp7WdqyfslQD9KZmxfRTgm7EnR1O7PL4arauMNzTF"
  },
  {
    id:7,
    title:"PC Case",
    description:"Holds most of your computer's hardware. It protects the internal components from dust and other particles and helps to cool the system by allowing air to flow through it.",
    price:"90",
    image:
    "https://lh3.googleusercontent.com/lmsbBr27QO-_HefhC_4RpIYEuoxNRtOA_IY4FVIVMLuEaHJEQvJULjeAZ8HhT3pqFH6aFGE-RUk_g76XWMZ-KFL_TIIcGc3IdHiXNFQpyQ3H"
  },
  {
    id:8,
    title:"Fans",
    description:"A computer fan is any fan inside, or attached to, a computer case used for active cooling. Fans are used to draw cooler air into the case from the outside, expel warm air from inside and move air across a heat sink to cool a particular component.",
    price: "35",
    image:"https://lh3.googleusercontent.com/N4TtxUKgsEWHSVaAbHJrbeJ5RJtic_QQFuEYMaaf-hrlWs8tWsoYPr8wkH9KRtb1anMgVKJw1e7--wIT0celQcE9Va8V46aPR_-FkRg"
  },
  {
    id:9,
    title:"PSU (Power Supply Unit)",
    description:"A power supply unit (PSU) converts mains AC to low-voltage regulated DC power for the internal components of a computer.",
    price:75,
    image:
    "https://lh3.googleusercontent.com/xz87iRKb3KMWL5XpFRT8mO96C_juVL_0e06X9yYLV1Ql55c9QFlHt2minQ6MmbBExK9UwvSZ8omWmhg5hgtMVQgUxUaG9DWMmqnQXlt3"
  },
  {
    id:10,
    title:"Thermal Paste",
    description:"A silvery-gray substance that you apply to a processor before installing a cooling solution. It allows for an efficient transfer of heat from the IHS of the processor to the base plate or water block of the CPU cooler that is designed to dissipate that heat.",
    price:8,
    image:
    "https://lh3.googleusercontent.com/nImrZvTHo4I85GWd0F7V5g3bYn7IKIwxSng79nCWV0OHfzdNXGMRBcJjABzr16n127CD81oitRsV6JFm0lnGpXdPVzKaIeM0vnVN845u"
  },
  {
    id:11,
    title:"Gaming Mouse",
    description:"Uses Optical sensors and also Laser Sensors for higher gaming. With Laser sensor, one can achieve High DPI, means sensitivity of the gaming mouse can be increased.",
    price:"55",
    image:"https://lh3.googleusercontent.com/O7-MQP2e3NaNUNgao8msf_PGxRbSFUILPHkF6NYsVpgztzBZAqYlzumaJHt9UC6QSzy4xy8ZChbf-4FZDSsLpm3BqDURTYMew3jTT63YZg"
  },
  {
    id:12,
    title:"Keyboard",
    description:"A small auxiliary keyboard designed only for gaming. It has a limited number of the original keys from a standard keyboard, and they are arranged in a more ergonomic fashion to facilitate quick and efficient gaming key presses.",
    price: "102",
    image:
    "https://lh3.googleusercontent.com/H5QKmys2L9benj-I0XrPUs0614jb5Y6YBMz2BXyx01yH2pTuHJfhwAuTlPgZLywGNDwUodIWbdXzvlVelZDOK5f8xU7U4Qtf9nFB5YI"
  }
]

export default ProductsArray;