function loadRive() {
  new rive.Rive({
      // src: 'https://cdn.rive.app/animations/off_road_car_v7.riv',
      src: 'rive/earth.riv',
      canvas: document.getElementById('canvas'),
      autoplay: true,
    });
}