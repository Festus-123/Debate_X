"use client";

import VotingModal from "@/components/VotingModal";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <VotingModal onClose={() => router.back()} />
    </div>
  );
};

export default Page;