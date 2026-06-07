import "./globals.css";

export const metadata = {
  title: "Zantrix Technologies",
  description: "Ideas into Reality",
  icons: {
    icon: "/logo.png",
  },
};

// add
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}