import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";
import ImageCarousel from "./ImageCarousel";


export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <div>
        Content 1 : Thoughtful client-focused interior design, creating
        beautiful and innovative residential and commercial spaces, with
        sustainability in mind.
      </div>
      <div>Image 1</div>
      <div>Image 2</div>
      <div>Title 2</div>
      <div>
        Content 2 : Whatever feeling or vision exists within you, we shall find
        its perfect expression together. If you are uncertain, we will clarify
        the possibilities. When you are time poor, we take care of every detail,
        alleviating pressure. You are guided from concept to completion. Take
        Bone Made’s calm and comprehensive interior design journey to realise
        the extraordinary potential of your home or business. Let’s begin…
      </div>
      <div>
        <Button variant="text">Learn About Our Services</Button>
      </div>

      <div>
        Content 3 : Our interior design services ensure the successful delivery
        of any residential or hospitality project, Australia wide. Whether
        refreshing or completely rebuilding your property, we offer an enjoyable
        and engaging process that takes your every requirement into account. We
        meticulously collate interior documentation with schedules, together
        with all relevant consultant information. You can then tender this
        comprehensive construction set to your builders and trades, to support
        accurate pricing and a scrupulous build. Your aesthetic and functional
        needs are our guide, and together we turn these into a tangible, layered
        reality. We specialise in the synergy of heritage and existing
        architectural vernaculars with classic and contemporary design. Expect
        timely communication, seamless development with flawless attention to
        detail, and an ultimately life-enhancing transformation of your space.
      </div>
      <div>Image 3 (Video - Instagram reel)</div>
      <div className="btn">
        <Button variant="text">Book your Design Consultation</Button>
      </div>
      <ImageCarousel />
    </>
  );
}
