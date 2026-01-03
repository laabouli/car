import { motion } from 'framer-motion'
import { formatPrice } from '../data/cars'

/**
 * Luxury car card component with hover effects
 */
const CarCard = ({ car, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group card-luxury rounded-lg overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-60" />
        
        {/* Year Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-charcoal-950/80 backdrop-blur-sm text-gold-500 text-xs uppercase tracking-wider rounded-full border border-gold-500/30">
            {car.year}
          </span>
        </div>

        {/* Featured Badge */}
        {car.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gold-500 text-charcoal-950 text-xs font-semibold uppercase tracking-wider rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-charcoal-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1 }}
            className="btn-gold"
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand */}
        <p className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-2">
          {car.brand}
        </p>

        {/* Model */}
        <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
          {car.model}
        </h3>

        {/* Description */}
        <p className="text-charcoal-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {car.description}
        </p>

        {/* Specs Row */}
        {car.specs && (
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gold-500/10">
            <div className="flex items-center gap-1.5">
              <EngineIcon className="w-4 h-4 text-gold-500/70" />
              <span className="text-charcoal-400 text-xs">{car.specs.power}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <SpeedIcon className="w-4 h-4 text-gold-500/70" />
              <span className="text-charcoal-400 text-xs">{car.specs.acceleration}</span>
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">Starting from</p>
            <p className="font-display text-2xl gold-text font-semibold">
              {formatPrice(car.price)}
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-charcoal-950 transition-colors duration-300"
          >
            <ArrowIcon className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

// Icon Components
const EngineIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const SpeedIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ArrowIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

export default CarCard

