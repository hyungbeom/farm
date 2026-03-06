import Layouts from "@/components/Layouts";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layouts>{children}</Layouts>;
}
