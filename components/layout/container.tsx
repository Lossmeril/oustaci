interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-350 mx-auto h-full">{children}</div>;
};
