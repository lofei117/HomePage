var colors = [[0x265897,1.0], [0x13acfa,1.0], [0x9a49,1.0], [0xc0000b,1.0], [0xa1cb50,1.0], [0xb11b23,1.0], [0xfdd901,1.0], [0x0,1.0], [0xe44d26,1.0], [0x70a3d6,1.0], [0x9dc3e6,1.0], [0xaaaaaa,1.0], [0xcccccc,1.0], [0xeeeeee,1.0], [0x8d411b,0.52], [0x8c411a,0.83], [0x813c18,0.85], [0x813d17,0.85], [0x7f3a16,0.85], [0x813c19,0.85], [0x7f3a19,0.85], [0x7f3a1b,0.85], [0x7f3a1a,0.85], [0x7d3a19,0.85], [0x7d3919,0.85], [0x7e3a16,0.85], [0x7d3915,0.85], [0x7d3916,0.85], [0x7d3817,0.85], [0x7e3a19,0.85], [0x7d3a14,0.85], [0x7f3a15,0.85], [0x7f3c16,0.85], [0x7f3c19,0.85], [0x823c18,0.86], [0x7b3818,0.8], [0x441f0e,0.51], [0x934217,0.89], [0x87431a,1.0], [0x8e491f,1.0], [0x8d481f,1.0], [0x8d471e,1.0], [0x8e471d,1.0], [0x8e481f,1.0], [0x8b461d,1.0], [0x8b451c,1.0], [0x8d461e,1.0], [0x8c461c,1.0], [0x8d471f,1.0], [0x8f4820,1.0], [0x8f4921,1.0], [0x8f491f,1.0], [0x8f481f,1.0], [0x8e481e,1.0], [0x8e4820,1.0], [0x8f481e,1.0], [0x93461c,1.0], [0x743515,0.86], [0x8e4116,0.89], [0x8f481d,1.0], [0x9b4f21,1.0], [0x974d20,1.0], [0x984d21,1.0], [0x984f21,1.0], [0x994e1f,1.0], [0x964919,1.0], [0x994f22,1.0], [0x994e20,1.0], [0x984a1e,1.0], [0x944517,1.0], [0x974c20,1.0], [0x994e21,1.0], [0x9a4f22,1.0], [0x9b5022,1.0], [0x9a4f21,1.0], [0x9b5023,1.0], [0x9a4f23,1.0], [0x9a5022,1.0], [0x984f22,1.0], [0x91471c,1.0], [0x6f3314,0.88], [0x904119,0.88], [0x8f491d,1.0], [0x984d1f,1.0], [0x974c1f,1.0], [0x974c21,1.0], [0x974a1e,1.0], [0x98552c,1.0], [0xa67557,1.0], [0x984d1e,1.0], [0x974c1d,1.0], [0x984d20,1.0], [0x984a1c,1.0], [0x995630,1.0], [0xb48e78,1.0], [0x9b5024,1.0], [0x974b1e,1.0], [0x964b1e,1.0], [0x994e22,1.0], [0x9a5024,1.0], [0x994c1d,1.0], [0x984919,1.0], [0x964716,1.0], [0x954614,1.0], [0x964717,1.0], [0x92471c,1.0], [0x6d3212,0.87], [0x8d3f19,0.88], [0x984e21,1.0], [0x95461b,1.0], [0x924012,1.0], [0xa5775b,1.0], [0xd7c5b9,1.0], [0x934516,1.0], [0x924111,1.0], [0xb1927e,1.0], [0xdecec4,1.0], [0x964a19,1.0], [0x974d1d,1.0], [0x994d21,1.0], [0x9a4d1f,1.0], [0x944716,1.0], [0x944e22,1.0], [0x9b5c35,1.0], [0xa0653f,1.0], [0xa46e49,1.0], [0xa26640,1.0], [0x994d1d,1.0], [0x94491f,1.0], [0x703414,0.87], [0x8a3d15,0.88], [0x8c451c,1.0], [0x974c1e,1.0], [0x95481a,1.0], [0x9e684a,1.0], [0x9a562d,1.0], [0xb18a73,1.0], [0xd3b5a4,1.0], [0x96542e,1.0], [0xb08770,1.0], [0x974819,1.0], [0x8f451a,1.0], [0xd6cdc7,1.0], [0xc19176,1.0], [0x903f11,1.0], [0x984d22,1.0], [0x964b20,1.0], [0x924212,1.0], [0x945027,1.0], [0xb59682,1.0], [0xdfd6d0,1.0], [0xefeceb,1.0], [0xf3f3f3,1.0], [0xf7f8f9,1.0], [0xf6f5f5,1.0], [0xc09277,1.0], [0x934616,1.0], [0x703212,0.87], [0x8d3f17,0.88], [0x8e471e,1.0], [0x994d20,1.0], [0x914416,1.0], [0xcabab0,1.0], [0xb07857,1.0], [0xb89683,1.0], [0xc9a28a,1.0], [0xa6795f,1.0], [0xe0cfc5,1.0], [0x913f0f,1.0], [0x9d6748,1.0], [0xe5dedb,1.0], [0x9c542a,1.0], [0x8e3f11,1.0], [0x934517,1.0], [0x984c20,1.0], [0x9f6d50,1.0], [0xdad5d2,1.0], [0xffffff,1.0], [0xfffffe,1.0], [0xf8f0ec,1.0], [0xf4ebe6,1.0], [0xf9f3ef,1.0], [0xcda68f,1.0], [0x914212,1.0], [0x904419,1.0], [0x6d3111,0.87], [0x893b14,0.88], [0x954819,1.0], [0x92481c,1.0], [0xdaccc5,1.0], [0xaa6c48,1.0], [0xc1a898,1.0], [0xc19278,1.0], [0xae8670,1.0], [0xdec8bc,1.0], [0x8b3706,1.0], [0xb69684,1.0], [0xdfd1c8,1.0], [0xbc9f8e,1.0], [0xd7c5bb,1.0], [0xbc9076,1.0], [0x95471a,1.0], [0xa47a60,1.0], [0xeff4f5,1.0], [0xfbf6f3,1.0], [0xd0ad97,1.0], [0xb07451,1.0], [0xa35d34,1.0], [0xa15b32,1.0], [0xa7643c,1.0], [0xac6f48,1.0], [0x9f562a,1.0], [0x93461b,1.0], [0x8b3d17,0.88], [0x944618,1.0], [0x965027,1.0], [0xdccdc4,1.0], [0xa2623c,1.0], [0xc9b4a7,1.0], [0xb88263,1.0], [0xb5907c,1.0], [0xd7bbaa,1.0], [0x8b3b0b,1.0], [0xcebeb5,1.0], [0xcbb09f,1.0], [0xe7dfdb,1.0], [0xfefefd,1.0], [0xb27654,1.0], [0x965c3a,1.0], [0xeff1f1,1.0], [0xebd8cd,1.0], [0xa86740,1.0], [0x91400f,1.0], [0x944413,1.0], [0x984a18,1.0], [0x984a19,1.0], [0x984918,1.0], [0x974716,1.0], [0x9a4d1e,1.0], [0x93471c,1.0], [0x703213,0.87], [0x8e3f18,0.88], [0x8f471e,1.0], [0x964817,1.0], [0x9a5a32,1.0], [0xdacbc2,1.0], [0xa15e34,1.0], [0xcfbcb1,1.0], [0xb27955,1.0], [0xb89783,1.0], [0xd2b09b,1.0], [0x934a1f,1.0], [0xddd5cf,1.0], [0xaf7049,1.0], [0xa0582c,1.0], [0xb27753,1.0], [0xe7d9d0,1.0], [0xe2cfc5,1.0], [0xd0c4be,1.0], [0xddc2b1,1.0], [0x944210,1.0], [0x8f3b09,1.0], [0x954515,1.0], [0x974818,1.0], [0x9b4e1e,1.0], [0x9c5121,1.0], [0x9d5221,1.0], [0x9c5021,1.0], [0x9c4e21,1.0], [0x6d3010,0.87], [0x893812,0.88], [0x8c441b,1.0], [0x964b1d,1.0], [0x934314,1.0], [0x9a5c39,1.0], [0xd8c9bf,1.0], [0x9a542d,1.0], [0xd1c2b8,1.0], [0xab6e4b,1.0], [0xbc9f8f,1.0], [0xcea792,1.0], [0x965c39,1.0], [0xe0d5ce,1.0], [0xa87353,1.0], [0xaa7759,1.0], [0x8f4112,1.0], [0xab795a,1.0], [0xfeffff,1.0], [0xecdcd3,1.0], [0x964e23,1.0], [0x9d633f,1.0], [0xad7d5e,1.0], [0xae7a5a,1.0], [0xa46743,1.0], [0x96491a,1.0], [0x9b5021,1.0], [0x9c4f20,1.0], [0x9b4e1f,1.0], [0x91451b,1.0], [0x6d3011,0.87], [0x8e3f15,0.88], [0x8e461c,1.0], [0x974d1f,1.0], [0x944514,1.0], [0x9d6440,1.0], [0xd9cac1,1.0], [0x99542b,1.0], [0xd4c6bd,1.0], [0xa86a44,1.0], [0xc0a696,1.0], [0xc9a188,1.0], [0xa16f50,1.0], [0xd7beb0,1.0], [0xb28a71,1.0], [0xcdb4a4,1.0], [0xccb9ad,1.0], [0xba8f74,1.0], [0xe1d2c8,1.0], [0xc5a089,1.0], [0xc3b0a4,1.0], [0xfaffff,1.0], [0xfafdfe,1.0], [0xfdfeff,1.0], [0xf7f7f6,1.0], [0xdac5b5,1.0], [0xa05a2d,1.0], [0x994a19,1.0], [0x9a4e20,1.0], [0x974e1f,1.0], [0x6d3110,0.87], [0x8e4115,0.88], [0x8d481d,1.0], [0x994f20,1.0], [0x964614,1.0], [0xa16a48,1.0], [0xdacbc3,1.0], [0x99542a,1.0], [0xd6c9c1,1.0], [0xaa6a43,1.0], [0xc4ab9b,1.0], [0xc79c82,1.0], [0xaf856d,1.0], [0xceb09d,1.0], [0xb48d74,1.0], [0xc49d85,1.0], [0xd2baae,1.0], [0xd2b3a0,1.0], [0xc8aea0,1.0], [0xc39e87,1.0], [0xcfb4a3,1.0], [0xe4d1c7,1.0], [0xf5f0ec,1.0], [0xdec7b8,1.0], [0xf7f3f2,1.0], [0xd5b5a2,1.0], [0x954514,1.0], [0x9a4f20,1.0], [0x9a4f1f,1.0], [0x924418,1.0], [0x8f4117,0.88], [0x9b4f1f,1.0], [0x964411,1.0], [0xa5704e,1.0], [0xdccbc3,1.0], [0x964f23,1.0], [0xd6c8bf,1.0], [0xa7663d,1.0], [0xc6b0a0,1.0], [0xc2957a,1.0], [0xb79784,1.0], [0xcaa892,1.0], [0xb8957e,1.0], [0xc09278,1.0], [0xc4a796,1.0], [0xd8bdac,1.0], [0xbfa291,1.0], [0xd0ac97,1.0], [0x883200,1.0], [0xac8871,1.0], [0xe0cdc2,1.0], [0xa16a47,1.0], [0xcdb19f,1.0], [0xbe9377,1.0], [0xeee5de,1.0], [0x9e5527,1.0], [0x994d1c,1.0], [0x9b5122,1.0], [0x984f20,1.0], [0x914418,1.0], [0x8a3b17,0.88], [0x8b441c,1.0], [0x944519,1.0], [0x883205,1.0], [0xa06c4f,1.0], [0xdbc8be,1.0], [0x8c431b,1.0], [0xd5c7c1,1.0], [0x9f5d37,1.0], [0xc7b0a4,1.0], [0xbd8f74,1.0], [0xbda392,1.0], [0xc49c85,1.0], [0xb89888,1.0], [0xc0947b,1.0], [0x9a5933,1.0], [0xa15f3a,1.0], [0xb79581,1.0], [0xd4b3a1,1.0], [0xe0dfde,1.0], [0xc39477,1.0], [0xa37050,1.0], [0xcdb0a0,1.0], [0x934b24,1.0], [0xded1c9,1.0], [0xa7643f,1.0], [0x954718,1.0], [0x8f431a,1.0], [0x6c2f11,0.87], [0x8c3d15,0.88], [0x8a3f13,1.0], [0xa36e4f,1.0], [0xc8b3a7,1.0], [0xd9ccc5,1.0], [0xf2edeb,1.0], [0xd3bfb4,1.0], [0xf0eceb,1.0], [0xdccec4,1.0], [0xe8e3e1,1.0], [0xe7dcd6,1.0], [0xe6e0dd,1.0], [0xe8ddd6,1.0], [0xe2dad6,1.0], [0xeadfd8,1.0], [0xc8ae9f,1.0], [0xc2a595,1.0], [0xdacec7,1.0], [0xefe7e3,1.0], [0xe0dad7,1.0], [0xede2da,1.0], [0x9a4d20,1.0], [0xab7e63,1.0], [0xd1b6a4,1.0], [0x914619,1.0], [0xac6d4a,1.0], [0x934317,1.0], [0x974b1f,1.0], [0x94491e,1.0], [0x8a3d17,1.0], [0x662b0e,0.87], [0x893a14,0.88], [0x84370c,1.0], [0xb9957f,1.0], [0xfefefe,1.0], [0xcca893,1.0], [0x872f00,1.0], [0xae836b,1.0], [0xd1b5a5,1.0], [0x8e4416,1.0], [0xd7ccc3,1.0], [0xac6f4b,1.0], [0x914216,1.0], [0x964a21,1.0], [0x92481f,1.0], [0x873b14,1.0], [0x63270b,0.87], [0x8a4017,1.0], [0x9c562e,1.0], [0xa96b49,1.0], [0xbd9681,1.0], [0xe5d5cc,1.0], [0xac7354,1.0], [0xe5dad5,1.0], [0xbf8e70,1.0], [0xdac8be,1.0], [0xcfad98,1.0], [0xd8c4b8,1.0], [0xc79c83,1.0], [0xd1baac,1.0], [0xd6b6a4,1.0], [0xac714f,1.0], [0xad7452,1.0], [0xcfb6a7,1.0], [0xeadbd2,1.0], [0xeadbd3,1.0], [0xf6efec,1.0], [0xa0582e,1.0], [0xac7e62,1.0], [0xd3b7a7,1.0], [0x94481e,1.0], [0xdacec6,1.0], [0xae724c,1.0], [0x914415,1.0], [0x944920,1.0], [0x91471f,1.0], [0x883c15,1.0], [0x662a0d,0.87], [0x843510,0.88], [0x894118,1.0], [0x8a3303,1.0], [0xa06a4b,1.0], [0xdac6bc,1.0], [0x90431a,1.0], [0xd8c9c1,1.0], [0xa56139,1.0], [0xc6aea0,1.0], [0xbc8b70,1.0], [0xc1a593,1.0], [0xbd8a6d,1.0], [0xb8947e,1.0], [0xc49479,1.0], [0xa6765a,1.0], [0xc8a691,1.0], [0xba9883,1.0], [0xcaa38a,1.0], [0xece5e0,1.0], [0xcca289,1.0], [0xab7a5a,1.0], [0xd3b7a6,1.0], [0x974e22,1.0], [0xdacdc3,1.0], [0xa56543,1.0], [0x893c13,1.0], [0x92471d,1.0], [0x934a1e,1.0], [0x8e4119,1.0], [0x6c2f12,0.87], [0x863713,0.88], [0x874019,1.0], [0x92451c,1.0], [0x8d3c10,1.0], [0x9f694b,1.0], [0xdbc9c0,1.0], [0x914820,1.0], [0xd3c6be,1.0], [0xa86e4c,1.0], [0xbd8e72,1.0], [0xb89684,1.0], [0xcaa490,1.0], [0xb78f79,1.0], [0xc59a82,1.0], [0xb99987,1.0], [0xbda292,1.0], [0x842600,1.0], [0xb68c73,1.0], [0xe9d8ce,1.0], [0xac7c5e,1.0], [0xcead9b,1.0], [0x964f27,1.0], [0xdaccc3,1.0], [0xa45f36,1.0], [0x934519,1.0], [0x944a1c,1.0], [0x92481d,1.0], [0x8a4019,1.0], [0x682e12,0.87], [0x893a15,0.88], [0x8b441d,1.0], [0x974a20,1.0], [0x934015,1.0], [0x9d6243,1.0], [0x934a20,1.0], [0xcfbdb3,1.0], [0xb27e61,1.0], [0xcdbab1,1.0], [0xa97b5f,1.0], [0xd3b7a8,1.0], [0xb58c74,1.0], [0xc8a793,1.0], [0xd0c1ba,1.0], [0xc7a18a,1.0], [0xc1a99b,1.0], [0xb98e76,1.0], [0xa26c4e,1.0], [0xab7e64,1.0], [0xe2d4ce,1.0], [0xb28c78,1.0], [0xd2bcaf,1.0], [0xbfa494,1.0], [0xe0cfc6,1.0], [0x9b4e21,1.0], [0x9d5023,1.0], [0x8a3a17,0.88], [0x8b431d,1.0], [0x934316,1.0], [0x995935,1.0], [0x994f25,1.0], [0xcab1a1,1.0], [0xc29b85,1.0], [0xd2c5bc,1.0], [0xbf8c6f,1.0], [0x9e6341,1.0], [0xe4d5cb,1.0], [0xb08067,1.0], [0xb48469,1.0], [0xb27c5d,1.0], [0xa1694a,1.0], [0xe2d9d4,1.0], [0xd7c5ba,1.0], [0xe8e3df,1.0], [0xfafcfd,1.0], [0xfafaf9,1.0], [0xf4f2f2,1.0], [0xfdfefe,1.0], [0xc3957b,1.0], [0x913f11,1.0], [0x964a20,1.0], [0x984b20,1.0], [0x964c20,1.0], [0x90441a,1.0], [0x6d3012,0.87], [0x903e17,0.88], [0x90461c,1.0], [0x9a4c21,1.0], [0x97471c,1.0], [0x964d27,1.0], [0xded0c9,1.0], [0xa45e39,1.0], [0xb8917c,1.0], [0xd5c4bb,1.0], [0xdfd4ce,1.0], [0xbb8264,1.0], [0x924921,1.0], [0xad704d,1.0], [0x8f4115,1.0], [0x8e4318,1.0], [0xbfa99b,1.0], [0xeee7e4,1.0], [0xeaddd5,1.0], [0xc59b83,1.0], [0xe3cfc2,1.0], [0xf2e7e0,1.0], [0xf8f0eb,1.0], [0xf6eee9,1.0], [0xd6b7a4,1.0], [0x994b1e,1.0], [0x9b4f22,1.0], [0x964c21,1.0], [0x8f411b,1.0], [0x6a2e12,0.87], [0x8f4017,0.88], [0x90481d,1.0], [0x9c4e20,1.0], [0x9b4a1d,1.0], [0xdcd1c7,1.0], [0xb88060,1.0], [0x9e603e,1.0], [0xf5f6f7,1.0], [0xf3eee9,1.0], [0xa8653d,1.0], [0x8f3f10,1.0], [0xd6c6bc,1.0], [0xd1b9ab,1.0], [0xd1c3bb,1.0], [0xeeeded,1.0], [0xa56643,1.0], [0xddd0c8,1.0], [0xcba38b,1.0], [0x8c3705,1.0], [0x9e562a,1.0], [0xa46038,1.0], [0xa15b33,1.0], [0x96471b,1.0], [0x974d21,1.0], [0x91431b,1.0], [0x6d2e12,0.87], [0x94451b,0.88], [0x91491f,1.0], [0x9c5020,1.0], [0x954412,1.0], [0xcbb3a5,1.0], [0xe4cfc1,1.0], [0x9e653e,1.0], [0xeae8e7,1.0], [0xf1e5de,1.0], [0x913d0a,1.0], [0xbb957f,1.0], [0xfbfeff,1.0], [0xebded4,1.0], [0xebdbd0,1.0], [0xb98362,1.0], [0x8f3a06,1.0], [0xba9278,1.0], [0xbc8c6e,1.0], [0x8f3e0b,1.0], [0x8f3c09,1.0], [0x93410f,1.0], [0x984a1a,1.0], [0x984c1f,1.0], [0x6c2e12,0.87], [0x95461b,0.88], [0x924b1d,1.0], [0x974816,1.0], [0xa9714f,1.0], [0xf9f9fa,1.0], [0xf6f6f6,1.0], [0xd5b7a6,1.0], [0x9c5a31,1.0], [0xefeae7,1.0], [0xb47b57,1.0], [0x934412,1.0], [0x964818,1.0], [0x9a4e1d,1.0], [0x995022,1.0], [0xdecdc3,1.0], [0xd8c2b4,1.0], [0xb38669,1.0], [0xa2653f,1.0], [0x975125,1.0], [0x934618,1.0], [0x914112,1.0], [0x914011,1.0], [0x6c2f13,0.87], [0x93441b,0.88], [0x914b1f,1.0], [0x9b4f20,1.0], [0x974815,1.0], [0xbe9276,1.0], [0xf0e6de,1.0], [0xc59e88,1.0], [0xe8d9cf,1.0], [0xa2623a,1.0], [0xd0bbac,1.0], [0xd7baa7,1.0], [0x92420f,1.0], [0x9c5224,1.0], [0xa05c31,1.0], [0xe1cec2,1.0], [0xf6f6f5,1.0], [0xe5dcd7,1.0], [0xd6c2b6,1.0], [0xc7aa99,1.0], [0xbe9984,1.0], [0xa35f37,1.0], [0x984c1d,1.0], [0x93481c,1.0], [0x94461c,0.88], [0x924c1e,1.0], [0x9c5321,1.0], [0x9c5222,1.0], [0x9e5221,1.0], [0x9e5325,1.0], [0x994b1b,1.0], [0x944614,1.0], [0xc1977b,1.0], [0xfcfbfb,1.0], [0xf8f3ef,1.0], [0xc7a38b,1.0], [0xbe8d6e,1.0], [0x9e5323,1.0], [0x9e5322,1.0], [0x9d5323,1.0], [0x9a4c1a,1.0], [0x9d5222,1.0], [0xbf8f71,1.0], [0xe6d5ca,1.0], [0xfefdfc,1.0], [0xc9a087,1.0], [0x924313,1.0], [0x94481d,1.0], [0x703614,0.87], [0x944418,0.88], [0x934c1d,1.0], [0x9f5221,1.0], [0x9d5121,1.0], [0x9c5022,1.0], [0x9b5120,1.0], [0x9c511f,1.0], [0x954611,1.0], [0xaf7752,1.0], [0xeee3dc,1.0], [0xc89f84,1.0], [0x94420e,1.0], [0x9e5324,1.0], [0x9e5223,1.0], [0x9c5324,1.0], [0x9c4f1e,1.0], [0x964713,1.0], [0xab6c43,1.0], [0xbf8e6c,1.0], [0xcaa388,1.0], [0xd4b29b,1.0], [0xac6d43,1.0], [0x974b1b,1.0], [0x974b1d,1.0], [0x723714,0.87], [0x904016,0.89], [0x9a4e1f,1.0], [0x9b5020,1.0], [0x9a5021,1.0], [0x9c5122,1.0], [0x9d5223,1.0], [0x984b18,1.0], [0x9d5527,1.0], [0xa15a2b,1.0], [0x9d5322,1.0], [0x9e5424,1.0], [0x9f5424,1.0], [0x9a4d1b,1.0], [0x984914,1.0], [0x974812,1.0], [0x984915,1.0], [0x984913,1.0], [0x9b4f1b,1.0], [0x9c5223,1.0], [0x95481d,1.0], [0x713413,0.88], [0x99481b,0.89], [0x904a1d,1.0], [0x964d1f,1.0], [0x954c1e,1.0], [0x954b1e,1.0], [0x954c20,1.0], [0x954d20,1.0], [0x94491b,1.0], [0x92481b,1.0], [0x944d20,1.0], [0x944d21,1.0], [0x944b21,1.0], [0x944b1f,1.0], [0x954c1f,1.0], [0x964c1f,1.0], [0x964e20,1.0], [0x984a1d,1.0], [0x743813,0.86], [0x8b3d14,0.55], [0x8c4016,0.84], [0x853d16,0.86], [0x853e17,0.87], [0x853e16,0.87], [0x853f16,0.87], [0x833e15,0.87], [0x833d15,0.87], [0x843e17,0.87], [0x843e16,0.87], [0x823e15,0.87], [0x843e18,0.87], [0x853e19,0.87], [0x85411c,0.87], [0x85401a,0.87], [0x85411a,0.87], [0x853f18,0.87], [0x853f17,0.87], [0x853f19,0.87], [0x843e19,0.87], [0x823d17,0.87], [0x843d18,0.87], [0x813c17,0.87], [0x843d17,0.87], [0x833c17,0.88], [0x793711,0.82], [0x442009,0.53], [0x0,0.0], [0x4a4a4a,0.09], [0x464646,0.48], [0x464646,0.56], [0x474747,0.35], [0x333333,0.01], [0x585858,0.11], [0x555555,1.0], [0x999999,1.0], [0xa8a8a8,1.0], [0x818181,1.0], [0x494949,1.0], [0x525252,0.52], [0x737373,1.0], [0xd6d6d6,1.0], [0xe2e2e2,1.0], [0xbcbcbc,1.0], [0x5a5a5a,1.0], [0x464646,0.35], [0x404040,0.06], [0x4f4f4f,1.0], [0xe1e1e1,1.0], [0xcfcfcf,1.0], [0x4b4b4b,1.0], [0x404040,0.03], [0x444444,0.13], [0x5b5b5b,1.0], [0xf0f0f0,1.0], [0xe4e4e3,1.0], [0x6e6e6e,1.0], [0x454545,0.24], [0x4f4f4f,0.6], [0x7d7d7d,1.0], [0xdddddd,1.0], [0xa9a9a9,1.0], [0xe7e7e7,1.0], [0x5c5c5c,1.0], [0x494949,0.13], [0x727272,0.33], [0x646464,1.0], [0xf4f4f4,1.0], [0xc1c1c1,1.0], [0x797979,1.0], [0xa0a0a0,1.0], [0x4e4e4e,1.0], [0x474747,0.25], [0x4c4c4c,0.77], [0xfbfbfb,1.0], [0xa5a5a5,1.0], [0xd4d4d4,1.0], [0xcacaca,1.0], [0xd1d1d1,1.0], [0xbbbbbb,1.0], [0x484848,1.0], [0x505050,0.74], [0x9b9b9b,1.0], [0xc8c8c8,1.0], [0xa7a7a7,1.0], [0xcecece,1.0], [0x9c9c9c,1.0], [0x454545,0.5], [0x686868,0.36], [0x676767,1.0], [0xb4b4b4,1.0], [0xc7c7c7,1.0], [0xf9f9f9,1.0], [0xe6e6e6,1.0], [0x5d5d5d,1.0], [0x454545,0.14], [0xaeaeae,1.0], [0xc3c3c3,1.0], [0xdcdcdc,1.0], [0x9e9e9e,1.0], [0x484848,0.12], [0x242424,0.05], [0x2c2c2c,0.45], [0x2d2d2d,0.62], [0x2c2c2c,0.6], [0x2c2c2c,0.16], [0x525252,0.68], [0xa4a4a4,1.0], [0xd0d0d0,1.0], [0xdfdfdf,1.0], [0x7e7e7e,1.0], [0x464646,0.34], [0x353535,1.0], [0x828282,1.0], [0xa3a3a3,1.0], [0x2c2c2c,0.25], [0x747474,0.17], [0x545454,1.0], [0xededed,1.0], [0xe0e0e0,1.0], [0xb9b9b9,1.0], [0xc0c0c0,1.0], [0xe8e8e8,1.0], [0x464646,0.51], [0xffffff,0.07], [0xe0e0e,0.77], [0x2b2b2b,0.41], [0x6b6b6b,1.0], [0xececec,1.0], [0xafafaf,1.0], [0x2c2c2c,0.58], [0x2a2a2a,0.14], [0x7b7b7b,0.12], [0xf1f1f1,1.0], [0xdbdbdb,1.0], [0xd5d5d5,1.0], [0xcdcdcd,1.0], [0x474747,0.53], [0xffffff,0.16], [0xd2d2d2,0.33], [0x242424,0.02], [0x303030,1.0], [0x969696,1.0], [0x2d2d2d,1.0], [0x2e2e2e,0.04], [0x525252,0.49], [0x686868,1.0], [0xb0b0b0,1.0], [0xb3b3b3,1.0], [0x909090,1.0], [0x454545,0.43], [0xcecece,0.45], [0xffffff,0.0], [0x2f2f2f,1.0], [0xbebebe,1.0], [0xe5e5e5,1.0], [0x2b2b2b,0.5], [0x454545,0.37], [0xf5f5f5,1.0], [0xcbcbcb,1.0], [0xc4c4c4,1.0], [0xc2c2c2,1.0], [0x454545,0.27], [0xffffff,0.03], [0xffffff,0.47], [0x979797,0.33], [0xc5c5c5,1.0], [0x515151,1.0], [0x858585,1.0], [0xebebeb,1.0], [0x3f3f3f,1.0], [0x2c2c2c,0.11], [0x494949,0.87], [0xbdbdbd,1.0], [0x949494,1.0], [0x434343,0.09], [0xffffff,0.23], [0xffffff,0.38], [0xffffff,0.6], [0x757575,1.0], [0xc1c1c1,0.93], [0xffffff,0.41], [0xc2c2c2,0.31], [0x2c2c2c,0.66], [0x3b3b3b,1.0], [0x6d6d6d,1.0], [0x919191,1.0], [0x2c2c2c,0.52], [0x565656,0.38], [0x6a6a6a,1.0], [0x888888,1.0], [0xd7d7d7,1.0], [0x626262,1.0], [0x464646,0.17], [0x2d2d2d,0.57], [0xcccccc,0.6], [0xffffff,0.04], [0xffffff,0.13], [0xb9b9b9,0.9], [0xffffff,0.45], [0xffffff,0.55], [0x7f807f,1.0], [0x4c4c4c,1.0], [0xdcdcdc,0.97], [0xffffff,0.49], [0xfbfbfb,0.27], [0xffffff,0.21], [0x808080,0.03], [0xcbcbcb,0.19], [0x2b2b2b,0.25], [0xb7b7b7,1.0], [0xadadad,1.0], [0xdadada,1.0], [0x333333,1.0], [0x2b2b2b,0.04], [0x929292,0.02], [0x8f8f8f,0.28], [0xfafafa,0.21], [0xefefef,0.43], [0x7b7b7b,0.87], [0x8a8a8a,1.0], [0x4a4a4a,1.0], [0x454545,0.66], [0x888888,0.11], [0x1e1e1e,0.97], [0xf2f2f2,0.54], [0xffffff,0.12], [0xffffff,0.27], [0xffffff,0.34], [0xf3f3f3,0.86], [0xe4e5e4,0.97], [0xf8f8f8,0.13], [0xffffff,0.01], [0xe5e5e5,0.15], [0xedede7,0.16], [0xefefef,0.7], [0x6f6f6f,1.0], [0x505050,0.98], [0x3c3c3c,1.0], [0x666666,0.81], [0x474747,0.38], [0x858585,0.85], [0x929292,0.85], [0xd8d8d8,0.05], [0x2c2c2c,0.29], [0x2e2e2e,0.19], [0xe0e0e,0.28], [0x111111,1.0], [0x717171,0.99], [0xffffff,0.44], [0x8a8a8a,0.93], [0xbdbdbd,0.43], [0x4b4b4b,0.86], [0x4b4b4b,0.32], [0x1c1c1c,0.67], [0x878787,0.98], [0x4f4f4f,0.99], [0x878787,0.37], [0x181818,0.16], [0x3a3a3a,0.17], [0xacacac,0.56], [0xa2a2a2,0.93], [0x5e5e5e,1.0], [0x414141,1.0], [0x2a2a2a,0.78], [0x3a3a3a,0.75], [0x4c4c4c,0.96], [0x606060,0.94], [0x232323,1.0], [0x727272,1.0], [0xfcfcfc,1.0], [0x373737,1.0], [0x747474,1.0], [0x636363,1.0], [0xb9b9b9,0.04], [0x595959,1.0], [0x656565,1.0], [0x2d2d2d,0.31], [0xc4c4c4,0.05], [0x222222,0.8], [0x727272,0.9], [0x8f8f8f,0.12], [0x2d2d2d,0.06], [0x636363,0.21], [0x5b5b5b,0.21], [0x939393,0.31], [0x6b6b6b,0.9], [0x555555,0.79], [0x9f9f9f,1.0], [0x474747,1.0], [0x121212,0.89], [0x1e1e1e,0.85], [0xffffff,0.98], [0xfafafa,0.83], [0x3f3f3f,0.94], [0xe0e0e,1.0], [0x5f5f5f,0.99], [0x494949,0.99], [0x363636,0.98], [0x262626,1.0], [0xababab,1.0], [0x777777,1.0], [0x2c2c2c,1.0], [0xd5d5d5,0.04], [0x707070,1.0], [0xd3d3d3,1.0], [0x898989,1.0], [0x7a7a7a,1.0], [0x2c2c2c,0.49], [0x424242,0.6], [0x272727,0.91], [0x555555,0.9], [0x313131,0.98], [0x7b7b7b,1.0], [0x2a2a2a,1.0], [0x767676,1.0], [0xffffff,0.96], [0xffffff,0.85], [0x767676,0.91], [0x8f8f8f,1.0], [0x939393,1.0], [0x616161,1.0], [0x141414,1.0], [0x696969,1.0], [0x444444,1.0], [0x787878,1.0], [0xd9d9d9,1.0], [0x222222,1.0], [0xdedede,0.09], [0x2c2c2c,0.42], [0x2c2c2c,0.4], [0x2c2c2c,0.41], [0x2e2e2e,1.0], [0x2d2d2d,0.49], [0x454545,1.0], [0x555555,0.1], [0x444444,0.59], [0x292929,1.0], [0x131313,1.0], [0x424242,1.0], [0xf0f0f0,0.98], [0x727272,0.98], [0x181818,0.99], [0x242424,1.0], [0x6c6c6c,1.0], [0x585858,1.0], [0x9a9a9a,1.0], [0x878787,1.0], [0xd5d5d5,0.11], [0x2b2b2b,0.73], [0x313131,1.0], [0x1b1b1b,0.92], [0xacacac,1.0], [0x565656,1.0], [0x7c7c7c,1.0], [0x3d3d3d,1.0], [0x232323,0.94], [0xd0d0d,0.62], [0x737373,0.9], [0x1a1a1a,1.0], [0x404040,1.0], [0x8d8e8d,1.0], [0x434343,1.0], [0x343434,1.0], [0x848484,1.0], [0xd6d6d6,0.12], [0x838383,1.0], [0xb1b1b1,1.0], [0x606060,1.0], [0x959595,1.0], [0xb0b0b,1.0], [0x979797,0.74], [0xbbbbbb,0.6], [0x929292,0.95], [0xc9c9c9,1.0], [0x8b8b8b,1.0], [0x979797,1.0], [0xfafafa,1.0], [0xefefef,1.0], [0xb3b3b3,0.14], [0xffffff,0.02], [0x949494,0.07], [0x585858,0.41], [0x303030,0.76], [0x3a3a3a,1.0], [0x212121,1.0], [0x60606,1.0], [0xa0a0a,1.0], [0xf2f2f2,1.0], [0xa6a6a6,1.0], [0x929292,1.0], [0x989898,0.99], [0xf7f7f7,1.0], [0x9f9f9f,0.18], [0xc0c0c,0.08], [0x0,0.18], [0x0,0.17], [0x3e3e3e,0.24], [0x373737,0.63], [0x151515,0.96], [0x393939,1.0], [0x535353,1.0], [0x868686,1.0], [0x161616,1.0], [0xa0a0a0,0.2], [0x343434,0.21], [0x464646,0.5], [0x5b5b5b,0.47], [0x4c4c4c,0.55], [0x505050,0.49], [0x121212,0.94], [0x151515,1.0], [0x505050,1.0], [0x70707,1.0], [0xffffff,0.97], [0x3e3e3e,1.0], [0x5f5f5f,1.0], [0x878787,0.2], [0x393939,0.03], [0xb5b5b5,1.0], [0x252525,1.0], [0xc0c0c,1.0], [0x575757,1.0], [0xb9b9b9,0.99], [0xf5f5f5,0.95], [0xbababa,1.0], [0x9d9d9d,1.0], [0x8c8c8c,1.0], [0x838383,0.26], [0x2d2d2d,0.2], [0x272727,1.0], [0xc2c2c2,0.98], [0x363636,1.0], [0x959595,0.27], [0x2c2c2c,0.72], [0x2f2f2f,0.4], [0x171717,1.0], [0xc3c3c3,0.14], [0x2d2d2d,0.29], [0xeaeaea,1.0], [0x2b2b2b,0.55], [0xd0d0d,1.0], [0x80808,1.0], [0xc7c7c7,0.97], [0x262626,0.98], [0xb6b6b6,1.0], [0xadadad,0.12], [0x323232,1.0], [0x929292,0.87], [0xdadada,0.8], [0xc8cac8,0.84], [0xa8a8a8,0.86], [0x7a7a7a,0.98], [0x282828,1.0], [0x717171,1.0], [0x575157,0.17], [0x2c2c2c,0.64], [0x2c2c2c,0.54], [0x666666,0.99], [0xf8f8f8,0.26], [0x6f6f6f,0.83], [0x212121,0.84], [0xb6b6b6,0.46], [0xfcfcfc,0.58], [0xf8f8f8,0.57], [0xefefef,0.58], [0xc9c9c9,0.75], [0xfbfbfb,0.99], [0xffffff,0.93], [0x6d6d6d,0.65], [0xc2c2c2,0.69], [0xc2c2c2,0.91], [0xacacac,0.91], [0xa3a3a3,0.87], [0x545454,0.98], [0x282828,0.99], [0x1d1d1d,0.62], [0x2a2a2a,0.55], [0x2e2e2e,0.54], [0xb0b0b,0.55], [0x272727,0.54], [0x181818,0.77], [0x414141,0.97], [0x3a3a3a,0.98], [0x3a3a3a,0.85], [0x333333,0.83], [0x2e2e2e,0.82], [0x4d4d4d,0.92], [0xc2c2c2,0.16], [0x2c2c2c,0.79], [0x848484,0.97], [0xf8f8f8,0.54], [0xcbcbcb,0.28], [0x4d4d4d,1.0], [0x333333,0.81], [0x999999,0.17], [0xffffff,0.32], [0xb0b0b0,0.81], [0x989898,0.98], [0xffffff,0.05], [0xffffff,0.09], [0xffffff,0.37], [0xa8a8a8,0.99], [0xa1a1a1,1.0], [0xa5a5a5,0.8], [0xcccccc,0.01], [0xcecece,0.82], [0x696969,0.87], [0x868686,0.07], [0x808080,0.01], [0xd3d3d3,0.16], [0x2b2b2b,0.3], [0xacacac,0.75], [0x5d5d5d,0.33], [0x373737,0.09], [0xededed,0.05], [0x5e5e5e,0.83], [0xe9e9e9,0.59], [0xffffff,0.7], [0x9d9d9d,0.8], [0xffffff,0.18], [0xffffff,0.51], [0x979797,0.97], [0xcfcfcf,0.12], [0x2b2b2b,0.52], [0x555555,0.01], [0x2a2a2a,0.33], [0xdfdfdf,0.46], [0xffffff,0.08], [0xffffff,0.1], [0xbbbbbb,0.8], [0xffffff,0.26], [0xfbfbfb,0.24], [0xafafaf,0.12], [0x2c2c2c,0.18], [0x2b2b2b,0.09], [0xf5f5f5,0.2], [0xa2a2a2,0.11], [0x6d6d6d,0.02], [0x2b2b2b,0.02], [0x404040,0.01], [0xcfcfcf,0.14], [0x2d2d2d,0.38], [0xb6b6b6,0.08], [0x2d2d2d,0.69], [0x2e2e2e,0.23], [0x2c2c2c,0.65], [0x2d2d2d,0.24], [0x2a2a2a,0.16], [0x2c2c2c,0.43], [0x2d2d2d,0.3], [0x2c2c2c,0.67], [0x272727,0.05], [0x2b2b2b,0.34], [0x2c2c2c,0.59], [0x2e2e2e,0.08], ];