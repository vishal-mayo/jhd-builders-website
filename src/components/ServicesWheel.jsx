import { motion } from 'framer-motion'
import { SERVICES } from '../data/services'

const CX = 280, CY = 280, SPOKE = 200, NODE = 96, HUB = 65

function nodePos(i) {
  const a = (i * (360 / SERVICES.length) - 90) * (Math.PI / 180)
  return { cx: CX + SPOKE * Math.cos(a), cy: CY + SPOKE * Math.sin(a), a }
}

export default function ServicesWheel({ selected, onSelect }) {
  return (
    <div>
      {/* Desktop Radial Wheel */}
      <div className="hidden lg:block">
        <div className="relative select-none mx-auto" style={{ width: 560, height: 560 }}>
          <svg className="absolute inset-0 pointer-events-none" width="560" height="560">
            {SERVICES.map((s, i) => {
              const { a } = nodePos(i)
              const isActive = selected?.id === s.id
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

          {/* Hub */}
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

          {/* Nodes */}
          {SERVICES.map((s, i) => {
            const { cx, cy } = nodePos(i)
            const isActive = selected?.id === s.id
            return (
              <motion.button key={s.id}
                className="absolute flex flex-col items-center justify-center rounded-full border-2 cursor-pointer"
                style={{
                  width: NODE, height: NODE,
                  left: cx - NODE / 2, top: cy - NODE / 2,
                  borderColor: isActive ? s.color : '#434549',
                  backgroundColor: isActive ? `${s.color}18` : '#2a2d30',
                }}
                onClick={() => onSelect(selected?.id === s.id ? null : s)}
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
      </div>

      {/* Mobile Grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SERVICES.map((s) => {
          const isActive = selected?.id === s.id
          return (
            <motion.button key={s.id}
              onClick={() => onSelect(selected?.id === s.id ? null : s)}
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
    </div>
  )
}
