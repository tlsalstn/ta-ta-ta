export const getViewportSize = (): ViewportSize => ({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
});

type Unit = 'second' | 'minute' | 'hour';

export const unitToMillis = (unit: Unit): number => {
  if (unit === 'second') {
    return 1000;
  }

  if (unit === 'minute') {
    return 60 * 1000;
  }

  if (unit === 'hour') {
    return 60 * 60 * 1000;
  }

  return 0;
};

export const degreeToRadian = (degree: number) => (Math.PI / 180) * degree;

export const toggleFullscreen = function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

export const isMobile = (width: number) => {
  return width <= 768;
};