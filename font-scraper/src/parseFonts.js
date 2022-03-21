export default (stacks) => {
  const fonts = {};

  stacks.forEach((stack) => {
    stack.split(',').forEach((font) => {
      const name = font.replace(/['"]/g, '').trim();
      const key = name.toLowerCase();

      if (!fonts[key] || name !== key) {
        fonts[key] = name;
      }
    });
  });

  return {
    fonts: Object.keys(fonts).map(k => fonts[k]),
    stacks,
  };
};
