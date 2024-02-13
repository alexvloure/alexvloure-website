type CardProps = {
  colSpan?: 1 | 2 | 3;
  children: React.ReactNode;
  withDefaultColor?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({
  colSpan = 1,
  children,
  withDefaultColor = false,
  className,
  style,
}) => {
  const colSpanStyles = {
    1: 'col-span-1 aspect-square',
    2: 'col-span-2 aspect-auto',
    3: 'col-span-3 aspect-auto',
  };
  const color = withDefaultColor ? 'bg-[#F5F5F7] dark:bg-[#010101]' : '';

  return (
    <div
      className={`${colSpanStyles[colSpan]} ${color} ${className} relative rounded-3xl min-h-[100px] overflow-hidden transition duration-300 ease-in-out`}
      style={style}>
      {children}
    </div>
  );
};

export default Card;
