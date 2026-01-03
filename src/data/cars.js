// Luxury car collection data
export const cars = [
  {
    id: 1,
    brand: 'Rolls-Royce',
    model: 'Phantom VIII',
    year: 2024,
    price: 485000,
    description: 'The pinnacle of automotive luxury. Hand-crafted perfection with bespoke interior.',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
    featured: true,
    specs: {
      engine: '6.75L V12 Twin-Turbo',
      power: '563 HP',
      acceleration: '5.1s 0-100 km/h',
      topSpeed: '250 km/h'
    }
  },
  {
    id: 2,
    brand: 'Bentley',
    model: 'Continental GT',
    year: 2024,
    price: 245000,
    description: 'Grand touring excellence. Unrivaled craftsmanship meets exhilarating performance.',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
    featured: true,
    specs: {
      engine: '6.0L W12 Twin-Turbo',
      power: '659 HP',
      acceleration: '3.6s 0-100 km/h',
      topSpeed: '333 km/h'
    }
  },
  {
    id: 3,
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2024,
    price: 295000,
    description: 'Aerodynamic perfection. Italian engineering at its finest with brutal performance.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    featured: true,
    specs: {
      engine: '5.2L V10',
      power: '640 HP',
      acceleration: '2.9s 0-100 km/h',
      topSpeed: '325 km/h'
    }
  },
  {
    id: 4,
    brand: 'Ferrari',
    model: '296 GTB',
    year: 2024,
    price: 325000,
    description: 'Hybrid supercar excellence. The future of Prancing Horse performance.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    featured: true,
    specs: {
      engine: '3.0L V6 Hybrid',
      power: '830 HP',
      acceleration: '2.9s 0-100 km/h',
      topSpeed: '330 km/h'
    }
  },
  {
    id: 5,
    brand: 'Porsche',
    model: '911 Turbo S',
    year: 2024,
    price: 235000,
    description: 'Legendary performance. The benchmark of sports car engineering.',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
    featured: false,
    specs: {
      engine: '3.8L Flat-6 Twin-Turbo',
      power: '640 HP',
      acceleration: '2.7s 0-100 km/h',
      topSpeed: '330 km/h'
    }
  },
  {
    id: 6,
    brand: 'Mercedes-AMG',
    model: 'GT Black Series',
    year: 2024,
    price: 395000,
    description: 'Track-bred excellence. The most powerful AMG V8 production car ever built.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    featured: false,
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '730 HP',
      acceleration: '3.2s 0-100 km/h',
      topSpeed: '325 km/h'
    }
  },
  {
    id: 7,
    brand: 'Aston Martin',
    model: 'DB12',
    year: 2024,
    price: 275000,
    description: 'British elegance redefined. A super tourer with breathtaking beauty.',
    image: 'https://images.unsplash.com/photo-1596486209871-04dcc2a2b6e4?w=800&q=80',
    featured: false,
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '680 HP',
      acceleration: '3.5s 0-100 km/h',
      topSpeed: '325 km/h'
    }
  },
  {
    id: 8,
    brand: 'McLaren',
    model: '720S Spider',
    year: 2024,
    price: 345000,
    description: 'Open-air supercar sensation. Breathtaking design meets aerospace engineering.',
    image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&q=80',
    featured: false,
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '720 HP',
      acceleration: '2.9s 0-100 km/h',
      topSpeed: '341 km/h'
    }
  },
  {
    id: 9,
    brand: 'Maserati',
    model: 'MC20',
    year: 2024,
    price: 265000,
    description: 'Italian passion unleashed. A new era of Maserati performance begins.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    featured: false,
    specs: {
      engine: '3.0L V6 Twin-Turbo',
      power: '630 HP',
      acceleration: '2.9s 0-100 km/h',
      topSpeed: '325 km/h'
    }
  }
]

export const featuredCars = cars.filter(car => car.featured)

export const formatPrice = (price) => {
  return new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

