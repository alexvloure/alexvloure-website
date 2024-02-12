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
  const getColSpanStyles = () => {
    switch (colSpan) {
      case 1:
        return 'col-span-1 aspect-square';
      case 2:
        return 'col-span-2 aspect-auto';
      case 3:
        return 'col-span-3 aspect-auto';
      default:
        return 'col-span-1 aspect-square';
    }
  };

  const color = withDefaultColor ? 'bg-[#F5F5F7] dark:bg-[#010101]' : '';

  return (
    <div
      className={`${getColSpanStyles()} ${color} ${className} relative rounded-3xl min-h-[100px] overflow-hidden transition duration-300 ease-in-out`}
      style={style}>
      {children}
    </div>
  );
};

export default Card;
