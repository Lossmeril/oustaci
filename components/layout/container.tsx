interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  // Edge gutter is kept at every width below xl – it only collapses to 0 once
  // the max-width itself provides the breathing room from the viewport edge.
  return (
    <div className="mx-auto h-full w-full max-w-350 px-6 sm:px-8 lg:px-12 xl:px-0">
      {children}
    </div>
  );
};
