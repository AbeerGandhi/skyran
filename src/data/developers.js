export const developerCategories = [
    {
        title: "Market Leaders & Iconic Developers",
        description: "The pioneers who shaped Dubai's skyline with world-class landmarks and master-planned communities.",
        developers: [
            {
                id: 1,
                name: "EMAAR",
                logo: "/developers/emaar.png",
                description: "Global pioneer in property development and one of the world's most valuable real estate companies, creators of Burj Khalifa and Dubai Mall."
            },
            {
                id: 2,
                name: "DAMAC",
                logo: "/developers/damac.png",
                description: "At the forefront of the Middle East's luxury real estate market since 2002, delivering award-winning residential, commercial and leisure properties."
            },
            {
                id: 3,
                name: "NAKHEEL",
                logo: "/developers/nakheel.png",
                description: "World-leading master developer of iconic projects like Palm Jumeirah, Nakheel is a major contributor to Dubai's vision for the 21st century."
            },
            {
                id: 4,
                name: "SOBHA REALTY",
                logo: "/developers/sobha.png",
                description: "International luxury developer committed to redefining the art of living through sustainable and premium construction quality."
            },
            {
                id: 5,
                name: "ALDAR",
                logo: "/developers/aldar.png",
                description: "The leading real estate developer in Abu Dhabi, Aldar creates master-planned communities across the UAE's most desirable locations."
            }
        ]
    },
    {
        title: "Premium & Established Developers",
        description: "Renowned for their commitment to excellence and high-end residential projects across the UAE.",
        developers: [
            { id: 6, name: "OMNIYAT", logo: "https://www.omniyat.com/assets/logo.svg", description: "Specialized in bespoke luxury real estate and design-led architectural masterpieces." },
            { id: 7, name: "SELECT GROUP", logo: "https://select-group.ae/wp-content/themes/selectgroup/assets/img/logo.svg", description: "Multi-disciplinary real estate development known for high-tier residential towers." },
            { id: 8, name: "AZIZI", logo: "https://azizidevelopments.com/assets/frontend/images/logo.svg", description: "Leading private real estate developer with a focus on modern urban living." }
        ]
    }
];

export const developers = developerCategories.flatMap(cat => cat.developers);

export const getDeveloperById = (id) => {
    return developers.find(d => d.id === parseInt(id));
};
