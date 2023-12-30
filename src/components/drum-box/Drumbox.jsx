import React from "react";
import "./drumbox.css";
import "../../App.css";

class Drumbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      isDisabled: false,
      bank: false,
      volume: 0.3,
      dragClear: false,
      kitname: "",
      displayVolume: false,
      padStyle: {
        pad1: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad2: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad3: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad4: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad5: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad6: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad7: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad8: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
        pad9: {
          backgroundColor: "#7d7d7d",
          boxShadow: "#202020 3px 3px 3px",
          transform: "none",
        },
      },
    };
    this.handlePower = this.handlePower.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }
  handlePower() {
    if (!this.state.power) {
      document.getElementById("blue-bar-1").style.float = "right";
      this.setState({
        power: true,
        isDisabled: false,
      });
    } else {
      document.getElementById("blue-bar-1").style.float = "left";
      this.setState({
        power: false,
        isDisabled: true,
        kitname: "",
      });
    }
  }
  handleBank() {
    if (this.state.power) {
      if (!this.state.bank) {
        document.getElementById("blue-bar-2").style.float = "right";
        this.setState({
          bank: true,
          kitname: "Smooth Piano Kit",
        });
        const b1 = document.getElementById("pad1").querySelector("audio");
        b1.src = "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
        const b2 = document.getElementById("pad2").querySelector("audio");
        b2.src = "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
        const b3 = document.getElementById("pad3").querySelector("audio");
        b3.src = "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
        const b4 = document.getElementById("pad4").querySelector("audio");
        b4.src =
          "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
        const b5 = document.getElementById("pad5").querySelector("audio");
        b5.src = "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
        const b6 = document.getElementById("pad6").querySelector("audio");
        b6.src = "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
        const b7 = document.getElementById("pad7").querySelector("audio");
        b7.src =
          "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
        const b8 = document.getElementById("pad8").querySelector("audio");
        b8.src = "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
        const b9 = document.getElementById("pad9").querySelector("audio");
        b9.src = "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
      } else {
        document.getElementById("blue-bar-2").style.float = "left";
        this.setState({
          bank: false,
          kitname: "Heater Kit",
        });
        const a1 = document.getElementById("pad1").querySelector("audio");
        a1.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
        const a2 = document.getElementById("pad2").querySelector("audio");
        a2.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
        const a3 = document.getElementById("pad3").querySelector("audio");
        a3.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
        const a4 = document.getElementById("pad4").querySelector("audio");
        a4.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
        const a5 = document.getElementById("pad5").querySelector("audio");
        a5.src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
        const a6 = document.getElementById("pad6").querySelector("audio");
        a6.src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
        const a7 = document.getElementById("pad7").querySelector("audio");
        a7.src = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
        const a8 = document.getElementById("pad8").querySelector("audio");
        a8.src = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
        const a9 = document.getElementById("pad9").querySelector("audio");
        a9.src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
      }
    } else {
      this.setState({
        kitname: "",
      });
    }
  }
  handleClick(event, padID) {
    if (this.state.power) {
      const updatedPadStyle = {
        ...this.state.padStyle,
        [padID]: {
          backgroundColor: "orange",
          boxShadow: "none",
          transform: "translateY(4px)",
        },
      };
      this.setState({ padStyle: updatedPadStyle });

      setTimeout(() => {
        const originalPadStyle = {
          ...this.state.padStyle,
          [padID]: {
            backgroundColor: "#7d7d7d",
            boxShadow: "#202020 3px 3px 3px",
            transform: "none",
          },
        };

        this.setState({ padStyle: originalPadStyle });
      }, 100);

      const audio = event.currentTarget.querySelector("audio");
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        audio.volume = this.state.volume;
      }
    } else {
      const updatedPadStyle = {
        ...this.state.padStyle,
        [padID]: {
          boxShadow: "none",
          transform: "translateY(4px)",
        },
      };
      this.setState({ padStyle: updatedPadStyle });
      setTimeout(() => {
        const originalPadStyle = {
          ...this.state.padStyle,
          [padID]: {
            backgroundColor: "#7d7d7d",
            boxShadow: "#202020 3px 3px 3px",
            transform: "none",
          },
        };

        this.setState({ padStyle: originalPadStyle });
      }, 100);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", function (event) {
      switch (event.key) {
        case "q":
        case "Q":
          document.getElementById("pad1").click();
          break;
        case "w":
        case "W":
          document.getElementById("pad2").click();
          break;
        case "e":
        case "E":
          document.getElementById("pad3").click();
          break;
        case "a":
        case "A":
          document.getElementById("pad4").click();
          break;
        case "s":
        case "S":
          document.getElementById("pad5").click();
          break;
        case "d":
        case "D":
          document.getElementById("pad6").click();
          break;
        case "z":
        case "Z":
          document.getElementById("pad7").click();
          break;
        case "x":
        case "X":
          document.getElementById("pad8").click();
          break;
        case "c":
        case "C":
          document.getElementById("pad9").click();
          break;
        default:
          break;
      }
    });

    document.addEventListener("click", (event) => {
      const clickedElement = event.target;
      if (this.state.bank === false) {
        switch (clickedElement.id) {
          case "pad1":
            this.setState({
              kitname: "Heater 1",
              dragClear: false,
            });
            break;
          case "pad2":
            this.setState({
              kitname: "Heater 2",
              dragClear: false,
            });
            break;
          case "pad3":
            this.setState({
              kitname: "Heater 3",
              dragClear: false,
            });
            break;
          case "pad4":
            this.setState({
              kitname: "Heater 4",
              dragClear: false,
            });
            break;
          case "pad5":
            this.setState({
              kitname: "Clap",
              dragClear: false,
            });
            break;
          case "pad6":
            this.setState({
              kitname: "Open HH",
              dragClear: false,
            });
            break;
          case "pad7":
            this.setState({
              kitname: "Kick n' Hat",
              dragClear: false,
            });
            break;
          case "pad8":
            this.setState({
              kitname: "Kick",
              dragClear: false,
            });
            break;
          case "pad9":
            this.setState({
              kitname: "Closed HH",
              dragClear: false,
            });
            break;
          default:
            break;
        }
      } else {
        switch (clickedElement.id) {
          case "pad1":
            this.setState({
              kitname: "Chord 1",
              dragClear: false,
            });
            break;
          case "pad2":
            this.setState({
              kitname: "Chord 2",
              dragClear: false,
            });
            break;
          case "pad3":
            this.setState({
              kitname: "Chord 3",
              dragClear: false,
            });
            break;
          case "pad4":
            this.setState({
              kitname: "Shaker",
              dragClear: false,
            });
            break;
          case "pad5":
            this.setState({
              kitname: "Open HH",
              dragClear: false,
            });
            break;
          case "pad6":
            this.setState({
              kitname: "Closed HH",
              dragClear: false,
            });
            break;
          case "pad7":
            this.setState({
              kitname: "Punchy Kick",
              dragClear: false,
            });
            break;
          case "pad8":
            this.setState({
              kitname: "Side Stick",
              dragClear: false,
            });
            break;
          case "pad9":
            this.setState({
              kitname: "Snare",
              dragClear: false,
            });
            break;
          default:
            break;
        }
      }
    });
  }
  handleVolume(event, audioId) {
    this.setState({ volume: event.target.value, displayVolume: true });
    const volume = parseFloat(event.target.value);
    const audio = document.getElementById(audioId);

    if (audio) {
      audio.volume = volume;
    }

    setTimeout(() => {
      this.setState({
        displayVolume: false,
        dragClear: true,
      });
    }, 400);
  }

  render() {
    const { padStyle, isDisabled, volume, displayVolume, kitname } = this.state;
    return (
      <div className="drum-box" id="display">
        <div className="drum-pads">
          <div
            className="pad drum-pad"
            id="pad1"
            onClick={(event) => this.handleClick(event, "pad1")}
            style={padStyle["pad1"]}
          >
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </div>
          <div
            className="pad drum-pad"
            id="pad2"
            onClick={(event) => this.handleClick(event, "pad2")}
            style={padStyle["pad2"]}
          >
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            W
          </div>
          <div
            className="pad drum-pad"
            id="pad3"
            onClick={(event) => this.handleClick(event, "pad3")}
            style={padStyle["pad3"]}
          >
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            E
          </div>
          <div
            className="pad drum-pad"
            id="pad4"
            onClick={(event) => this.handleClick(event, "pad4")}
            style={padStyle["pad4"]}
          >
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            A
          </div>
          <div
            className="pad drum-pad"
            id="pad5"
            onClick={(event) => this.handleClick(event, "pad5")}
            style={padStyle["pad5"]}
          >
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            S
          </div>
          <div
            className="pad drum-pad"
            id="pad6"
            onClick={(event) => this.handleClick(event, "pad6")}
            style={padStyle["pad6"]}
          >
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            D
          </div>
          <div
            className="pad drum-pad"
            id="pad7"
            onClick={(event) => this.handleClick(event, "pad7")}
            style={padStyle["pad7"]}
          >
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            Z
          </div>
          <div
            className="pad drum-pad"
            id="pad8"
            onClick={(event) => this.handleClick(event, "pad8")}
            style={padStyle["pad8"]}
          >
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            X
          </div>
          <div
            className="pad drum-pad"
            id="pad9"
            onClick={(event) => this.handleClick(event, "pad9")}
            style={padStyle["pad9"]}
          >
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            C
          </div>
        </div>
        <div className="controls">
          <div className="power">
            <p>Power</p>
            <div
              className="black-bar"
              id="power-button"
              onClick={this.handlePower}
            >
              <div className="blue-bar" id="blue-bar-1"></div>
            </div>
          </div>
          <div className="instrument-kit-name">
            <div className="kit-showcase">
              {displayVolume ? (
                <h3 className="kit-name">Volume: {Math.round(volume * 100)}</h3>
              ) : this.state.dragClear ? (
                <h3></h3>
              ) : this.state.power ? (
                <h3 className="kit-name">{kitname}</h3>
              ) : (
                <h3></h3>
              )}
            </div>
          </div>
          <div className="volume">
            <input
              className="slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue={this.state.volume}
              id="Range"
              disabled={isDisabled}
              onInput={(event) => this.handleVolume(event, "click")}
            />
          </div>
          <div className="bank">
            <p>Bank</p>
            <div
              className="black-bar"
              id="bank-button"
              onClick={this.handleBank}
            >
              <div className="blue-bar" id="blue-bar-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drumbox;
