const DEFAULT_INSTRUMENTS = [
  {
    "id": 1,
    "name": "Scalpel Handle #3",
    "category": "Cutting/Dissecting",
    "subcategory": "Scalpel Handle",
    "used_for": "Holds smaller blades like #10 #11 #15",
    "recognize_by": "Small flat handle",
    "common_procedures": "General surgery; minor procedures",
    "similar_to": "Scalpel Handle #4",
    "do_not_confuse_with": "Blade handles",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 2,
    "name": "Scalpel Handle #4",
    "category": "Cutting/Dissecting",
    "subcategory": "Scalpel Handle",
    "used_for": "Holds larger blades like #20 #21 #22",
    "recognize_by": "Larger flat handle",
    "common_procedures": "General surgery; ortho",
    "similar_to": "Scalpel Handle #3",
    "do_not_confuse_with": "Blade handles",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 3,
    "name": "#10 Blade",
    "category": "Cutting/Dissecting",
    "subcategory": "Blade",
    "used_for": "Large skin and tissue incisions",
    "recognize_by": "Curved cutting edge",
    "common_procedures": "General surgery",
    "similar_to": "#20 Blade",
    "do_not_confuse_with": "#15 Blade",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 4,
    "name": "#11 Blade",
    "category": "Cutting/Dissecting",
    "subcategory": "Blade",
    "used_for": "Stab incisions and punctures",
    "recognize_by": "Sharp triangular point",
    "common_procedures": "Laparoscopic port sites",
    "similar_to": "#15 Blade",
    "do_not_confuse_with": "#10 Blade",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 5,
    "name": "#15 Blade",
    "category": "Cutting/Dissecting",
    "subcategory": "Blade",
    "used_for": "Small precise incisions",
    "recognize_by": "Small curved blade",
    "common_procedures": "Minor procedures; plastics",
    "similar_to": "#10 Blade",
    "do_not_confuse_with": "#11 Blade",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 6,
    "name": "Mayo Scissors",
    "category": "Cutting/Dissecting",
    "subcategory": "Scissors",
    "used_for": "Cutting heavy tissue or suture",
    "recognize_by": "Thick sturdy blades",
    "common_procedures": "General surgery; ortho",
    "similar_to": "Metzenbaum Scissors",
    "do_not_confuse_with": "Metzenbaum Scissors",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 7,
    "name": "Metzenbaum Scissors",
    "category": "Cutting/Dissecting",
    "subcategory": "Scissors",
    "used_for": "Cutting delicate tissue",
    "recognize_by": "Long thin delicate blades",
    "common_procedures": "General surgery",
    "similar_to": "Mayo Scissors",
    "do_not_confuse_with": "Mayo Scissors",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 8,
    "name": "Iris Scissors",
    "category": "Cutting/Dissecting",
    "subcategory": "Scissors",
    "used_for": "Fine delicate cutting",
    "recognize_by": "Small sharp fine scissors",
    "common_procedures": "Plastics; ophthalmic",
    "similar_to": "Tenotomy Scissors",
    "do_not_confuse_with": "Metzenbaum Scissors",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 9,
    "name": "Tenotomy Scissors",
    "category": "Cutting/Dissecting",
    "subcategory": "Scissors",
    "used_for": "Delicate dissection in small spaces",
    "recognize_by": "Fine blades often curved",
    "common_procedures": "Plastics; hand; eye",
    "similar_to": "Iris Scissors",
    "do_not_confuse_with": "Iris Scissors",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 10,
    "name": "Adson Forceps",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Forceps",
    "used_for": "Holding tissue",
    "recognize_by": "Fine thumb forceps",
    "common_procedures": "Minor procedures; general",
    "similar_to": "Adson with Teeth",
    "do_not_confuse_with": "DeBakey Forceps",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 11,
    "name": "Adson Forceps with Teeth",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Forceps",
    "used_for": "Holding skin or tougher tissue",
    "recognize_by": "Small teeth at tip",
    "common_procedures": "Skin closure; minor procedures",
    "similar_to": "Adson Forceps",
    "do_not_confuse_with": "Plain Adson",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 12,
    "name": "DeBakey Forceps",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Forceps",
    "used_for": "Atraumatic tissue handling",
    "recognize_by": "Long narrow ribbed jaws",
    "common_procedures": "Vascular; general",
    "similar_to": "Adson Forceps",
    "do_not_confuse_with": "Pickups with teeth",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 13,
    "name": "Russian Forceps",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Forceps",
    "used_for": "Grasping dense tissue",
    "recognize_by": "Round widened tips with teeth",
    "common_procedures": "General surgery; ortho",
    "similar_to": "Bonney Forceps",
    "do_not_confuse_with": "DeBakey Forceps",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 14,
    "name": "Bonney Forceps",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Forceps",
    "used_for": "Grasping heavy tissue",
    "recognize_by": "Large strong toothed pickups",
    "common_procedures": "Ortho; general",
    "similar_to": "Russian Forceps",
    "do_not_confuse_with": "Adson with Teeth",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 15,
    "name": "Allis Clamp",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Clamp",
    "used_for": "Holding tough tissue",
    "recognize_by": "Interlocking teeth at end",
    "common_procedures": "General surgery",
    "similar_to": "Babcock Clamp",
    "do_not_confuse_with": "Babcock Clamp",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 16,
    "name": "Babcock Clamp",
    "category": "Grasping/Holding",
    "subcategory": "Tissue Clamp",
    "used_for": "Holding delicate tubular tissue",
    "recognize_by": "Smooth rounded fenestrated tips",
    "common_procedures": "Bowel; fallopian tube; appendix",
    "similar_to": "Allis Clamp",
    "do_not_confuse_with": "Allis Clamp",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 17,
    "name": "Foerster Sponge Forceps",
    "category": "Grasping/Holding",
    "subcategory": "Sponge Forceps",
    "used_for": "Holding sponges or tissue",
    "recognize_by": "Large ringed tips",
    "common_procedures": "Prep; packing; general",
    "similar_to": "Ring Forceps",
    "do_not_confuse_with": "Clamps",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 18,
    "name": "Backhaus Towel Clamp",
    "category": "Grasping/Holding",
    "subcategory": "Towel Clamp",
    "used_for": "Securing towels/drapes",
    "recognize_by": "Sharp curved tips",
    "common_procedures": "Draping",
    "similar_to": "Nonperforating Towel Clamp",
    "do_not_confuse_with": "Hemostat",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 19,
    "name": "Mosquito Hemostat",
    "category": "Clamping/Occluding",
    "subcategory": "Hemostat",
    "used_for": "Clamping small vessels",
    "recognize_by": "Small clamp with fine jaws",
    "common_procedures": "General; minor procedures",
    "similar_to": "Kelly Clamp",
    "do_not_confuse_with": "Kelly Clamp",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 20,
    "name": "Kelly Clamp",
    "category": "Clamping/Occluding",
    "subcategory": "Hemostat",
    "used_for": "Clamping vessels or tissue",
    "recognize_by": "Transverse serrations half jaw",
    "common_procedures": "General surgery",
    "similar_to": "Crile Clamp",
    "do_not_confuse_with": "Crile Clamp",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 21,
    "name": "Crile Clamp",
    "category": "Clamping/Occluding",
    "subcategory": "Hemostat",
    "used_for": "Clamping vessels or tissue",
    "recognize_by": "Serrations along entire jaw",
    "common_procedures": "General surgery",
    "similar_to": "Kelly Clamp",
    "do_not_confuse_with": "Kelly Clamp",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 22,
    "name": "Kocher Clamp",
    "category": "Clamping/Occluding",
    "subcategory": "Hemostat",
    "used_for": "Grasping tough tissue",
    "recognize_by": "Tooth at tip",
    "common_procedures": "General; ortho",
    "similar_to": "Ochsner Clamp",
    "do_not_confuse_with": "Kelly Clamp",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 23,
    "name": "Rochester-Pean Clamp",
    "category": "Clamping/Occluding",
    "subcategory": "Large Clamp",
    "used_for": "Clamping heavy tissue or pedicles",
    "recognize_by": "Large heavy clamp",
    "common_procedures": "Abdominal surgery",
    "similar_to": "Kelly Clamp",
    "do_not_confuse_with": "Crile Clamp",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 24,
    "name": "Schnidt Tonsil Clamp",
    "category": "Clamping/Occluding",
    "subcategory": "Tonsil Clamp",
    "used_for": "Passing ties or clamping in deep spaces",
    "recognize_by": "Curved angled jaws",
    "common_procedures": "Tonsil; general deep work",
    "similar_to": "Kelly Clamp",
    "do_not_confuse_with": "Mixter Clamp",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 25,
    "name": "Bulldog Clamp",
    "category": "Clamping/Occluding",
    "subcategory": "Vascular Clamp",
    "used_for": "Temporary vessel occlusion",
    "recognize_by": "Small spring clamp",
    "common_procedures": "Vascular surgery",
    "similar_to": "Satinsky Clamp",
    "do_not_confuse_with": "Hemostat",
    "difficulty": "Hard",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 26,
    "name": "Army-Navy Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Handheld Retractor",
    "used_for": "Retracting superficial tissue",
    "recognize_by": "Double-ended flat blades",
    "common_procedures": "General; minor procedures",
    "similar_to": "Richardson Retractor",
    "do_not_confuse_with": "Senn Retractor",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 27,
    "name": "Senn Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Handheld Retractor",
    "used_for": "Retracting small superficial wounds",
    "recognize_by": "One rake end one flat end",
    "common_procedures": "Minor procedures; hand",
    "similar_to": "Army-Navy Retractor",
    "do_not_confuse_with": "Weitlaner",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 28,
    "name": "Richardson Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Handheld Retractor",
    "used_for": "Deep tissue retraction",
    "recognize_by": "L-shaped curved blade",
    "common_procedures": "Abdominal surgery",
    "similar_to": "Deaver Retractor",
    "do_not_confuse_with": "Army-Navy",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 29,
    "name": "Deaver Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Handheld Retractor",
    "used_for": "Deep abdominal/chest retraction",
    "recognize_by": "Long smooth curved blade",
    "common_procedures": "Abdominal; thoracic",
    "similar_to": "Richardson Retractor",
    "do_not_confuse_with": "Malleable Retractor",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 30,
    "name": "Malleable Ribbon Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Handheld Retractor",
    "used_for": "Custom shaped retraction",
    "recognize_by": "Bendable metal strip",
    "common_procedures": "Abdominal surgery",
    "similar_to": "Deaver Retractor",
    "do_not_confuse_with": "Ribbon instruments",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 31,
    "name": "Weitlaner Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Self-Retaining Retractor",
    "used_for": "Holding wound open",
    "recognize_by": "Ratcheted with prongs",
    "common_procedures": "Ortho; general; superficial",
    "similar_to": "Gelpi Retractor",
    "do_not_confuse_with": "Gelpi Retractor",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 32,
    "name": "Gelpi Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Self-Retaining Retractor",
    "used_for": "Holding small deep wound open",
    "recognize_by": "Sharp single prong tips",
    "common_procedures": "Ortho; spine; perineal",
    "similar_to": "Weitlaner Retractor",
    "do_not_confuse_with": "Weitlaner Retractor",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 33,
    "name": "Balfour Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Self-Retaining Retractor",
    "used_for": "Holding abdomen open",
    "recognize_by": "Large abdominal frame",
    "common_procedures": "Open abdominal surgery",
    "similar_to": "Bookwalter Retractor",
    "do_not_confuse_with": "Bookwalter Retractor",
    "difficulty": "Hard",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 34,
    "name": "Bookwalter Retractor",
    "category": "Retracting/Exposing",
    "subcategory": "Self-Retaining Retractor",
    "used_for": "Table-mounted exposure",
    "recognize_by": "Large ring/frame system",
    "common_procedures": "Major abdominal surgery",
    "similar_to": "Balfour Retractor",
    "do_not_confuse_with": "Balfour Retractor",
    "difficulty": "Hard",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 35,
    "name": "Mayo-Hegar Needle Holder",
    "category": "Suturing/Stapling",
    "subcategory": "Needle Holder",
    "used_for": "Holding suture needles",
    "recognize_by": "Sturdy jaws and ring handles",
    "common_procedures": "General closure",
    "similar_to": "Crile-Wood Needle Holder",
    "do_not_confuse_with": "Hemostat",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 36,
    "name": "Crile-Wood Needle Holder",
    "category": "Suturing/Stapling",
    "subcategory": "Needle Holder",
    "used_for": "Holding smaller suture needles",
    "recognize_by": "Finer than Mayo-Hegar",
    "common_procedures": "Delicate closure",
    "similar_to": "Mayo-Hegar Needle Holder",
    "do_not_confuse_with": "Hemostat",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 37,
    "name": "Mathieu Needle Holder",
    "category": "Suturing/Stapling",
    "subcategory": "Needle Holder",
    "used_for": "Holding suture needles",
    "recognize_by": "Palm-held spring handle",
    "common_procedures": "Dental; plastics",
    "similar_to": "Mayo-Hegar Needle Holder",
    "do_not_confuse_with": "Clamp",
    "difficulty": "Hard",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 38,
    "name": "Skin Stapler",
    "category": "Suturing/Stapling",
    "subcategory": "Stapler",
    "used_for": "Closing skin",
    "recognize_by": "Disposable stapler device",
    "common_procedures": "Skin closure",
    "similar_to": "Staple Remover",
    "do_not_confuse_with": "Suture",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 39,
    "name": "Staple Remover",
    "category": "Suturing/Stapling",
    "subcategory": "Staple Remover",
    "used_for": "Removing skin staples",
    "recognize_by": "Small handle with jaws",
    "common_procedures": "Post-op removal",
    "similar_to": "Skin Stapler",
    "do_not_confuse_with": "Forceps",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 40,
    "name": "Yankauer Suction",
    "category": "Suction/Fluid",
    "subcategory": "Suction Tip",
    "used_for": "Removing fluid from field",
    "recognize_by": "Rigid bulbous tip",
    "common_procedures": "General surgery; oral",
    "similar_to": "Poole Suction",
    "do_not_confuse_with": "Frazier Suction",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 41,
    "name": "Poole Suction",
    "category": "Suction/Fluid",
    "subcategory": "Suction Tip",
    "used_for": "Suctioning large fluid volume",
    "recognize_by": "Outer sleeve with holes",
    "common_procedures": "Abdominal surgery",
    "similar_to": "Yankauer Suction",
    "do_not_confuse_with": "Frazier Suction",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 42,
    "name": "Frazier Suction",
    "category": "Suction/Fluid",
    "subcategory": "Suction Tip",
    "used_for": "Precise suction in small spaces",
    "recognize_by": "Thin angled metal tube",
    "common_procedures": "ENT; neuro",
    "similar_to": "Yankauer Suction",
    "do_not_confuse_with": "Poole Suction",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 43,
    "name": "Asepto Syringe",
    "category": "Suction/Fluid",
    "subcategory": "Irrigation",
    "used_for": "Irrigating or flushing",
    "recognize_by": "Bulb syringe",
    "common_procedures": "General surgery",
    "similar_to": "Toomey Syringe",
    "do_not_confuse_with": "Suction tubing",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 44,
    "name": "Trocar",
    "category": "Laparoscopic",
    "subcategory": "Access Instrument",
    "used_for": "Creating laparoscopic port access",
    "recognize_by": "Cannula and obturator",
    "common_procedures": "Laparoscopic surgery",
    "similar_to": "Veress Needle",
    "do_not_confuse_with": "Laparoscopic grasper",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 45,
    "name": "Laparoscope",
    "category": "Laparoscopic",
    "subcategory": "Scope",
    "used_for": "Visualizing internal field",
    "recognize_by": "Rigid camera scope",
    "common_procedures": "Laparoscopic surgery",
    "similar_to": "Camera cord",
    "do_not_confuse_with": "Trocar",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 46,
    "name": "Maryland Dissector",
    "category": "Laparoscopic",
    "subcategory": "Dissector",
    "used_for": "Blunt/sharp laparoscopic dissection",
    "recognize_by": "Curved fine jaws",
    "common_procedures": "Laparoscopic cholecystectomy",
    "similar_to": "Laparoscopic Grasper",
    "do_not_confuse_with": "Clip Applier",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 47,
    "name": "Laparoscopic Grasper",
    "category": "Laparoscopic",
    "subcategory": "Grasper",
    "used_for": "Grasping tissue laparoscopically",
    "recognize_by": "Long shaft with grasping jaws",
    "common_procedures": "Laparoscopic surgery",
    "similar_to": "Maryland Dissector",
    "do_not_confuse_with": "Dissector",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 48,
    "name": "Laparoscopic Clip Applier",
    "category": "Laparoscopic",
    "subcategory": "Clip Applier",
    "used_for": "Applying clips to ducts/vessels",
    "recognize_by": "Long shaft clip device",
    "common_procedures": "Laparoscopic cholecystectomy",
    "similar_to": "Maryland Dissector",
    "do_not_confuse_with": "Stapler",
    "difficulty": "Medium",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 49,
    "name": "Veress Needle",
    "category": "Laparoscopic",
    "subcategory": "Access Instrument",
    "used_for": "Insufflation access",
    "recognize_by": "Spring-loaded needle",
    "common_procedures": "Laparoscopy",
    "similar_to": "Trocar",
    "do_not_confuse_with": "Trocar",
    "difficulty": "Hard",
    "learned": false,
    "image_url": "",
    "notes": ""
  },
  {
    "id": 50,
    "name": "Endocatch Bag",
    "category": "Laparoscopic",
    "subcategory": "Specimen Bag",
    "used_for": "Removing specimens",
    "recognize_by": "Bag on long shaft",
    "common_procedures": "Laparoscopic cholecystectomy; appendectomy",
    "similar_to": "Specimen cup",
    "do_not_confuse_with": "Trocar",
    "difficulty": "Easy",
    "learned": false,
    "image_url": "",
    "notes": ""
  }
];

