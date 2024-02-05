/* 
  data taken from https://www.architects.uga.edu/sites/default/files/documents/field/maps/current/unisex-bathrooms.pdf
  fixed (presumed):
    MLC building number (0672 -> 0081)
    Family Science Center 1 quanity (0 -> 1)
    Lustrat House quanity (2 -> 1)
	Tate Expansion URR# (0747A -> 0474A)
		There's only 4 floors and all other 474 are URR
	Moore-Rooker Hall (003B -> 001)
		003B is an Elevator Machine Room (EMR) but there's a single stall RR at 001 so maybe typo?
	
  added:
	new poultry science building
  removed:
	Physics building URR# 0111 (lol 0111 is just the hall to the URR)
		maybe 0112A is single stall marked as mens?

  idk if I can trust this data or not, but it seems to be mostly true
*/

let data =
[
	{
		"number": 2029,
		"name": "529 Baxter St",
		"rooms": "0121, 0140A",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1060,
		"name": "Aderhold",
		"rooms": "0130",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2218,
		"name": "Alpha Chi Omega Sorority",
		"rooms": "0113",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1077,
		"name": "Animal Health Research Center",
		"rooms": "G002",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0050",
		"name": "Baldwin Hall",
		"rooms": "00G8, 0105P, 0153, 0273, 0275, 0373, 0375, 0410A, 0410B",
		"quanity": 9,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1000,
		"name": "Biological Sciences Building",
		"rooms": "0108, 0160, 0634D",
		"quanity": 3,
		"type": "Unisex"
	},
	{
		"number": "0032",
		"name": "Bishop House",
		"rooms": "0004A, 0012A",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2264,
		"name": "Black-Diallo-Miller Hall",
		"rooms": "0100, 0102, 0125, 0126, 0156, 0226, 0256, 0326, 0356, 0426, 0456, 0526, 0556, 0626",
		"quanity": 14,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2461,
		"name": "Bot. Garden Head House",
		"rooms": "0106",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2335,
		"name": "Botanical Garden Visitors Center",
		"rooms": "0107",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1023,
		"name": "Boyd Rsrch and Edu Ctr",
		"rooms": "0312, 0424, 0430, 0554, 0555, 0611, 0615, 0811A, 0811B",
		"quanity": 9,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0055",
		"name": "Brooks Hall",
		"rooms": "0G18, 0G19",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1907,
		"name": "Brown Hall",
		"rooms": "0223a",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2213,
		"name": "Brumby Hall",
		"rooms": "0144, 0153",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2130,
		"name": "Building 2130",
		"rooms": "0131, 0133",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0110",
		"name": "Business Services",
		"rooms": "000B6, 00B24, 0208C",
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2328,
		"name": "Callaway Building",
		"rooms": "0112, 0114",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0031",
		"name": "Candler Hall",
		"rooms": "0210, 0211, 0314, 0315, 0B08, 0B09",
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2005,
		"name": "Carl Vinson Hall",
		"rooms": "0102, 0103, 0210, 0211",
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1904,
		"name": "Carnegie Library Learning Center",
		"rooms": "0101, 0102, 00B4, 00B6",
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 1913,
		"name": "Central Heating Plant",
		"rooms": "0102",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2431,
		"name": "Central Research Stores Warehouse",
		"rooms": "0103",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0022",
		"name": "Chapel",
		"rooms": "0101A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1247,
		"name": "Charles Schwab Financial Planning Center",
		"rooms": "0003, 0005, 0104",
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1001,
		"name": "Chemistry",
		"rooms": "0300B",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0101",
		"name": "Chicopee No. 1",
		"rooms": "0223, 0322, 2037",
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1652,
		"name": "Child Development Laboratory",
		"rooms": "0106A, 0134, 0135, 0202, 0220, 0223, 0240",
		"quanity": 7,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0290",
		"name": "Clark Howell Hall",
		"rooms": "0118B, 0118C",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1920,
		"name": "Clinical & Translational Research",
		"rooms": "0105, 0117",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1070,
		"name": "College of Veterinary Medicine 1",
		"rooms": 1705,
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1130,
		"name": "Computing Services",
		"rooms": "0192A",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1011,
		"name": "Conner Hall",
		"rooms": "0101D",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0739",
		"name": "Correll Hall",
		"rooms": "0130, 0132, 0212, 0228, 0411",
		"quanity": 5,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2211,
		"name": "Creswell Hall",
		"rooms": "0105B",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0212",
		"name": "Delta Innovation Hub",
		"rooms": "0116E",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0021",
		"name": "Demosthenian Hall",
		"rooms": "0105",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0044",
		"name": "Denmark Hall",
		"rooms": "0023M, 0023W, 0104R, 0211",
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 1090,
		"name": "Driftmier Engineering Center",
		"rooms": "1356, 1358, 1568",
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1698,
		"name": "East Campus Deck",
		"rooms": 105,
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1033,
		"name": "Ecology",
		"rooms": "0189B",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1632,
		"name": "Ecology Centers",
		"rooms": "0102C, 0104E, 0104F, 0111C, 0111D",
		"quanity": 5,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2425,
		"name": "Entomology Greenhouse/Headhouse",
		"rooms": "0005",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1050,
		"name": "Environmental Health Sciences",
		"rooms": "0105A, 0106C, 0220, 0221, 0320, 0321",
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": 3188,
		"name": "FMD Construction Shop",
		"rooms": "0104, 0107",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1924,
		"name": "Facilities Management HSC Annex",
		"rooms": "0104A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1246,
		"name": "Family Science Center 1",
		"rooms": "0002",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0060",
		"name": "Fine Arts Building",
		"rooms": "0120",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1020,
		"name": "Food Science Building",
		"rooms": "0214",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1140,
		"name": "Forestry Resources 2",
		"rooms": "0206B",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0650",
		"name": "Founders Garden House",
		"rooms": "0103",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1002,
		"name": "Geography and Geology",
		"rooms": "0156, 0228",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0090",
		"name": "Geology Hydrothermal Lab",
		"rooms": "0002A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1640,
		"name": "Georgia Center for Cont Ed",
		"rooms": "0257A, 0257B",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1693,
		"name": "Georgia Museum of Art",
		"rooms": "0134, 0229",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0640",
		"name": "Gilbert Hall",
		"rooms": "0106, 0219A, 0228, 0228A, 0234, 0248A, 0370A, 0370B, 0402A, 0409A",
		"quanity": 10,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2651,
		"name": "Golf Cart Maintenance",
		"rooms": "0101A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2652,
		"name": "Golf Maintenance 0105",
		"rooms": "0105",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2695,
		"name": "Golf Maintenance Facility",
		"rooms": "0108",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2658,
		"name": "Golf Rest Room 2 (#7 Tee)",
		"rooms": "0102",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2678,
		"name": "Golf Restroom 1",
		"rooms": "0103",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0756",
		"name": "Government Relations",
		"rooms": "105, 107",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2415,
		"name": "Greenhouse Botany",
		"rooms": "0200B",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1031,
		"name": "Hardman Hall",
		"rooms": "0205",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0019",
		"name": "Hodgson Oil Building",
		"rooms": "0186",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1042,
		"name": "Hoke Smith Annex",
		"rooms": "0112",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1340,
		"name": "Horticulture Greenhouse",
		"rooms": "0104",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1911,
		"name": "Hudson Hall",
		"rooms": "0122, 0124",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1691,
		"name": "Hugh Hodgson School of Music",
		"rooms": "0257, 0259",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0082",
		"name": "Hull Street Deck",
		"rooms": "0309A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0620",
		"name": "Human Resources",
		"rooms": "0118",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0066",
		"name": "Instructional Plaza",
		"rooms": "N012, N013, S213, S215",
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": "0734",
		"name": "Ivester Hall",
		"rooms": "E220, E222, E245, E247, E324, E326, E347, E349",
		"quanity": 8,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2680,
		"name": "Jewelry & Metalwork Art Studios",
		"rooms": "0102A, 0102B",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0250",
		"name": "Joseph E. Brown Hall",
		"rooms": "0012, 0112",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2003,
		"name": "L.C. Carriage House",
		"rooms": "0102",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2440,
		"name": "Lake Herrick Pavilion",
		"rooms": "0106A, 0106B",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1694,
		"name": "Lamar Dodd School of Art",
		"rooms": "0C346",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0043",
		"name": "Law School/Hirsch Hall",
		"rooms": "0214H, 0218, 0222, 0227, A310",
		"quanity": 5,
		"type": "Unisex"
	},
	{
		"number": "0053",
		"name": "LeConte Hall",
		"rooms": "0105",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1064,
		"name": "Locomotive Diag. Center",
		"rooms": "0100A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0632",
		"name": "Lustrat House",
		"rooms": "00B2",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0054",
		"name": "Main Library",
		"rooms": "00B6A, 0203, 0207, 0208, 0209, 0304, 0351, 0416, 0B11A, 0B13, 0B45, 0B60, SB10, SB12, SB21",
		"quanity": 15,
		"type": "Unisex"
	},
	{
		"number": 2462,
		"name": "Maintenance Bldg.",
		"rooms": "0102",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1030,
		"name": "Marine Science / Dance",
		"rooms": "0150E, 0150F, 0223, 0266",
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0670",
		"name": "Memorial Hall",
		"rooms": "0242A, 0242B, 0340A, 0340B, 0401",
		"quanity": 5,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0271",
		"name": "Milledge Hall",
		"rooms": "0112, 0132F",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1061,
		"name": "Miller Plant Science",
		"rooms": "0503",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2324,
		"name": "Mimsie Lanier Ctr for Native Plant Studies",
		"rooms": "0116",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0738",
		"name": "Moore-Rooker Hall",
		"rooms": "00B3",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0030",
		"name": "New College",
		"rooms": "0122, 0123, 0229, 0230, 0325, 0326",
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": "1025",
		"name": "New Poultry Science Building",
		"rooms": "0006B, 0120",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0122",
		"name": "North Campus Deck",
		"rooms": "0304D",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2219,
		"name": "Office of Global Engagement",
		"rooms": "0103",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0130",
		"name": "Old College",
		"rooms": "0117B, 0117C, 0217B, 0217C, 0317B, 0317C",
		"quanity": 6,
		"type": "Unisex"
	},
	{
		"number": 1699,
		"name": "PAC Deck",
		"rooms": "0G05",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1111,
		"name": "Paul D. Coverdell Center",
		"rooms": "0117A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0270",
		"name": "Payne Hall",
		"rooms": "0004, 0005",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0042",
		"name": "Peabody Hall",
		"rooms": "0109A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1692,
		"name": "Performing Arts",
		"rooms": "0117, 0119",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0020",
		"name": "Phi Kappa Hall",
		"rooms": "0103A, 0103B",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1003,
		"name": "Physics Building",
		"rooms": "0111, 0111A",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1906,
		"name": "Pound Hall",
		"rooms": "0218",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0064",
		"name": "Psychology Building",
		"rooms": "0415D, 0421C",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1041,
		"name": "R. C. Wilson Pharmacy",
		"rooms": "0416",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1690,
		"name": "Ramsey Center",
		"rooms": "0113A, 0119B, 0119C, 0134C, 0151A, 0232F, 0233C, 0233I, 0245D",
		"quanity": 9,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2639,
		"name": "River's Crossing",
		"rooms": "0061A, 0127A, 0228, 0425",
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 2630,
		"name": "River's Crossing #2",
		"rooms": "0106",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2400,
		"name": "Riverbend Farm Research Building 1",
		"rooms": "0103",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2212,
		"name": "Russell Hall",
		"rooms": "0107A, 0107B, 0365A, 0443A, 0465A, 0475A, 0483A, 0565A, 0575A, 0583A, 0602A, 0665A, 0675A, 0683A, 0765A, 1002A, 1065A, 1057A, 1083A",
		"quanity": 19,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1909,
		"name": "Russell Hall",
		"rooms": "0112, 0113, 0221, 0223",
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0740",
		"name": "Russell Special",
		"rooms": "0232",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1131,
		"name": "STEM Research Building I",
		"rooms": "1022A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1132,
		"name": "STEM Research Building II",
		"rooms": 1215,
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0033",
		"name": "School of Social Work Building",
		"rooms": "0141, 0143",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1035,
		"name": "Science Learning Center",
		"rooms": "0152",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1621,
		"name": "Science Library",
		"rooms": "0184A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2617,
		"name": "Seney-Stovall Chapel",
		"rooms": "0015, 0016",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1220,
		"name": "Soule Hall",
		"rooms": "001B",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1010,
		"name": "Speirs/Dawson Hall",
		"rooms": "0153A, 0279B, 0351A, 0355A",
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0688",
		"name": "Stadium West Stands",
		"rooms": "W002A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1654,
		"name": "Stegeman Coliseum",
		"rooms": "0230A, 0246A, 256A",
		"quanity": 3,
		"type": "Unisex"
	},
	{
		"number": "0123",
		"name": "Tanner Building",
		"rooms": "0304D",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0668",
		"name": "Tate Expansion '09",
		"rooms": "0474A, 0474B, 0474C, 0474D",
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": "0672",
		"name": "Tate Student Center",
		"rooms": "0204, 0304, 0305, 0313B, 0354, 0355",
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0023",
		"name": "Terrell Hall",
		"rooms": "0309",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0768",
		"name": "The Athenaeum",
		"rooms": "0130, 0132",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2691,
		"name": "Thomas Street Sculpture",
		"rooms": "0125, 0126",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2600,
		"name": "Thomas Street South",
		"rooms": "0114, 0115, 0216, 0218",
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1250,
		"name": "Tucker Hall",
		"rooms": "0112C, 0114C, 0121, 0322",
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 2126,
		"name": "UGAPD & OEP Training Facility",
		"rooms": "0106",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1921,
		"name": "University Childcare Center",
		"rooms": "0103, 0105",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2238,
		"name": "University Village Community Office",
		"rooms": "0115, 0116",
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1066,
		"name": "Vet. Medicine 10",
		"rooms": "0106",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1072,
		"name": "Vet. Medicine 2",
		"rooms": "0005A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1683,
		"name": "Vet. Medicine 5",
		"rooms": "0105A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 3080,
		"name": "Veterinary Teaching Hospital",
		"rooms": "1000L, 1018A, 1018B",
		"quanity": 3,
		"type": "Unisex"
	},
	{
		"number": "0041",
		"name": "Waddel Hall",
		"rooms": "0105, 0208",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1082,
		"name": "Wildlife Health",
		"rooms": "0G25A",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1903,
		"name": "Winnie Davis",
		"rooms": "0113, 0115",
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0751",
		"name": "Wray-Nicholson House",
		"rooms": "0208",
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1912,
		"name": "Wright Hall",
		"rooms": "0354",
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0081",
		"name": "Zell B. Miller Learning Center",
		"rooms": "262A",
		"quanity": 1,
		"type": "Unisex, Handicap"
	}
];