import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../util/utils";

import "./counter.module.css";
import { Container, Text, Spacer } from "@nextui-org/react";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <Container>
      <Container>
        <div className="counter-item">
          <span className="label">
            <Text
              color="warning"
              size={18}
              css={{
                fontFamily: "monospace",
                borderStyle: "solid",
                borderColor: "grey",
                borderWidth: "1px",
                borderRadius: "8px",
                width: "100%",
                backdropFilter: "blur(16px)",
              }}
            >
              <Spacer /> {String(timeLeft.days).padStart(2, "0")} :{" "}
              {String(timeLeft.hours).padStart(2, "0")} :{" "}
              {String(timeLeft.minutes).padStart(2, "0")} :{" "}
              {String(timeLeft.seconds).padStart(2, "0")} <Spacer />
            </Text>
          </span>
        </div>

        <div className="counter-item">
          <span className="value">
            <Spacer />
            <Text
              size={12}
              color="warning"
              css={{
                fontFamily: "monospace",
                borderStyle: "solid",
                borderColor: "grey",
                borderWidth: "1px",
                borderRadius: "8px",
                width: "100%",
                backdropFilter: "blur(16px)",
              }}
            >
              <Spacer />
              Days : Hrs : Mins : Secs
              <Spacer />
            </Text>
          </span>
        </div>
      </Container>
    </Container>
  );
};