const state = {
  instruments: [],
  query: "",
  category: "all",
  difficulty: "all",
  learned: "all",
  quizItem: null,
};

const elements = {
  cards: document.querySelector("#cards"),
  template: document.querySelector("#cardTemplate"),
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categoryFilter"),
  difficulty: document.querySelector("#difficultyFilter"),
  learned: document.querySelector("#learnedFilter"),
  reset: document.querySelector("#resetFilters"),
  totalCount: document.querySelector("#totalCount"),
  learnedCount: document.querySelector("#learnedCount"),
  visibleCount: document.querySelector("#visibleCount"),
  empty: document.querySelector("#emptyState"),
  themeToggle: document.querySelector("#themeToggle"),
  quizMode: document.querySelector("#quizMode"),
  quizPanel: document.querySelector("#quizPanel"),
  quizPrompt: document.querySelector("#quizPrompt"),
  quizClue: document.querySelector("#quizClue"),
  quizCard: document.querySelector("#quizCard"),
  quizOptions: document.querySelector("#quizOptions"),
  quizFeedback: document.querySelector("#quizFeedback"),
  nextQuestion: document.querySelector("#nextQuestion"),
  exitQuiz: document.querySelector("#exitQuiz"),
};

const learnedStorageKey = "surgical-instrument-learned";

