import React from "react";
import { Text } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(() => <Extension />);

const Extension = () => {
  return (
    <>
      <Text>
        Congrats! You just deployed your app card with <code>hs get-started</code>!
      </Text>
    </>
  );
};
