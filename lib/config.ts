// ============================================================
// TASTY KEBAB - Site Configuration
// Edit values here to update the entire site content.
// ============================================================

export const SITE_CONFIG = {
  brand: {
    name: "Tasty Kebab",
    handle: "tasty_kebab.md",
    phone: "+373 62 192 666",
    phoneHref: "tel:+37362192666",
    email: "svetlanaalkusa9@gmail.com",
    emailHref: "mailto:svetlanaalkusa9@gmail.com",
    instagram: "https://www.instagram.com/tasty_kebab.md/",
    instagramHandle: "tasty_kebab.md",
    glovoUrl: "https://glovoapp.com/ro/md/chisinau/stores/tasty-kebab-ksn",
  },
} as const

// ============================================================
// LOCATIONS
// ============================================================

export type Location = {
  id: string
  address: string
  district: string
  mapUrl: string
  phone: string
  phoneHref: string
}

export const LOCATIONS: Location[] = [
  {
    id: "mircea",
    address: "Mircea cel Bătrân 23/3",
    district: "Ciocana",
    mapUrl: "https://www.google.com/maps/place/Tasty+Kebab/@47.0499926,28.8895955,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97d5ad4d5bcd7:0x5067d1112994d370!8m2!3d47.0499926!4d28.8895955!16s%2Fg%2F11jzz2d7zd?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    phone: "076 700 227",
    phoneHref: "tel:+37376700227",
  },
  {
    id: "creanga",
    address: "Ion Creangă 1/1",
    district: "Buiucani",
    mapUrl: "https://www.google.com/maps/place/Tasty+Kebab/@47.0365428,28.8113831,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97d17dbf4e231:0x5fd54806b46a599d!8m2!3d47.0365428!4d28.8113831!16s%2Fg%2F11rtzl7tbd?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    phone: "079 513 109",
    phoneHref: "tel:+37379513109",
  },
  {
    id: "iesilor",
    address: "Calea Ieșilor 15/2",
    district: "Buiucani",
    mapUrl: "https://www.google.com/maps?vet=10CAAQoqAOahcKEwi4sZfv86KUAxUAAAAAHQAAAAAQIQ..i&sca_esv=b7b28de9b2affd5c&pvq=OhYweDA6MHg3OWQ4NzIyN2NiNWIzNDg2&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=md&sa=X&ftid=0x40c97d94dd167d6b:0x79d87227cb5b3486",
    phone: "067 119 133",
    phoneHref: "tel:+37367119133",
  },
  {
    id: "lupu",
    address: "Vasile Lupu 33/2",
    district: "Buiucani",
    mapUrl: "https://yandex.com/maps/org/169644189530/?ll=28.804597%2C47.021723&z=16",
    phone: "079 119 630",
    phoneHref: "tel:+37379119630",
  },
  {
    id: "burebista",
    address: "Burebista 110A",
    district: "Botanica",
    mapUrl: "https://www.google.com/maps/place/Tasty+kebab/@46.9803024,28.8744676,17z/data=!3m1!4b1!4m6!3m5!1s0x40c979000484b27f:0x981e5f871a741c2e!8m2!3d46.9803024!4d28.8744676!16s%2Fg%2F11yx_v3lr3?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    phone: "079 251 104",
    phoneHref: "tel:+37379251104",
  },
]

// ============================================================
// SCHEDULE - 24/7
// ============================================================

export const SCHEDULE = [
  { dayKey: "mon", hours: "00:00 — 23:59" },
  { dayKey: "tue", hours: "00:00 — 23:59" },
  { dayKey: "wed", hours: "00:00 — 23:59" },
  { dayKey: "thu", hours: "00:00 — 23:59" },
  { dayKey: "fri", hours: "00:00 — 23:59" },
  { dayKey: "sat", hours: "00:00 — 23:59" },
  { dayKey: "sun", hours: "00:00 — 23:59" },
] as const

// ============================================================
// MENU CATEGORIES
// ============================================================