async function init() {
  state.instruments = await loadInstrumentDatabase();
  applyStoredLearned();
  populateFilters();
  bindEvents();
  render();
}

async function loadInstrumentDatabase() {
  try {
    const response = await fetch("instruments.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn("Using embedded starter database because instruments.json could not be loaded.", error);
    return structuredClone(DEFAULT_INSTRUMENTS);
  }
}

function bindEvents() {
  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value.toLowerCase().trim();
    render();
  });
  elements.category.addEventListener("change", (event) => {
    state.category = event.target.value;
    render();
  });
  elements.difficulty.addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    render();
  });
  elements.learned.addEventListener("change", (event) => {
    state.learned = event.target.value;
    render();
  });
  elements.reset.addEventListener("click", resetFilters);
  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.quizMode.addEventListener("click", startQuiz);
  elements.nextQuestion.addEventListener("click", nextQuestion);
  elements.exitQuiz.addEventListener("click", () => elements.quizPanel.classList.add("hidden"));
}

function populateFilters() {
  addOptions(elements.category, uniqueValues("category"));
  addOptions(elements.difficulty, uniqueValues("difficulty"));
}

function addOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function uniqueValues(field) {
  return [...new Set(state.instruments.map((item) => item[field]).filter(Boolean))].sort();
}

