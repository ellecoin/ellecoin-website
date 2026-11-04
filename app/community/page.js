import Mission from "@/components/Mission";
import Membership from "@/components/Membership";
import Governance from "@/components/Governance";
import DesignedForEveryone from "@/components/DesignedForEveryone";

export const metadata = {
  title: "Community",
  description:
    "Our mission and pillars, community membership tiers, governance, and a platform designed for everyone.",
};

export default function CommunityPage() {
  return (
    <>
      <Mission />
      <Membership />
      <Governance />
      <DesignedForEveryone />
    </>
  );
}
