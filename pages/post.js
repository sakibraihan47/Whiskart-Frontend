import React from "react";
import ArtworkPost from "../components/ArtworkPost";

export default function post() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-purple-900">
        <ArtworkPost />
      </div>
    </>
  );
}
