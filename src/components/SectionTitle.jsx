import { motion } from 'framer-motion'

/**
 * Reusable section title with animations
 */
const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-16`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`section-title ${light ? 'text-charcoal-950' : 'text-white'}`}
      >
        {title}
      </motion.h2>

      {/* Gold Line Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className={`h-[2px] w-24 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 my-6 ${centered ? 'mx-auto' : ''}`}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-lg leading-relaxed ${light ? 'text-charcoal-600' : 'text-charcoal-400'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle

