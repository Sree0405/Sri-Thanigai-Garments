"use client";

import dynamic from "next/dynamic";

const BranchMap = dynamic(
  () => import("./BranchMapClient"),
  { ssr: false }
);

export default BranchMap;