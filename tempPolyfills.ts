const requestAnimationFrame = (global as any).requestAnimationFrame = (callback :any) => {
  setTimeout(callback, 0);
};

export default requestAnimationFrame;
