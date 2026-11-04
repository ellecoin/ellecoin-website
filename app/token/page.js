import Token from "@/components/Token";
import Tokenomics from "@/components/Tokenomics";
import Presale from "@/components/Presale";
import Security from "@/components/Security";

export const metadata = {
  title: "The $ELLECOIN Token",
  description:
    "$ELLECOIN governance and access token: tokenomics, the community presale, and technology and security.",
};

export default function TokenPage() {
  return (
    <>
      <Token />
      <Tokenomics />
      <Presale />
      <Security />
    </>
  );
}
