import React from "react";

interface ArchitecturalDrawingProps {
  title?: string;
  projectNumber?: string;
  projectName?: string;
  drawingType?: "ground-plan" | "section" | "zoning-diagram" | "isometric";
}

export default function ArchitecturalDrawing({
  title = "Ground Floor Architectural Plan",
  projectNumber = "01",
  projectName = "Casa Sidoarjo",
}: ArchitecturalDrawingProps) {
  return (
    <div className="w-full bg-[#FAF9F6] border border-[#D8D5CC] p-4 sm:p-8 lg:p-10 font-mono text-[#181817]">
      {/* Top Header & CAD Title Block */}
      <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#D8D5CC] gap-4">
        <div>
          <span className="text-[10px] tracking-[0.25em] text-[#8A8880] uppercase block">
            ARTUDIO ARCHITECTURAL DRAWINGS • SHEET A-101
          </span>
          <h4 className="text-lg font-editorial font-medium tracking-wide text-[#181817] mt-0.5">
            {title}
          </h4>
        </div>

        <div className="flex items-center space-x-6 text-[11px] text-[#50504C]">
          <div>
            <span className="text-[#8A8880] block text-[9px] uppercase">Project</span>
            <span>{projectName}</span>
          </div>
          <div>
            <span className="text-[#8A8880] block text-[9px] uppercase">Scale</span>
            <span>1:100 @ A3</span>
          </div>
          <div>
            <span className="text-[#8A8880] block text-[9px] uppercase">Ref</span>
            <span>AR-{projectNumber}</span>
          </div>
        </div>
      </div>

      {/* Main SVG Blueprint / CAD Canvas */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] my-6 flex items-center justify-center bg-[#F4F2ED]/60 border border-dashed border-[#D8D5CC] overflow-hidden">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-full text-[#181817]"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Background Grid Lines */}
          <defs>
            <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E2D9" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="800" height="480" fill="url(#cadGrid)" />

          {/* Grid Axes Markers */}
          {/* Top Axis: 1, 2, 3, 4 */}
          <g stroke="#8A8880" strokeWidth="0.8" strokeDasharray="3 3">
            <line x1="140" y1="40" x2="140" y2="440" />
            <line x1="300" y1="40" x2="300" y2="440" />
            <line x1="500" y1="40" x2="500" y2="440" />
            <line x1="680" y1="40" x2="680" y2="440" />
          </g>
          {/* Axis Labels Top */}
          <g fontSize="10" fill="#8A8880" textAnchor="middle">
            <circle cx="140" cy="30" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="140" y="34">1</text>
            <circle cx="300" cy="30" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="300" y="34">2</text>
            <circle cx="500" cy="30" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="500" y="34">3</text>
            <circle cx="680" cy="30" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="680" y="34">4</text>
          </g>

          {/* Left Axis: A, B, C */}
          <g stroke="#8A8880" strokeWidth="0.8" strokeDasharray="3 3">
            <line x1="100" y1="100" x2="720" y2="100" />
            <line x1="100" y1="240" x2="720" y2="240" />
            <line x1="100" y1="380" x2="720" y2="380" />
          </g>
          {/* Axis Labels Left */}
          <g fontSize="10" fill="#8A8880" textAnchor="middle">
            <circle cx="90" cy="100" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="90" y="104">A</text>
            <circle cx="90" cy="240" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="90" y="244">B</text>
            <circle cx="90" cy="380" r="9" stroke="#8A8880" strokeWidth="0.8" fill="#FAF9F6" />
            <text x="90" y="384">C</text>
          </g>

          {/* Main Building Envelope (Heavy Line Weight) */}
          <rect
            x="140"
            y="100"
            width="540"
            height="280"
            stroke="#181817"
            strokeWidth="2.5"
            fill="#FAF9F6"
          />

          {/* Internal Courtyard / Light Well (Tactile Green Hatch) */}
          <rect
            x="300"
            y="160"
            width="200"
            height="140"
            stroke="#8B7654"
            strokeWidth="1.5"
            fill="#F4F2ED"
          />
          {/* Water / Courtyard vegetation symbols */}
          <circle cx="360" cy="230" r="18" stroke="#8B7654" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="440" cy="210" r="22" stroke="#8B7654" strokeWidth="0.8" strokeDasharray="2 2" />
          <text x="400" y="275" fontSize="9" fill="#8B7654" textAnchor="middle" letterSpacing="1">
            INNER COURTYARD ±0.00
          </text>

          {/* Living Pavillion */}
          <g>
            <text x="220" y="210" fontSize="10" fill="#181817" textAnchor="middle" fontWeight="bold">
              LIVING AREA
            </text>
            <text x="220" y="225" fontSize="8" fill="#8A8880" textAnchor="middle">
              FL +0.15 m
            </text>
            {/* Sofa diagram */}
            <rect x="170" y="240" width="100" height="40" stroke="#50504C" strokeWidth="0.8" fill="#FAF9F6" />
            <line x1="170" y1="250" x2="270" y2="250" stroke="#50504C" strokeWidth="0.6" />
          </g>

          {/* Dining & Open Kitchen */}
          <g>
            <text x="590" y="210" fontSize="10" fill="#181817" textAnchor="middle" fontWeight="bold">
              DINING & PANTRY
            </text>
            <text x="590" y="225" fontSize="8" fill="#8A8880" textAnchor="middle">
              FL +0.15 m
            </text>
            {/* Dining Table with 6 Chairs */}
            <rect x="540" y="240" width="100" height="50" stroke="#50504C" strokeWidth="0.8" fill="#FAF9F6" />
            <circle cx="560" cy="230" r="5" stroke="#8A8880" strokeWidth="0.6" />
            <circle cx="590" cy="230" r="5" stroke="#8A8880" strokeWidth="0.6" />
            <circle cx="620" cy="230" r="5" stroke="#8A8880" strokeWidth="0.6" />
            <circle cx="560" cy="300" r="5" stroke="#8A8880" strokeWidth="0.6" />
            <circle cx="590" cy="300" r="5" stroke="#8A8880" strokeWidth="0.6" />
            <circle cx="620" cy="300" r="5" stroke="#8A8880" strokeWidth="0.6" />
          </g>

          {/* Entrance Foyer & Double Carport Buffer */}
          <g>
            <rect x="140" y="320" width="160" height="60" stroke="#181817" strokeWidth="1.2" fill="#FAF9F6" />
            <text x="220" y="355" fontSize="9" fill="#50504C" textAnchor="middle">
              CARPORT BUFFER (-0.10)
            </text>
            {/* Diagonal cross line for carport */}
            <line x1="140" y1="320" x2="300" y2="380" stroke="#D8D5CC" strokeWidth="0.8" />
            <line x1="300" y1="320" x2="140" y2="380" stroke="#D8D5CC" strokeWidth="0.8" />
          </g>

          {/* Service & Staircase to Upper Private Level */}
          <g>
            <rect x="500" y="320" width="180" height="60" stroke="#181817" strokeWidth="1.2" fill="#FAF9F6" />
            {/* Stair treads */}
            <line x1="520" y1="320" x2="520" y2="380" stroke="#8A8880" strokeWidth="0.8" />
            <line x1="540" y1="320" x2="540" y2="380" stroke="#8A8880" strokeWidth="0.8" />
            <line x1="560" y1="320" x2="560" y2="380" stroke="#8A8880" strokeWidth="0.8" />
            <line x1="580" y1="320" x2="580" y2="380" stroke="#8A8880" strokeWidth="0.8" />
            <line x1="600" y1="320" x2="600" y2="380" stroke="#8A8880" strokeWidth="0.8" />
            {/* Stair arrow */}
            <line x1="510" y1="350" x2="615" y2="350" stroke="#181817" strokeWidth="1" markerEnd="url(#arrow)" />
            <text x="640" y="355" fontSize="9" fill="#181817" textAnchor="middle">
              UP (STAIRS)
            </text>
          </g>

          {/* Dimension Lines */}
          <g stroke="#50504C" strokeWidth="0.6">
            {/* Bottom Dimension */}
            <line x1="140" y1="410" x2="680" y2="410" />
            <line x1="140" y1="405" x2="140" y2="415" />
            <line x1="300" y1="405" x2="300" y2="415" />
            <line x1="500" y1="405" x2="500" y2="415" />
            <line x1="680" y1="405" x2="680" y2="415" />
            <text x="220" y="425" fontSize="9" fill="#50504C" textAnchor="middle">4,500 mm</text>
            <text x="400" y="425" fontSize="9" fill="#50504C" textAnchor="middle">6,000 mm</text>
            <text x="590" y="425" fontSize="9" fill="#50504C" textAnchor="middle">5,500 mm</text>
          </g>

          {/* North Arrow & Scale Bar */}
          <g transform="translate(730, 80)">
            <circle cx="0" cy="0" r="16" stroke="#181817" strokeWidth="1" fill="#FAF9F6" />
            <polygon points="0,-14 5,4 0,0 -5,4" fill="#181817" />
            <text x="0" y="-18" fontSize="10" fill="#181817" textAnchor="middle" fontWeight="bold">N</text>
          </g>
        </svg>
      </div>

      {/* Drawing Notes Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D8D5CC] text-[11px] text-[#8A8880]">
        <div>
          <span className="font-semibold text-[#181817]">01. Passive Ventilation:</span> Stack-effect air exhaust through inner courtyard skylight.
        </div>
        <div>
          <span className="font-semibold text-[#181817]">02. Thermal Buffer:</span> West facade solid wall shielding high solar radiation.
        </div>
        <div>
          <span className="font-semibold text-[#181817]">03. Structural Grid:</span> 4.5m x 6.0m reinforced concrete modular columns.
        </div>
      </div>
    </div>
  );
}
