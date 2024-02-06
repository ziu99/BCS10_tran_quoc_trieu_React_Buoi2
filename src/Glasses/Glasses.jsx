import React, { Component } from 'react';
import { GlassArray } from './data';

export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlass: null,
    };
  }

  handleGlassSelect = (glass) => {
    this.setState({ selectedGlass: glass });
  };

  render() {
    const { selectedGlass } = this.state;

    return (
      <div style={{ backgroundImage: `url('./index/src/Glasses/glassesImage/background.jpg')`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <img src="index/src/Glasses/glassesImage/model.jpg" alt="Model" style={{ width: '300px' }} />
          {selectedGlass && <img src={selectedGlass.url} alt="Selected Glass" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px' }} />}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {GlassArray.map((glass) => (
            <img key={glass.id} src={glass.img} alt={glass.name} style={{ width: '100px', margin: '0 10px', cursor: 'pointer' }} onClick={() => this.handleGlassSelect(glass)} />
          ))}
        </div>
      </div>
    );
  }
}
