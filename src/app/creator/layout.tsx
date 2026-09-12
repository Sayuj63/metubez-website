import PolicyPageLayout from "@/components/PolicyPageLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PolicyPageLayout>{children}</PolicyPageLayout>;
}
