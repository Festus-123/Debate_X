"use client";

import LearnModal from "@/components/LearnModal";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <LearnModal onClose={() => router.back()} />
    </div>
  );
};

export default Page;