function getFilteredInstruments() {
  return state.instruments.filter((item) => {
    const searchableText = Object.values(item).join(" ").toLowerCase();
    const matchesQuery = !state.query || searchableText.includes(state.query);
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesDifficulty = state.difficulty === "all" || item.difficulty === state.difficulty;
    const matchesLearned = state.learned === "all" || (state.learned === "learned" ? item.learned : !item.learned);
    return matchesQuery && matchesCategory && matchesDifficulty && matchesLearned;
  });
}

function render() {
  const filtered = getFilteredInstruments();
  elements.cards.replaceChildren(...filtered.map(createCard));
  elements.empty.classList.toggle("hidden", filtered.length > 0);
  elements.totalCount.textContent = state.instruments.length;
  elements.learnedCount.textContent = state.instruments.filter((item) => item.learned).length;
  elements.visibleCount.textContent = filtered.length;
}

function createCard(item) {
  const card = elements.template.content.firstElementChild.cloneNode(true);
  const imageSlot = card.querySelector(".image-slot");
  const learnedButton = card.querySelector(".learned-btn");

  if (item.image_url) {
    const image = document.createElement("img");
    image.src = item.image_url;
    image.alt = item.name;
    imageSlot.append(image);
  } else {
    imageSlot.textContent = item.name.slice(0, 1);
  }

  card.querySelector(".category").textContent = item.category;
  card.querySelector("h2").textContent = item.name;
  card.querySelector(".subcategory").textContent = item.subcategory;
  card.querySelector(".use").textContent = item.used_for;
  card.querySelector(".tags").replaceChildren(...buildTags(item));
  card.querySelector(".details").replaceChildren(...buildDetails(item));
  card.querySelector(".notes").textContent = item.notes ? `Notes: ${item.notes}` : "";

  learnedButton.textContent = item.learned ? "Learned" : "Mark learned";
  learnedButton.setAttribute("aria-pressed", String(item.learned));
  learnedButton.addEventListener("click", () => toggleLearned(item.id));
  return card;
}

