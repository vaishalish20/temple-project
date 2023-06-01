const tempList = [
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [79.3474,13.6833]
        },
        "properties": {
          "name": "Tirupati Balaji Temple, Andhra Pradesh",
          "description": "Famous Lord Venkateswara temple, known for its ornate architecture and spiritual significance.",
          // "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [83.0109,25.3089]
        },
        "properties": {
          "name": "Kashi Vishwanath Temple, Uttar Pradesh",
          "description": "Holiest temple in Varanasi dedicated to Lord Shiva, granting liberation from the cycle of birth and death.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [74.8760,31.6207]
        },
        "properties": {
          "name": "Golden Temple (Harmandir Sahib), Punjab",
          "description": "Mathew Rd, Charni Road East, Opera House, Gamdevi, Mumbai, Maharashtra 400004, IndiaSikhism's holiest shrine with a golden exterior, symbolizing equality and spiritual purity.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [78.1198, 9.9190]
        },
        "properties": {
          "name": "Meenakshi Temple, Tamil Nadu",
          "description": "Magnificent Dravidian temple in Madurai dedicated to Goddess Meenakshi and Lord Sundareswarar.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [70.4326,20.8765]
        },
        "properties": {
          "name": "Somnath Temple, Gujarat",
          "description": "Revered Jyotirlinga shrine dedicated to Lord Shiva, representing resilience of faith.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [86.0946,19.8876]
        },
        "properties": {
          "name": "Konark Sun Temple, Odisha",
          "description": "UNESCO World Heritage Site shaped like a chariot, dedicated to the Sun God.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [85.8315,19.8134]
        },
        "properties": {
          "name": "Jagannath Temple, Odisha",
          "description": "Famous Char Dham pilgrimage site in Puri, dedicated to Lord Jagannath.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [79.1310,10.7828]
        },
        "properties": {
          "name": "Brihadeeswarar Temple (Thanjavur Temple), Tamil Nadu",
          "description": "SBrihadeeswarar Temple (Thanjavur Temple), Tamil NaduBrihadeeswarar Temple (Thanjavur Temple), Tamil Nadu",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [74.9024,32.7521]
        },
        "properties": {
          "name": "Vaishno Devi Temple, Jammu and Kashmir",
          "description": "Popular hilltop pilgrimage site dedicated to Goddess Vaishno Devi.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [72.7156, 24.5787]
        },
        "properties": {
          "name": "Dilwara Temples, Rajasthan",
          "description": "Intricately carved Jain temples in Mount Abu showcasing exquisite craftsmanship.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [72.8309,19.0166]
        },
        "properties": {
          "name": "Siddhivinayak Temple, Maharashtra",
          "description": "Mumbai's famous temple dedicated to Lord Ganesha, remover of obstacles.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.2773,28.6127]
        },
        "properties": {
          "name": "Akshardham Temple, Delhi",
          "description": "Magnificent temple complex showcasing Indian culture and spirituality through its architecture and exhibits.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [79.4894,30.7431]
        },
        "properties": {
          "name": "Badrinath Temple, Uttarakhand",
          "description": "Himalayan temple dedicated to Lord Vishnu, part of the Char Dham pilgrimage.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [79.3129, 9.2877]
        },
        "properties": {
          "name": "Ramanathaswamy Temple, Tamil Nadu",
          "description": "Ancient temple in Rameswaram dedicated to Lord Shiva, known for its sacredness and architecture.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [85.8411,20.2539]
        },
        "properties": {
          "name": "Lingaraj Temple, Odisha",
          "description": "Architectural marvel in Bhubaneswar dedicated to Lord Shiva, showcasing Odishan temple style.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.0350, 9.4043]
        },
        "properties": {
          "name": "Sabarimala Temple, Kerala",
          "description": "Pilgrimage site in the Western Ghats dedicated to Lord Ayyappan, attracting millions of devotees.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [75.8553,34.2257]
        },
        "properties": {
          "name": "Amarnath Temple, Jammu and Kashmir",
          "description": "Cave temple in the Himalayas dedicated to Lord Shiva, featuring a natural ice lingam.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [79.0669,30.7352]
        },
        "properties": {
          "name": "Kedarnath Temple, Uttarakhand",
          "description": " Scenic temple dedicated to Lord Shiva, part of the twelve Jyotirlinga temples.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ 79.1312, 10.7824]
        },
        "properties": {
          "name": "Brihadisvara Temple, Tamil Nadu",
          "description": "UNESCO World Heritage Site in Gangaikonda Cholapuram, showcasing architectural brilliance of the Chola dynasty.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [72.6220, 23.3173]
        },
        "properties": {
          "name": "Sun Temple (Modhera), Gujarat",
          "description": "Temple dedicated to the Sun God, renowned for intricate stone carvings and the Modhera Dance Festival.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [76.9444,8.4822]
        },
        "properties": {
          "name": "Sree Padmanabhaswamy Temple, Kerala",
          "description": "Thiruvananthapuram's sacred temple dedicated to Lord Vishnu, known for its immense wealth.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [76.6233, 12.3375]
        },
        "properties": {
          "name": "Chamundeshwari Temple, Karnataka",
          "description": "Hilltop temple in Mysore dedicated to Goddess Chamundeshwari, offering panoramic views.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.4391,25.1117]
        },
        "properties": {
          "name": "Ranakpur Jain Temple, Rajasthan",
          "description": "Jain temple complex known for its stunning marble architecture and intricate carvings.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ 76.6485, 31.9997]
        },
        "properties": {
          "name": "Naina Devi Temple, Himachal Pradesh",
          "description": "Scenic temple in Nainital dedicated to Goddess Naina Devi, offering views of mountains and lake.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [84.9902,  24.6960]
        },
        "properties": {
          "name": "Mahabodhi Temple, Bihar",
          "description": "UNESCO World Heritage Site in Bodh Gaya, where Gautama Buddha attained enlightenment.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.7394, 23.4800]
        },
        "properties": {
          "name": "Sanchi Stupa, Madhya Pradesh:",
          "description": "Ancient Buddhist complex and UNESCO World Heritage Site, symbolizing Buddhist art and architecture.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [74.4773,19.7680]
        },
        "properties": {
          "name": "Eklingji Temple, Rajasthan",
          "description": "Architectural gem near Udaipur dedicated to Lord Shiva, known for intricate carvings.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [72.6833, 23.2350]
        },
        "properties": {
          "name": "Akshardham Temple, Gujarat",
          "description": "Spiritual and cultural complex in Gandhinagar showcasing Indian traditions and art.",
          "phone": "23 2323 2323"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [78.6904,10.8605]
        },
        "properties": {
          "name": "Ranganathaswamy Temple, Tamil Nadu",
          "description": "Large functioning temple in Srirangam dedicated to Lord Vishnu, showcasing Dravidian architecture."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [79.9000, 18.8167]
        },
        "properties": {
          "name": "Kaleshwaram Temple, Telangana",
          "description": "Prominent Shiva temple on the banks of the Godavari River, attracting pilgrims with its architecture and spirituality.",
          "phone": "23 2323 2323"
        }
      }
]