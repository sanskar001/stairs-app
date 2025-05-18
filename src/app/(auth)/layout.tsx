const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="bg-green-300">{children}</div>;
};

export default AuthLayout;
