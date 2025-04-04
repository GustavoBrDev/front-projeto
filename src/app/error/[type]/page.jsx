"use client"

import React from "react";
import ErrorResponse from "@/components/pagesResponses/ErrorResponse";

export default function ErrorPage({ params }) {
  const { type } = params;
  return (
    <ErrorResponse type={type} />
  );
}
