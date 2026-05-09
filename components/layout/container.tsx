interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="px-6 lg:max-w-350 lg:px-0 mx-auto h-full">{children}</div>
  );
};
