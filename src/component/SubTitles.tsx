import React from "react";

function SubTitles({
  aboveText,
  belowText,
}: {
  aboveText: string;
  belowText?: string;
}) {
  return (
    <div style={{ borderLeft: "5px solid pink" }}>
      <p className="title has-text-grey has-text-centered-mobile m-5">
        {aboveText}
        {belowText && (
          <>
            <br />
            {belowText}
          </>
        )}
      </p>
    </div>
  );
}

export default SubTitles;
