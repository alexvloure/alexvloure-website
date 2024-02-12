type CardProps = {
  colSpan: number;
  children: React.ReactNode;
  withDefaultColor?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({
  colSpan,
  children,
  withDefaultColor = false,
  className,
  style,
}) => {
  const aspectRatio = colSpan === 1 ? 'aspect-square' : 'aspect-auto';
  const color = withDefaultColor ? 'bg-[#F5F5F7] dark:bg-[#010101]' : '';

  return (
    <div
      className={`relative rounded-3xl col-span-${colSpan} ${aspectRatio} min-h-[100px] overflow-hidden ${color} ${className} transition duration-300 ease-in-out`}
      style={style}>
      {children}
    </div>
  );
};

export default Card;
