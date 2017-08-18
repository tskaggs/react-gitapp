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

  // This is called by the `Expo.GLView` once it's initialized
  _onGLContextCreate = async (gl) => {
    // Based on https://threejs.org/docs/#manual/introduction/Creating-a-scene
    // In this case we instead use a texture for the material (because textures
    // are cool!). All differences from the normal THREE.js example are
    // indicated with a `NOTE:` comment.

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

    // NOTE: How to create an `Expo.GLView`-compatible THREE renderer
    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    const geometry = new THREE.CircleGeometry( 1, 8 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const material = new THREE.MeshBasicMaterial({
    //   // NOTE: How to create an Expo-compatible THREE texture
    //   map: await ExpoTHREE.createTextureAsync({
    //     asset: Expo.Asset.fromModule(require('../../images/Octocat.png')),
    //   }),
    // });
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // const cube = new THREE.Mesh(geometry, material);
    var circle = new THREE.Mesh( geometry, material );
    scene.add(circle);

    camera.position.z = 5;

    const render = () => {
      requestAnimationFrame(render);

      circle.rotation.x += 0.07;
  		circle.rotation.y += 0.04;

      renderer.render(scene, camera);

      // NOTE: At the end of each frame, notify `Expo.GLView` with the below
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
