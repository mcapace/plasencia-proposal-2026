'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  Award,
  DollarSign,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Leaf,
  Cigarette,
  Flame,
  Sparkles,
  Crown,
  Gem,
  BookOpen,
  PenTool,
  Camera,
  Palette,
  Lightbulb,
  Shield,
  Heart,
  Coffee,
  Cloud
} from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main className="bg-gradient-to-b from-stone-50 via-amber-50/30 to-orange-50/20 text-slate-800 overflow-x-hidden">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-700 to-amber-800 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      >
        {/* Tobacco Field Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-amber-50/20 to-orange-50/10"></div>
          {/* Tobacco Field Team Photo as Background */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/images/Plasencia-brothers-tobaccoplants.jpg" 
              alt="Plasencia team in tobacco field" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-stone-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Plasencia & Cigar Aficionado Logos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="flex justify-center lg:justify-start items-center space-x-8">
                  <img 
                    src="/images/plasencia-cigars-logo__1_-removebg-preview.png" 
                    alt="Plasencia Cigars Logo" 
                    className="w-40 h-40 object-contain"
                    style={{ background: 'transparent' }}
                  />
                  <div className="text-4xl font-light text-slate-600">×</div>
                  <img 
                    src="/images/images__13_-removebg-preview.png" 
                    alt="Cigar Aficionado Logo" 
                    className="w-40 h-40 object-contain"
                    style={{ background: 'transparent' }}
                  />
            </div>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
              >
                ✨ 2026 Premium Marketing Program
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-extralight text-slate-800 mb-6 leading-tight">
                <span className="block text-2xl lg:text-3xl text-slate-500 font-extralight">
                  12 Months | 2026
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed">
                An integrated marketing program that positions Plasencia as a leading cigar brand through strategic print dominance and sophisticated digital innovation.
              </p>
              
            </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Calendar className="text-white" size={28} />
              </div>
                    <h3 className="text-2xl font-light text-slate-800 mb-2">12</h3>
                    <p className="text-slate-500 font-light">Months</p>
            </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-light text-slate-800 mb-2">6</h3>
                    <p className="text-slate-500 font-light">Print Spreads</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Globe className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-light text-slate-800 mb-2">1</h3>
                    <p className="text-slate-500 font-light">Digital Hub</p>
                  </div>
                </div>
            </div>
          </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Vision Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Strategic Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              One unified story across all touchpoints, creating an immersive brand experience that elevates Plasencia to the pinnacle of luxury cigar marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="text-white" size={32} />
        </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Print Dominance</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Six double-page spreads in every issue of Cigar Aficionado, ensuring maximum visibility and strategic positioning.
              </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Digital Hub</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Central storytelling platform that amplifies the print message and creates deeper engagement with the brand.
            </p>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
          >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="text-white" size={32} />
          </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Amplification</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Strategic digital amplification that extends reach and creates measurable impact across all channels.
              </p>
        </motion.div>
          </div>
        </div>
      </section>

      {/* Print Program Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Print Program
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Six double-page spreads that dominate every issue of Cigar Aficionado, creating an unmissable presence in the world's leading cigar publication.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <PenTool className="text-white" size={24} />
            </div>
                  <h3 className="text-2xl font-light text-slate-800">Investment Breakdown</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-amber-100">
                    <span className="text-slate-600 font-light">6 Double-Page Spreads</span>
                    <span className="text-2xl font-light text-slate-800">$310,800</span>
              </div>
                  <div className="flex justify-between items-center py-3 border-b border-amber-100">
                    <span className="text-slate-600 font-light">Strategic Placement</span>
                    <span className="text-lg text-slate-500">Included</span>
                </div>
                  <div className="flex justify-between items-center py-3 border-b border-amber-100">
                    <span className="text-slate-600 font-light">Digital Creative Development</span>
                    <span className="text-lg text-slate-500">Included</span>
              </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-600 font-light">Digital Production & Design</span>
                    <span className="text-lg text-slate-500">Included</span>
                </div>
              </div>
            </div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
          </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="py-24 bg-gradient-to-br from-green-50/30 to-amber-50/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Brand Heritage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              From tobacco fields to finished cigars - the Plasencia family's multi-generational commitment to excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-200/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light text-slate-800 mb-4">Tobacco Field Excellence</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    The Plasencia team works directly in the tobacco fields, ensuring every leaf meets our exacting standards for premium cigar production.
                  </p>
                </div>
                
                {/* Tobacco Field Team Photo */}
                <div className="mb-6">
                  <img 
                    src="/images/Plasencia-brothers-tobaccoplants.jpg" 
                    alt="Plasencia team in tobacco field" 
                    className="w-full h-64 object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Field to Factory</h4>
                    <p className="text-slate-500 font-light text-sm">Direct oversight</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Quality Control</h4>
                    <p className="text-slate-500 font-light text-sm">Hand-selected leaves</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Family Tradition</h4>
                    <p className="text-slate-500 font-light text-sm">Generations of expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Crown className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Premium Standards</h4>
                    <p className="text-slate-500 font-light text-sm">Luxury craftsmanship</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Leaf className="text-white" size={20} />
                    </div>
                  <h4 className="text-xl font-light text-slate-800">Tobacco Cultivation</h4>
              </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Our team works directly in the tobacco fields, ensuring every leaf meets our exacting standards for premium cigar production.
                </p>
          </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Hand-Crafted Excellence</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  From field to finished cigar, every step is overseen by our experienced team to ensure the highest quality standards.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Family Heritage</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Multi-generational expertise passed down through the Plasencia family, creating cigars that honor tradition while embracing innovation.
                </p>
              </div>
          </motion.div>
          </div>
        </div>
      </section>


      {/* Digital Hub Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Digital Hub
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Central storytelling platform that amplifies the print message and creates deeper engagement with the Plasencia brand.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Monitor className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Interactive Experience</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Immersive digital experiences that bring the Plasencia story to life through rich media and interactive content.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Heart className="text-white" size={20} />
              </div>
                  <h4 className="text-xl font-light text-slate-800">Brand Storytelling</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Deep dive into the Plasencia heritage, craftsmanship, and the passion that goes into every cigar.
                </p>
            </div>
          </motion.div>

                <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Globe className="text-white" size={24} />
                    </div>
                  <h3 className="text-2xl font-light text-slate-800">Campaign Strategy</h3>
                    </div>
                
                <div className="space-y-4">
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Central Storytelling Hub</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Your complete brand narrative platform where heritage, products, and events come together in one cohesive experience.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Sponsored Content Integration</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Editorial articles that validate your brand story with Cigar Aficionado's trusted voice and credibility.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Multi-Channel Amplification</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Email, social, and display campaigns that drive traffic back to your central hub story.
                    </p>
                  </div>
                </div>
              </div>
                </motion.div>
          </div>
        </div>
      </section>

      {/* The Flywheel Section */}
      <section className="py-24 bg-gradient-to-br from-stone-50/50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              The Flywheel
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              How all elements work together to create a powerful, self-reinforcing marketing ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Print Impact", desc: "Six spreads create immediate brand awareness" },
              { step: "2", title: "Digital Discovery", desc: "Readers seek more information online" },
              { step: "3", title: "Hub Engagement", desc: "Deep brand storytelling and interaction" },
              { step: "4", title: "Social Amplification", desc: "Shared content extends reach" },
              { step: "5", title: "Community Building", desc: "Loyal fan base develops" },
              { step: "6", title: "Word of Mouth", desc: "Organic recommendations grow" },
              { step: "7", title: "Premium Positioning", desc: "Brand perception elevates" },
              { step: "8", title: "Sales Growth", desc: "Revenue increases measurably" }
            ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
                >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                <h3 className="text-lg font-light text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Summary Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Investment Summary
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              A comprehensive investment that delivers maximum impact across all marketing channels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <PenTool className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Print Program</h3>
              <div className="text-4xl font-light text-slate-800 mb-2">$310,800</div>
              <p className="text-slate-600 font-light">Six double-page spreads</p>
            </motion.div>

                <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 text-center"
                >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="text-white" size={36} />
                  </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Digital Hub</h3>
              <div className="text-4xl font-light text-slate-800 mb-2">$89,200</div>
              <p className="text-slate-600 font-light">Interactive platform</p>
                </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Total Investment</h3>
              <div className="text-4xl font-light text-white mb-2">$400,000</div>
              <p className="text-amber-100 font-light">12-month program</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Deliverables & Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Digital Deliverables & Timeline
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              A comprehensive digital program timeline and investment overview for 2026.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
              <h3 className="text-2xl font-light text-slate-800 mb-8 text-center">Digital Program Timeline</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 to-orange-700 transform md:-translate-x-1/2"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {[
                    { month: "Jan 2026", title: "Digital Hub Launch", desc: "Landing page goes live, hub platform launches" },
                    { month: "Feb - Mar", title: "Content Development", desc: "Sponsored articles, native extensions, social content creation" },
                    { month: "Apr - Jun", title: "Mid-Year Amplification", desc: "Instagram campaigns, paid social, newsletter distribution" },
                    { month: "Jul - Sep", title: "Continued Engagement", desc: "Dedicated emails, ongoing social presence, content updates" },
                    { month: "Oct - Dec", title: "Year-End Push", desc: "Final campaigns, performance review, year-end metrics" }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-start md:items-center">
                      <div className={`relative z-10 flex-1 md:flex-none md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:ml-auto md:text-left md:pl-8'}`}>
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30 ${index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'}`}>
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full mr-3"></div>
                            <span className="text-amber-700 font-medium">{item.month}</span>
                          </div>
                          <h4 className="text-lg font-light text-slate-800 mb-1">{item.title}</h4>
                          <p className="text-slate-600 font-light text-sm">{item.desc}</p>
                        </div>
                      </div>
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full border-4 border-white shadow-lg z-20"></div>
                      <div className={`hidden md:block flex-1 ${index % 2 === 0 ? '' : 'order-first'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deliverables Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 overflow-x-auto">
              <h3 className="text-2xl font-light text-slate-800 mb-8 text-center">Digital Deliverables</h3>
              
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-amber-200">
                      <th className="text-left py-4 px-4 text-slate-800 font-medium">Deliverable</th>
                      <th className="text-center py-4 px-4 text-slate-800 font-medium">Quantity</th>
                      <th className="text-right py-4 px-4 text-slate-800 font-medium">Reach/Impressions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { deliverable: "Landing Page (12 months)", quantity: "1", reach: "TBA" },
                      { deliverable: "Article + Homepage", quantity: "2", reach: "TBA" },
                      { deliverable: "Native Extension (6 months)", quantity: "1", reach: "465,000" },
                      { deliverable: "Instagram Posts", quantity: "3", reach: "489K followers" },
                      { deliverable: "Instagram Stories", quantity: "2", reach: "TBA" },
                      { deliverable: "Paid Social (6 months)", quantity: "1", reach: "555,880" },
                      { deliverable: "Cigar Watch Newsletter", quantity: "3", reach: "480K subscribers" },
                      { deliverable: "Dedicated Emails", quantity: "4", reach: "200K subscribers" }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-amber-100 hover:bg-amber-50/50 transition-colors">
                        <td className="py-4 px-4 text-slate-700 font-light">{item.deliverable}</td>
                        <td className="py-4 px-4 text-center text-slate-700 font-light">{item.quantity}</td>
                        <td className="py-4 px-4 text-right text-slate-600 font-light">{item.reach}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {[
                  { deliverable: "Landing Page (12 months)", quantity: "1", reach: "TBA" },
                  { deliverable: "Article + Homepage", quantity: "2", reach: "TBA" },
                  { deliverable: "Native Extension (6 months)", quantity: "1", reach: "465,000" },
                  { deliverable: "Instagram Posts", quantity: "3", reach: "489K followers" },
                  { deliverable: "Instagram Stories", quantity: "2", reach: "TBA" },
                  { deliverable: "Paid Social (6 months)", quantity: "1", reach: "555,880" },
                  { deliverable: "Cigar Watch Newsletter", quantity: "3", reach: "480K subscribers" },
                  { deliverable: "Dedicated Emails", quantity: "4", reach: "200K subscribers" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-amber-200/30">
                    <h4 className="text-lg font-light text-slate-800 mb-3">{item.deliverable}</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-slate-500 font-light">Quantity:</span>
                        <span className="ml-2 text-slate-800 font-medium">{item.quantity}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-light">Reach:</span>
                        <span className="ml-2 text-slate-800 font-medium">{item.reach}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Investment Summary & Sponsored Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Digital Investment Total */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 shadow-2xl text-white text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <DollarSign className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Digital Investment</h3>
                <div className="text-5xl font-light text-white mb-2">$89,200</div>
                <p className="text-amber-100 font-light">12-month digital program</p>
                <p className="text-amber-100 font-light mt-4 text-sm">~2.1M total impressions</p>
              </div>
            </motion.div>

            {/* Sponsored Content Placement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-light text-slate-800">Sponsored Content Articles</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-amber-50/50 rounded-xl p-5">
                    <h4 className="font-medium text-slate-800 mb-2">2 Sponsored Articles</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-3">
                      Strategically placed editorial content that validates your brand story with Cigar Aficionado's trusted voice.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <div className="text-slate-800 font-medium text-sm">Article + Homepage Placement</div>
                          <div className="text-slate-600 font-light text-xs">Featured on Cigar Aficionado homepage</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <div className="text-slate-800 font-medium text-sm">Digital Hub Integration</div>
                          <div className="text-slate-600 font-light text-xs">Articles featured within your branded hub</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Unified Story Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              The Unified Story
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              One powerful brand narrative told strategically across print and digital, with the hub serving as your central storytelling platform where everything comes together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-light text-slate-800 mb-6">The Strategic Vision</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                A unified, year-long brand narrative that positions Plasencia as THE authority in cigars. Through strategic integration of print and digital across Cigar Aficionado, this program creates one cohesive story told across multiple touchpoints.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="text-center">
                  <div className="text-2xl font-light text-slate-800 mb-2">The Hub is Your Story</div>
                  <div className="text-lg text-amber-700 font-medium">Print Drives the Audience</div>
                  <div className="text-lg text-orange-700 font-medium">Digital Amplifies the Reach</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Print Program</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  6 double-page spreads across all 6 issues of Cigar Aficionado, driving qualified traffic to the branded content hub with QR codes and custom URLs.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Globe className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Digital Hub</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Central storytelling platform where the complete Plasencia story lives, breathes, and evolves throughout 2026.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Heritage & Legacy", desc: "Family history, tobacco expertise, multi-generational craftsmanship" },
              { title: "2026 Anniversary", desc: "Milestone achievements, limited editions, exclusive content" },
              { title: "The Celebration", desc: "VIP testimonials, behind-the-scenes access" },
              { title: "The Cigars", desc: "Complete portfolio, tasting profiles, awards and acclaim" },
              { title: "News & Stories", desc: "Living content feed, press releases, industry recognition" },
              { title: "Experience Plasencia", desc: "Retailer locator, authorized dealers, tasting events" }
            ].map((item, index) => (
          <motion.div
                key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30"
          >
                <h3 className="text-lg font-light text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Amplification Section */}
      <section className="py-24 bg-gradient-to-br from-stone-50/50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Digital Amplification
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Everything points to one place: The Hub. Strategic digital tactics that drive traffic and amplify the unified brand story.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <h3 className="text-3xl font-light text-slate-800 mb-6">The Flywheel Effect</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Reader sees print spread</div>
                    <div className="text-slate-600 font-light text-sm">Beautiful double-page visual in CA magazine</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Scans QR code</div>
                    <div className="text-slate-600 font-light text-sm">Instantly arrives at Plasencia hub homepage</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Explores hub</div>
                    <div className="text-slate-600 font-light text-sm">Discovers complete brand story, heritage, products</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Multiple touchpoints</div>
                    <div className="text-slate-600 font-light text-sm">E-blasts, social, display bring them back to hub</div>
                  </div>
                </div>
              </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Email Campaigns</h4>
                </div>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Strategic e-blasts to 50K subscribers per blast, driving traffic to your hub with compelling creative and perfect timing.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Users className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Cigar Watch</h4>
                </div>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Targeted placements reaching the most passionate cigar enthusiasts with strategic hub content highlights.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Globe className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Social & Display</h4>
                </div>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Year-long integrated campaign across social media and programmatic display, all driving to your central hub story.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Key Performance Indicators
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Strategic metrics we'll track to measure campaign effectiveness and brand growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Hub Performance", 
                metrics: [
                  "Hub traffic and unique visitors",
                  "Time on site and engagement depth",
                  "Content section performance",
                  "Return visitor rate"
                ]
              },
              { 
                title: "Print Integration", 
                metrics: [
                  "QR code scans from print spreads",
                  "Direct traffic from magazine",
                  "Print-to-digital conversion rate",
                  "Reader engagement with content"
                ]
              },
              { 
                title: "Digital Amplification", 
                metrics: [
                  "Email open rates and CTRs",
                  "Social media reach and engagement",
                  "Display ad performance",
                  "Cross-channel attribution"
                ]
              },
              { 
                title: "Brand Impact", 
                metrics: [
                  "Brand awareness lift",
                  "Brand perception improvement",
                  "Share of voice in category",
                  "Premium positioning metrics"
                ]
              },
              { 
                title: "Content Performance", 
                metrics: [
                  "Sponsored content readership",
                  "Heritage section engagement",
                  "Product page views",
                ]
              },
              { 
                title: "Business Results", 
                metrics: [
                  "Retailer locator usage",
                  "Lead generation quality",
                  "Sales funnel progression",
                  "ROI measurement"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30"
              >
                <h3 className="text-xl font-light text-slate-800 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-slate-600 font-light text-sm">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Let's Build Your Story
              </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Ready to create the most sophisticated cigar marketing program in the industry? Let's discuss how we can elevate Plasencia's brand story.
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-slate-800">Jake Cohen</div>
                <div className="text-lg text-amber-700 font-medium">Account Executive</div>
              </div>
              
              <div className="space-y-3 text-slate-600 font-light">
                <div className="flex items-center justify-center">
                  <Mail className="mr-3 text-amber-600" size={18} />
                  <span>M. Shanken Communications, Inc.</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="mr-3 text-amber-600" size={18} />
                  <span>825 Eighth Ave, Worldwide Plaza, 33rd Floor</span>
              </div>
                <div className="flex items-center justify-center">
                  <MapPin className="mr-3 text-amber-600" size={18} />
                  <span>New York, New York 10019</span>
            </div>
                <div className="flex items-center justify-center">
                  <Phone className="mr-3 text-amber-600" size={18} />
                  <span className="font-medium">Cell: 203-561-3977</span>
            </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}