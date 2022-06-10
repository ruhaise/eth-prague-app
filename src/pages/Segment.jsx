import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const Segment = () => {
  const [segmentQuery, setSegmentQuery] = useState([{ contract_address: "" }]);

  const handleAddSegment = () => {
    setSegmentQuery([...segmentQuery, { contract_address: "" }]);
  };

  const handleRemoveSegment = (index) => {
    const segmentList = [...segmentQuery];
    segmentList.splice(index, 1);
    setSegmentQuery(segmentList);
  };

  const handleSegmentChange = (index, e) => {
    const { name, value } = e.target;
    const segmentList = [...segmentQuery];
    segmentList[index][name] = value;
    setSegmentQuery(segmentList);
  };

  return (
    <>
      {segmentQuery.map((segment, index) => {
        return (
          <div>
            {" "}
            <TextField
              required
              label="contract_address"
              name="contract_address"
              defaultValue="contract address"
              value={segment.contract_address}
              onChange={(e) => handleSegmentChange(index, e)}
            />
            {index > 0 && (
              <Button
                onClick={() => handleRemoveSegment(index)}
                color="primary"
              >
                Remove
              </Button>
            )}
          </div>
        );
      })}

      <Button
        onClick={handleAddSegment}
        disabled={segmentQuery.length > 5}
        color="primary"
      >
        {" "}
        Add +
      </Button>
    </>
  );
};

export default Segment;
