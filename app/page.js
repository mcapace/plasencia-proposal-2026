'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  Mail,
  Share2,
  Monitor,
  FileText,
  Calendar
} from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">2026 Marketing Program</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent leading-tight"
          >
            PLASENCIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-light mb-4 text-slate-300"
          >
            Integrated Marketing Program
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-12"
          >
            Cigar Aficionado • Print + Digital
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          >
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-8 py-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                $400,000
              </div>
              <div className="text-sm text-slate-400 mt-2">Total Investment</div>
            </div>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-700 rounded-2xl px-8 py-6">
              <div className="text-5xl font-bold text-white">12 Months</div>
              <div className="text-sm text-slate-400 mt-2">Full Year 2026</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a 
              href="#overview"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/20"
            >
              Explore the Program
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-amber-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Strategic Vision */}
      <section id="overview" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              The Strategic Vision
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A unified, year-long brand narrative that positions Plasencia as THE authority in premium cigars. 
              Through strategic integration of print and digital, this program creates one cohesive story told 
              across multiple touchpoints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 mb-12"
          >
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-amber-400 mb-2">One Story</div>
              <div className="text-2xl text-slate-300">Told Seamlessly Across Every Touchpoint</div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Print Drives Traffic</h3>
                <p className="text-slate-400">High-impact spreads create awareness and direct readers to your story</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Hub Tells the Story</h3>
                <p className="text-slate-400">Central platform where the complete brand narrative lives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Digital Amplifies</h3>
                <p className="text-slate-400">Multi-channel approach multiplies reach and engagement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Print Program */}
      <section className="py-32 px-4 relative bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-6">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Print Program</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              $310,800 Investment
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              6 Double-Page Spreads Across Every 2026 Issue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-amber-400">Why This Dominates</h3>
              <ul className="space-y-4">
                {[
                  'Guaranteed presence in ALL 6 issues - You own 2026',
                  'Double-page spreads - Maximum visual impact',
                  'Premium positioning - High-visibility placement',
                  'Consistent brand drumbeat throughout the year',
                  'Storytelling flexibility - Evolve messaging',
                  '200K+ affluent readers (avg HHI $250K+)'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-amber-400">2026 Issue Schedule</h3>
              <div className="space-y-4">
                {[
                  { issue: 'Issue #1', period: 'Jan/Feb', note: 'Hub Launch' },
                  { issue: 'Issue #2', period: 'Mar/Apr', note: 'Story Deepens' },
                  { issue: 'Issue #3', period: 'May/Jun', note: 'Narrative Continues' },
                  { issue: 'Issue #4', period: 'Jul/Aug', note: 'Brand Momentum' },
                  { issue: 'Issue #5', period: 'Sep/Oct', note: 'Event Integration' },
                  { issue: 'Issue #6', period: 'Nov/Dec', note: 'Year in Review' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-white">{item.issue}</div>
                      <div className="text-sm text-slate-400">{item.period}</div>
                    </div>
                    <div className="text-amber-400 text-sm font-medium">{item.note}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Print's Strategic Role</h3>
            <p className="text-slate-300 text-lg">
              Each spread acts as a chapter in the Plasencia story, driving readers to the hub where they can 
              immerse themselves in the complete brand narrative - heritage, craftsmanship, anniversary, event coverage, 
              products, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Hub */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-2 mb-6">
              <Globe className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Digital Hub</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              The Branded Content Hub
            </h2>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-light">
              Your Central Storytelling Platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-amber-400">
              Where The Complete Story Lives, Breathes & Evolves
            </h3>
            <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              The hub integrates ALL content into one seamless experience: Sponsored editorial, brand content, 
              press releases, event coverage, product stories, heritage, and anniversary content.
            </p>
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8">
              <div className="text-center text-3xl font-bold text-white mb-4">
                Every digital touchpoint drives here. Every print spread points here.
              </div>
              <div className="text-center text-xl text-amber-400">
                This is your 24/7 brand headquarters on CigarAficionado.com
              </div>
            </div>
          </motion.div>

          {/* Hub Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Heritage & Legacy',
                subtitle: 'The Foundation of Your Story',
                icon: Sparkles,
                items: ['Sponsored Article: "Generations of Excellence"', 'Family history and timeline', 'Tobacco sourcing philosophy', 'Manufacturing excellence', 'What sets Plasencia apart']
              },
              {
                title: '2026 Anniversary',
                subtitle: 'Why This Year Matters',
                icon: Calendar,
                items: ['Anniversary significance', 'Limited edition releases', 'Behind-the-scenes content', 'Press coverage integration', 'Media mentions and accolades']
              },
              {
                title: 'The Celebration',
                subtitle: 'Private Event Coverage',
                icon: Users,
                items: ['Sponsored Article: "Inside the Celebration"', 'Event highlights & galleries', 'Exclusive moments', 'VIP testimonials', 'Event recap content']
              },
              {
                title: 'The Cigars',
                subtitle: 'Portfolio & Product Stories',
                icon: Target,
                items: ['Complete portfolio details', 'Tasting profiles and blends', 'Awards and ratings', 'Pairing recommendations', 'Limited editions']
              },
              {
                title: 'News & Stories',
                subtitle: 'Living Content Feed',
                icon: TrendingUp,
                items: ['Latest press releases', 'Industry news', 'New product announcements', 'Event appearances', 'Social media highlights']
              },
              {
                title: 'Experience Plasencia',
                subtitle: 'Where to Find & Enjoy',
                icon: Globe,
                items: ['Interactive retailer locator', 'Authorized dealer network', 'Premium lounge partners', 'Upcoming events', 'Contact information']
              }
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-400">{section.title}</h3>
                      <p className="text-sm text-slate-400">{section.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Amplification */}
      <section className="py-32 px-4 relative bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              Digital Amplification
            </h2>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-light">
              $89,200 Digital Package
            </p>
            <p className="text-lg text-slate-400 mt-4">
              Driving Traffic & Maximizing Hub Visibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: 'Email Marketing',
                price: '$15,000',
                subtitle: '3 Dedicated E-Blasts',
                features: [
                  '200K+ CA subscribers',
                  'Q1: Hub launch & anniversary',
                  'Q2/Q3: Product focus & event',
                  'Q4: Event recap & year-end',
                  'Premium positioning',
                  'Mobile-optimized'
                ]
              },
              {
                icon: FileText,
                title: 'Cigar Watch',
                price: '$9,000',
                subtitle: '2 Newsletter Placements',
                features: [
                  'Most engaged enthusiasts',
                  'Mid-campaign placement',
                  'Event coverage feature',
                  'Editorial environment',
                  'High open rates',
                  'Direct hub promotion'
                ]
              },
              {
                icon: Share2,
                title: 'Social Media',
                subtitle: 'Year-Long Campaign',
                features: [
                  '6-8 posts throughout year',
                  'Instagram, Facebook, Twitter',
                  'Story takeovers',
                  'Event coverage',
                  'Product features',
                  'Hub traffic drivers'
                ]
              },
              {
                icon: Monitor,
                title: 'Display Advertising',
                subtitle: 'Homepage + Retargeting',
                features: [
                  'Homepage billboard placements',
                  'Premium positions',
                  'Retargeting campaigns',
                  'Strategic timing with print',
                  'Sustained visibility',
                  'Performance optimization'
                ]
              },
              {
                icon: Globe,
                title: 'Programmatic Native',
                subtitle: 'Premium Publisher Network',
                features: [
                  'Native ad placements',
                  'Contextual targeting',
                  'Cigar & luxury content',
                  'Geographic targeting',
                  'Editorial-style units',
                  'Extended reach'
                ]
              },
              {
                icon: FileText,
                title: 'Sponsored Content',
                subtitle: '2 Editorial Features',
                features: [
                  'Written by CA editorial team',
                  'Heritage & legacy article',
                  'Event coverage article',
                  'Integrated into hub',
                  'Editorial credibility',
                  'Permanent SEO assets'
                ]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-1">{item.title}</h3>
                  {item.price && (
                    <div className="text-2xl font-bold text-white mb-2">{item.price}</div>
                  )}
                  <p className="text-sm text-slate-400 mb-4">{item.subtitle}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              The Unified Storytelling Flywheel
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              How every element works together to tell one cohesive story
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: 1, text: 'Reader sees print spread in CA magazine' },
                { step: 2, text: 'Scans QR code → Arrives at Plasencia hub' },
                { step: 3, text: 'Explores hub → Complete brand story' },
                { step: 4, text: 'Reads sponsored content → Editorial validation' },
                { step: 5, text: 'Receives e-blast → Returns to hub' },
                { step: 6, text: 'Sees social post → New content added' },
                { step: 7, text: 'Encounters display ad → Hub reminder' },
                { step: 8, text: 'Reads Cigar Watch → Deeper engagement' },
                { step: 9, text: 'Sees native ad → Returns to hub' },
                { step: 10, text: 'Visits retailer → Purchase intent created' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-slate-900/50 border border-slate-700 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                    {item.step}
                  </div>
                  <p className="text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 text-center"
            >
              <h3 className="text-3xl font-bold mb-4 text-amber-400">
                Every Touchpoint = One Story
              </h3>
              <p className="text-xl text-slate-300">
                Every Channel = One Destination • Complete Brand Cohesion
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Summary */}
      <section className="py-32 px-4 relative bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              Investment Summary
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-amber-400">Print Program</h3>
              <div className="text-6xl font-bold text-white mb-4">$310,800</div>
              <p className="text-xl text-slate-300 mb-6">6 double-page spreads in every 2026 issue</p>
              <ul className="space-y-3">
                {[
                  'Premium positioning throughout year',
                  'QR codes and URLs drive to digital',
                  'Consistent brand presence',
                  'Flexible messaging evolution',
                  '200K+ affluent circulation'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-orange-400">Digital Package</h3>
              <div className="text-6xl font-bold text-white mb-4">$89,200</div>
              <p className="text-xl text-slate-300 mb-6">Comprehensive digital ecosystem</p>
              <ul className="space-y-3">
                {[
                  'Branded content hub (central platform)',
                  '2 sponsored articles by CA editorial',
                  '3 dedicated e-blasts (200K+ subscribers)',
                  '2 Cigar Watch placements',
                  'Year-long social media campaign',
                  'Display + programmatic advertising'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-center"
          >
            <h3 className="text-4xl font-bold mb-4 text-white">Total Investment</h3>
            <div className="text-7xl md:text-8xl font-bold text-white mb-4">$400,000</div>
            <p className="text-2xl text-white/90">One unified brand story across print & digital</p>
          </motion.div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              Why This Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Plasencia',
                items: [
                  'Total brand ownership of CA in 2026',
                  'One powerful story, consistently told',
                  'Hub becomes permanent brand asset',
                  'Sponsored content adds credibility',
                  'All investments compound and reinforce',
                  'Measurable performance and ROI',
                  'Competitive dominance in category'
                ]
              },
              {
                title: 'For Consumers',
                items: [
                  'Seamless integrated experience',
                  'One place for complete story',
                  'Editorial validates brand claims',
                  'Easy path from discovery to purchase',
                  'Fresh content throughout year',
                  'Multiple engagement opportunities',
                  'Clear retailer discovery'
                ]
              },
              {
                title: 'For The Campaign',
                items: [
                  'Efficiency through integration',
                  'Every dollar works harder',
                  'Consistent messaging builds equity',
                  'Hub aggregates all traffic',
                  'Year-long narrative = lasting impact',
                  'No disjointed messaging',
                  'Complete performance tracking'
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-amber-400">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-32 px-4 relative bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
              Success Metrics
            </h2>
            <p className="text-xl text-slate-300">One Story, Measurable Results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: 'Hub Traffic', description: 'Unique visitors & engagement' },
              { metric: 'Print QR Scans', description: 'Direct traffic from spreads' },
              { metric: 'Email Performance', description: 'Open rates & click-throughs' },
              { metric: 'Social Reach', description: 'Impressions & hub clicks' },
              { metric: 'Display Metrics', description: 'Impressions, CTR, arrivals' },
              { metric: 'Content Engagement', description: 'Sponsored article readership' },
              { metric: 'Retailer Locator', description: 'Usage & conversion intent' },
              { metric: 'Campaign Reach', description: 'Overall frequency analysis' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:border-amber-500/50 transition-colors"
              >
                <div className="text-xl font-bold text-amber-400 mb-2">{item.metric}</div>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-8 text-center"
          >
            <p className="text-xl text-slate-300">
              <span className="font-bold text-amber-400">Quarterly performance reports</span> show how all elements work together
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                The Bottom Line
              </h2>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                This isn't six print ads + random digital tactics. This is <span className="font-bold">one powerful brand story</span> told strategically across print and digital.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-xl text-white font-medium leading-relaxed">
                  Print creates awareness and drives traffic • The hub tells the complete story • 
                  Digital amplification multiplies reach • Sponsored content adds editorial validation
                </p>
              </div>
              <p className="text-3xl font-bold text-white mb-12">
                It all works as one.
              </p>
              
              <div className="space-y-4">
                <div className="text-6xl font-bold text-white">2026</div>
                <div className="text-2xl text-white/90">
                  The Year the Plasencia Story Dominates Cigar Aficionado
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">One Brand</div>
              <p className="text-slate-300">Unified presence</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">One Story</div>
              <p className="text-slate-300">Cohesive narrative</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">One Destination</div>
              <p className="text-slate-300">Maximum impact</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Plasencia 2026 Integrated Marketing Program
          </p>
          <p className="text-slate-500 text-sm">
            M. Shanken Communications, Inc. • Cigar Aficionado
          </p>
        </div>
      </footer>
    </main>
  );
}
