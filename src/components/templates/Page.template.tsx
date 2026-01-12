interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  const classes = `${className} px-8 md:px-12 py-12 md:py-20 min-h-dvh`;
  return <div className={classes}>{children}</div>;
};
