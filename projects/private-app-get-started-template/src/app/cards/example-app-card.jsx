import React from "react";
import { List, Text, Link } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(() => <Extension />);

const Extension = () => {
  return (
    <>
      <Text>
        Congrats! You just deployed your first App card!
      </Text>
    </>
  );
};
