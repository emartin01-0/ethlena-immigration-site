export const metadata = {
  title: "Ethlena Macauley | Immigration Attorney",
  description: "Compassionate and experienced immigration attorney offering personalized virtual legal services.",
};

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
