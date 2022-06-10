import axios from "axios";
import React from "react";

const GQL = () => {
  const fetchGQL = async () => {
    const payload = `{\n  tokens(where: {\n    collection: \"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d\",\n  }) {\n    owner {\n      id\n    }\n  }\n}`;
    const data = await axios.post(
      `https://gateway.thegraph.com/api/2d3d83f6c8345633d0dce29d41068a6b/subgraphs/id/B333F7Ra4kuVBSwHFDfH9x9N1341GYHvdfpV94KY8Gmv`,
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