function buildTags(item) {
  return [item.difficulty, item.subcategory, ...splitList(item.common_procedures)].filter(Boolean).map((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    return span;
  });
}

function buildDetails(item) {
  const fields = [
    ["Recognize", item.recognize_by],
    ["Procedures", item.common_procedures],
    ["Similar", item.similar_to],
    ["Avoid", item.do_not_confuse_with],
  ];
  return fields.flatMap(([label, value]) => {
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value || "—";
    return [term, description];
  });
}

function splitList(value) {
  return value ? value.split(";").map((item) => item.trim()) : [];
}

function toggleLearned(id) {
  const item = state.instruments.find((instrument) => instrument.id === id);
  item.learned = !item.learned;
  localStorage.setItem(learnedStorageKey, JSON.stringify(state.instruments.filter((instrument) => instrument.learned).map((instrument) => instrument.id)));
  render();
}

function applyStoredLearned() {
  const learnedIds = JSON.parse(localStorage.getItem(learnedStorageKey) || "[]");
  state.instruments.forEach((item) => {
    item.learned = learnedIds.includes(item.id) || item.learned;
  });
}

function resetFilters() {
  state.query = "";
  state.category = "all";
  state.difficulty = "all";
  state.learned = "all";
  elements.search.value = "";
  elements.category.value = "all";
  elements.difficulty.value = "all";
  elements.learned.value = "all";
  render();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  elements.themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
}

