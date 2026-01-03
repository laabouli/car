import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CarCard from '../components/CarCard'
import { cars } from '../data/cars'

/**
 * Collection page - Full car gallery with filtering
 */
const Collection = () => {
  const [filter, setFilter] = useState('all')
  
  // Get unique brands for filter
  const brands = ['all', ...new Set(cars.map(car => car.brand))]
  
  // Filter cars based on selection
  const filteredCars = filter === 'all' 
    ? cars 
    : cars.filter(car => car.brand === filter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 to-charcoal-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold-500 uppercase tracking-[0.4em] text-sm mb-4"
            >
              Our Collection
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            >
              Exceptional <span className="gold-text">Vehicles</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-charcoal-300 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Browse our carefully curated selection of the world's most prestigious 
              automobiles, each representing the pinnacle of automotive excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="py-12 lg:py-16 bg-charcoal-950">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setFilter(brand)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                  filter === brand
                    ? 'bg-gold-500 text-charcoal-950 font-semibold'
                    : 'border border-gold-500/30 text-charcoal-300 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                {brand === 'all' ? 'All Brands' : brand}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-charcoal-400 text-sm mb-8 text-center"
          >
            Showing <span className="text-gold-500">{filteredCars.length}</span> vehicles
          </motion.p>

          {/* Cars Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CarCard car={car} index={0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredCars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-charcoal-400 text-lg">
                No vehicles found for this selection.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a044' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">
                Can't Find What You're Looking For?
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Vehicle Sourcing Service
              </h2>
              <p className="text-charcoal-400 text-lg mb-8">
                Tell us exactly what you're searching for. Our global network allows us 
                to source virtually any luxury vehicle to meet your specific requirements.
              </p>
              <a
                href="tel:+41778144039"
                className="btn-gold inline-flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                Contact Our Specialists
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

export default Collection

