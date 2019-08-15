import React from "react";
import CategoryComponent from "./CategoryComponent";

export default function Category({ match }) {
  return (
    <div>
      <CategoryComponent endpoint={match.params.source_name} />
    </div>
  );
}
