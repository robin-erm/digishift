"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

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
      fill="oklch(0.5 0.19 264)"
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
        className="w-full max-w-[520px]"
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
            stroke="oklch(0.46 0 0)"
            strokeWidth="1"
            strokeOpacity="0.35"
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
              fill={i === 0 || i === 7 ? "oklch(0.5 0.19 264 / 0.1)" : "oklch(0.145 0 0 / 0.04)"}
              stroke={i === 0 || i === 7 ? "oklch(0.5 0.19 264)" : "oklch(0.46 0 0)"}
              strokeWidth="1.25"
              strokeOpacity={i === 0 || i === 7 ? 0.6 : 0.35}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            />
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r={i === 0 || i === 7 ? 5 : 3.5}
              fill={i === 0 || i === 7 ? "oklch(0.5 0.19 264)" : "oklch(0.46 0 0)"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
            />
          </motion.g>
        ))}

        {/* Labels */}
        <motion.text
          x={nodePositions[0].x}
          y={nodePositions[0].y + 32}
          textAnchor="middle"
          fontSize="9"
          fill="oklch(0.46 0 0)"
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
          fill="oklch(0.46 0 0)"
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
        className="absolute top-4 right-0 bg-card/90 backdrop-blur-sm border border-border rounded-md px-3 py-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium">Automatisierung aktiv</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 bg-card/90 backdrop-blur-sm border border-border rounded-md px-3 py-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <p className="text-xs text-muted-foreground">Zeitersparnis</p>
        <p className="text-sm font-medium text-primary">-70% manuelle Arbeit</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.145 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.145 0 0) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)] py-20">
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                KI-Automatisierungsagentur
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.05] text-foreground">
                KI-Automatisierungen
                <br />
                <span className="text-primary">für Unternehmen.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Wir automatisieren wiederkehrende Geschäftsprozesse mit modernen
              KI-Lösungen – damit Sie Zeit sparen und sich auf Ihr Kerngeschäft
              konzentrieren können.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Kostenloses Erstgespräch
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-accent transition-all duration-200"
              >
                Leistungen ansehen
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4"
            >
              {[
                "Individuelle Lösungen",
                "Schnelle Umsetzung",
                "Persönlicher Support",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`text-sm text-muted-foreground ${
                    i > 0 ? "border-l border-border pl-6" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative h-80 lg:h-[500px]"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
