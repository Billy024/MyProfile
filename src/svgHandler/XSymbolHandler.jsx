export const XSymbol = () => {
  const XSymbolPart = ({ d, fill, strokeColor, strokeOpacity }) => {
    return (
      <path
        d={d}
        fill={fill}
        stroke={strokeColor}
        stroke-opacity={strokeOpacity}
      />
    );
  };
  return (
    <svg
      width="190"
      height="124"
      viewBox="0 0 190 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <XSymbolPart
        d="M130.705 122.499L94.9381 86.1563L94.9381 34.3202L126.715 0.999997L153.654 28.3723L119.537 61.948L155.303 98.2911L130.705 122.499Z"
        fill="#FFB800"
        strokeColor="white"
        strokeOpacity="0.8"
      />
      <XSymbolPart
        d="M93.4026 86.2864L59.8185 119.338L34.465 93.5755L68.0491 60.5242L47.223 39.3623L37.6022 29.5865L33.5841 25.5037L58.1826 1.29534L93.4026 34.4503L93.4026 86.2864Z"
        fill="#FFB800"
        stroke="white"
        stroke-opacity="0.8"
      />
      <path
        d="M131.15 119.559L152.797 98.2545L117.033 61.9135L151.138 28.3498L127.129 3.95397"
        stroke="#FF0000"
        stroke-opacity="0.8"
        stroke-width="2.5"
      />
      <path
        d="M59.484 116.147L37.3102 93.6153L70.9157 60.5429L36.4652 25.5371L57.8691 4.47274"
        stroke="#0029FF"
        stroke-opacity="0.8"
        stroke-width="3"
      />
    </svg>
  );
};
