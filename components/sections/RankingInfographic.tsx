'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.32, 0.72, 0, 1] as [number, number, number, number];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const trafficData = [820, 1350, 2100, 2850, 3620, 4260];
const maxTraffic = Math.max(...trafficData);

const CW = 480;
const CH = 200;
const SIDE = 12;
const GAP = 8;
const BW = (CW - SIDE * 2 - GAP * (months.length - 1)) / months.length;

const keywords = [
  { rank: 1, keyword: 'emergency plumber near me', change: '+8' },
  { rank: 2, keyword: 'hvac repair [city]', change: '+12' },
  { rank: 1, keyword: 'dentist open weekends', change: '+15' },
  { rank: 3, keyword: 'best roofer [zip]', change: '+6' },
];

const tickerItems = [
  { client: 'Denver Dental', result: 'Page 1 · 47 days' },
  { client: 'LA Plumbing Co.', result: '+287% calls' },
  { client: 'Austin HVAC', result: '#1 Map Pack' },
  { client: 'Seattle Roofing', result: '+312% traffic' },
  { client: 'NYC Urgent Care', result: '3× leads' },
  { client: 'Miami Lawyers', result: 'Page 1 · 52 days' },
];

export function RankingInfographic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-32 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-[#00D4FF]/[0.03] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FD5A05]/[0.03] blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="inline-flex items-center gap-2 bg-[#00D4FF]/[0.07] border border-[#00D4FF]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00D4FF]">Real Client Data</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.07, ease: EASE }}
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white"
          >
            From Hidden to{' '}
            <span className="text-gradient">Dominant.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE }}
            className="text-[#8A94B2] text-lg mt-4 max-w-xl mx-auto"
          >
            A typical CredibleWeb client&apos;s growth — the first 6 months.
          </motion.p>
        </div>

        {/* Two-panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">

          {/* Left: Bar chart (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -28, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            className="lg:col-span-3 p-[1.5px] rounded-[1.75rem]"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.28) 0%, rgba(0,212,255,0.06) 50%, rgba(255,255,255,0.04) 100%)',
              boxShadow: '0 0 60px rgba(0,212,255,0.07)',
            }}
          >
            <div
              className="rounded-[calc(1.75rem-1.5px)] p-7 h-full"
              style={{
                background: 'linear-gradient(145deg, #0D1323 0%, #090D1A 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
              }}
            >
              {/* Chart header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Organic Traffic</p>
                  <p className="text-[#8A94B2] text-xs font-mono mt-1">Monthly sessions · 6-month window</p>
                </div>
                <div className="text-right shrink-0">
                  <p
                    className="font-[family-name:var(--font-playfair)] font-black text-2xl leading-none"
                    style={{ color: '#00D4FF', textShadow: '0 0 20px rgba(0,212,255,0.5)' }}
                  >
                    +419%
                  </p>
                  <p className="text-[#8A94B2] text-xs mt-0.5">total growth</p>
                </div>
              </div>

              {/* SVG bar chart */}
              <svg
                viewBox={`0 0 ${CW} ${CH + 28}`}
                className="w-full"
                aria-label="Organic traffic bar chart"
              >
                <defs>
                  <linearGradient id="barFull" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="barDim" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.07" />
                  </linearGradient>
                  <filter id="barGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Horizontal grid lines */}
                {[0.25, 0.5, 0.75, 1].map((frac) => {
                  const y = CH * (1 - frac);
                  return (
                    <g key={frac}>
                      <line
                        x1={SIDE} y1={y} x2={CW - SIDE} y2={y}
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="1"
                        strokeDasharray="3 4"
                      />
                      <text
                        x={SIDE - 4} y={y + 4}
                        textAnchor="end"
                        fill="rgba(138,148,178,0.5)"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        {Math.round(maxTraffic * frac / 100) * 100}
                      </text>
                    </g>
                  );
                })}

                {/* Bars */}
                {trafficData.map((val, i) => {
                  const barH = (val / maxTraffic) * CH;
                  const x = SIDE + i * (BW + GAP);
                  const isLast = i === trafficData.length - 1;

                  return (
                    <g key={i}>
                      {/* Bar shadow */}
                      <motion.rect
                        x={x + 3}
                        width={BW}
                        rx={5}
                        fill="rgba(0,0,0,0.35)"
                        initial={{ height: 0, y: CH + 3 }}
                        animate={inView ? { height: barH, y: CH - barH + 3 } : { height: 0, y: CH + 3 }}
                        transition={{ duration: 1.3, delay: 0.35 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                      />
                      {/* Bar fill */}
                      <motion.rect
                        x={x}
                        width={BW}
                        rx={5}
                        fill={isLast ? 'url(#barFull)' : 'url(#barDim)'}
                        filter={isLast ? 'url(#barGlow)' : undefined}
                        initial={{ height: 0, y: CH }}
                        animate={inView ? { height: barH, y: CH - barH } : { height: 0, y: CH }}
                        transition={{ duration: 1.3, delay: 0.35 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                      />
                      {/* Top value on last bar */}
                      {isLast && (
                        <motion.text
                          x={x + BW / 2}
                          y={CH - barH - 7}
                          textAnchor="middle"
                          fill="#00D4FF"
                          fontSize="10"
                          fontWeight="700"
                          fontFamily="monospace"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        >
                          {val.toLocaleString()}
                        </motion.text>
                      )}
                      {/* Month label */}
                      <text
                        x={x + BW / 2}
                        y={CH + 17}
                        textAnchor="middle"
                        fill="rgba(138,148,178,0.7)"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {months[i]}
                      </text>
                    </g>
                  );
                })}

                {/* Trend line */}
                <motion.path
                  d={trafficData
                    .map((val, i) => {
                      const x = SIDE + i * (BW + GAP) + BW / 2;
                      const y = CH - (val / maxTraffic) * CH;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="#FD5A05"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.55 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.8, delay: 0.9, ease: EASE }}
                />

                {/* Dot markers on trend line */}
                {trafficData.map((val, i) => {
                  const x = SIDE + i * (BW + GAP) + BW / 2;
                  const y = CH - (val / maxTraffic) * CH;
                  return (
                    <motion.circle
                      key={i}
                      cx={x} cy={y} r={3}
                      fill="#FD5A05"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                      style={{ filter: 'drop-shadow(0 0 3px rgba(253,90,5,0.8))' }}
                    />
                  );
                })}
              </svg>

              {/* Legend */}
              <div className="flex items-center gap-5 mt-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2 rounded-sm bg-[#00D4FF]/60" />
                  <span className="text-[#8A94B2] text-xs font-mono">Organic sessions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-px bg-[#FD5A05]/60" />
                  <span className="text-[#8A94B2] text-xs font-mono">Growth trend</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Rankings + metrics (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 28, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Keyword rankings card */}
            <div
              className="p-[1.5px] rounded-[1.75rem] flex-1"
              style={{
                background: 'linear-gradient(135deg, rgba(253,90,5,0.28) 0%, rgba(253,90,5,0.06) 60%, rgba(255,255,255,0.04) 100%)',
                boxShadow: '0 0 50px rgba(253,90,5,0.07)',
              }}
            >
              <div
                className="rounded-[calc(1.75rem-1.5px)] p-6 h-full"
                style={{
                  background: 'linear-gradient(145deg, #0D1323 0%, #090D1A 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white font-bold">Keyword Rankings</p>
                    <p className="text-[#8A94B2] text-xs font-mono mt-0.5">Live SERP positions</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Live</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {keywords.map((kw, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 14 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                      transition={{ duration: 0.45, delay: 0.55 + i * 0.1, ease: EASE }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#FD5A05]/25 hover:bg-[#FD5A05]/[0.04] transition-all duration-300 cursor-default"
                    >
                      {/* Rank badge */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                        style={{
                          background:
                            kw.rank === 1
                              ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                              : kw.rank === 2
                              ? 'linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%)'
                              : 'rgba(255,255,255,0.07)',
                          color: kw.rank <= 2 ? '#0A0F1E' : '#8A94B2',
                          boxShadow: kw.rank === 1 ? '0 0 12px rgba(255,215,0,0.35)' : 'none',
                        }}
                      >
                        #{kw.rank}
                      </div>
                      <p className="flex-1 text-white/80 text-xs font-mono truncate">{kw.keyword}</p>
                      <span className="text-green-400 text-xs font-bold shrink-0">↑{kw.change}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom metrics row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg. Position Gain', value: '↑10.3', color: '#00D4FF', sub: 'per keyword' },
                { label: 'Map Pack Rate', value: '94%', color: '#FD5A05', sub: 'target markets' },
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: 0.75 + i * 0.1, ease: EASE }}
                  className="p-[1.5px] rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${metric.color}28 0%, rgba(255,255,255,0.04) 100%)`,
                  }}
                >
                  <div
                    className="rounded-[calc(1rem-1.5px)] p-4"
                    style={{
                      background: 'linear-gradient(145deg, #0D1323 0%, #090D1A 100%)',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
                    }}
                  >
                    <p className="text-[#8A94B2] text-xs mb-2 leading-tight">{metric.label}</p>
                    <p
                      className="font-[family-name:var(--font-playfair)] font-black text-xl leading-none"
                      style={{ color: metric.color, textShadow: `0 0 16px ${metric.color}60` }}
                    >
                      {metric.value}
                    </p>
                    <p className="text-[#8A94B2] text-xs mt-1.5 font-mono">{metric.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Results ticker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="mt-14 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0A0F1E] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0A0F1E] to-transparent pointer-events-none" />

          <div className="flex animate-ticker">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 mr-4 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.025]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                <span className="text-white/80 text-sm font-semibold whitespace-nowrap">{item.client}</span>
                <span className="text-[#8A94B2] text-sm whitespace-nowrap">→</span>
                <span className="text-[#00D4FF] text-sm font-mono whitespace-nowrap">{item.result}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
