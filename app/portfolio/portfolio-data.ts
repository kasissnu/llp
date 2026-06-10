export type EventKey = "weddings" | "prewedding";

export type Album = {
  slug: string;
  title: string;
  place: string;
  cover: string;
  images: string[];
};

const sharedWeddingImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
];

const sharedPreweddingImages = [
  "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
];

export const eventLabels: Record<EventKey, string> = {
  weddings: "Wedding",
  prewedding: "Prewedding",
};

export const portfolioAlbums: Record<EventKey, Album[]> = {
  weddings: [
    {
      slug: "aditi-chris",
      title: "Aditi & Chris",
      place: "Indiranagar / temple ceremony",
      cover: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1000&q=85",
      images: sharedWeddingImages,
    },
    {
      slug: "ananya-varun",
      title: "Ananya & Varun",
      place: "Palace Grounds / reception",
      cover: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85",
      images: sharedWeddingImages.slice().reverse(),
    },
    {
      slug: "leah-arjun",
      title: "Leah & Arjun",
      place: "Whitefield / intimate wedding",
      cover: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
      images: [...sharedWeddingImages.slice(2), ...sharedWeddingImages.slice(0, 2)],
    },
  ],
  prewedding: [
    {
      slug: "meera-siddharth",
      title: "Meera & Siddharth",
      place: "Jayanagar / garden portraits",
      cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
      images: sharedPreweddingImages,
    },
    {
      slug: "nisha-rohan",
      title: "Nisha & Rohan",
      place: "MG Road / cocktail evening",
      cover: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=85",
      images: sharedPreweddingImages.slice().reverse(),
    },
    {
      slug: "tara-kabir",
      title: "Tara & Kabir",
      place: "Bangalore farmhouse / haldi",
      cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
      images: [...sharedPreweddingImages.slice(1), sharedPreweddingImages[0]],
    },
  ],
};

export const filmEmbeds: Record<EventKey, string> = {
  weddings: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  prewedding: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};
