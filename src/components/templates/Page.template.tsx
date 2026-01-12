interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  const classes = `${className} px-8 sm:px-12 py-16 sm:py-20 min-h-dvh`;
  return <div className={classes}>{children}</div>;
};
