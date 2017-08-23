import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as THREE from 'three';
import ExpoTHREE from 'expo-three';

export default class MotionScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Expo.GLView
        style={styles.container}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }

  _onGLContextCreate = async (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

    const renderer = ExpoTHREE.createRenderer({ gl });

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new THREE.DodecahedronGeometry(1, 4);

    // const material = new THREE.MeshBasicMaterial( { wireframe: true } );

    const material = new THREE.MeshBasicMaterial({
      map: await ExpoTHREE.createTextureAsync({
        asset: Expo.Asset.fromModule(require('../../images/dot-2.png')),
      }),
    });

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    const render = () => {
      requestAnimationFrame(render);

      cube.rotation.x += 0.03;
  		cube.rotation.y += 0.02;

      renderer.render(scene, camera);

      gl.endFrameEXP();
    }
    render();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  }
})
