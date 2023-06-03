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
      <div className="counter-item">
        <Text
          weight={"extrabold"}
          color="warning"
          size={14}
          css={{
            fontFamily: "PT Mono",
            textGradient: "45deg, $yellow500 -20%, $blue300 100%",
            textAlign: "center",
            position: "sticky",
          }}
        >
          {" "}
          DROP DATE:{" "}
        </Text>

        <span className="label">
          <Text
            weight={"extrabold"}
            color="warning"
            size={18}
            css={{
              fontFamily: "PT Mono",
              borderRadius: "8px",
              width: "100%",
              backdropFilter: "blur(16px)",
              borderBottomStyle: "solid",
              padding: "8%",
              textAlign: "center",
            }}
          >
            <Spacer />
            <Text
              weight={"extrabold"}
              color="warning"
              size={14}
              css={{
                fontFamily: "PT Mono",
                borderRadius: "8px",
                width: "100%",
                backdropFilter: "blur(16px)",
                borderBottomStyle: "solid",
                padding: "5%",
                textAlign: "center",
              }}
            >
              {String(timeLeft.days).padStart(2, "0")} : DAYS
            </Text>
            <Text
              weight={"extrabold"}
              color="warning"
              size={14}
              css={{
                fontFamily: "PT Mono",
                borderRadius: "8px",
                width: "100%",
                backdropFilter: "blur(16px)",
                borderBottomStyle: "solid",
                padding: "5%",
                textAlign: "center",
              }}
            >
              {" "}
              {String(timeLeft.hours).padStart(2, "0")} : HOURS
            </Text>
            <Text
              weight={"extrabold"}
              color="warning"
              size={14}
              css={{
                fontFamily: "PT Mono",
                borderRadius: "8px",
                width: "100%",
                backdropFilter: "blur(16px)",
                borderBottomStyle: "solid",
                padding: "5%",
                textAlign: "center",
              }}
            >
              {" "}
              {String(timeLeft.minutes).padStart(2, "0")} : MINS
            </Text>
            <Text
              weight={"extrabold"}
              color="warning"
              size={14}
              css={{
                fontFamily: "PT Mono",
                borderRadius: "8px",
                width: "100%",
                backdropFilter: "blur(16px)",
                padding: "5%",
                textAlign: "center",
              }}
            >
              {" "}
              {String(timeLeft.seconds).padStart(2, "0")} : SECS
            </Text>
          </Text>
        </span>
      </div>
      <Spacer />
      <Spacer />
      <div className="counter-item">
        <Text
          weight={"extrabold"}
          color="warning"
          size={12}
          css={{
            fontFamily: "monospace",
            borderRadius: "8px",
            width: "100%",
            backdropFilter: "blur(16px)",
            borderBottomStyle: "solid",
            padding: "5%",
            textAlign: "center",
          }}
        >
          <Spacer />
          Countdown
          <Spacer />
        </Text>

        <Spacer />
      </div>
    </Container>
  );
};
