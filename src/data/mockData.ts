export interface TestRecord {
  id: string;
  name: string;
  batch: string;
  category: 'milk' | 'honey' | 'oil' | 'formula';
  status: 'safe' | 'adulterated';
  finding: string;
  adulterant?: string;
  concentration?: string;
  threshold?: string;
  confidence: number;
  time: string;
  date: string;
  location: string;
  hash: string;
  operator: string;
  lotNumber: string;
  wavelengthPeak?: number;
}

export const INITIAL_TEST_RECORDS: TestRecord[] = [
  {
    id: "FG-8819",
    name: "Raw Cow Milk",
    batch: "Batch #402",
    category: "milk",
    status: "adulterated",
    finding: "Starch Detected (Amylase Complex)",
    adulterant: "Starch",
    concentration: "0.45 g/L",
    threshold: ">0.10 g/L Limit",
    confidence: 94.8,
    time: "10:42 AM",
    date: "2026-08-24",
    location: "Bengaluru North Depot",
    hash: "9a4e21cf89b37df291c8a14",
    operator: "Dr. Eliza Vance",
    lotNumber: "Lot #9932-B",
    wavelengthPeak: 482,
  },
  {
    id: "FG-8818",
    name: "Pasteurized Whole Milk",
    batch: "Sample A",
    category: "milk",
    status: "safe",
    finding: "Nominal Composition (No Adulterants)",
    confidence: 99.4,
    time: "09:15 AM",
    date: "2026-08-24",
    location: "Central Receiving Silo 3",
    hash: "3b7c89a012de45f67a89b01",
    operator: "Dr. Eliza Vance",
    lotNumber: "Lot #9930-A",
    wavelengthPeak: 532,
  },
  {
    id: "FG-8815",
    name: "Pure Wildflower Honey",
    batch: "Lot H-201",
    category: "honey",
    status: "safe",
    finding: "Pristine Pollen Profile • High Fructose",
    confidence: 98.7,
    time: "04:30 PM",
    date: "2026-08-23",
    location: "Southern Apiary Collection",
    hash: "7e1f4a9b2c3d5e8f0a1b2c3",
    operator: "K. Raghunath",
    lotNumber: "Lot #H-882",
    wavelengthPeak: 540,
  },
  {
    id: "FG-8812",
    name: "Raw Buffalo Milk",
    batch: "Batch #389",
    category: "milk",
    status: "adulterated",
    finding: "Synthetic Urea & Detergent Traces",
    adulterant: "Synthetic Urea",
    concentration: "1.20 g/L",
    threshold: ">0.70 g/L Limit",
    confidence: 96.2,
    time: "02:18 PM",
    date: "2026-08-23",
    location: "Kengeri Bulk Cooler",
    hash: "5d6e7f8a9b0c1d2e3f4a5b6",
    operator: "Dr. Eliza Vance",
    lotNumber: "Lot #BF-401",
    wavelengthPeak: 472,
  },
  {
    id: "FG-8809",
    name: "Standardized Toned Milk",
    batch: "Tanker T-44",
    category: "milk",
    status: "safe",
    finding: "Fat 3.1% • SNF 8.6% (Nominal)",
    confidence: 99.1,
    time: "11:05 AM",
    date: "2026-08-23",
    location: "Dairy Cooperative Dock 1",
    hash: "1a2b3c4d5e6f7a8b9c0d1e2",
    operator: "M. Chen",
    lotNumber: "Lot #STD-99",
    wavelengthPeak: 530,
  },
  {
    id: "FG-8801",
    name: "Mustard Cooking Oil",
    batch: "Cold Press #12",
    category: "oil",
    status: "adulterated",
    finding: "Argemone Oil Cross-Contamination",
    adulterant: "Argemone Sanguinarine",
    concentration: "0.12 % w/v",
    threshold: "0.00 % Zero Tolerance",
    confidence: 97.4,
    time: "09:40 AM",
    date: "2026-08-22",
    location: "APMC Market Yard Lab",
    hash: "4f5e6d7c8b9a0f1e2d3c4b5",
    operator: "K. Raghunath",
    lotNumber: "Lot #OIL-301",
    wavelengthPeak: 445,
  }
];

export const REGIONAL_HOTSPOTS = [
  { name: "Bengaluru North Depot", samples: 342, safeRate: 88.6, status: "warning", coordinates: "13.0358° N, 77.5970° E", alerts: "Starch & Dilution" },
  { name: "Central Receiving Dock 1", samples: 512, safeRate: 94.2, status: "safe", coordinates: "12.9716° N, 77.5946° E", alerts: "None (Optimal)" },
  { name: "Kengeri Regional Silo", samples: 210, safeRate: 84.1, status: "danger", coordinates: "12.9157° N, 77.4831° E", alerts: "Synthetic Urea detected" },
  { name: "Whitefield Quality Lab", samples: 356, safeRate: 96.8, status: "safe", coordinates: "12.9698° N, 77.7500° E", alerts: "Trace Fat Variance" }
];
