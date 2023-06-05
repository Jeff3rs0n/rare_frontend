import "./thumb.module.css"
import {
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import * as React from "react";
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
Grid
} from "@nextui-org/react";
import { Dapps } from "@web3uikit/icons";
import { Cat } from "@web3uikit/icons";
import { UserTeam } from "@web3uikit/icons";
import { Eye } from "@web3uikit/icons";
import Drops from "../pages/Drops/drop" 




function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function Thumbs() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} >
        <div className="keen-slider__slide number-slide1"></div>
        <div className="keen-slider__slide number-slide2"></div>
        <div className="keen-slider__slide number-slide3"></div>
        <div className="keen-slider__slide number-slide4"></div>
        <div className="keen-slider__slide number-slide5"></div>
        <div className="keen-slider__slide number-slide6"></div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1"><Drops /></div>
        <div className="keen-slider__slide number-slide2"><Drops /></div>
        <div className="keen-slider__slide number-slide3"><Drops /></div>
        <div className="keen-slider__slide number-slide4"><Drops /></div>
        <div className="keen-slider__slide number-slide5"><Drops /></div>
        <div className="keen-slider__slide number-slide6"><Drops /></div>
      </div>
    </>
  )
}
