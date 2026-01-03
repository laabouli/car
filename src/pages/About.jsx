import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { Link } from 'react-router-dom'

/**
 * About page - Company story and values
 */
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80"
            alt="Luxury showroom"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/90 to-charcoal-950" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold-500 uppercase tracking-[0.4em] text-sm mb-4"
            >
              Our Story
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            >
              About <span className="gold-text">JK Luxury Cars</span>
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
              className="text-charcoal-300 text-lg md:text-xl"
            >
              Where passion for excellence meets the art of automotive curation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-charcoal-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80"
                  alt="JK Luxury Cars showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-500/30 rounded-lg -z-10" />
              
              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-gold-500 to-gold-700 p-6 rounded-lg shadow-xl"
              >
                <p className="font-display text-4xl text-charcoal-950 font-bold">15+</p>
                <p className="text-charcoal-900 text-sm uppercase tracking-wider">Years of Excellence</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">
                Our Heritage
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                A Legacy of
                <br />
                <span className="gold-text">Luxury & Trust</span>
              </h2>

              <div className="space-y-6 text-charcoal-300 leading-relaxed">
                <p>
                  Founded in the heart of Montreux, Switzerland, JK Luxury Cars has established 
                  itself as the premier destination for discerning automotive enthusiasts who 
                  demand nothing but the finest.
                </p>
                <p>
                  Our philosophy is simple: every vehicle we present must embody the pinnacle 
                  of craftsmanship, performance, and exclusivity. We don't simply sell cars – 
                  we curate experiences that transcend ordinary automotive transactions.
                </p>
                <p>
                  With our tagline <span className="text-gold-500 italic">"Lo Mejor En Usados"</span> – 
                  The Best in Pre-Owned – we pride ourselves on sourcing only the most exceptional 
                  vehicles, each with verified provenance and maintained to the highest standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                  <p className="font-display text-3xl gold-text font-bold mb-2">500+</p>
                  <p className="text-charcoal-400 text-sm uppercase tracking-wider">Vehicles Delivered</p>
                </div>
                <div>
                  <p className="font-display text-3xl gold-text font-bold mb-2">98%</p>
                  <p className="text-charcoal-400 text-sm uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-charcoal-900">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide every interaction and transaction at JK Luxury Cars"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Uncompromising Quality',
                description: 'Every vehicle undergoes meticulous inspection. We accept only the best, ensuring each car meets our exacting standards of excellence.'
              },
              {
                number: '02',
                title: 'Absolute Transparency',
                description: 'Complete honesty in every detail. Full history, comprehensive documentation, and no hidden surprises. Your trust is our foundation.'
              },
              {
                number: '03',
                title: 'Personalized Excellence',
                description: 'Your preferences are unique. We take the time to understand your desires and deliver a bespoke automotive experience.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group p-8 border border-gold-500/20 rounded-lg hover:border-gold-500/40 bg-charcoal-950/50 transition-all duration-500"
              >
                <span className="font-display text-6xl gold-text opacity-30 group-hover:opacity-60 transition-opacity">
                  {value.number}
                </span>
                <h3 className="font-display text-xl text-white mt-4 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-charcoal-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-500 uppercase tracking-[0.3em] text-sm mb-4">
                Our Location
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                Visit Our
                <br />
                <span className="gold-text">Showroom</span>
              </h2>

              <p className="text-charcoal-300 leading-relaxed mb-8">
                Nestled in the prestigious Cité Centre of Montreux, our showroom offers 
                an intimate setting where you can explore our collection in refined comfort. 
                Experience Swiss hospitality at its finest as you discover your next automotive masterpiece.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <LocationIcon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Grand' Rue 90</p>
                    <p className="text-charcoal-400">1820 Montreux, Switzerland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Opening Hours</p>
                    <p className="text-charcoal-400">Mon - Sat: 10:00 - 19:00</p>
                    <p className="text-charcoal-400">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-gold">
                Get Directions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80"
                alt="Montreux, Switzerland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-gold-500 text-sm uppercase tracking-wider mb-1">Montreux</p>
                <p className="text-white font-display text-2xl">Swiss Riviera</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

// Icon Components
const LocationIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default About