function startQuiz() {
  elements.quizPanel.classList.remove("hidden");
  nextQuestion();
  elements.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function nextQuestion() {
  const source = getFilteredInstruments().length ? getFilteredInstruments() : state.instruments;
  state.quizItem = source[Math.floor(Math.random() * source.length)];
  const options = shuffle([state.quizItem, ...shuffle(state.instruments.filter((item) => item.id !== state.quizItem.id)).slice(0, 3)]);
  elements.quizPrompt.textContent = "Which instrument matches this clue?";
  elements.quizClue.textContent = `${state.quizItem.used_for} Recognize by: ${state.quizItem.recognize_by}.`;
  elements.quizCard.innerHTML = `<strong>Category:</strong> ${state.quizItem.category}<br><strong>Difficulty:</strong> ${state.quizItem.difficulty}`;
  elements.quizFeedback.textContent = "";
  elements.quizOptions.replaceChildren(...options.map(createOption));
}

function createOption(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = item.name;
  button.addEventListener("click", () => {
    const correct = item.id === state.quizItem.id;
    elements.quizFeedback.textContent = correct ? "Correct — nice work." : `Not quite. The answer is ${state.quizItem.name}.`;
    elements.quizFeedback.style.color = correct ? "var(--accent-strong)" : "#c2410c";
  });
  return button;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

init().catch((error) => {
  elements.cards.innerHTML = `<p class="empty">Unable to start study app: ${error.message}</p>`;
});
