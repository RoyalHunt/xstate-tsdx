import React from "react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

type TrafficLightEvent = { type: "NEXT" };

type TraffiLightState =
  | { value: "green"; context: undefined }
  | { value: "yellow"; context: undefined }
  | { value: "red"; context: undefined };

export const trafficLightMachine = createMachine<
  undefined, // We donβt have context, so we type it as undefined
  TrafficLightEvent,
  TraffiLightState
>({
  id: "trafficLight",
  initial: "red",
  states: {
    green: {
      on: { NEXT: "yellow" },
    },
    yellow: {
      on: { NEXT: "red" },
    },
    red: {
      on: { NEXT: "green" },
    },
  },
});

function App() {
  const [current, send] = useMachine(trafficLightMachine);
  console.log("π ~ file: App.tsx ~ line 38 ~ App ~ send", send);
  console.log("π ~ file: App.tsx ~ line 38 ~ App ~ current", current);

  return <div>fsdf</div>;
}

export default App;
