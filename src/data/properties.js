export const properties = [
    {
        id: 1,
        title: "Marina Gate Residences",
        type: "Apartment",
        status: ["Ready"],
        price: 2500000,
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1450,
        developer: "EMAAR",
        location: {
            area: "Dubai Marina",
            city: "Dubai"
        },
        description: "Experience luxury living at its finest in the heart of Dubai Marina. This stunning 2-bedroom residence offers breath-taking views of the marina and direct access to the promenade.",
        amenities: ["Infinity Pool", "State-of-the-art Gym", "24/7 Concierge", "Sauna & Steam Room", "Covered Parking"],
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
        ]
    },
    {
        id: 2,
        title: "Burj Vista Tower",
        type: "Apartment",
        status: ["Ready"],
        price: 4200000,
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 2100,
        developer: "EMAAR",
        location: {
            area: "Downtown Dubai",
            city: "Dubai"
        },
        description: "Wake up to iconic views of the Burj Khalifa. This ultra-modern 3-bedroom apartment in Burj Vista offers luxury living with direct connectivity to Dubai Mall.",
        amenities: ["Tennis Court", "Luxury Lounge", "Children's Play Area", "Burj Khalifa Views", "Direct Mall Access"],
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80"
        ]
    },
    {
        id: 3,
        title: "Palm Beach Residences",
        type: "Villa",
        status: ["Ready"],
        price: 15000000,
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 8500,
        developer: "NAKHEEL",
        location: {
            area: "Palm Jumeirah",
            city: "Dubai"
        },
        description: "An exquisite beachfront villa on the iconic Palm Jumeirah. Private beach access, a private pool, and unparalleled luxury throughout.",
        amenities: ["Private Beach", "Private Infinity Pool", "Smart Home System", "Maid's Room", "Landscaped Garden"],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
        ]
    },
    {
        id: 4,
        title: "Sobha Hartland Villa",
        type: "Villa",
        status: ["Ready"],
        price: 8500000,
        bedrooms: 4,
        bathrooms: 5,
        squareFeet: 5200,
        developer: "SOBHA REALTY",
        location: {
            area: "Mohammad Bin Rashid City",
            city: "Dubai"
        },
        description: "Nestled in the heart of Hartland, this 4-bedroom villa offers a perfect blend of luxury and nature with forest views and floor-to-ceiling windows.",
        amenities: ["Forest View", "Private Pool", "Yoga Studio", "Outdoor Cinema", "Smart Lighting"],
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
        images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"]
    },
    {
        id: 5,
        title: "YAS Acres Residence",
        type: "Townhouse",
        status: ["Off-Plan"],
        price: 3200000,
        bedrooms: 3,
        bathrooms: 4,
        squareFeet: 3400,
        developer: "ALDAR",
        location: {
            area: "Yas Island",
            city: "Abu Dhabi"
        },
        description: "Contemporary townhouses on Yas Island featuring open-plan layouts and access to world-class golf courses and parks.",
        amenities: ["Golf Course Access", "Theme Park Proximity", "Community Hub", "Swimming Pool", "BBQ Area"],
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
        images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"]
    },
    {
        id: 6,
        title: "DAMAC Lagoons Villas",
        type: "Villa",
        status: ["Off-Plan"],
        price: 1800000,
        bedrooms: 3,
        bathrooms: 4,
        squareFeet: 2200,
        developer: "DAMAC",
        location: {
            area: "Dubai South",
            city: "Dubai"
        },
        description: "Experience a resort-inspired lifestyle in DAMAC Lagoons. This 3-bedroom villa offers a unique Mediterranean-themed community living.",
        amenities: ["Waterfalls", "Artificial Lagoons", "Amphitheater", "Floating Cinema", "Wave Riding"],
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
        images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80"]
    }
];

export const formatPrice = (price) => {
    if (!price) return 'Price on Request';
    return `AED ${price.toLocaleString()}`;
};

export const formatSquareFeet = (sqft) => {
    return `${sqft.toLocaleString()} sqft`;
};

export const getPropertyById = (id) => {
    return properties.find(p => p.id === parseInt(id));
};
