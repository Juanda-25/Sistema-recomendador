export interface Recommendation {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  rating: number;
  location: string;
  price: string;
  category: 'relax' | 'nightlife' | 'family' | 'culture' | 'gastronomy';
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Playa Blanca",
    description: "Hermosa playa de arena blanca con aguas cristalinas, perfecta para relajarse y tomar el sol.",
    image: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    location: "Isla Barú",
    price: "Entrada libre",
    category: "relax",
    coordinates: { lat: 10.2381, lng: -75.5956 }
  },
  {
    id: 2,
    title: "Sofitel Spa",
    description: "Lujoso spa con tratamientos tradicionales y modernos para una experiencia de relajación total.",
    image: "https://media.traveler.es/photos/649ec33f294a233b2ebccff6/master/w_1600%2Cc_limit/6596-74.jpg",
    gallery: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251797234.jpg?k=8dd5aaa9362d2766ac013dd994720463d5cab27dc13a437b6371953c428e1cf1&o=&hp=1",
      "https://s3.amazonaws.com/static-webstudio-accorhotels-usa-1.wp-ha.fastbooking.com/wp-content/uploads/sites/19/2022/03/09202519/DUF_8665-v-ok-1170x780.jpg",
      "https://images.unsplash.com/photo-1540555700479-4be289fbecef?auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    location: "Barrio Bocagrande",
    price: "Desde $150.000",
    category: "relax",
    coordinates: { lat: 10.4051, lng: -75.5551 }
  },
  {
    id: 3,
    title: "La Jugada",
    description: "El mejor bar de salsa de Cartagena con música en vivo y ambiente caribeño.",
    image: "https://cartagenacolombiarentals.com/wp-content/uploads/2019/09/La-Jugada-Club-House-in-Cartagena.jpg",
    gallery: [
      "https://media.traveler.es/photos/64ef162b02a6cd712bf81907/master/w_1600%2Cc_limit/%25C2%25A9-jaime-bishara-unsplash.jpg",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a68?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a69?auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    location: "Getsemaní",
    price: "$$",
    category: "nightlife",
    coordinates: { lat: 10.4214, lng: -75.5476 }
  },
  {
    id: 4,
    title: "Alquímico",
    description: "Bar gourmet de tres pisos con cócteles artesanales y terraza con vista a la ciudad.",
    image: "https://forbesenespanol.com/_next/image?url=https%3A%2F%2Feditorial.forbesenespanol.com%2Fwp-content%2Fuploads%2F2024%2F07%2F0x0-7.webp%3Fv%3D1280853&w=3840&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a188?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a189?auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    location: "Centro Histórico",
    price: "$$$",
    category: "nightlife",
    coordinates: { lat: 10.4233, lng: -75.5501 }
  },
  {
    id: 5,
    title: "Acuario de Cartagena",
    description: "Fascinante acuario con especies marinas locales y shows educativos.",
    image: "https://www.cartagena-indias.com/Diversion/Images/acuario.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd956?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd957?auto=format&fit=crop&q=80"
    ],
    rating: 4.5,
    location: "Isla de San Martín",
    price: "$40.000",
    category: "family",
    coordinates: { lat: 10.4112, lng: -75.5347 }
  },
  {
    id: 6,
    title: "Castillo San Felipe",
    description: "Impresionante fortaleza colonial con tours guiados perfectos para toda la familia.",
    image: "https://www.elespectador.com/resizer/v2/JSLGQ2ILUZBYNJVFDL5YM2VJGY.jpeg?auth=9f7a7511e7ba9c3e4b2f4a49ef3736fa851b8b71b013d534a4d69b1cafca5bf2&width=920&height=613&smart=true&quality=60",
    gallery: [
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0c?auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    location: "Centro Histórico",
    price: "$35.000",
    category: "family",
    coordinates: { lat: 10.4225, lng: -75.5444 }
  },
  {
    id: 7,
    title: "Convento de la Popa",
    description: "Monasterio histórico con vistas panorámicas de toda la ciudad y museo religioso.",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/SYNVWAOGDBFRZN4WWR7W4QAHWU.jpg",
    gallery: [
      "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/SYNVWAOGDBFRZN4WWR7W4QAHWU.jpg",
      "https://images.unsplash.com/photo-1526392060635-9d6019884378?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884379?auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    location: "Cerro de la Popa",
    price: "$25.000",
    category: "culture",
    coordinates: { lat: 10.4283, lng: -75.5281 }
  },
  {
    id: 8,
    title: "Palacio de la Inquisición",
    description: "Museo histórico que alberga instrumentos de tortura y documentos de la Inquisición española.",
    image: "https://blog.redbus.co/wp-content/uploads/2017/10/palacio-de-la-inquisici%C3%B3n-cartagena.jpg",
    gallery: [
      "https://img.local.mx/2017/04/palacio-inquisicion-interna.jpg",
      "https://images.unsplash.com/photo-1588959570728-6b79df9fd78c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588959570728-6b79df9fd78d?auto=format&fit=crop&q=80"
    ],
    rating: 4.6,
    location: "Centro Histórico",
    price: "$30.000",
    category: "culture",
    coordinates: { lat: 10.4236, lng: -75.5503 }
  },
  {
    id: 9,
    title: "La Cevicheria",
    description: "Restaurante famoso por sus ceviches frescos y platos de mar innovadores.",
    image: "https://cartagena.tips/wp-content/uploads/2023/10/Captura-de-Pantalla-2023-11-08-a-las-9.33.59-a.-m.png",
    gallery: [
      "https://images.unsplash.com/photo-1532980193608-32d2f2d18d3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532980193608-32d2f2d18d3c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532980193608-32d2f2d18d3d?auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    location: "Centro Histórico",
    price: "$$$",
    category: "gastronomy",
    coordinates: { lat: 10.4234, lng: -75.5505 }
  },
  {
    id: 10,
    title: "Restaurante Dunia",
    description: "Restaurante de comida típica cartagenera con ambiente casual y precios accesibles.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/72/cb/88/dunia-restaurant.jpg?w=1200&h=-1&s=1",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc837?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc838?auto=format&fit=crop&q=80"
    ],
    rating: 4.5,
    location: "Centro Histórico",
    price: "$$",
    category: "gastronomy",
    coordinates: { lat: 10.4232, lng: -75.5502 }
  }
];