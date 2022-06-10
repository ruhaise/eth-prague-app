import axios from "axios";
import React from "react";

const GQL = () => {
  const fetchGQL = async () => {
    const payload = `\ttransfers(\n    where: {collection: \"0xdb3b2e1f699caf230ee75bfbe7d97d70f81bc945\"},\n    first: 10,\n    orderBy: timestamp,\n    orderDirection: desc\n  ) {\n    amount\n    timestamp\n    token {identifier}\n    senderAddress {id}\n    receiverAddress {id}\n    collection {name,id}\n    matchedSale {platform, currency {symbol}}\n  }"`;
    const data = await axios.post(
      `https://api.thegraph.com/subgraphs/name/dontbuyuncle/matic-silver-pool`,
      { query: payload }
    );
    
    console.log(data);
  }

  React.useEffect(() => {
    fetchGQL();
  }, []);

  return (
    <div>
      GQL
    </div>
  );
}

export default GQL;
