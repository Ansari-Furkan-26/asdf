import React from "react";

const IndustrialDiagram: React.FC = () => {
  return (
    <div id="level-2" className="bg-white p-4 shadow-lg">
      {/* Header Text */}
      <div className="mb-6 max-w-4xl mx-auto border-l-[0.5px] border-[#1A365E] pl-5">
        <p className="text-gray-700 text-sm leading-relaxed">
          At CryoCorp, our <strong>ASU (Air Separation Unit) Plants</strong>{" "}
          transform atmospheric air into high-purity industrial gases through a
          precise and highly efficient cryogenic process. It starts with
          compressing and cooling the air, followed by advanced purification to
          remove moisture, oil, and CO₂. The purified air is then chilled to
          cryogenic temperatures and sent into distillation columns, where
          oxygen and nitrogen are separated based on their unique boiling
          points.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-3">
          Behind the scenes, a carefully engineered system of air compressors,
          heat exchangers, expansion engines, and insulated cold boxes work
          seamlessly to ensure reliability and safety. From automated controls
          to liquid oxygen pumps and cylinder filling stations, every step is
          designed for performance, precision, and long-term operational ease.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          This is the science of air—delivered with CryoCorp's commitment to
          quality and innovation.
        </p>
        <div className="mb-4 max-w-4xl mx-auto">
          <span className="text-gray-600 py-1 text-[16px] font-bold rounded">
            LEVEL 2
          </span>
        </div>
      </div>

      {/* Level 2 Badge */}

      {/* Industrial Diagram - Full Width */}
      <div className="w-full mt-20">
        <div>
        <img
          src="/ASU/big-diagram.png"
          alt="ASU Industrial Process Diagram"
          className="w-full h-auto"
        />
        </div>
        <div className="md:max-w-[60%] flex flex-col md:flex-row sm:ml-12 ">
            <img src="/ASU/bottom-left.png" alt="" className="sm:h-[110px]"/>
            <img src="/ASU/bottom-right.jpg" alt="" className="sm:h-[110px] h-[100px] w-[140px]"/>
        </div>
      </div>
    </div>
  );
};

export default IndustrialDiagram;
