import React, { Component } from "react";
import Switch from "../components/Switch";
import Slider from "react-slider";
import styles from "./Layout.css";
import { ChromePicker } from "react-color";
import Logo from "../assets/logo.png";

class Layout extends Component {
  state = {
    hue: 0,
    saturation: 100,
    brightness: 100,
    hsl: { h: 0, s: 0, l: 0.1 },
    hue2: 0,
    saturation2: 100,
    brightness2: 100,
    hsl2: { h: 0, s: 0, l: 0.1 }
  };
  setHue = props => {
    this.setState({
      hue: props
    });
  };
  setSat = props => {
    this.setState({
      saturation: props
    });
  };
  setBright = props => {
    this.setState({
      brightness: props
    });
  };
  setSat2 = props => {
    this.setState({
      saturation2: props
    });
  };
  setBright2 = props => {
    this.setState({
      brightness2: props
    });
  };
  handleChange = (color, event) => {
    console.log(color);
    this.setState({
      hue: color.hsl.h,
      saturation: color.hsv.s * 100,
      brightness: color.hsv.v * 100,
      hsl: color.hsl
    });
  };
  handleChange2 = (color, event) => {
    console.log(color);
    this.setState({
      hue2: color.hsl.h,
      saturation2: color.hsv.s * 100,
      brightness2: color.hsv.v * 100,
      hsl2: color.hsl
    });
  };
  render() {
    return (
      <div className={styles.Layout}>
        <div className={styles.TopContainer}>
          <img src={Logo} alt="switch" className={styles.Title} />
          <div className={styles.SwitchContainer}>
            <Switch
              hue={this.state.hue}
              saturation={this.state.saturation}
              brightness={this.state.brightness}
              hue2={this.state.hue2}
              saturation2={this.state.saturation2}
              brightness2={this.state.brightness2}
            />
          </div>
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.Left}>
            <h1>Left Joycon</h1>
            <ChromePicker
              onChangeComplete={this.handleChange}
              color={this.state.hsl}
            />
            {/* <Slider
          defaultValue={0}
          className={styles.Slider}
          handleClassName={styles.Handler}
          onChange={getValue => this.setHue(getValue)}
          min={0}
          max={360}
        />
        <p>{this.state.hue}</p> */}
            <p>Saturation</p>
            <Slider
              defaultValue={100}
              className={styles.Slider}
              handleClassName={styles.Handler}
              onChange={getValue => this.setSat(getValue)}
              min={0}
              max={500}
            />
            <p>{this.state.saturation}</p>
            <p>Brightness</p>
            <Slider
              defaultValue={100}
              className={styles.Slider}
              handleClassName={styles.Handler}
              onChange={getValue => this.setBright(getValue)}
              min={0}
              max={200}
            />
            <p>{this.state.brightness}</p>
          </div>
          <div className={styles.Right}>
            <h1>Right Joycon</h1>
            <ChromePicker
              onChangeComplete={this.handleChange2}
              color={this.state.hsl2}
            />
            <p>Saturation</p>
            <Slider
              defaultValue={100}
              className={styles.Slider}
              handleClassName={styles.Handler}
              onChange={getValue => this.setSat2(getValue)}
              min={0}
              max={500}
            />
            <p>{this.state.saturation}</p>
            <p>Brightness</p>
            <Slider
              defaultValue={100}
              className={styles.Slider}
              handleClassName={styles.Handler}
              onChange={getValue => this.setBright2(getValue)}
              min={0}
              max={200}
            />
            <p>{this.state.brightness}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
