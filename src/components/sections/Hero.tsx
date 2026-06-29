"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const floatingOrbs = [
  { cx: "60%", cy: "20%", r: 280, delay: 0, color: "oklch(0.55 0.2 264 / 0.12)" },
  { cx: "80%", cy: "60%", r: 200, delay: 2, color: "oklch(0.6 0.15 220 / 0.08)" },
  { cx: "10%", cy: "70%", r: 160, delay: 4, color: "oklch(0.55 0.2 264 / 0.06)" },
];

const nodePositions = [
  { x: 50, y: 50 },
  { x: 150, y: 120 },
  { x: 260, y: 60 },
  { x: 320, y: 160 },
  { x: 180, y: 210 },
  { x: 80, y: 170 },
  { x: 240, y: 280 },
  { x: 360, y: 240 },
];

const connections = [
  [0, 1], [1, 2], [1, 4], [2, 3], [3, 7], [4, 6], [4, 5], [6, 7],
];

const flowPaths = [
  { nodes: [0, 1, 2, 3, 7], times: [0, 0.27, 0.55, 0.80, 1] },
  { nodes: [0, 1, 4, 6, 7], times: [0, 0.28, 0.50, 0.71, 1] },
];

function DataPacket({ pathIndex, delay }: { pathIndex: number; delay: number }) {
  const path = flowPaths[pathIndex];
  const cx = path.nodes.map((i) => nodePositions[i].x);
  const cy = path.nodes.map((i) => nodePositions[i].y);
  return (
    <motion.circle
      r={3.5}
      fill="oklch(0.65 0.22 264)"
      initial={{ cx: cx[0], cy: cy[0], opacity: 0 }}
      animate={{
        cx,
        cy,
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 3.2,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "linear",
        times: path.times,
      }}
    />
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 420 340"
        className="w-full max-w-[520px] drop-shadow-2xl"
        aria-hidden="true"
      >
        {/* Connections */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodePositions[a].x}
            y1={nodePositions[a].y}
            x2={nodePositions[b].x}
            y2={nodePositions[b].y}
            stroke="oklch(0.55 0.2 264)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.12, ease: "easeOut" }}
          />
        ))}

        {/* Data packets flowing INPUT → OUTPUT */}
        <DataPacket pathIndex={0} delay={2} />
        <DataPacket pathIndex={0} delay={3.8} />
        <DataPacket pathIndex={1} delay={2.9} />
        <DataPacket pathIndex={1} delay={4.7} />

        {/* Nodes */}
        {nodePositions.map((pos, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r={i === 0 || i === 7 ? 18 : 13}
              fill="oklch(0.55 0.2 264 / 0.15)"
              stroke="oklch(0.55 0.2 264)"
              strokeWidth="1.5"
              strokeOpacity="0.6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            />
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r={i === 0 || i === 7 ? 6 : 4}
              fill="oklch(0.6 0.2 264)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
            />
            {(i === 0 || i === 7) && (
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={20}
                fill="none"
                stroke="oklch(0.55 0.2 264)"
                strokeWidth="1"
                strokeOpacity="0.4"
                animate={{ r: [20, 32], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            )}
          </motion.g>
        ))}

        {/* Labels */}
        <motion.text
          x={nodePositions[0].x}
          y={nodePositions[0].y + 32}
          textAnchor="middle"
          fontSize="9"
          fill="oklch(0.55 0.2 264)"
          fontFamily="system-ui"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5 }}
        >
          INPUT
        </motion.text>
        <motion.text
          x={nodePositions[7].x}
          y={nodePositions[7].y + 32}
          textAnchor="middle"
          fontSize="9"
          fill="oklch(0.55 0.2 264)"
          fontFamily="system-ui"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5 }}
        >
          OUTPUT
        </motion.text>
      </svg>

      {/* Floating badges */}
      <motion.div
        className="absolute top-4 right-0 bg-card/80 backdrop-blur-sm border border-border rounded-xl px-3 py-2 shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium">Automatisierung aktiv</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 bg-card/80 backdrop-blur-sm border border-border rounded-xl px-3 py-2 shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <p className="text-xs text-muted-foreground">Zeitersparnis</p>
        <p className="text-sm font-semibold text-primary">-70% manuelle Arbeit</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: orb.cx,
              top: orb.cy,
              width: orb.r * 2,
              height: orb.r * 2,
              transform: "translate(-50%, -50%)",
              background: orb.color,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 8,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.13 0.02 264) 1px, transparent 1px), linear-gradient(90deg, oklch(0.13 0.02 264) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)] py-20">
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                KI-Automatisierungsagentur
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
                KI-Automatisierungen
                <br />
                <span className="text-primary">für Unternehmen.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Wir automatisieren wiederkehrende Geschäftsprozesse mit modernen
              KI-Lösungen – damit Sie Zeit sparen und sich auf Ihr Kerngeschäft
              konzentrieren können.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                <Calendar className="w-4 h-4" />
                Kostenloses Erstgespräch
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200"
              >
                Leistungen ansehen
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              {[
                "Individuelle Lösungen",
                "Schnelle Umsetzung",
                "Persönlicher Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 lg:h-[500px]"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
