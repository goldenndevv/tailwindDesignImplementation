"use client";

interface Props {
  children: React.ReactNode;
}

export const App: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default App;
