"use client";
import { useState } from "react";
// import Image from "next/image";
// import ImageLogo from "../../images/svgLogos/white_logo.svg";
import styles from "@/components/findStore_search/findStore_search.module.css";
import "./findStore.css";
import FindStoreButton from "../buttons/findstoreButton/findstoreButton";
function FindStoreSearch() {
  const defaultCityData = [
    {
      content1:
        "Royale Touche Laminates, Plywood and Wooden Floors-Ahmedabad, DEVDEEP DÉCOR LLP",
      supplierName: "MR. MANDEEP PATEL",
      mapLocation: "AHMEDABAD, GUJARAT",
      phone: "+919624045453",
      Address:
        "GROUND FLOOR 4-5-6, SOHAM PRISTINE, NR SHALIGRAM-2, NR. SHAJANAND BUNGLOW, SINDHUBHAVAN,  THALTEJ",
      // extraPhone: "fdfdfdfdfd",
    },
    {
      content1: "SWAMI MARKETING",
      supplierName: "MR. RADHAKISHAN J. GALANI",
      mapLocation: "AHMEDABAD, GUJARAT",
      phone: "+919825312223",
      Address:
        "JUDGES BUNGLOW, 29 30, AKASH TOWER, OPP PREMCHAND NAGAR, BODAKDEV",
      // extraPhone: "fdfdfdfdfd",
    },
    {
      content1: "MA UMIYA PLYWOOD & HARDWARE",
      supplierName: "MR. PATEL SURESH PRAHLADBHAI",
      mapLocation: "AHMEDABAD, GUJARAT",
      phone: "+919879830339",
      Address:
        "GROUND FLOOR SHOP NO.5, MADHAV ORCHID, S P RING RPAD, NAVA ODHAV",
    },
    {
      content1: "WOODLINK",
      supplierName: "MR. RAHUL PATEL",
      mapLocation: "AHMEDABAD, GUJARAT",
      phone: "+919925033905",
      Address:
        "SURVEY NO.3/1, NEAR RAMDEV MASALA, SOLA BRIDGE CORNER, SOLA",
    },
    {
      content1: "R D THAKKAR AND SONS",
      supplierName: "MR. PRAKASH THAKKAR",
      mapLocation: "AHMEDABAD, GUJARAT",
      phone: "+919879750098",
      Address: "1062/N/2/A, SAHKARI LATI BAZAR PART-1, JAGANNATHJI ROAD",
    },
  ];
  
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const options1 = [
    "GUJARAT",
    "TELANGANA",
    "KERELA",
    "KARNATAKA",
    "MADHYA PRADESH",
    "WEST BENGAL",
    "BIHAR",
    "HARYANA",
    "HIMACHAL PRADESH",
    "MAHARASHTRA",
    "TAMIL NADU",
    "UTTAR PRADESH",
    "NEW DELHI",
    "GOA",
    "JHARKHAND",
    "ODISHA",
    "ANDHRA PRADESH",
    "RAJASTHAN",
    "ASSAM",
    "PUNJAB",
  ];
  const [sortedStates] = useState(options1.sort());

  const stateDistricts = [
    {
      state: "GUJARAT",
      districts: [
        "AHMEDABAD",
        "DAHOD",
        "NARMADA",
        "ANKLESHWAR",
        "GANDHINAGAR",
        "SURAT",
        "VALSAD",
        "VADODARA",
        "HIMATNAGAR",
        "KHEDBRAHMA",
        "ANAND",
        "KUTCH",
        "RAJKOT",
        "MORBI",
        "MEHSANA",
        "KESHOD",
        "PORBANDAR",
      ],
    },
    {
      state: "TELANGANA",
      districts: ["HYDERABAD", "WARANGAL", "KARIMNAGAR", "KHAMMAM", "NAGOLE"],
    },
    {
      state: "KERELA",
      districts: [
        "ERNAKULAM",
        "KANNUR",
        "KOTTAYAM",
        "KOZHIKODE",
        "MALAPPURAM",
        "PALAKKAD",
        "THIRUVANANTHAPURAM",
        "THRISSUR",
      ],
    },
    {
      state: "KARNATAKA",
      districts: [
        "BANGALORE",
        "BELLARY",
        "DHARWAD",
        "KALABURAGI",
        "BAGALKOT",
        "BALLARI",
        "BELAGAVI",
        "BIDAR",
        "BIJAPUR",
        "CHITRADURGA",
        "DAVANGERE",
        "RAICHUR",
      ],
    },
    {
      state: "MADHYA PRADESH",
      districts: [
        "INDORE",
        "BHOPAL",
        "KHANDWA",
        "RATLAM",
        "SHAJAPUR",
        "SHIVPURI",
        "BURHANPUR",
        "GUNA",
        "JABALPUR",
        "KHARGONE",
      ],
    },
    {
      state: "WEST BENGAL",
      districts: ["KOLKATA", "BARDHAMAN", "NORTH 24 PARGANAS", "PURBA BURDWAN"],
    },

    { state: "RAJASTHAN", districts: ["JODHPUR"] },
    {
      state: "BIHAR",
      districts: [
        "PATNA",
        "BHAGALPUR",
        "DARBHANGA",
        "KISHANGANJ",
        "PURNIA",
        "ARARIA",
        "BHOJPUR",
        "GAYA",
        "MUZAFFARPUR",
        "NAWADA",
        "BIHAR SHARIF",
        "ROHTAS",
        "SAHARSA",
      ],
    },
    {
      state: "HARYANA",
      districts: ["AMBALA", "KAITHAL", "REWARI", "GURGAON"],
    },
    { state: "HIMACHAL PRADESH", districts: ["TEHSIL UNA"] },
    {
      state: "MAHARASHTRA",
      districts: [
        "MUMBAI",
        "NAGPUR",
        "AHMEDNAGAR",
        "CHANDRAPUR",
        "GONDIA",
        "BHANDARA",
        "BHANDUP",
        "DHULE",
        "GADCHIROLI",
        "NANDURBAR",
        "PANVEL",
        "PUNE",
        "THANE",
        "WARDHA",
        "WASHIM",
        "YAVATMAL",
        "AKOLA",
        "AMRAVATI",
        "CHANDRAPUR",
      ],
    },
    { state: "GOA", districts: ["SOUTH GOA"] },
    { state: "NEW DELHI", districts: ["PITAM PURA"] },
    {
      state: "JHARKHAND",
      districts: ["JAMSHEDPUR", "DHANBAD", "DEOGHAR", "HAZARIBAG"],
    },
    {
      state: "UTTAR PRADESH",
      districts: [
        "GHAZIABAD",
        "AGRA",
        "BAREILLY",
        "GAUTAM BUDDHA NAGAR",
        "MEERUT",
        "MORADABAD",
        "VARANASI",
      ],
    },
    { state: "ANDHRA PRADESH", districts: ["KURNOOL"] },
    { state: "ASSAM", districts: ["DIBRUGARH", "JORHAT", "TINSUKIA"] },
    {
      state: "PUNJAB",
      districts: ["SANGRUR", "BHATINDA", "PATIALA", "SAMANA"],
    },
    {
      state: "ODISHA",
      districts: [
        "BHUBANESHWAR",
        "GANJAM",
        "CUTTACK",
        "KHORDHA",
        "NABARANGPUR",
      ],
    },
    {
      state: "TAMIL NADU",
      districts: ["CHENNAI", "COIMBATORE", "KRISHNAGIRI", "MADURAI"],
    },
  ];
  stateDistricts.sort((a, b) => a.state.localeCompare(b.state));

  // Sort the districts array within each state alphabetically
  stateDistricts.forEach((state) => {
    state.districts.sort((a, b) => a.localeCompare(b));
  });

  // console.log(stateDistricts);

  const options2 =
    stateDistricts.find((item) => item.state === selectedOption1)?.districts ||
    [];
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedLocationContent, setSelectedLocationContent] = useState(defaultCityData);

  const locationsData = {
    GUJARAT: {
      AHMEDABAD: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Ahmedabad, DEVDEEP DÉCOR LLP",
          supplierName: "MR. MANDEEP PATEL",
          mapLocation: "AHMEDABAD, GUJARAT",
          phone: "+919624045453",
          Address:
            "GROUND FLOOR 4-5-6, SOHAM PRISTINE, NR SHALIGRAM-2, NR. SHAJANAND BUNGLOW, SINDHUBHAVAN,  THALTEJ",
          // extraPhone: "fdfdfdfdfd",
        },
        {
          content1: "SWAMI MARKETING",
          supplierName: "MR. RADHAKISHAN J. GALANI",
          mapLocation: "AHMEDABAD, GUJARAT",
          phone: "+919825312223",
          Address:
            "JUDGES BUNGLOW, 29 30, AKASH TOWER, OPP PREMCHAND NAGAR, BODAKDEV",
          // extraPhone: "fdfdfdfdfd",
        },
        {
          content1: "MA UMIYA PLYWOOD & HARDWARE",
          supplierName: "MR. PATEL SURESH PRAHLADBHAI",
          mapLocation: "AHMEDABAD, GUJARAT",
          phone: "+919879830339",
          Address:
            "GROUND FLOOR SHOP NO.5, MADHAV ORCHID, S P RING RPAD, NAVA ODHAV",
        },
        {
          content1: "WOODLINK",
          supplierName: "MR. RAHUL PATEL",
          mapLocation: "AHMEDABAD, GUJARAT",
          phone: "+919925033905",
          Address:
            "SURVEY NO.3/1, NEAR RAMDEV MASALA, SOLA BRIDGE CORNER, SOLA",
        },
        {
          content1: "R D THAKKAR AND SONS",
          supplierName: "MR. PRAKASH THAKKAR",
          mapLocation: "AHMEDABAD, GUJARAT",
          phone: "+919879750098",
          Address: "1062/N/2/A, SAHKARI LATI BAZAR PART-1, JAGANNATHJI ROAD",
        },
      ],
      DAHOD: [
        {
          content1: "BURHANI GENERAL HARDWARE",
          supplierName: "MR. BURHANI ABDULHUSEN CHUNAWALA",
          mapLocation: "AHMEDABAD, GUJARAT",
          phone: "+912673221505",
          Address:
            "361/14, BURHANI GENERAL HARDWARE, NEAR OVERBRIDGE ZALOD ROAD",
        },
      ],
      NARMADA: [
        {
          content1: "PAYAL PLY AND GLASS HARDWARE",
          supplierName: "MR. PRAMESH KUMAR VARMA",
          mapLocation: " NARMADA, GUJARAT",
          phone: "+919725688445",
          Address:
            "SURYA PLAZA COMPLEX, G-20, 21, NEAR SANTOSH CHAR RASTA, RAJPIPLA",
        },
      ],
      ANKLESHWAR: [
        {
          content1: "JALARAM HARDWARE AND PLYWOOD CENTER",
          supplierName: "MR. ARUNBHAI M. PATEL",
          mapLocation: "ANKLESHWAR, GUJARAT",
          phone: "+919824463583",
          Address: "5, ANURADHA COMPLEX, STATION ROAD, OPP.NAGARPALIKA",
        },
      ],
      GANDHINAGAR: [
        {
          content1: "RAJDHANI PLYWOOD",
          supplierName: "MR. NAVIN PATEL",
          mapLocation: "GANDHINAGAR, GUJARAT",
          phone: "+919825281177",
          Address: "PLOT NO. 380/1, NR R WORLD 16 MALL, SECTOR 16",
        },
      ],
      SURAT: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Surat, ROYALE TOUCHE SURAT",
          supplierName: "MR. MAHESHBHAI",
          mapLocation: "SURAT, GUJARAT",
          phone: "+919904330388",
          Address:
            "PLOT NO.14 TO 16,LALWALA IND,ESTATE,120 BAMROLI ROAD,UDHANA",
        },
        {
          content1: "ARIHANT INTERIOR GALLERY ",
          supplierName: "MR. HIMANSHU A. JAIN",
          mapLocation: "SURAT, GUJARAT",
          phone: "+919426115365",
          Address:
            "PLOT NO.2, SHUBH MANGAL NAGAR SOCIETY, NEAR KALAPI GARDEN, ADAJAN",
        },
        {
          content1: "KANAIYA HARDWARE",
          supplierName: "MR. KAUSHIKBHAI B. GINOYA",
          mapLocation: "SURAT, GUJARAT",
          phone: "+919825250917",
          Address:
            "66-67-68, RAM NAGAR SOCIETY, LAXMIKANT ASHRAM ROAD, KATARGAM",
        },
      ],
      VALSAD: [
        {
          content1: "FURNIPART",
          supplierName: "MR. HIREN SHANTILAL GALA",
          mapLocation: "VALSAD, GUJARAT",
          phone: "+917874113007",
          Address:
            "SURVEY NO.3074, SHOP NO.8/582/0 TO 8/587/0 AND 3161/0, 3871/0, IMRANNAGAR, VAPI",
        },
      ],
      VADODARA: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Vadodara, Royale Touche Sales",
          supplierName: "Mr. Ramnik Dhulesiya",
          mapLocation: "VADODARA, GUJARAT",
          phone: "98250 43390",
          Address: "5-6-7,  Sai Rachna, R. V. Desai Char Rasta, Baroda",
        },
        {
          content1: "R K PATEL & CO",
          supplierName: "MR. MOHANBHAI RATIBHAI PATEL",
          mapLocation: "VADODARA, GUJARAT",
          phone: "+918155006002",
          Address: "MOTNATH MAHADEV ROAD, HARNI ROAD",
        },
      ],
      HIMATNAGAR: [
        {
          content1: "UMA SALES",
          supplierName: "MR. KRUNALBHAI R. PATEL",
          mapLocation: "VADODARA, GUJARAT",
          phone: "+918866337411",
          Address: "OPP ANAND APARTMENT, SAHAKARI JIN ROAD",
        },
      ],
      KHEDBRAHMA: [
        {
          content1: "LAXMI HARDWARE STORES",
          supplierName: "MR. NARSINHBHAI PATEL",
          mapLocation: " KHEDBRAHMA, GUJARAT",
          phone: "+919879761701",
          Address: "STATE HIGHWAY ROAD, OPP.NAGANESHWARI PUMP,KHEDBRAHMA",
        },
      ],
      ANAND: [
        {
          content1: "GAYATRI LAMINATES",
          supplierName: "MR. NIRAVKUMAR BHARATBHAI PATEL",
          mapLocation: "ANAND, GUJARAT",
          phone: "+919979866709",
          Address: "SHOP NO.5, RADHASWAMI SUMIT, GOPI CINEMA ROAD, ANAND",
        },
      ],
      KUTCH: [
        {
          content1: "SILVER ENTERPRISE",
          supplierName: "MRS. ROSHNI MUKESH GADHECHA",
          mapLocation: "KUTCH, GUJARAT",
          phone: "02832254961",
          Address: "SILVER POINT, NEW STATION ROAD, BHUJ",
        },
      ],
      RAJKOT: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Rajkot, DEVDEEP DÉCOR LLP",
          supplierName: "MR. MANDEEP PATEL",
          mapLocation: "RAJKOT, GUJARAT",
          phone: "+91 9724013737",
          Address:
            "NEAR SATYA VIJAY PATEL ICE CREAM, BHAKTINAGAR STATION ROAD, OFF GONDAL ROAD",
        },
      ],
      MORBI: [
        {
          content1: "BHOLENATH ENTERPRISES",
          supplierName: "MR. NITINBHAI PATEL",
          mapLocation: "MORBI, GUJARAT",
          phone: "+919427731229",
          Address: "17/18, NAYAN JYOT CHAMBERS, NR BUS STAND,  GONDAL",
        },
        {
          content1: "RAJA WOODEN SUPPLIERS",
          supplierName: "MR. MR. HATIM BHAI",
          mapLocation: "MORBI, GUJARAT",
          phone: "+919898304320",
          Address:
            "GROUND FLOOR, PLOT NO 15, STREET NO.4, SANALA ROAD, GIDC PLOT NO.15",
        },
      ],
      PORBANDAR: [
        {
          content1: " J.K.ENTERPRISES",
          supplierName: "MR. JAY C KOTECHA",
          mapLocation: "PORBANDAR, GUJARAT",
          phone: "+919825230211",
          Address: "PRESIDENT COMPLEX, HOTEL KUBER BUILDING",
        },
      ],
      MEHSANA: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Mehsana, Ambica Enterprises",
          supplierName: "Mr. Jagdish V. Patel, Mr. Mahesh bhai Patel",
          mapLocation: "MEHSANA, GUJARAT",
          phone: "'9662431788, 98253 52675",
          Address:
            "84 A, Apna Bazar, Outside Bhamariya Nala, B. K. Road, Mehsana",
        },
        {
          content1: "NEW VENEER WORLD",
          supplierName: "MR. HARSHAD PATEL",
          mapLocation: "MEHSANA, GUJARAT",
          phone: "+919979412904",
          Address: "G/77-78, SINGAPUR HUB, MALGODOWN ROAD",
        },
      ],
    },

    TELANGANA: {
      HYDERABAD: [
        {
          content1: "SRI DATTA AGENCIES",
          supplierName: "MR. BHASKAR KOTTA",
          mapLocation: " HYDERABAD, TELANGANA",
          phone: "+919247808999",
          Address: "201, ADITYA NAGAR, KUKATPALLY",
        },
        {
          content1: "SRI BALAJI IRON STEEL & HARDWARE MART",
          supplierName: "MR. MANOHAR REDDY M.",
          mapLocation: " HYDERABAD, TELANGANA",
          phone: "+919246586596",
          Address:
            "GROUND, 4-58J, VIKAS NAGAR, CHAITANYAPURI MAIN ROAD, DILSUK NAGAR",
        },
      ],
      WARANGAL: [
        {
          content1: "KANDAKATLA ARJUN RAO GLASS MART",
          supplierName: "MR. ARJUN RAO",
          mapLocation: " HANUMAKONDA, TELANGANA",
          phone: "+919849472792",
          Address: "6-7-68, MAIN ROAD RAGANNADARAWAZA, HANAMKONDA WARANGAL",
        },
      ],
      KARIMNAGAR: [
        {
          content1: "LAXMI HARDWARE AND PLYWOOD",
          supplierName: "MR. V. YASHWANTH REDDY",
          mapLocation: "  KARIMNAGAR, TELANGANA",
          phone: "+919845786668",
          Address: "3-1-11 TO 17, CVRN ROAD",
        },
      ],
      KHAMMAM: [
        {
          content1: "SRI UMIYA HARDWARE",
          supplierName: "MR. DAHYALAL PATEL",
          mapLocation: "KHAMMAM, TELANGANA",
          phone: "+919642292933",
          Address: "8-2-165/9, WYRA ROAD",
        },
      ],
      NAGOLE: [
        {
          content1: "SRI BHAVANI AGENCIES",
          supplierName: "MR. MADHUSUDAN",
          mapLocation: " NAGOLE, TELANGANA",
          phone: "+91 8347009868",
          Address:
            "PLOT NO 45, D NO 2-3-136, ROAD NO 5, CO OPERATIVE BANK COLONY, NAGOLE",
        },
      ],
    },

    KERELA: {
      ERNAKULAM: [
        {
          content1: "VPK DISTRIBUTORS",
          supplierName: "MR. MUHAMMED NADISH",
          mapLocation: "ERNAKULAM, KERALA",
          phone: "+917736777786",
          Address:
            "13/912 A A1, ANCHUKANDATHIL, JUMA MASJID ROAD THOPPIL JUNCTION, EDAPPALLY",
        },
      ],
      KANNUR: [
        {
          content1: "K L ABDUL SATHAR IMPEX PVT LTD",
          supplierName: "MR. UZAIR SATHAR",
          mapLocation: "KANNUR, KERALA",
          phone: "+918891000055",
          Address: "NEW XL VII-2627, 04/15B, NEAR MAKHANI, SOUTH BAZAR",
        },
      ],
      KOTTAYAM: [
        {
          content1: "FAIR TRADERS",
          supplierName: "MR. SHAHUL HAMEED",
          mapLocation: "KOTTAYAM, KERALA",
          phone: "+918137973747",
          Address:
            "1, VIII/290/T,VIII/1145/T, K K ARCADE, OPP.MARCELLINAS SCHOOL, MADOM JN, S H MOUNT",
        },
      ],
      KOZHIKODE: [
        {
          content1: "M K VENEERS & LAMINATES",
          supplierName: "MR. ASIK RAHIMAN",
          mapLocation: "KOZHIKODE, KERALA",
          phone: "+919895017178",
          Address: "19/1187Z,19/1187Z1,19/1187Z2, REVATHI ARCADE, CHALAPURRAM,",
        },
      ],
      MALAPPURAM: [
        {
          content1: "WOOD PLY",
          supplierName: "MR. M.A. ABDURAHMAN",
          mapLocation: "MALAPPURAM, KERALA",
          phone: "+919447126378",
          Address: "633-3, PERINTHALMANNA",
        },
      ],
      PALAKKAD: [
        {
          content1: "OLIVE PLY",
          supplierName: "MR. MARIYAMBI M T",
          mapLocation: "PALAKKAD, KERALA",
          phone: "+919037188263",
          Address: "15/239 4, LAKHSHMI GARDENS, MATHAKOVIL STREET",
        },
      ],
      THIRUVANANTHAPURAM: [
        {
          content1: "LEELA DISTRIBUTORS",
          supplierName: "MR. KIRAN KUMAR R",
          mapLocation: "THIRUVANTHAPURAM, KERALA",
          phone: "+919447323618",
          Address:
            "TC 43/648, DEVI TOWER, KOCHAR ROAD, VALIYASALAI, CHALAI P.O",
        },
      ],
      THRISSUR: [
        {
          content1: "PLYLAND & HARDWARES",
          supplierName: "MR. IBRAHIM P.W",
          mapLocation: "THRISSUR, KERALA",
          phone: "+919447308946",
          Address: "GROUND FLOOR, XXV/710/5, HIRA BUILDING, MANNATH LANE",
        },
      ],
    },

    KARNATAKA: {
      BANGALORE: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Bangalore, Royale touche Inc.",
          supplierName: "Mr.Shivalik Roy",
          mapLocation: "BANGALORE, KARNATAKA",
          phone: "9108763331 , 9108763332",
          Address:
            "No.18, Ranganatha Layout, 2nd cross, Flower Garden, Mysore Road, Opp.BHEL, Bengaluru-560026.",
        },
        {
          content1: "OM TIMBER",
          supplierName: "MR. DEEPAK PATEL",
          mapLocation: "BANGALORE, KARNATAKA",
          phone: "+919845863904",
          Address:
            "40/1B, SARJAPURA MAIN ROAD, DODDAKONAHALLI, CARMELURAM POST",
        },
        {
          content1: "ANAND ENTERPRISES",
          supplierName: "MR. ANAND KUMAR BANSAL",
          mapLocation: "BANGALORE, KARNATAKA",
          phone: "+919900919289",
          Address: "854/18A, PP INDL AREA, MYSORE ROAD, DEEPANJALINAGAR",
        },
        {
          content1: "BHARAT WOOD",
          supplierName: "MR. GIRISH L PATEL",
          mapLocation: "BANGALORE, KARNATAKA",
          phone: "+919008362363",
          Address: "NO, 4/1, OUTER RING ROAD, MAHADEVAPURA POST, MAHADEVAPURA",
        },
      ],
      BELLARY: [
        {
          content1: "HEERA TRADE LINKS",
          supplierName: "MR. R. MADANLAL BHARAT",
          mapLocation: "BELLARY, KARNATAKA",
          phone: "+919448354860",
          Address: "216 OF VI WARD, B H ROAD RANIPET, HOSPET",
        },
      ],
      DHARWAD: [
        {
          content1: "RVM BUILDZONE LLP",
          supplierName: "MR. VIKAS CHOPRA",
          mapLocation: "DHARWAD, KARNATAKA",
          phone: "+919343107947",
          Address:
            "NEAR DECATHLON, 98/B/4A,4B,4C,4D, KRISHNAPUR, GOKUL ROAD, HUBLI",
        },
      ],
      KALABURAGI: [
        {
          content1: "HINDUSTAN TRADERS",
          supplierName: "MR. M A SALAM",
          mapLocation: "KALABURAGI, KARNATAKA",
          phone: "+919986043005",
          Address: "SHOP NO 2, MINI VIDHANA SOUDHAROAD",
        },
      ],
      BAGALKOT: [
        {
          content1: "PATIL PLYWOOD AND HARDWARE",
          supplierName: "MR. RAJASHEKHAR S PATIL",
          mapLocation: "BAGALKOT, KARNATAKA",
          phone: "+919845198798",
          Address: "PLOT NO E16, SECTOR NO 04, NAVANAGAR",
        },
      ],
      BALLARI: [
        {
          content1: "JAIN HARDWARE",
          supplierName: "MR. KAMAL JAIN",
          mapLocation: "BALLARI, KARNATAKA",
          phone: "+919449779666",
          Address: "4TH CROSS OPP MARY MATHA CHURCH, VIDYA NAGAR",
        },
      ],
      BELAGAVI: [
        {
          content1: "HEDA PLYWOODS",
          supplierName: "MR. ANAND S HEDA",
          mapLocation: "BELAGAVI, KARNATAKA",
          phone: "+919845109711",
          Address: "18, HEDA MANSION, KHANPUR ROAD, TILAKWADI",
        },
      ],
      BIDAR: [
        {
          content1: "SURYA PLYWOOD AND GLASS CENTER",
          supplierName: "MR. LEELADHAR PATEL",
          mapLocation: "BIDAR, KARNATAKA",
          phone: "+918277357001",
          Address:
            "TIRUMALA TIRUPATI PLAZA, B.V.B.COLLEGE ROAD, NEAR OLD HERO HONDA SHOW ROOM",
        },
      ],
      BIJAPUR: [
        {
          content1: "PREM HARDWARE, BIJAPUR",
          supplierName: "MR. PREMKUMAR BHATI",
          mapLocation: "BIJAPUR, KARNATAKA",
          phone: "+919731485055",
          Address: "NEAR SHIVAJI CIRCLE, SHIVAJI CIRCLE, M G ROAD",
        },
      ],
      CHITRADURGA: [
        {
          content1: "SRI MAHALAXMI FRAME WORKS",
          supplierName: "MR. A. MANJUNATHA",
          mapLocation: "CHITRADURGA, KARNATAKA",
          phone: "+919844413764",
          Address: "1, SRI MAHALAKSHMI FRAME WORKS, CHICKPET, CHITRADURGA",
        },
      ],

      DAVANGERE: [
        {
          content1: "N S JAYADEVA PLYWOODS",
          supplierName: "MR. TAYADEVA N.K",
          mapLocation: "DAVANGERE, KARNATAKA",
          phone: "+919900003200",
          Address:
            "GROUND FLOOR NEAR LAKSHMI FLOUR MILL, D NO 23/1, SRI KANNADATHI, SIR M V ROAD SRI NIJALINGAPPA LAYOUT",
        },
      ],
      RAICHUR: [
        {
          content1: "SHANTI HARDWARE & PLYWOOD CENTRE",
          supplierName: "MR. ARVIND PATEL",
          mapLocation: "RAICHUR, KARNATAKA",
          phone: "+919449874235",
          Address: "12-9-40, 12-9-40/1, GUNJ ROAD OPP POORNIMA TALKIES",
        },
      ],
    },

    "MADHYA PRADESH": {
      INDORE: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Indore, Royale touche Inc.",
          supplierName: "Mr. Suresh Nuhal & Mr. Bhagvan Nuhal",
          mapLocation: "INDORE, MADHYA PRADESH",
          phone: "98932 92400, 98270 29050",
          Address:
            "87, Sapna Sangeeta Road, Near Center Point, Indore - 452001",
        },
        {
          content1: "NATIONAL PLYWOOD GALLERY",
          supplierName: "MR. AMIT SHAH",
          mapLocation: "INDORE, MADHYA PRADESH",
          phone: "+919826629923",
          Address: "UC-1 & 2, SILVER MALL COMPLEX 8-A R N T MARG",
        },
      ],
      BHOPAL: [
        {
          content1: "ARYA PLYWOODS",
          supplierName: "MR. SANTOSH BAJAJ",
          mapLocation: "BHOPAL, MADHYA PRADESH",
          phone: "+919827015174",
          Address: "144, ZONE II, MP NAGAR",
        },
      ],
      KHANDWA: [
        {
          content1: "SETHI PLYWOOD & GLASSS HOUSE",
          supplierName: "MR. HITESH SETHI",
          mapLocation: "KHANDWA, MADHYA PRADESH",
          phone: "+919826365777",
          Address: "25, KAPAS MANDI AREA, JALEBI CHAUK, PANDHANA ROAD",
        },
      ],
      RATLAM: [
        {
          content1: "AVIRAJ TIMBER AND PLYWOOD",
          supplierName: "MR. AVI DHANWANI",
          mapLocation: "RATLAM, MADHYA PRADESH",
          phone: "+919827539700",
          Address: "151-152, DHAMMANI BHAWAN, LAKKAD PITHA",
        },
      ],
      SHAJAPUR: [
        {
          content1: "KHURANA PLY & FURNITURE HOME",
          supplierName: "MR. AMIT KHURANA",
          mapLocation: "SHAJAPUR, MADHYA PRADESH",
          phone: "+919425921748",
          Address: "M.G.ROAD",
        },
      ],

      SHIVPURI: [
        {
          content1: "ASHISH HARDWARE & SANITARY STORE PROP. ASHISH KHANDELWAL",
          supplierName: "MR. ASHISH KHANDELWAL",
          mapLocation: "SHIVPURI, MADHYA PRADESH",
          phone: "+919425488815",
          Address: "SHANKAR COLONY",
        },
      ],

      BURHANPUR: [
        {
          content1: "SHAAMA HARDWARE STORE",
          supplierName: "MR. SHYAM KUMAR CHHABRA",
          mapLocation: "BURHANPUR, MADHYA PRADESH",
          phone: "+91789814441",
          Address: "SUBHASH CHOWK",
        },
      ],
      GUNA: [
        {
          content1: "NEW BRIJENDRA STORES",
          supplierName: "MR. RAJESH AGRAWAL",
          mapLocation: "GUNA, MADHYA PRADESH",
          phone: "+919425131051",
          Address: "NEAR OVER BRIDGE, GURUNANAK COLONY, A B ROAD",
        },
      ],
      JABALPUR: [
        {
          content1: "NATRAJ TRADES PROP MUKESH GUPTA",
          supplierName: "MR. MUKESH GUPTA",
          mapLocation: "JABALPUR, MADHYA PRADESH",
          phone: "+919425152479",
          Address:
            "FRONT OF PACHORI PETROL PUMP,69, MANMOHAN NAGAR, VIKAS NAGAR",
        },
      ],
      KHARGONE: [
        {
          content1: "SUMUKH PLYWOOD AND HARDWARE",
          supplierName: "MR. SHYAM SARAF",
          mapLocation: "KHARGONE, MADHYA PRADESH",
          phone: "+9198982598289",
          Address: "A71, RADHA VALLABH MARKET",
        },
      ],
    },

    "WEST BENGAL": {
      KOLKATA: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Kolkata, Sumit Laminart Pvt. Ltd.",
          supplierName: "Mr. Harish Asopa",
          mapLocation: "KOLKATA, WEST BENGAL",
          phone: "9007082166/ 9007067200, 9831097616",
          Address: "242, B. B. Ganguly Street, Kolkata - 700012",
        },
        {
          content1: "THE LIVING IDEA",
          supplierName: "MR. SANJAY KUMAR SHAW",
          mapLocation: "KOLKATA, WEST BENGAL",
          phone: "+919433247095",
          Address: "1ST, 14/2, NIMTALA GHAT STREET, JORABAGAN",
        },
        {
          content1: "SHIVAM SALES AGENCY",
          supplierName: "MR. DIPAK AGARWAL",
          mapLocation: "KOLKATA, WEST BENGAL",
          phone: "+919883969767",
          Address: "PLOT 9, NAZIRABAD, KARIMPUR",
        },
      ],
      BARDHAMAN: [
        {
          content1: "SHREE DURGA PLYWOOD",
          supplierName: "MR. AMIT SARAFF",
          mapLocation: " BARDHMAN, WEST BENGAL",
          phone: "+919434251907",
          Address: "H-10, ZONAL CENTRE, J.P. AVENUE, DURGAPUR",
        },
        {
          content1: "SWASTIK PLY & GLASS",
          supplierName: "MR. KIRTIK PATEL",
          mapLocation: " BARDHMAN, WEST BENGAL",
          phone: "+918016300881",
          Address: "STATION ROAD, NEAMATPUR",
        },
        {
          content1: "MANGALAM INTERIOR AND HOME DÉCOR",
          supplierName: "MR. SUNIL JALAN",
          mapLocation: " BARDHMAN, WEST BENGAL",
          phone: "+919832171006",
          Address: "GROUND FLOOR, NSB ROAD NEAR HDFC BANK, RANIGANJ",
        },
      ],
      "NORTH 24 PARGANAS": [
        {
          content1: "GAYATREE TIMBER CORPORATION",
          supplierName: "MR. PRITESH PATEL",
          mapLocation: " NORTH 24 PARGANAS, WEST BENGAL",
          phone: "+919830216692",
          Address: "29, DUM DUM ROAD, DUM DUM",
        },
      ],
      "PURBA BURDWAN": [
        {
          content1: "SHREE RAM TRADERS",
          supplierName: "MR. GOVIND PATEL",
          mapLocation: " PURBA BURDHWAN, WEST BENGAL",
          phone: "+919434665225",
          Address:
            "NETAJI NAGAR, OPP CITY NURSING HOME, G T ROAD, KESHABGANJ CHATTI",
        },
      ],
    },

    BIHAR: {
      PATNA: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Patna, Patna Plywood",
          supplierName: "Mr. Umesh kumar Chokhani",
          mapLocation: " PATNA, BIHAR",
          phone: "'9334330117, 9110940582",
          Address:
            "Patna Plywood, Hotel Raj Kumar Building, Exhibition Road, Patna",
        },
        {
          content1: "OLYMPIC DÉCOR LLP",
          supplierName: "MR. VINAY MISHRA",
          mapLocation: "PATNA, BIHAR",
          phone: "+919821199577",
          Address:
            "THANA-AAGAMKAUN, GROUND FLOOR OF MOUZA JAKARIYAPUR, TOJI NO 434, KHATA NO 107, JAKARIYAPUR, PATNA CITY",
        },
        {
          content1: "SHAKTI SALES",
          supplierName: "MRS. GAURI SHANKER TULSYAN",
          mapLocation: "PATNA, BIHAR",
          phone: "+917677777731",
          Address: "90 FIT ROAD, KANKARBAGH",
        },
      ],
      BHAGALPUR: [
        {
          content1: "KRISHNA HARDWARE",
          supplierName: "MR. MANOJ KUMAR SARAF",
          mapLocation: "BHAGALPUR, BIHAR",
          phone: "+919939886464",
          Address: "WARD NO.38, HOLDING NO.30, SAKHICHAND KATRA LANE",
        },
      ],
      DARBHANGA: [
        {
          content1: "APOLLO FURNITURE",
          supplierName: "MR. AVINASH KUMAR BHAGAT",
          mapLocation: "DARBHANGA, BIHAR",
          phone: "+919973117993",
          Address:
            "KABIRCHAK GUNJ, NEAR MIDDLE SCHOOL, SH 56,BELAYAKUB, NEAR GRAMIN BANK",
        },
      ],
      KISHANGANJ: [
        {
          content1: "ANAND & ASSOCIATES",
          supplierName: "MR. RAHUL ANAND",
          mapLocation: "KISHANGANJ, BIHAR",
          phone: "+916201652071",
          Address: "INSAN SCHOOL ROAD, KABIR CHOUK",
        },
      ],
      PURNEA: [
        {
          content1: "DRISHTI ENTERPRISES",
          supplierName: "MRS. KUMARI SIMA",
          mapLocation: "PURNEA, BIHAR",
          phone: "+919952045075",
          Address: "1151, GIRJA CHOWK, NEAR RAJENDRA BAL UDYAN",
        },
      ],
      ARARIA: [
        {
          content1: "JASPAL HARDWARE",
          supplierName: "MR. DEEP KAUR",
          mapLocation: "ARARIA, BIHAR",
          phone: "+919572750387",
          Address: "WARD NO.8, HOSPITAL ROAD NEAR ALLAHABAD BANK, FORBESGANJ",
        },
      ],
      BHOJPUR: [
        {
          content1: "SHEKHAR INTERIOR SOLUTION",
          supplierName: "MR. DHIRAJ KUMAR SINGH",
          mapLocation: "BHOJPUR, BIHAR",
          phone: "+919102530501",
          Address: "KARMAN TOLA, ARA",
        },
      ],
      "BIHAR SHARIF": [
        {
          content1: "M.R. GLASS AND HARDWARE PLY",
          supplierName: "MR. MANOJ KUMAR",
          mapLocation: "BIHAR SHARIF, BIHAR",
          phone: "+919708022047",
          Address: "VIMLA MARKET, NALA ROAD RAMCHANDRAPUR",
        },
      ],
      GAYA: [
        {
          content1: "MODERN PLY HOUSE",
          supplierName: "MR. FAISAL ATIF",
          mapLocation: "GAYA, BIHAR",
          phone: "+918863956395",
          Address: "NAND VILAS, 24/30, RAI SHITAL PRASAD ROAD",
        },
      ],
      MUZAFFARPUR: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Muzzaffarpur, Sitaram Traders",
          supplierName: "Mr. Ramchandra Prasad",
          mapLocation: "MUZAFFARPUR, BIHAR",
          phone: "9199369827, 9006312673",
          Address: "old Zeromile,Medical road, sahbajpur Muzaffapur",
        },
        {
          content1: "MARUTI PLY AND GLASS",
          supplierName: "MR. AMIT SARAF",
          mapLocation: "MUZAFFARPUR, BIHAR",
          phone: "+919473457711",
          Address: "RAJ MARKET, AKHARAGHAT ROAD",
        },
      ],
      NAWADA: [
        {
          content1: "S S PLY & GLASS",
          supplierName: "MR. SACHCHIDA NAND",
          mapLocation: "NAWADA, BIHAR",
          phone: "+919835015990",
          Address: "PRASAD BIGHA, STADIUM ROAD",
        },
      ],
      ROHTAS: [
        {
          content1: "HINDUSTAN GLASS AND HOME DÉCOR",
          supplierName: "MR. GAURAV KUMAR",
          mapLocation: "ROHTAS, BIHAR",
          phone: "+919431429957",
          Address: "N/A, G.T.ROAD, SASARAM",
        },
      ],
      SAHARSA: [
        {
          content1: "SHYAM PLY",
          supplierName: "MR. RINKESH AGRAWAL",
          mapLocation: "SAHARSA, BIHAR",
          phone: "+919431657103",
          Address: "AGRAWAL CORNER, KAPRA PATTI",
        },
      ],
    },

    HARYANA: {
      AMBALA: [
        {
          content1: "GUPTA GLASS AND PLYWOOD STORE",
          supplierName: "MR. CHANDER MOHAN GUPTA",
          mapLocation: "AMBALA, HARYANA",
          phone: "+919416861861",
          Address: "OPP.KHALSA HIGH SCHOOL, HISSAR ROAD, AMBALA CITY",
        },
      ],
      KAITHAL: [
        {
          content1: "ARORA PLY AND HARDWARE STORE",
          supplierName: "MR. BHARAT BHUSAN ARORA",
          mapLocation: "KAITHAL, HARYANA",
          phone: "+919416035317",
          Address: "ARORA PLY AND HARDWARE STORE, CHHATRAWAS ROAD",
        },
      ],
      REWARI: [
        {
          content1: "DUA PLYWOOD & TIMBER TRADERS",
          supplierName: "MR. RAJENDR KUMAR",
          mapLocation: "REWARI, HARYANA",
          phone: "+919215527271",
          Address: "BEHIND CO OPERATIVE BANK, CIRCULAR ROAD",
        },
      ],
      GURGAON: [
        {
          content1: "HARYANA TIMBER STORE",
          supplierName: "MR. SURINDER WASAN",
          mapLocation: "GURGAON, HARYANA",
          phone: "+919811205197",
          Address: "BADA BAZAR, BASAI ROAD",
        },
      ],
    },

    "HIMACHAL PRADESH": {
      "TEHSIL UNA": [
        {
          content1: "M/S. SHREE ROOP MARKETING",
          supplierName: "MR. SUBHAM JAIN",
          mapLocation: "TEHSIL UNA, HIMACHAL PRADESH",
          phone: "+918894393333",
          Address: "HAMIRPUR ROAD UNA, UNA",
        },
      ],
    },

    MAHARASHTRA: {
      MUMBAI: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Mumbai, VASAI TIMBER INDUSTRIES PRIVATE LIMITED",
          supplierName: "MR. ALOK GUPTA",
          mapLocation: " MUMBAI, MAHARASHTRA",
          phone: "+919702400627",
          Address:
            "MULJI HOUSE, PLOT NO.AF-1, CAMA INDUSTRIAL ESTATE, OFF WALBHAT ROAD, BEHIND MONTEX HOUSE, GOREGAON EAST",
        },
        {
          content1: "PLY COTTAGE",
          supplierName: "MR. TARUNKUMAR DUNGARSINGHJI JAIN",
          mapLocation: " MUMBAI, MAHARASHTRA",
          phone: "+919821153021",
          Address:
            "GROUND FLOOR, SHOP.NO.1, BANSARI APARTMENT, PALI NAKA 30TH ROAD, BANDRA WEST",
        },
        {
          content1: "HAWA TRADING COMPANY",
          supplierName: "MR. ADNAN FARID DARVESH",
          mapLocation: " MUMBAI, MAHARASHTRA",
          phone: "+919833664774",
          Address: "83, MUSTAFA BAZAR, SANT SAVITA MARG, MAZGAON",
        },
        {
          content1: "SWASTIK PLYWOOD",
          supplierName: "MR. RAJESH MEHTA",
          mapLocation: " MUMBAI, MAHARASHTRA",
          phone: "+919892141318",
          Address: "SHOP NO.6, WELFERE CHAMBERS, SECTOR 17, VASHI",
        },
        {
          content1: "PARAS PLY",
          supplierName: "MR. MANSUKH KARSAN SHAH",
          mapLocation: " MUMBAI, MAHARASHTRA",
          phone: "+919821252443",
          Address:
            "6&7, STAR GALAXY APT., L.T.ROAD, OPP. ST ANNES SCHOOL, BORIVALI WEST",
        },
        {
          content1: "SAMEER ENTERPRISES",
          supplierName: "MR. JINESH K LAKHANI",
          mapLocation: " MUMBAI, MAHARASHTRA",
          phone: "+919930545019",
          Address: "SHOP.NO 2, JAINSONS PLAZA, S.V.ROAD, MALAD",
        },
        {
          content1: "SWASTIK PLYWOOD & VENEERS",
          supplierName: "MR. CHAMPAK P GADA",
          mapLocation: "MUMBAI SUBURBAN, MAHARASHTRA",
          phone: "+919820017015",
          Address: "14-14A, PRINCE PALACE, OPP. SARVODAY HOSPITAL, GHATKOPAR",
        },
        {
          content1: "SAHU & SONS",
          supplierName: "MR. MOHAN LAL SAHU",
          mapLocation: "MUMBAI CITY, MAHARASHTRA",
          phone: "+918850203948",
          Address: "57/59, MATRUCHHAYA BUILDING, S.K.BOLE ROAD, DADAR WEST",
        },
        {
          content1: "GOLDEN PLYWOOD",
          supplierName: "MR. PRAKASH C SOLANKI",
          mapLocation: "MUMBAI CITY, MAHARASHTRA",
          phone: "+919820086218",
          Address:
            "SHOP NO.30, NAVYUG MANSION, GRANT ROAD STATION, 83 N BHARUCHA MARG",
        },
      ],
      NAGPUR: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Nagpur, Arti Agencies",
          supplierName: "Mr. Magan Patel",
          mapLocation: "NAGPUR, MAHARASHTRA",
          phone: "9822228315",
          Address:
            "Plot No. 16 A, Opp. Jagat Regency Building, Bhandara Road, Lakadganj, Nagpur",
        },
        {
          content1: "PLY RANGE",
          supplierName: "MR. DEEPAK AGRAWAL",
          mapLocation: "NAGPUR, MAHARASHTRA",
          phone: "+919823038490",
          Address: "OPP. NETAJI MARKET MALVIYA ROAD, SITABULDING",
        },
        {
          content1: "JAI BHAWANI PLYWOOD CENTRE",
          supplierName: "MR. SUNIL K KHIYANI",
          mapLocation: "NAGPUR, MAHARASHTRA",
          phone: "+919371476371",
          Address: "OPP.PANKAJ TRADING, SAI VASANSHAH CHOWK, JARIPTKA",
        },
      ],
      AHMEDNAGAR: [
        {
          content1: "JYOTI SALES CORPORATION",
          supplierName: "MR. PRADIP B SHAH",
          mapLocation: " AHMEDNAGAR, MAHARASHTRA",
          phone: "+919850622633",
          Address:
            "96/4, PADTANI COMPLEX, BEHIND HOTEL, JOSHI PALACE, SANGAMNER",
        },
      ],
      CHANDRAPUR: [
        {
          content1: "SHIVAM FURNITURE & PLYWOOD CENTER",
          supplierName: "MR. CHANDU DARVANKAR",
          mapLocation: " CHANDRAPUR, MAHARASHTRA",
          phone: "+919850382293",
          Address:
            "NEAR SHUBHAM MANGAL KARYALAY, HOUSE NO 1454, JIJAMATA ROAD, WARORA",
        },
      ],
      GONDIA: [
        {
          content1: "ASHIRWAD PLYLAM",
          supplierName: "MR. MANOJKUMAR HASRANI",
          mapLocation: " GONDIA, MAHARASHTRA",
          phone: "+919922244420",
          Address: "GANESH NAGAR ROAD, NEAR CIRCUS GROUND",
        },
      ],
      BHANDARA: [
        {
          content1: "SINDH PLY AND GLASS AGENCIES",
          supplierName: "MR. BHARAT ASHOKKUMAR BHOJWANI",
          mapLocation: " BHANDARA, MAHARASHTRA",
          phone: "+919422130234",
          Address: "VAISHALI NAGAR, KHAT ROAD",
        },
      ],
      BHANDUP: [
        {
          content1: "MANGALAM PLY N LAMINATE",
          supplierName: "MR. TARUN JAIN",
          mapLocation: " BHANDUP, MAHARASHTRA",
          phone: "+919867181348",
          Address: "SHOP NO.6, MAYURESH SHRISTI, OPP ASIAN PAINTS",
        },
      ],
      DHULE: [
        {
          content1: "RATHOD PLY",
          supplierName: "MR. YOGESH RATHOD",
          mapLocation: " DHULE, MAHARASHTRA",
          phone: "+919422786863",
          Address: "1684, LANE NO 4, NEAR BALAJI MANDIR, KHOL GALI",
        },
      ],
      GADCHIROLI: [
        {
          content1: "SACHIN FURNITURE WORKS AND ALUMINIUM",
          supplierName: "MR. SANJAY WASUDEO WASEKAR",
          mapLocation: " GADCHIROLI, MAHARASHTRA",
          phone: "+919423719578",
          Address:
            "MAIN ROAD GADCHIROLI, C/O.ALKA WASUDEO WASEKAR, SHIVAJI NAGAR CAMP AREA WARD NO.18.",
        },
        {
          content1: "RAKESH FUTNITURE",
          supplierName: "MR. RAKESH GONGAL",
          mapLocation: " GADCHIROLI, MAHARASHTRA",
          phone: "+919049278807",
          Address: "LAHARI COMPLEX, LAKHANDUR ROAD, WADSA",
        },
      ],
      NANDURBAR: [
        {
          content1: "C M PLY & LAMINATES",
          supplierName: "MRS. PRAMILA NARENDRA JAIN",
          mapLocation: " NANDURBAR, MAHARASHTRA",
          phone: "+919822372883",
          Address: "SNO 38/3 PLOT NO 7, M L TOWN, NALWA ROAD, VAIBHAV NAGAR",
        },
      ],
      PANVEL: [
        {
          content1: "KRISHNA PLYWOOD",
          supplierName: "MR. MAHENDRA JAIN",
          mapLocation: " PANVEL, MAHARASHTRA",
          phone: "+919321113017",
          Address: "SHOP NO 4, ADITYA ARCADE, OPP. SBI BANK, OLD PANVEL",
        },
      ],
      PUNE: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Pune, Royale Touche Distributors",
          supplierName: "Mr. Suresh Patel, Mr. Miral Patel",
          mapLocation: " PUNE, MAHARASHTRA",
          phone: "9422085664, 9422085663",
          Address:
            "(Office) 224, Bhawani Peth, Shop No. A1, Kalptaru Plaza, Near Ramoshi Gate, Pune - 411042(ROYALE TOUCHE DISTRIBUTORS, 216/217, 2nd floor, Bhawani Peth, Kalptaru Plaza, Near Ramoshi Gate, Pune-411042)",
        },
        {
          content1: "DALAL & ASSOCIATES",
          supplierName: "MR. SURESH G DALAL",
          mapLocation: " PUNE, MAHARASHTRA",
          phone: "+919822025684",
          Address: "296, M.G.ROAD, OPP.BANK OF BARODA",
        },
        {
          content1: "CITYPLY",
          supplierName: "MR. VIPUL NANCHAD OSWAL",
          mapLocation: " PUNE, MAHARASHTRA",
          phone: "+919890011989",
          Address: "257, TIMBER MARKET, BHAWANI PETH",
        },
        {
          content1: "NATIONAL TIMBERS",
          supplierName: "MR. VIPUL JAIN",
          mapLocation: " PUNE, MAHARASHTRA",
          phone: "+919860000019",
          Address: "257/A, NEW TIMBER MARKET, BHAWANI PETH",
        },
      ],
      THANE: [
        {
          content1: "DURGA PLYWOOD CENTRE",
          supplierName: "MR. KISHOR R PATEL",
          mapLocation: " THANE, MAHARASHTRA",
          phone: "+919820740961",
          Address: "2, SHIRIN APARTMENT, AGRA ROAD, NEAR MAKHAMALI TALAO",
        },
        {
          content1: "NISAS WOODPLY",
          supplierName: "MR. ABDUL RAUF",
          mapLocation: " THANE, MAHARASHTRA",
          phone: "+919819763339",
          Address: "A WING, SHOP NO 8, RUPARL GARDEN, SECTOR 23, NERUL",
        },
      ],
      WARDHA: [
        {
          content1: "KIRTI TRADERS",
          supplierName: "MR. HITESH TANNA",
          mapLocation: " WARDHA, MAHARASHTRA",
          phone: "+919730286888",
          Address: "BUS STAND ROAD, OPP. NEW BUS STAND, HINGANGHAT",
        },
      ],
      WASHIM: [
        {
          content1: "MANGALAM PLYWOOD",
          supplierName: "MR. BHAVESH PATEL",
          mapLocation: " WASHIM, MAHARASHTRA",
          phone: "+919422861692",
          Address:
            "BAKLIWAL BUSINESS CENTER, SHOP NO LGF 3/4, NEAR STATE BANK, PATNI CHOWK",
        },
      ],
      YAVATMAL: [
        {
          content1: "ARIHANT PLY HOUSE",
          supplierName: "MR. RAJESH JAIN",
          mapLocation: " YAVATMAL, MAHARASHTRA",
          phone: "+918830204815",
          Address: "NEAR MAHESH BHAVAN, SANKATMOCHAN ROAD",
        },
      ],
      AKOLA: [
        {
          content1: "SHREE BALAJI PLYWOOD",
          supplierName: "MR. MAHESH SUREKHA",
          mapLocation: " AKOLA, MAHARASHTRA",
          phone: "+919975588800",
          Address:
            "AMC COMPLEX, NR.DR KHODKE HOSPITAL, JATHARPETH ROAD, TAPADIA NAGAR",
        },
      ],
      AMRAVATI: [
        {
          content1: "JAIN PLYWOOD",
          supplierName: "MR. GAUTAM S CHOPDA",
          mapLocation: " AMRAVATI, MAHARASHTRA",
          phone: "+919822739662",
          Address: "JAIN PLYWOOD, JAFARJI GIN PLOT",
        },
      ],

      CHANDRAPUR: [
        {
          content1: "INTERIOR STUDIO",
          supplierName: "MRS. POOJA ANIKET JAIN",
          mapLocation: " CHANDRAPUR, MAHARASHTRA",
          phone: "+919960033529",
          Address: "SHOP NO.15, SUNDRY SHOP WING 4, DATALA ROAD",
        },
      ],
    },

    "TAMIL NADU": {
      CHENNAI: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Chennai, MAHAVIR ENTERPRIZE",
          supplierName: "MR. NIRMAL RAJKUMAR JAIN",
          mapLocation: "CHENNAI, TAMILNADU",
          phone: "04426691403",
          Address: "143/2, SYDENHAMS ROAD,CHOOLAI",
        },
      ],
      COIMBATORE: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Coimbatore, Jay Trading CO.",
          supplierName: "Mr.Vitthal Patel",
          mapLocation: "COIMBATORE, TAMILNADU",
          phone: "9442643719",
          Address:
            "1050 Mettupalayam Road, Near Chintamani Petrol Pump, Coimbatore",
        },
        {
          content1: "INDIA PLYWOOD AGENCY",
          supplierName: "MR. GANESH ALAMELU",
          mapLocation: "COIMBATORE, TAMILNADU",
          phone: "+919894894400",
          Address: "93/6, UZHAIPALAR STREET, BLUE WAY LOGISTICS",
        },
      ],
      KRISHNAGIRI: [
        {
          content1: "SRI RENUGA ENTERPRISES",
          supplierName: "MR. R. DAR VINOTH",
          mapLocation: "KRISHNAGIRI, TAMILNADU",
          phone: "+919790387498",
          Address: "79/3, THALLY ROAD, SAKTHI CENTRE POINT, HOSUR",
        },
      ],
      MADURAI: [
        {
          content1: "MERLIN PLY- LAM",
          supplierName: "MRS. MEERA MAIDEEN",
          mapLocation: "MADURAI, TAMILNADU",
          phone: "+919994857786",
          Address: "5/175M, SIVAGANGAI MAIN ROAD, NEAR OLD PANDIKOVIL BUS STOP",
        },
      ],
    },

    "UTTAR PRADESH": {
      GHAZIABAD: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Ghaziabad, Balaji Laminated",
          supplierName: "Mr. Pramod Agarwal",
          mapLocation: " GHAZIABAD, UTTAR PRADESH",
          phone: "9810406275",
          Address:
            "21, Jagdish Nagar, Opp. Navyug Market, Main Hapur Road, Ghaziabad",
        },
        {
          content1: "M/S INTER DÉCOR INCORPORATION",
          supplierName: "MR. DEVENDRA KUMAR MITTAL",
          mapLocation: " GHAZIABAD, UTTAR PRADESH",
          phone: "+919811190777",
          Address: "E-86, PATEL NAGAR, 2ND",
        },
      ],
      AGRA: [
        {
          content1: "VINAYAK PLY INDIA",
          supplierName: "MR. ANIL SHARMA",
          mapLocation: "AGRA, UTTAR PRADESH",
          phone: "+919219711366",
          Address: "21/38, OPP POWER HOUSE SUB STATION, FREE GANJ",
        },
      ],
      BAREILLY: [
        {
          content1: "M/S PLY MAHAL",
          supplierName: "MR. FAIZ KHAN",
          mapLocation: "BAREILY, UTTAR PRADESH",
          phone: "+918808080141",
          Address:
            "199/201, MOHALLA JAGATPUR LALA BEGUM, NEAR PATANJALI MEGA STORE, PILIBHIT BYEPASS ROAD, BISALPUR CHAURAHA",
        },
      ],
      "GAUTAM BUDDHA NAGAR": [
        {
          content1: "SINGHAL TIMBER",
          supplierName: "MR. GAURAV SINGHAL",
          mapLocation: "GAUTAM BUDDHA NAGAR, UTTAR PRADESH",
          phone: "+919555097999",
          Address: "D-27, SITE-IV, KASNA, INDUSTRIAL AREA",
        },
      ],
      MEERUT: [
        {
          content1: "M/S SHRI RAM PLYWOOD",
          supplierName: "MR. AMIT AGARWAL",
          mapLocation: "MEERUT, UTTAR PRADESH",
          phone: "+919837054376",
          Address: "NEAR RAMLILA GROUND, DELHI ROAD",
        },
      ],
      MORADABAD: [
        {
          content1: "M/S DHINGRAS",
          supplierName: "MR. AJAY DHINGRA",
          mapLocation: "MORADABAD, UTTAR PRADESH",
          phone: "+919837028086",
          Address: "OPP. MANSAROVER COLONY, DELHI ROAD",
        },
      ],
      VARANASI: [
        {
          content1: "SITI GLASS AND PLYWOOD CENTRE",
          supplierName: "MR. MOHIT MOTWANI",
          mapLocation: "VARANASI, UTTAR PRADESH",
          phone: "+919838776092",
          Address: "35/265, NEAR GIRJA GHAR CROSSING, KHARI KUAN",
        },
      ],
    },

    GOA: {
      "SOUTH GOA": [
        {
          content1: "SHREE HARDWARE AND CO",
          supplierName: "MR. JAYESH NAKRANI",
          mapLocation: "SOUTH GOA, GOA",
          phone: "+919552559904",
          Address:
            "FIRST FLOOR, SHOP NO.1, MERRAS PRIDE, VIDYANAGAR GOGOL, MARGAO",
        },
      ],
    },

    "NEW DELHI": {
      "PITAM PURA": [
        {
          content1: "SHIVA TRADING COMPANY",
          supplierName: "MR. VISHAL RANA",
          mapLocation: "PITAM PURA, NEW DELHI",
          phone: "+91 9560666675",
          Address: "HOUSE NO 460/1, RAMA MARKET",
        },
      ],
    },

    JHARKHAND: {
      DHANBAD: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Dhanbad, Dhanbad Plywood Centre",
          supplierName: "HITEN SANGHVI, Paras",
          mapLocation: "DHANBAD, JHARKHAND",
          phone: "9771410003, 9334000040",
          Address: "NEAR JAIN MILAN, JORAPHATAK ROAD,DHANBAD",
        },
        {
          content1: "DHANBAD PLYWOOD CENTRE",
          supplierName: "MR. VINAY MISHRA",
          mapLocation: "DHANBAD, JHARKHAND",
          phone: "+91 9821199577",
          Address: "JORA PATHAK ROAD, NEAR JAIN MILAN",
        },
      ],
      JAMSHEDPUR: [
        {
          content1: "JAMSHEDPUR HARDWARE AND SANITARY MART",
          supplierName: "MR. NAVIN KUMAR AGARWAL",
          mapLocation: "JAMSHEDPUR, JHARKHAND",
          phone: "+91 9631379183",
          Address: "OPP. BADA GURUDWARA, NEW KALIMATI ROAD, SAKCHI",
        },
      ],
      DEOGHAR: [
        {
          content1: "AMBIKESH ENTERPRISE",
          supplierName: "MR. LAXMAN BHAI PATEL",
          mapLocation: "DEOGHAR, JHARKHAND",
          phone: "+91 9431132312",
          Address: "GROUND FLOOR, 390, DUMKA ROAD, DEOGHAR, NEAR MANDIR MORE",
        },
      ],
      HAZARIBAG: [
        {
          content1: "MESSERS. CEE BEE ENTERPRISE",
          supplierName: "MR. SATISH BANSAL",
          mapLocation: "HAZARIBAG, JHARKHAND",
          phone: "+91 9431394626",
          Address:
            "GROUND, 00, PREM LATA JAIN, MAHESH SONI CHOWK, BODDOM BAZAR",
        },
      ],
    },

    ODISHA: {
      BHUBANESHWAR: [
        {
          content1:
            "Royale Touche Laminates, Plywood and Wooden Floors-Bhubneswar, Jagannath Laminates",
          supplierName: "Mr. Kamal Kumar Asopa",
          mapLocation: "  BHUBANESWAR, ODISHA",
          phone: "99370 34969",
          Address: "25 A, Unit - lll, Janpath Road, Bhubaneshwar",
        },
        {
          content1: "M/S. BALAJI PLY HOUSE",
          supplierName: "MR. SANJAY KUMAR AGARWAL",
          mapLocation: "  BHUBANESWAR, ODISHA",
          phone: "+919861111069",
          Address: "KHARVEL NAGAR, PLOT NO-28A, UNIT-III, KHARVEL NAGAR",
        },
        {
          content1: "JAYSHREE PLYWOODS",
          supplierName: "MR. DEVASHISH CHAUDHRY",
          mapLocation: "  BHUBANESWAR, ODISHA",
          phone: "+919437035912",
          Address: "UNIT-3, PLOT NO-166, KHARAVELA NAGAR",
        },
      ],
      GANJAM: [
        {
          content1: "M/S BHABANI TIMBERS",
          supplierName: "MR. PRATAP CHANDRA SAHU",
          mapLocation: "  GANJAM, ODISHA",
          phone: "+919937187610",
          Address: "1110, ASKA ROAD, BEHRAMPUR",
        },
      ],
      CUTTACK: [
        {
          content1: "MODI PLY",
          supplierName: "MR. SARVESH KUMAR MODI",
          mapLocation: "  CUTTACK, ODISHA",
          phone: "+919437069545",
          Address: "BASEMENT, SHOP NO S-1, BHARTIA MANSION, COLLEGE SQUARE",
        },
      ],
      KHORDHA: [
        {
          content1: "SHREE KRISHNA PLYWOODS",
          supplierName: "MR. ROHIT AGARWAL",
          mapLocation: "  KHORDHA, ODISHA",
          phone: "+919861234309",
          Address: "PLOT NO.413/2297, DUMUDUMA, AIGINIA, BHUBANESWAR",
        },
      ],
      NABARANGPUR: [
        {
          content1: "M/S. ARADHYA BUILDMART",
          supplierName: "MR. ANUMAN CHIPALI",
          mapLocation: "  NABARANGPUR, ODISHA",
          phone: "+919437181577",
          Address:
            "NABARANGPUR TO BORIGUMMA ROAD, DIKSHA REFILL NAYARA PETROL PUNMP, MAIN ROAD",
        },
      ],
    },

    RAJASTHAN: {
      JODHPUR: [
        {
          content1: "GIRNAR PLYWOOD",
          supplierName: "MR. JAMBU BAFNA",
          mapLocation: " JODHPUR, RAJASTHAN",
          phone: "+91 9928739999",
          Address: "27 AND 40, ROOP NAGAR, PAL ROAD",
        },
      ],
    },

    "ANDHRA PRADESH": {
      KURNOOL: [
        {
          content1: "MARUTI LAMINATES",
          supplierName: "MR. K. MURATHI REDDY",
          mapLocation: "KURNOOL, ANDHRA PRADESH",
          phone: "+91 919010137538",
          Address:
            "BHARATH PETROL BUNK, 87/985-V-P-C-69-78, NANDYAL ROAD, NANDYAL CHECK POST CIRCLE",
        },
      ],
    },

    ASSAM: {
      DIBRUGARH: [
        {
          content1: "SYLVA HOME",
          supplierName: "MR. NISHANT AJITSARIA",
          mapLocation: "DIBRUGARH, ASSAM",
          phone: "+91 8811096395",
          Address: "196, 0, AMPLPATTY GAON WARD",
        },
      ],
      JORHAT: [
        {
          content1: "S K PLY & INTERIORS",
          supplierName: "MR. SIDHANT AGARWALLA",
          mapLocation: "JORHAT, ASSAM",
          phone: "+91 9678299125",
          Address: "OPP. MAHINDRA SHOWROOM, KENDUGURI,",
        },
      ],
      TINSUKIA: [
        {
          content1: "SHYAM DECORS & VENEER",
          supplierName: "MR. NIRAJ CHAUDHARY",
          mapLocation: "TINSUKIA, ASSAM",
          phone: "+91 9435035921",
          Address: "1ST FLOOR, SS COMPLEX, GNB ROAD",
        },
      ],
    },

    PUNJAB: {
      SANGRUR: [
        {
          content1: "NEW GLASS HOUSE",
          supplierName: "MR. KESHAV BINDAL",
          mapLocation: "SANGRUR,PUNJAB",
          phone: "+91 9815467646",
          Address: "NEW GLASS HOUSE, PARTAP NAGAR, OPP. RANBIR COLLEGE SANGRUR",
        },
      ],
      BHATINDA: [
        {
          content1: "RAJEEV GLASS & PLYWOODS",
          supplierName: "MR. RAJEEV MAHESHWARY",
          mapLocation: "BHATINDA, PUNJAB",
          phone: "+91 9815761643",
          Address: "SHIV SHAKTI COMPLEX, NEAR ANPURNA MANDIR, AMRIK SINGH ROAD",
        },
      ],
      PATIALA: [
        {
          content1: "ISHAN PLYWOOD HOUSE",
          supplierName: "MRS. KAILASH GUPTA",
          mapLocation: "PATIALA, PUNJAB",
          phone: "+91 9872616291",
          Address: "NABHA GATE, ISHAN PLYWOOD HOUSE, NABHA GATE",
        },
      ],
      SAMANA: [
        {
          content1: "JAGDAMBAY HARDWARE & PAINT STORE",
          supplierName: "MR. TARUN GUPTA",
          mapLocation: "SAMANA, PUNJAB",
          phone: "+91 9815706254",
          Address:
            "OPP PUBLIC COLLEGE, SHOP NO.114, AGGARWAL DHARMSHALA, AND SCHOOL PARBANDHAK COMMITTEE, MAIN ROAD",
        },
      ],
    },
  };
  // const [selectedLocationContent, setSelectedLocationContent] = useState([
  //   {
  //     content1:
  //       "Please select State and City to search Experience Centre near your location.",
  //   },
  // ]);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen2) setIsOpen2(false);
  };

  const handleOptionClick1 = (option) => {
    if (selectedOption1 !== option) {
      setSelectedOption2("");
    }

    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen1) setIsOpen1(false);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };
  const handleSearch = () => {
    if (!selectedOption1 || !selectedOption2) {
      alert("Please select both State and City");
      return;
    }
    updateSelectedLocationContent();
  };

  const updateSelectedLocationContent = () => {
    if (!selectedOption1 || !selectedOption2) {
      setSelectedLocationContent([
        {
          content1: "Please select both State and City",
        },
      ]);
      return;
    }

    const selectedLocations =
      locationsData[selectedOption1] &&
      locationsData[selectedOption1][selectedOption2]
        ? locationsData[selectedOption1][selectedOption2]
        : null;

    if (selectedLocations) {
      setSelectedLocationContent(selectedLocations);
    } else {
      setSelectedLocationContent([
        {
          content1:
            "No Experience Centre found in selected location. Send us a message if you need any help!",
        },
      ]);
    }
  };

  return (
    <div className={styles.Map_section}>
      <div className={styles.Map_section_outer}>
        {/* Map Section */}
        <div className={styles.Map_Section_Iframe_Outer}>
          <div className={styles.content70}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0578930659026!2d72.49071127591135!3d22.984898517731924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aeb23c7e7e7%3A0xd34044573492f3c0!2sRoyal%20Art%20Laminates!5e0!3m2!1sen!2sin!4v1720691503627!5m2!1sen!2sin"
              allowfullscreen=""
              className={styles.map_frame}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Selection Section */}
        <div className={styles.map_section2}>
          {/* <div className={styles.Img_Logo_Outer}>
            <Image src={ImageLogo} className={styles.Img_Logo} />
          </div> */}
          <div className={styles.Option_Sec_Outer}>
            <div className={styles.option_section}>
              <div
                className={`${styles.select_menu} ${
                  isOpen1 ? styles.active : ""
                }`}
                onClick={toggleDropdown1}
              >
                <div className={styles.select_btn} onClick={toggleDropdown1}>
                  <div className={styles.sBtn_text}>
                    {selectedOption1 || "Select State"}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="14"
                    viewBox="0 0 22 14"
                    fill="none"
                  >
                    <path d="M2 2L11 11L20 2" stroke="#5B3524" strokeWidth="2" />
                  </svg>
                </div>
                <ul className={styles.options}>
                  {sortedStates.map((option, index) => (
                    <li
                      key={index}
                      className={styles.option}
                      onClick={() => handleOptionClick1(option)}
                    >
                      <span className={styles.option_text}>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${styles.select_menu} ${
                  isOpen2 ? styles.active : ""
                }`}
                onClick={toggleDropdown2}
              >
                <div className={styles.select_btn} onClick={toggleDropdown2}>
                  <div className={styles.sBtn_text}>
                    {selectedOption2 || "Select City"}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="14"
                    viewBox="0 0 22 14"
                    fill="none"
                  >
                    <path d="M2 2L11 11L20 2" stroke="#5B3524" strokeWidth="2" />
                  </svg>
                </div>
                <ul className={styles.options}>
                  {options2.map((option, index) => (
                    <li
                      key={index}
                      className={styles.option}
                      onClick={() => handleOptionClick2(option)}
                    >
                      <span className={styles.option_text}>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <FindStoreButton btn_text={"Search"} OnClickSearch={handleSearch}/>
              {/* <div className={styles.button_OUTER}>
                <span className={styles.search_button} onClick={handleSearch}>
                  Search
                </span>
              </div> */}
            </div>
          </div>
          <div className={styles.content30}>
            {selectedLocationContent.map((location, index) => (
              <>
                <div key={index} >
                 
                  {location.mapLocation &&
                    location.phone &&
                    location.supplierName && (
                      <div className={styles.main_section_outer}> 
                        
                        <div className={styles.main_content_inner}>
                        <p className={styles.content_1}>{location.content1}</p>
                          {/* Display mapLocation and phone only if available */}
                          {/* Address */}
                          <div className={styles.content}>
                            <div className={styles.address}>
                              {location.Address}
                            </div>
                          </div>
                          {/* Map-lOCATION (aHMEDABAD,gUJARAT) */}
                          <div className={styles.content}>
                            <div className={styles.address}>
                              {location.mapLocation}
                            </div>
                          </div>
                        </div>

                        {/* Supplier contact name */}
                        <div className={styles.main_content_inner_two}>
                          <div className={styles.content1}>
                            <div className={styles.address}>
                              {location.supplierName}
                            </div>
                          </div>
                          <div className={styles.content1}>
                            <div className={styles.address}>
                              {location.phone}
                            </div>
                          </div>
                          {/* extra mobile number if required */}
                          {location.extraPhone && (
                            <div className={styles.content}>
                              <div className={styles.address}>
                                {location.extraPhone}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                  {location.mapLocation && location.phone && (
                    <div className={styles.content_border}>
                      {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.SvgLogo}
                      height="1"
                      viewBox="0 0 371 2"
                      fill="none"
                    >
                      <path d="M0.5 1H371" stroke="#CFB071" strokeWidth="1" />
                    </svg> */}
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindStoreSearch;
