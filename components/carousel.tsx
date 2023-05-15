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
import {Dapps} from '@web3uikit/icons'
import {Cat} from '@web3uikit/icons'
import {UserTeam} from '@web3uikit/icons'
import {Eye} from '@web3uikit/icons'




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
          <Container css={{ w: "95%", h: "600px" }}>
            <Card css={{ w: "100%", h: "600px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="extrabold"
                    transform="uppercase"
                    color="warning"
                    css={{
                      fontFamily: "monospace",
                    }}
                  >
                    Category
                  </Text>
                  <Text
                    h3
                    color="white"
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",

                      fontFamily: "monospace",
                    }}
                  >
                    Collection Name
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
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        >
                          <Badge color="success" variant="dot"/>{" "}
                          Active
                        </Text>
                        <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Dapps fontSize='15px'/> Volume: 0.0</Text>
                                                <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Cat fontSize='15px'/> Items: #0</Text>
                          <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        ><UserTeam fontSize='15px'/> Owners: #0</Text>
                      </Col>
                    
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        css={{
                          color: "",
                          bg: "#94f9f026",
                          borderStyle: "solid",
                          borderRadius: "8px",
                          borderWidth: "1p",
                        }}
                      >
                        <Text
                          css={{
                            color: "inherit",
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",
                          }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          VIEW COLLECTION
                        </Text><Eye fontSize='15px'/>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        </div>

        <div className="keen-slider__slide number-slide2">
          <Container css={{ w: "95%", h: "600px" }}>
            <Card css={{ w: "100%", h: "600px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="extrabold"
                    transform="uppercase"
                    color="warning"
                    css={{
                      fontFamily: "monospace",
                    }}
                  >
                    Category
                  </Text>
                  <Text
                    h3
                    color="white"
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",

                      fontFamily: "monospace",
                    }}
                  >
                    Collection Name
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
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        >
                          <Badge color="success" variant="dot"  />{" "}
                          Active
                        </Text>
                        <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Dapps fontSize='15px'/> Volume: 0.0</Text>
                                                <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Cat fontSize='15px'/> Items: #0</Text>
                          <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        ><UserTeam fontSize='15px'/> Owners: #0</Text>
                      </Col>
                    
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        css={{
                          color: "",
                          bg: "#94f9f026",
                          borderStyle: "solid",
                          borderRadius: "8px",
                          borderWidth: "1p",
                        }}
                      >
                        <Text
                          css={{
                            color: "inherit",
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",
                          }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          VIEW COLLECTION
                        </Text><Eye fontSize='15px'/>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        </div>

        <div className="keen-slider__slide number-slide3">
          <Container css={{ w: "95%", h: "600px" }}>
            <Card css={{ w: "100%", h: "600px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="extrabold"
                    transform="uppercase"
                    color="warning"
                    css={{
                      fontFamily: "monospace",
                    }}
                  >
                    Category
                  </Text>
                  <Text
                    h3
                    color="white"
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",

                      fontFamily: "monospace",
                    }}
                  >
                    Collection Name
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
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        >
                          <Badge color="success" variant="dot"  />{" "}
                          Active
                        </Text>
                     
                        <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Dapps fontSize='15px'/> Volume: 0.0</Text>
                                                <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Cat fontSize='15px'/> Items: #0</Text>
                        
                          <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        ><UserTeam fontSize='15px'/> Owners: #0</Text>
                      </Col>
                    
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        css={{
                          color: "",
                          bg: "#94f9f026",
                          borderStyle: "solid",
                          borderRadius: "8px",
                          borderWidth: "1p",
                        }}
                      >
                        <Text
                          css={{
                            color: "inherit",
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",
                          }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          VIEW COLLECTION
                        </Text><Eye fontSize='15px'/>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        </div>

        <div className="keen-slider__slide number-slide4">
          <Container css={{ w: "95%", h: "600px" }}>
            <Card css={{ h: "600px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="warning"
                    css={{
                      fontFamily: "monospace",
                    }}
                  >
                    Category
                  </Text>
                  <Text
                    h3
                    color="inherit"
                    css={{
                      textGradient: "45deg, $yellow600 -20%, $red600 100%",
                      fontFamily: "monospace",
                    }}
                  >
                    Collection Name
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
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        >
                          <Badge color="success" variant="dot"  />{" "}
                          Active
                        </Text>
                        <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Dapps fontSize='15px'/> Volume: 0.0</Text>
                                                <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        > <Cat fontSize='15px'/> Items: #0</Text>
                          <Text
                          size={15}
                          color="warning"
                          weight={"bold"}
                          css={{
                            textGradient:
                              "45deg, $blue600 -20%, $red600 100%",

                            fontFamily: "monospace",
                          }}
                        ><UserTeam fontSize='15px'/> Owners: #0</Text>
                      </Col>
                    
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        css={{
                          fontFamily: "monospace",
                          bg: "#94f9f026",
                          borderStyle: "solid",
                          borderRadius: "8px",
                          borderWidth: "1p",
                        }}
                      >
                        <Text
                          css={{
                            color: "inherit",
                            textGradient:
                              "45deg, $yellow600 -20%, $red600 100%",
                          }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          VIEW COLLECTION
                        </Text><Eye fontSize='15px'/>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
}
