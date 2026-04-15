"use client";

import ArgumentModal from "@/components/ArgumentModal";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <ArgumentModal onClose={() => router.back()} />
    </div>
  );
};

export default Page;