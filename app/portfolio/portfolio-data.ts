export type EventKey = "weddings" | "prewedding";

export type Album = {
  slug: string;
  title: string;
  place: string;
  cover: string;
  images: string[];
};

const sharedWeddingImages = [
  "/ws/landscape-01.jpg",
  "/ws/landscape-02.jpg",
  "/ws/landscape-03.jpg",
  "/ws/landscape-04.jpg",
  "/ws/landscape-05.jpg",
  "/ws/landscape-06.jpg",
];

const sharedPreweddingImages = [
  "/ws/portrait-01.jpg",
  "/ws/portrait-02.jpg",
  "/ws/portrait-03.jpg",
  "/ws/portrait-04.jpg",
  "/ws/portrait-05.jpg",
  "/ws/portrait-06.jpg",
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
      cover: "/ws/landscape-01.jpg",
      images: sharedWeddingImages,
    },
    {
      slug: "ananya-varun",
      title: "Ananya & Varun",
      place: "Palace Grounds / reception",
      cover: "/ws/landscape-02.jpg",
      images: sharedWeddingImages.slice().reverse(),
    },
    {
      slug: "leah-arjun",
      title: "Leah & Arjun",
      place: "Whitefield / intimate wedding",
      cover: "/ws/landscape-03.jpg",
      images: [...sharedWeddingImages.slice(2), ...sharedWeddingImages.slice(0, 2)],
    },
  ],
  prewedding: [
    {
      slug: "meera-siddharth",
      title: "Meera & Siddharth",
      place: "Jayanagar / garden portraits",
      cover: "/ws/portrait-02.jpg",
      images: sharedPreweddingImages,
    },
    {
      slug: "nisha-rohan",
      title: "Nisha & Rohan",
      place: "MG Road / cocktail evening",
      cover: "/ws/portrait-03.jpg",
      images: sharedPreweddingImages.slice().reverse(),
    },
    {
      slug: "tara-kabir",
      title: "Tara & Kabir",
      place: "Bangalore farmhouse / haldi",
      cover: "/ws/portrait-04.jpg",
      images: [...sharedPreweddingImages.slice(1), sharedPreweddingImages[0]],
    },
  ],
};

export const filmEmbeds: Record<EventKey, string> = {
  weddings: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  prewedding: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};
