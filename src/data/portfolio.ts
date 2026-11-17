export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
};

// Reúne os dados pessoais e os cases para manter o conteúdo separado da apresentação.
export const portfolio = {
  name: "Tomás Valente",
  role: "Fotógrafo profissional",
  location: "Lisboa, Portugal · disponível para viajar",
  email: "ola@tomasvalente.example",
  socialLinks: [
    { label: "Instagram", href: "https://example.com/instagram" },
    { label: "Behance", href: "https://example.com/behance" },
  ],
  projects: [
    {
      number: "01",
      name: "Entre votos",
      category: "Casamento · 2025",
      description: "Um registo documental e intimista de um dia feito de encontros e emoção.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Casal celebra o casamento ao ar livre",
    },
    {
      number: "02",
      name: "Pessoas singulares",
      category: "Retrato · 2025",
      description: "Retratos naturais que revelam a personalidade para lá da pose.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Retrato aproximado de uma pessoa ao ar livre",
    },
    {
      number: "03",
      name: "Luz de partida",
      category: "Paisagem · 2024",
      description: "Uma série de paisagens sobre a calma e a luz dos primeiros momentos do dia.",
      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Paisagem natural banhada pela luz quente do amanhecer",
    },
  ] satisfies Project[],
};