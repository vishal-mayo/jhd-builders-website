import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DoorOpen, Wrench, Building2, Paintbrush, Flame, Droplets, Bike } from 'lucide-react'

const SERVICES = [
  {
    id: 0, title: 'Fire Door Installation & Maintenance', shortTitle: 'Fire Doors',
    Icon: DoorOpen, color: '#ff6b35',
    desc: 'BM Trada certified fire door installation and maintenance across London and surrounding counties, fully compliant with current fire safety regulations.',
    features: ['Supply & Fit', 'BM Trada Certified', 'Maintenance Plans', 'London-wide']
  },
  {
    id: 1, title: 'Property Maintenance', shortTitle: 'Maintenance',
    Icon: Wrench, color: '#6db44c',
    desc: 'Comprehensive property maintenance keeping your buildings safe, functional and looking their best year-round.',
    features: ['Planned Maintenance', 'Emergency Repairs', 'Inspections', 'Compliance']
  },
  {
    id: 2, title: 'Building Refurbishment', shortTitle: 'Refurbishment',
    Icon: Building2, color: '#4a9eff',
    desc: 'Full interior and exterior refurbishments bringing properties up to modern standards — kitchens, bathrooms, relets, external works and full renovations.',
    features: ['Kitchens & Bathrooms', 'Full Renovations', 'External Works', 'Relets']
  },
  {
    id: 3, title: 'Venetian Plastering', shortTitle: 'Plastering',
    Icon: Paintbrush, color: '#f59e0b',
    desc: 'Expert Venetian and decorative plastering delivering premium finishes for residential and commercial interiors.',
    features: ['Venetian Plaster', 'Decorative Finishes', 'Specialist Coatings', 'Restoration']
  },
  {
    id: 4, title: 'Fire Risk Management', shortTitle: 'Fire Risk',
    Icon: Flame, color: '#ef4444',
    desc: 'Comprehensive fire safety solutions ensuring your property meets all current fire safety regulations.',
    features: ['Risk Assessment', 'Compartmentation', 'Compliance Works', 'Documentation']
  },
  {
    id: 5, title: 'Mould Maintenance', shortTitle: 'Mould',
    Icon: Droplets, color: '#06b6d4',
    desc: 'Professional mould treatment, prevention and maintenance for healthy living and working environments.',
    features: ['Mould Treatment', 'Prevention', 'Ventilation Solutions', 'Follow-up Inspections']
  },
  {
    id: 6, title: 'Bike Canopies & Shelters', shortTitle: 'Bike Shelters',
    Icon: Bike, color: '#8b5cf6',
    desc: 'Design, supply and professional installation of bike storage canopies and shelters for residential and commercial properties.',
    features: ['Design & Supply', 'Professional Install', 'Secure Storage', 'Custom Sizes']
  },
]

const CX = 280, CY = 280, SPOKE = 200, NODE = 96, HUB = 65

function nodePos(i) {
  const a = (i * (360 / SERVICES.length) - 90) * (Math.PI / 180)
  return { cx: CX + SPOKE * Math.cos(a), cy: CY + SPOKE * Math.sin(a), a }
}

export default function ServicesWheel() {
  const [active, setActive] = useState(null)
  const toggle = (s) => setActive(prev => prev?.id === s.id ? null : s)

  return (
    <div>
      {/* Desktop Radial Wheel */}
      <div className="hidden lg:flex flex-col items-center gap-8">
        <div className="relative select-none" style={{ width: 560, height: 560 }}>
          <svg className="absolute inset-0 pointer-events-none" width="560" height="560">
            {SERVICES.map((s, i) => {
              const { cx, cy, a } = nodePos(i)
              const isActive = active?.id === s.id
              return (
                <line key={s.id}
                  x1={CX + HUB * Math.cos(a)} y1={CY + HUB * Math.sin(a)}
                  x2={CX + (SPOKE - NODE / 2) * Math.cos(a)} y2={CY + (SPOKE - NODE / 2) * Math.sin(a)}
                  stroke={isActive ? s.color : '#434549'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray="5 5"
                  style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                />
              )
            })}
          </svg>

          {/* Central Hub */}
          <motion.div
            className="absolute rounded-full bg-primary flex items-center justify-center z-10"
            style={{
              width: HUB * 2, height: HUB * 2,
              left: CX - HUB, top: CY - HUB,
              boxShadow: '0 0 40px rgba(109,180,76,0.35)',
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="font-condensed font-bold text-white text-sm uppercase leading-tight text-center px-2">
              JHD<br />Builders
            </span>
          </motion.div>

          {/* Service Nodes */}
          {SERVICES.map((s, i) => {
            const { cx, cy } = nodePos(i)
            const isActive = active?.id === s.id
            return (
              <motion.button key={s.id}
                className="absolute flex flex-col items-center justify-center rounded-full border-2 cursor-pointer"
                style={{
                  width: NODE, height: NODE,
                  left: cx - NODE / 2, top: cy - NODE / 2,
                  borderColor: isActive ? s.color : '#434549',
                  backgroundColor: isActive ? `${s.color}18` : '#2a2d30',
                }}
                onClick={() => toggle(s)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <s.Icon size={22} color={isActive ? s.color : '#a0a0a0'} />
                <span className="text-[10px] font-medium text-white mt-1 leading-tight px-2 text-center">
                  {s.shortTitle}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div className="w-full max-w-2xl min-h-[110px]">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.22 }}
                className="bg-dark-lighter rounded-2xl p-8 border"
                style={{ borderColor: `${active.color}40` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${active.color}18` }}>
                    <active.Icon size={28} color={active.color} />
                  </div>
                  <div>
                    <h3 className="font-condensed text-2xl font-bold text-white mb-2">{active.title}</h3>
                    <p className="text-grey-text text-sm leading-relaxed mb-4">{active.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {active.features.map(f => (
                        <span key={f} className="px-3 py-1 rounded-full text-xs border text-white/80"
                          style={{ borderColor: `${active.color}50`, backgroundColor: `${active.color}10` }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.p key="hint"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-grey-text text-sm text-center pt-4"
              >
                Click a service node to learn more
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
          {SERVICES.map((s) => {
            const isActive = active?.id === s.id
            return (
              <motion.button key={s.id}
                onClick={() => toggle(s)}
                className="p-4 rounded-xl border-2 text-left transition-colors duration-200"
                style={{
                  borderColor: isActive ? s.color : '#434549',
                  backgroundColor: isActive ? `${s.color}12` : '#2a2d30',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <s.Icon size={22} color={s.color} className="mb-2" />
                <span className="text-white text-xs font-medium leading-snug block">{s.shortTitle}</span>
              </motion.button>
            )
          })}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div key={active.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-dark-lighter rounded-xl border p-5 mt-1"
                style={{ borderColor: `${active.color}40` }}>
                <h3 className="font-condensed text-xl font-bold text-white mb-2">{active.title}</h3>
                <p className="text-grey-text text-sm mb-3 leading-relaxed">{active.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {active.features.map(f => (
                    <span key={f} className="px-2 py-0.5 rounded-full text-xs border text-white/80"
                      style={{ borderColor: `${active.color}50` }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
