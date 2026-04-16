export const categories = [
  { id: "medico", name: "Médico", emoji: "👨‍⚕️" },
  { id: "dentista", name: "Dentista", emoji: "🦷" },
  { id: "cabeleireiro", name: "Cabeleireiro", emoji: "💇" },
  { id: "personal", name: "Personal", emoji: "🏋️" },
  { id: "petshop", name: "Petshop", emoji: "🐶" },
  { id: "pilates", name: "Pilates", emoji: "🧘" },
  { id: "manicure", name: "Manicure", emoji: "💅" },
  { id: "nutricionista", name: "Nutricionista", emoji: "🍎" },
  { id: "lavacar", name: "Lava Car", emoji: "🚗" },
];

export interface Establishment {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  categoryId: string;
  image: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface Reservation {
  id: string;
  serviceName: string;
  establishmentName: string;
  date: string;
  time: string;
  price: number;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
}

export const establishments: Establishment[] = [
  {
    id: "1",
    name: "Clínica São Gabriel",
    address: "Av. Brasil, 1500",
    neighborhood: "Jardins",
    city: "São Paulo",
    phone: "(11) 0000-0000",
    categoryId: "medico",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=300&fit=crop",
    services: [
      { id: "s1", name: "Consulta Dr. Alberto Souza", price: 300 },
      { id: "s2", name: "Consulta Dra. Maria Alice", price: 450 },
      { id: "s3", name: "Exame Mamografia", price: 620 },
      { id: "s4", name: "Exame Ultrassom", price: 270 },
    ],
  },
  {
    id: "2",
    name: "Clínica Médica São Remo",
    address: "Av. Nove de Julho, 854",
    neighborhood: "Centro",
    city: "São Paulo",
    phone: "(11) 0000-0000",
    categoryId: "medico",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=300&fit=crop",
    services: [
      { id: "s5", name: "Consulta Dr. Alberto Souza", price: 350 },
      { id: "s6", name: "Consulta Dra. Fernanda Lima", price: 400 },
    ],
  },
  {
    id: "3",
    name: "Clínica Médica Assis",
    address: "Rua Itapura, 695",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    phone: "(11) 0000-0000",
    categoryId: "medico",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop",
    services: [
      { id: "s7", name: "Consulta Clínico Geral", price: 250 },
      { id: "s8", name: "Exame de Sangue", price: 120 },
    ],
  },
  {
    id: "4",
    name: "Clínica Médica Integrada",
    address: "Rua Cardoso de Almeida, 997",
    neighborhood: "Perdizes",
    city: "São Paulo",
    phone: "(11) 0000-0000",
    categoryId: "medico",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=300&fit=crop",
    services: [
      { id: "s9", name: "Consulta Cardiologista", price: 500 },
      { id: "s10", name: "Eletrocardiograma", price: 380 },
    ],
  },
  {
    id: "5",
    name: "Pet Care Center",
    address: "Rua Augusta, 1200",
    neighborhood: "Consolação",
    city: "São Paulo",
    phone: "(11) 1111-1111",
    categoryId: "petshop",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=300&fit=crop",
    services: [
      { id: "s11", name: "Banho e Tosa", price: 80 },
      { id: "s12", name: "Consulta Veterinária", price: 200 },
    ],
  },
  {
    id: "6",
    name: "Studio Hair Design",
    address: "Rua Oscar Freire, 450",
    neighborhood: "Pinheiros",
    city: "São Paulo",
    phone: "(11) 2222-2222",
    categoryId: "cabeleireiro",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=300&fit=crop",
    services: [
      { id: "s13", name: "Corte Feminino", price: 120 },
      { id: "s14", name: "Coloração", price: 250 },
      { id: "s15", name: "Escova Progressiva", price: 350 },
    ],
  },
];

export const mockReservations: Reservation[] = [
  {
    id: "r1",
    serviceName: "Consulta Dr. Alberto Souza",
    establishmentName: "Clínica Médica São Remo",
    date: "18/02/2021",
    time: "09:30h",
    price: 350,
    address: "Av. Nove de Julho, 854",
    neighborhood: "Centro",
    city: "São Paulo",
    phone: "(11) 0000-0000",
  },
  {
    id: "r2",
    serviceName: "Consulta Dr. Alberto Souza",
    establishmentName: "Clínica Médica São Remo",
    date: "25/03/2021",
    time: "14:00h",
    price: 350,
    address: "Av. Nove de Julho, 854",
    neighborhood: "Centro",
    city: "São Paulo",
    phone: "(11) 0000-0000",
  },
];

export const mockUser = {
  name: "Heber Stein Mazutti",
  email: "heber@99coders.com.br",
};

export const availableTimes = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00"];