export type MenuCategory = {
  id: string
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "tasty-meniu" },
  { id: "fried-chicken" },
  { id: "kebab" },
  { id: "baghet" },
  { id: "burgers" },
  { id: "pizza" },
  { id: "frigarui" },
  { id: "salate" },
  { id: "garnituri" },
  { id: "bauturi" },
]

// ============================================================
// MENU ITEMS - bilingual descriptions
// ============================================================

export type MenuItem = {
  id: string
  category: string
  name: string
  description: { ru: string; ro: string }
  price: number
  image?: string
  badge?: "HIT" | "NEW" | "TOP"
}

export const MENU_ITEMS: MenuItem[] = [
  // ===== TASTY MENIU =====
  {
    id: "aripi-meniu-mare",
    category: "tasty-meniu",
    name: "Aripi Meniu Mare",
    description: {
      ru: "14 крылышек, картофель фри + напиток на выбор 500 мл",
      ro: "Aripi 14 buc., cartofi pai + băutură la alegere 500 ml",
    },
    price: 190,
    image: "/nuggets.webp",
    badge: "TOP",
  },
  {
    id: "nuggets-meniu-mare",
    category: "tasty-meniu",
    name: "Nuggets Meniu Mare",
    description: {
      ru: "Наггетсы, картофель фри + напиток на выбор 500 мл",
      ro: "Nuggets, cartofi pai + băutură la alegere 500 ml",
    },
    price: 190,
    image: "/nuggets.webp",
  },
  {
    id: "aripi-meniu-mic",
    category: "tasty-meniu",
    name: "Aripi Meniu Mic",
    description: {
      ru: "8 крылышек, картофель фри 150 г + напиток 500 мл",
      ro: "Aripi 8 buc., cartofi pai 150 g + băutură 500 ml",
    },
    price: 150,
    image: "/nuggets.webp",
  },
  {
    id: "nuggets-meniu-mic",
    category: "tasty-meniu",
    name: "Nuggets Meniu Mic",
    description: {
      ru: "Наггетсы, картофель фри 150 г + напиток 500 мл",
      ro: "Nuggets, cartofi pai 150 g + băutură 500 ml",
    },
    price: 150,
    image: "/nuggets.webp",
  },
  {
    id: "meniu-kebab-mare",
    category: "tasty-meniu",
    name: "Meniu Kebab Mare de pui",
    description: {
      ru: "Большой кебаб, картофель фри 150 г + напиток 500 мл",
      ro: "Kebab mare, cartofi pai 150 g + băutură 500 ml",
    },
    price: 120,
    image: "/Meniumarepui.webp",
  },
  {
    id: "baget-meniu",
    category: "tasty-meniu",
    name: "Baget Meniu Pui",
    description: {
      ru: "Багет с курицей, картофель фри 150 г + напиток 500 мл",
      ro: "Baget cu carne de pui, cartofi pai 150 g + băutură 500 ml",
    },
    price: 120,
    image: "/Bagetmeniupui.webp",
  },
  {
    id: "meniu-kebab-mic",
    category: "tasty-meniu",
    name: "Meniu Kebab Mic de pui",
    description: {
      ru: "Маленький кебаб, картофель фри 150 г + напиток 500 мл",
      ro: "Kebab mic, cartofi pai 150 g + băutură 500 ml",
    },
    price: 110,
    image: "/meniukebabmic.webp",
  },
  {
    id: "meniu-burger",
    category: "tasty-meniu",
    name: "Meniu Burger de pui",
    description: {
      ru: "Бургер с курицей, картофель фри 150 г + напиток 500 мл",
      ro: "Burger pui, cartofi pai 150 g + băutură 500 ml",
    },
    price: 110,
    image: "/meniuburgher.webp",
  },

  // ===== TASTY FRIED CHICKEN =====
  {
    id: "aripi-14",
    category: "fried-chicken",
    name: "Aripi 14 buc.",
    description: {
      ru: "14 крылышек в хрустящей панировке",
      ro: "14 aripioare în pesmet crocant",
    },
    price: 160,
    image: "/nuggets.webp",
    badge: "HIT",
  },
  {
    id: "nuggets-8",
    category: "fried-chicken",
    name: "Nuggets 8 buc.",
    description: {
      ru: "8 сочных наггетсов в хрустящей панировке",
      ro: "8 nuggets suculenți în pesmet crocant",
    },
    price: 160,
    image: "/nuggets.webp",
  },
  {
    id: "aripi-8",
    category: "fried-chicken",
    name: "Aripi 8 buc.",
    description: {
      ru: "8 крылышек в хрустящей панировке",
      ro: "8 aripioare în pesmet crocant",
    },
    price: 120,
    image: "/nuggets.webp",
  },
  {
    id: "nuggets-5",
    category: "fried-chicken",
    name: "Nuggets 5 buc.",
    description: {
      ru: "5 сочных наггетсов в хрустящей панировке",
      ro: "5 nuggets suculenți în pesmet crocant",
    },
    price: 120,
    image: "/nuggets.webp",
  },

  // ===== KEBAB =====
  {
    id: "kebab-tasty",
    category: "kebab",
    name: "Kebab Tasty",
    description: {
      ru: "Лаваш, мясо, помидоры, маринованные огурцы, капуста, салат, картофель фри, кетчуп, соус, сыр",
      ro: "Lavaș, carne, roșii, castraveți murați, varză, salată, cartofi pai, ketchup, sos, cașcaval",
    },
    price: 90,
    image: "/kebabtasty.webp",
    badge: "HIT",
  },
  {
    id: "kebab-twister",
    category: "kebab",
    name: "Kebab Twister",
    description: {
      ru: "Лаваш, курица, помидоры, огурцы, капуста, салат, фри, моцарелла, соус",
      ro: "Lavaș, pui, roșii, castraveți murați, varză, salată, cartofi pai, Mozzarella, sos",
    },
    price: 80,
    image: "/twister.webp",
  },
  {
    id: "kebab-mare",
    category: "kebab",
    name: "Kebab Mare de pui",
    description: {
      ru: "Лаваш, мясо, помидоры, огурцы, капуста, салат, фри, кетчуп, соус",
      ro: "Lavaș, carne, roșii, castraveți murați, varză, salată, cartofi pai, ketchup, sos",
    },
    price: 70,
    image: "/kebabmare.webp",
  },
  {
    id: "kebab-mic",
    category: "kebab",
    name: "Kebab Mic de pui",
    description: {
      ru: "Лаваш, мясо, помидоры, огурцы, капуста, салат, фри, кетчуп, соус",
      ro: "Lavaș, carne, roșii, castraveți murați, varză, salată, cartofi pai, ketchup, sos",
    },
    price: 60,
    image: "/kebabmic.webp",
  },

  // ===== BAGHET & PITA =====
  {
    id: "baghet-pui",
    category: "baghet",
    name: "Baghet de pui",
    description: {
      ru: "Багет, мясо, помидоры, огурцы, красный лук, салат, кетчуп, соус",
      ro: "Baghetă, carne, roșii, castraveți murați, ceapă roșie, salată, ketchup, sos",
    },
    price: 80,
    image: "/bageta.webp",
  },
  {
    id: "pita-pui",
    category: "baghet",
    name: "Pita de pui",
    description: {
      ru: "Пита, мясо, помидоры, огурцы, капуста, салат, кетчуп, соус",
      ro: "Pita, carne, roșii, castraveți murați, varză, salată, ketchup, sos",
    },
    price: 70,
    image: "/pita.webp",
  },

  // ===== BURGERS =====
  {
    id: "burger-pui",
    category: "burgers",
    name: "Burger de pui",
    description: {
      ru: "Булочка, мясо, моцарелла, помидоры, огурцы, красный лук, салат, кетчуп, соус",
      ro: "Chiflă, carne, Mozzarella, roșii, castraveți murați, ceapă roșie, salată, ketchup, sos",
    },
    price: 70,
    image: "/burger.jpg",
    badge: "TOP",
  },
  {
    id: "mini-burger",
    category: "burgers",
    name: "Mini Burger",
    description: {
      ru: "Булочка, мясо, помидоры, огурцы, красный лук, салат, кетчуп, соус",
      ro: "Chiflă, carne, roșii, castraveți murați, ceapă roșie, salată, ketchup, sos",
    },
    price: 30,
    image: "/burger.jpg",
    badge: "NEW",
  },

  // ===== PIZZA =====
  {
    id: "margherita",
    category: "pizza",
    name: "Margherita",
    description: {
      ru: "Моцарелла, помидоры, томатный соус, орегано",
      ro: "Mozzarella, roșii, sos roșu, oregano",
    },
    price: 110,
    image: "/MARGARITA.webp",
  },
  {
    id: "neapolitana",
    category: "pizza",
    name: "Neapolitana",
    description: {
      ru: "Сыр, ветчина, оливки, грибы, томатный соус",
      ro: "Cașcaval, șuncă, măsline, ciuperci, sos de roșii",
    },
    price: 110,
    image: "/NEAPOLITTANA.webp",
  },
  {
    id: "rancho",
    category: "pizza",
    name: "Rancho",
    description: {
      ru: "Сыр, грибы, болгарский перец, куриная грудка",
      ro: "Cașcaval, ciuperci, ardei gras, piept de pui",
    },
    price: 110,
    image: "/RANCHO.webp",
  },

  // ===== FRIGARUI =====
  {
    id: "frigarui",
    category: "frigarui",
    name: "Frigărui",
    description: {
      ru: "Мясо, помидоры, огурцы, картофель фри, салат, соус",
      ro: "Carne, roșii, castraveți, cartofi pai, salată, sos",
    },
    price: 110,
    image: "/FRIGARUI.webp",
  },
  {
    id: "twister-extra",
    category: "frigarui",
    name: "Twister Extra",
    description: {
      ru: "Мясо, помидоры, огурцы, салат, картофель фри, соус",
      ro: "Carne, roșii, castraveți murați, salată, cartofi pai, sos",
    },
    price: 110,
    image: "/TWISTEREXTRA.webp",
  },

  // ===== SALATE =====
  {
    id: "salata-cezar",
    category: "salate",
    name: "Salată Cezar",
    description: {
      ru: "Курица, черри, гренки, салат, моцарелла, оливковое масло, соус",
      ro: "Pui, cherry, pesmeți, salată, Mozzarella, ulei de măsline, sos",
    },
    price: 80,
    image: "/CEZAR.webp",
  },
  {
    id: "salata-greceasca",
    category: "salate",
    name: "Salată Grecească",
    description: {
      ru: "Черри, огурцы, салат, оливки, перец, брынза, лук, оливковое масло",
      ro: "Cherry, castraveți, salată, măsline, ardei, brânză Bulgărească, ceapă, ulei de măsline",
    },
    price: 60,
    image: "/GRECEASCA.webp",
  },

  // ===== GARNITURI =====
  {
    id: "cartofi-pai",
    category: "garnituri",
    name: "Cartofi Pai",
    description: {
      ru: "Хрустящий картофель фри",
      ro: "Cartofi pai crocanți",
    },
    price: 35,
    image: "/CARTOFI.webp",
  },

  // ===== BAUTURI =====
  {
    id: "fuzetea",
    category: "bauturi",
    name: "Fuzetea",
    description: { ru: "500 мл", ro: "500 ml" },
    price: 25,
  },
  {
    id: "cappy-pulpy",
    category: "bauturi",
    name: "Cappy Pulpy",
    description: { ru: "500 мл", ro: "500 ml" },
    price: 25,
  },
  {
    id: "coca-cola",
    category: "bauturi",
    name: "Coca-Cola",
    description: { ru: "500 мл", ro: "500 ml" },
    price: 20,
  },
  {
    id: "fanta",
    category: "bauturi",
    name: "Fanta",
    description: { ru: "500 мл", ro: "500 ml" },
    price: 20,
  },
  {
    id: "sprite",
    category: "bauturi",
    name: "Sprite",
    description: { ru: "500 мл", ro: "500 ml" },
    price: 20,
  },
  {
    id: "dorna-plata",
    category: "bauturi",
    name: "Dorna Plată",
    description: { ru: "500 мл", ro: "500 ml" },
    price: 15,
  },
]
