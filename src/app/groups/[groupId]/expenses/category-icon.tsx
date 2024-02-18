import { Category } from '@prisma/client'
import {
  Armchair,
  Baby,
  Banknote,
  Bike,
  Bus,
  Car,
  CarTaxiFront,
  Cat,
  Clapperboard,
  CupSoda,
  Dices,
  Dumbbell,
  Eraser,
  FerrisWheel,
  Fuel,
  Gift,
  Home,
  Hotel,
  Lamp,
  Landmark,
  LibraryBig,
  LucideIcon,
  LucideProps,
  Martini,
  Music,
  ParkingMeter,
  Phone,
  PiggyBank,
  Plane,
  Plug,
  PlugZap,
  Shirt,
  ShoppingCart,
  Stethoscope,
  ThermometerSun,
  Train,
  Trash,
  Utensils,
  Wine,
  Wrench,
} from 'lucide-react'

export function CategoryIcon({
  category,
  ...props
}: { category: Category | null } & LucideProps) {
  const Icon = getCategoryIcon(`${category?.grouping}/${category?.name}`)
  return <Icon {...props} />
}

function getCategoryIcon(category: string): LucideIcon {
  switch (category) {
    case 'Sin categoría/General':
      return Banknote
    case 'Sin categoría/Pago':
      return Banknote
    case 'Entretenimiento/Entretenimiento':
      return FerrisWheel
    case 'Entretenimiento/Juegos':
      return Dices
    case 'Entretenimiento/Películas':
      return Clapperboard
    case 'Entretenimiento/Música':
      return Music
    case 'Entretenimiento/Deportes':
      return Dumbbell
    case 'Comida y Bebida/Comida y Bebida':
      return Utensils
    case 'Comida y Bebida/Cenas fuera':
      return Martini
    case 'Comida y Bebida/Comestibles':
      return ShoppingCart
    case 'Comida y Bebida/Licores':
      return Wine
    case 'Hogar/Hogar':
      return Home
    case 'Hogar/Electrónicos':
      return Plug
    case 'Hogar/Muebles':
      return Armchair
    case 'Hogar/Suministros del hogar':
      return Lamp
    case 'Hogar/Mantenimiento':
      return Wrench
    case 'Hogar/Hipoteca':
      return Landmark
    case 'Hogar/Mascotas':
      return Cat
    case 'Hogar/Alquiler':
      return PiggyBank
    case 'Hogar/Servicios':
      return Wrench
    case 'Vida/Cuidado infantil':
      return Baby
    case 'Vida/Ropa':
      return Shirt
    case 'Vida/Educación':
      return LibraryBig
    case 'Vida/Regalos':
      return Gift
    case 'Vida/Seguros':
      return Landmark
    case 'Vida/Gastos médicos':
      return Stethoscope
    case 'Vida/Impuestos':
      return Banknote
    case 'Transporte/Transporte':
      return Bus
    case 'Transporte/Bicicleta':
      return Bike
    case 'Transporte/Autobús/Tren':
      return Train
    case 'Transporte/Coche':
      return Car
    case 'Transporte/Gas/Combustible':
      return Fuel
    case 'Transporte/Hotel':
      return Hotel
    case 'Transporte/Aparcamiento':
      return ParkingMeter
    case 'Transporte/Avión':
      return Plane
    case 'Transporte/Taxi':
      return CarTaxiFront
    case 'Servicios públicos/Servicios públicos':
      return Banknote
    case 'Servicios públicos/Limpieza':
      return Eraser
    case 'Servicios públicos/Electricidad':
      return PlugZap
    case 'Servicios públicos/Calor/Gas':
      return ThermometerSun
    case 'Servicios públicos/Basura':
      return Trash
    case 'Servicios públicos/TV/Teléfono/Internet':
      return Phone
    case 'Servicios públicos/Agua':
      return CupSoda
    default:
      return Banknote
  }
}