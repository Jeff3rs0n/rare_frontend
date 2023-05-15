import * as React from "react";
import "./carso.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Spacer,
  Image,
  Container,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
} from "@nextui-org/react";

export default function Caros() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Card css={{ w: "100%", h: "600px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Collectibles
                </Text>
                <Text h3 color="white">
                  Bore Apes Yatch Club
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
              ></Card.Image>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col span={3}></Col>
                    <Col>
                      <Text
                        size={16}
                        color="warning"
                        weight={"bold"}
                        css={{
                          fontFamily: "monospace",
                        }}
                      >
                        <Badge color="success" variant="dot" enableShadow />{" "}
                        Minting Now
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      css={{
                        color: "orange",
                        bg: "#94f9f026",
                        borderStyle: "solid",
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        VIEW COLLECTION
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer />
        </div>
        <div className="keen-slider__slide number-slide2">
        <Card css={{ w: "100%", h: "600px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Collectibles
                </Text>
                <Text h3 color="white">
                  Bore Apes Yatch Club
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src="https://images.blur.io/_blur-prod/_assets/homepage/covers/degods.png?w=1560&format=png"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
              ></Card.Image>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col span={3}></Col>
                    <Col>
                      <Text
                        size={16}
                        color="warning"
                        weight={"bold"}
                        css={{
                          fontFamily: "monospace",
                        }}
                      >
                        <Badge color="success" variant="dot" enableShadow />{" "}
                        Minting Now
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      css={{
                        color: "orange",
                        bg: "#94f9f026",
                        borderStyle: "solid",
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        VIEW COLLECTION
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer />

        </div>
        <div className="keen-slider__slide number-slide3">
        <Card css={{ w: "100%", h: "600px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Collectibles
                </Text>
                <Text h3 color="white">
                  Bore Apes Yatch Club
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src="https://images.blur.io/_blur-prod/_assets/homepage/covers/checks-1.png?tl_px=1,1&br_px=1600,900&format=png&w=1560"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
              ></Card.Image>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col span={3}></Col>
                    <Col>
                      <Text
                        size={16}
                        color="warning"
                        weight={"bold"}
                        css={{
                          fontFamily: "monospace",
                        }}
                      >
                        <Badge color="success" variant="dot" enableShadow />{" "}
                        Minting Now
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      css={{
                        color: "orange",
                        bg: "#94f9f026",
                        borderStyle: "solid",
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        VIEW COLLECTION
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer />

        </div>
        <div className="keen-slider__slide number-slide4">
        <Card css={{ w: "100%", h: "600px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Collectibles
                </Text>
                <Text h3 color="white">
                  Bore Apes Yatch Club
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src="https://images.blur.io/_blur-prod/_assets/homepage/covers/azuki-1.png?w=1560&format=png"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
              ></Card.Image>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col span={3}></Col>
                    <Col>
                      <Text
                        size={16}
                        color="warning"
                        weight={"bold"}
                        css={{
                          fontFamily: "monospace",
                        }}
                      >
                        <Badge color="success" variant="dot" enableShadow />{" "}
                        Minting Now
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      css={{
                        color: "orange",
                        bg: "#94f9f026",
                        borderStyle: "solid",
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        VIEW COLLECTION
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer />

        </div>
        <div className="keen-slider__slide number-slide5">
        <Card css={{ w: "100%", h: "600px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Collectibles
                </Text>
                <Text h3 color="white">
                  Bore Apes Yatch Club
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src="https://i.seadn.io/gcs/files/f51ce486cbe70d8c98f5ebc31b80ea35.png?auto=format&dpr=1&w=1080"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
              ></Card.Image>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col span={3}></Col>
                    <Col>
                      <Text
                        size={16}
                        color="warning"
                        weight={"bold"}
                        css={{
                          fontFamily: "monospace",
                        }}
                      >
                        <Badge color="success" variant="dot" enableShadow />{" "}
                        Minting Now
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      css={{
                        color: "orange",
                        bg: "#94f9f026",
                        borderStyle: "solid",
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        VIEW COLLECTION
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer />

        </div>
        <div className="keen-slider__slide number-slide6">
        <Card css={{ w: "100%", h: "600px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="warning"
                >
                  Collectibles
                </Text>
                <Text h3 color="white">
                  Bore Apes Yatch Club
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                objectFit="cover"
                src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg"
                width={1500}
                height={2000}
                alt="Background gradient from red to blue"
              ></Card.Image>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col span={3}></Col>
                    <Col>
                      <Text
                        size={16}
                        color="warning"
                        weight={"bold"}
                        css={{
                          fontFamily: "monospace",
                        }}
                      >
                        <Badge color="success" variant="dot" enableShadow />{" "}
                        Minting Now
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      css={{
                        color: "orange",
                        bg: "#94f9f026",
                        borderStyle: "solid",
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        VIEW COLLECTION
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer />

        </div>
      </div>
    </>
  );
}
