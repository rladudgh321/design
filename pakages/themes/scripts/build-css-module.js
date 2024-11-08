import * as theme from  '../dist/index.js'
import fs from 'fs';

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

const generateThemeCssVariables = () => {
  const cssString = [];
  Object.entries(theme.vars).forEach(([key,value]) => {
    // console.log(theme.vars.colors.$static)
    if(key === 'colors') {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if(colorKey === 'light') {
          const selector = ':root';

          const cssVariables = Object.entries(colorValue).map(([mainKey, mainValue]) => 
            Object.entries(mainValue).map(([subKey, subValue]) => `--${toCssCasting(mainKey)}-${subKey}: ${subValue};`).join('\n')
          ).join('\n');

          return cssString.push(`${selector} {\n${cssVariables}\n}`)
        } else if(colorKey === 'dark') {
          const selector = ":root .theme-dark";

          const cssVariables = Object.entries(colorValue).map(([mainKey, mainValue]) => {
            return Object.entries(mainValue).map(([subKey, subValue]) => `--${toCssCasting(mainKey)}-${subKey}: ${subValue};`).join('\n');
          }).join('\n');

          return cssString.push(`${selector} {\n${cssVariables}\n}`);
        }
      });
      return;
    }
      const selector = ':root';
      const cssVariables = Object.entries(value).map(([mainKey, mainValue]) => 
        Object.entries(mainValue).map(([subKey, subValue]) => `--${toCssCasting(mainKey)}-${subKey}: ${subValue};`).join('\n')
      ).join('\n');

      return cssString.push(`${selector} {\n${cssVariables}\n}`)
  });
  return cssString
}

const generateThemeCssClasses = () => {
  const cssString = [];
  Object.entries(theme.classes).forEach(([,value]) => {
    const cssClass = Object.entries(value).map(([mainKey,mainValue])=> {
      return Object.entries(mainValue).map(([subKey, subValue])=> {
        const className = `.${mainKey}${subKey}`;
        const style = Object.entries(subValue).map(([styleKey, styleValue]) => {
          return `${toCssCasting(styleKey)}: ${styleValue};`
        }).join('\n');
        return `${className} {\n${style}\n}`;
      }).join('\n');
    }).join('\n');
    return cssString.push(cssClass);
  })
  return cssString;
}

const generateThemeCss = () => {
  const variables = generateThemeCssVariables();
  const classes = generateThemeCssClasses();
  // console.log(variables);
  fs.writeFileSync('dist/themes.css', [...variables, ...classes].join('\n'));
}

generateThemeCss();
