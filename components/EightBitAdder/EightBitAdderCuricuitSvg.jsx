import { observer } from "mobx-react-lite";
import React from "react";

import eightBitAdder from "../../store/EightBitAdder";

const EightBitAdderCuricuitSvg = observer(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="1020"
      version="1.1"
      viewBox="0 0 850 288"
      xmlSpace="preserve"
    >
      <style>
        {`.st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
	.st1{fill:none;}
	.st2{font-family:'MyriadPro-Regular';}
	.st3{font-size:12px;}
	.st4{font-size:8px;}
	.st5{fill:none;stroke-miterlimit:10;}`}
      </style>
      <path d="M774 107.76H846V179.76H774z" className="st0"></path>
      <path d="M774 135.88H846V151.51H774z" className="st1"></path>
      <text className="st2 st3" transform="translate(783.348 144.404)">
        Half Adder
      </text>
      <text transform="translate(820.907 175.14)">
        <tspan x="0" y="0" className="st2 st3">
          S
        </tspan>
        <tspan x="5.92" y="0" className="st2 st4">
          0
        </tspan>
      </text>
      <text transform="translate(802.773 119.904)">
        <tspan x="0" y="0" className="st2 st3">
          B
        </tspan>
        <tspan x="6.5" y="0" className="st2 st4">
          0
        </tspan>
      </text>
      <text transform="translate(782.269 119.903)">
        <tspan x="0" y="0" className="st2 st3">
          A
        </tspan>
        <tspan x="7.34" y="0" className="st2 st4">
          0
        </tspan>
      </text>
      <text transform="translate(781.934 175.14)">
        <tspan x="0" y="0" className="st2 st3">
          C
        </tspan>
        <tspan x="6.96" y="0" className="st2 st4">
          out 0
        </tspan>
      </text>
      <path
        d="M794.04 179.76L794.04 197.4 756.39 197.4 756.39 94.35 720.11 94.35 720.11 107.76"
        className="st5"
        stroke={eightBitAdder.C[0] ? "blue" : "#000"}
      ></path>
      <path
        d="M825.92 179.76L825.92 249.87"
        stroke={eightBitAdder.S[0] ? "blue" : "#000"}
        className="st5"
      ></path>
      <path
        d="M786.07 107.76L786.07 31.96"
        stroke={eightBitAdder.A[0] ? "blue" : "#000"}
        className="st5"
      ></path>
      <path
        d="M808.08 107.76L808.08 31.96"
        stroke={eightBitAdder.B[0] ? "blue" : "#000"}
        className="st5"
      ></path>
      <g>
        <path d="M666 107.76H738V179.76H666z" className="st0"></path>
        <path d="M666 135.88H738V151.51H666z" className="st1"></path>
        <text className="st2 st3" transform="translate(676.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(712.907 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            1
          </tspan>
        </text>
        <text transform="translate(694.773 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            1
          </tspan>
        </text>
        <text transform="translate(674.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            1
          </tspan>
        </text>
        <text transform="translate(673.934 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            out 1
          </tspan>
        </text>
        <text transform="translate(712.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 1
          </tspan>
        </text>
        <path
          d="M686.04 179.76L686.04 197.4 648.39 197.4 648.39 94.35 612.11 94.35 612.11 107.76"
          stroke={eightBitAdder.C[1] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M717.92 179.76L717.92 249.87"
          stroke={eightBitAdder.S[1] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M678.07 107.76L678.07 31.96"
          stroke={eightBitAdder.A[1] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M700.08 107.76L700.08 31.96"
          stroke={eightBitAdder.B[1] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
      <g>
        <path d="M558 107.76H630V179.76H558z" className="st0"></path>
        <path d="M558 135.88H630V151.51H558z" className="st1"></path>
        <text className="st2 st3" transform="translate(568.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(604.907 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            2
          </tspan>
        </text>
        <text transform="translate(586.773 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            2
          </tspan>
        </text>
        <text transform="translate(566.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            2
          </tspan>
        </text>
        <text transform="translate(565.934 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            out 2
          </tspan>
        </text>
        <text transform="translate(604.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 2
          </tspan>
        </text>
        <path
          d="M578.04 179.76L578.04 197.4 540.39 197.4 540.39 94.35 504.11 94.35 504.11 107.76"
          stroke={eightBitAdder.C[2] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M609.92 179.76L609.92 249.87"
          stroke={eightBitAdder.S[2] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M570.07 107.76L570.07 31.96"
          stroke={eightBitAdder.A[2] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M592.08 107.76L592.08 31.96"
          stroke={eightBitAdder.B[2] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
      <g>
        <path d="M450 107.76H522V179.76H450z" className="st0"></path>
        <path d="M450 135.88H522V151.51H450z" className="st1"></path>
        <text className="st2 st3" transform="translate(460.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(496.906 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            3
          </tspan>
        </text>
        <text transform="translate(478.772 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            3
          </tspan>
        </text>
        <text transform="translate(458.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            3
          </tspan>
        </text>
        <text transform="translate(457.934 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            out 3
          </tspan>
        </text>
        <text transform="translate(496.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 3
          </tspan>
        </text>
        <path
          d="M470.04 179.76L470.04 197.4 432.39 197.4 432.39 94.35 396.11 94.35 396.11 107.76"
          stroke={eightBitAdder.C[3] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M501.92 179.76L501.92 249.87"
          stroke={eightBitAdder.S[3] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M462.07 107.76L462.07 31.96"
          stroke={eightBitAdder.A[3] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M484.08 107.76L484.08 31.96"
          stroke={eightBitAdder.B[3] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
      <g>
        <path d="M342 107.76H414V179.76H342z" className="st0"></path>
        <path d="M342 135.88H414V151.51H342z" className="st1"></path>
        <text className="st2 st3" transform="translate(352.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(388.906 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            4
          </tspan>
        </text>
        <text transform="translate(370.772 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            4
          </tspan>
        </text>
        <text transform="translate(350.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            4
          </tspan>
        </text>
        <text transform="translate(349.934 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            out 4
          </tspan>
        </text>
        <text transform="translate(388.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 4
          </tspan>
        </text>
        <path
          d="M362.04 179.76L362.04 197.4 324.39 197.4 324.39 94.35 288.11 94.35 288.11 107.76"
          stroke={eightBitAdder.C[4] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M393.92 179.76L393.92 249.87"
          stroke={eightBitAdder.S[4] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M354.07 107.76L354.07 31.96"
          stroke={eightBitAdder.A[4] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M376.08 107.76L376.08 31.96"
          stroke={eightBitAdder.B[4] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
      <g>
        <path d="M234 107.76H306V179.76H234z" className="st0"></path>
        <path d="M234 135.88H306V151.51H234z" className="st1"></path>
        <text className="st2 st3" transform="translate(244.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(280.906 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            5
          </tspan>
        </text>
        <text transform="translate(262.772 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            5
          </tspan>
        </text>
        <text transform="translate(242.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            5
          </tspan>
        </text>
        <text transform="translate(241.934 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            out 5
          </tspan>
        </text>
        <text transform="translate(280.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 5
          </tspan>
        </text>
        <path
          d="M254.04 179.76L254.04 197.4 216.39 197.4 216.39 94.35 180.11 94.35 180.11 107.76"
          stroke={eightBitAdder.C[5] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M285.92 179.76L285.92 249.87"
          stroke={eightBitAdder.S[5] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M246.07 107.76L246.07 31.96"
          stroke={eightBitAdder.A[5] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M268.08 107.76L268.08 31.96"
          stroke={eightBitAdder.B[5] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
      <g>
        <path d="M126 107.76H198V179.76H126z" className="st0"></path>
        <path d="M126 135.88H198V151.51H126z" className="st1"></path>
        <text className="st2 st3" transform="translate(136.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(172.906 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            6
          </tspan>
        </text>
        <text transform="translate(154.773 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            6
          </tspan>
        </text>
        <text transform="translate(134.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            6
          </tspan>
        </text>
        <text transform="translate(133.934 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            out 6
          </tspan>
        </text>
        <text transform="translate(172.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 6
          </tspan>
        </text>
        <path
          d="M146.04 179.76L146.04 197.4 108.39 197.4 108.39 94.35 72.11 94.35 72.11 107.76"
          stroke={eightBitAdder.C[6] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M177.92 179.76L177.92 249.87"
          stroke={eightBitAdder.S[6] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M138.07 107.76L138.07 31.96"
          stroke={eightBitAdder.A[6] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M160.08 107.76L160.08 31.96"
          stroke={eightBitAdder.B[6] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
      <g>
        <path d="M18 107.76H90V179.76H18z" className="st0"></path>
        <path d="M18 135.88H90V151.51H18z" className="st1"></path>
        <text className="st2 st3" transform="translate(28.26 144.404)">
          Full Adder
        </text>
        <text transform="translate(64.906 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            7
          </tspan>
        </text>
        <text transform="translate(46.773 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            7
          </tspan>
        </text>
        <text transform="translate(26.269 119.903)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            7
          </tspan>
        </text>
        <text transform="translate(802.773 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            0
          </tspan>
        </text>
        <text transform="translate(782.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            0
          </tspan>
        </text>
        <text transform="translate(694.773 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            1
          </tspan>
        </text>
        <text transform="translate(674.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            1
          </tspan>
        </text>
        <text transform="translate(586.773 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            2
          </tspan>
        </text>
        <text transform="translate(566.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            2
          </tspan>
        </text>
        <text transform="translate(478.772 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            3
          </tspan>
        </text>
        <text transform="translate(458.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            3
          </tspan>
        </text>
        <text transform="translate(370.772 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            4
          </tspan>
        </text>
        <text transform="translate(350.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            4
          </tspan>
        </text>
        <text transform="translate(262.772 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            5
          </tspan>
        </text>
        <text transform="translate(242.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            5
          </tspan>
        </text>
        <text transform="translate(154.773 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            6
          </tspan>
        </text>
        <text transform="translate(134.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            6
          </tspan>
        </text>
        <text transform="translate(46.773 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            B
          </tspan>
          <tspan x="6.5" y="0" className="st2 st4">
            7
          </tspan>
        </text>
        <text transform="translate(26.269 29.904)">
          <tspan x="0" y="0" className="st2 st3">
            A
          </tspan>
          <tspan x="7.34" y="0" className="st2 st4">
            7
          </tspan>
        </text>
        <text transform="translate(33.029 175.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            8
          </tspan>
        </text>
        <text transform="translate(820.907 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            0
          </tspan>
        </text>
        <text transform="translate(712.907 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            1
          </tspan>
        </text>
        <text transform="translate(604.907 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            2
          </tspan>
        </text>
        <text transform="translate(496.906 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            3
          </tspan>
        </text>
        <text transform="translate(388.906 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            4
          </tspan>
        </text>
        <text transform="translate(280.906 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            5
          </tspan>
        </text>
        <text transform="translate(172.906 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            6
          </tspan>
        </text>
        <text transform="translate(64.906 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            7
          </tspan>
        </text>
        <text transform="translate(33.029 265.14)">
          <tspan x="0" y="0" className="st2 st3">
            S
          </tspan>
          <tspan x="5.92" y="0" className="st2 st4">
            8
          </tspan>
        </text>
        <text transform="translate(64.228 119.904)">
          <tspan x="0" y="0" className="st2 st3">
            C
          </tspan>
          <tspan x="6.96" y="0" className="st2 st4">
            in 7
          </tspan>
        </text>
        <path
          d="M38.04 179.76L38.04 249.87"
          stroke={eightBitAdder.S[8] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M69.92 179.76L69.92 249.87"
          stroke={eightBitAdder.S[7] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M30.07 107.76L30.07 31.96"
          stroke={eightBitAdder.A[7] ? "blue" : "#000"}
          className="st5"
        ></path>
        <path
          d="M52.08 107.76L52.08 31.96"
          stroke={eightBitAdder.B[7] ? "blue" : "#000"}
          className="st5"
        ></path>
      </g>
    </svg>
  );
});

export default EightBitAdderCuricuitSvg;
