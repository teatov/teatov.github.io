import { icons } from '@iconify-json/tabler';
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';

export default (name: string) => {
  const iconData = getIconData(icons, name);

  if (!iconData) {
    throw new Error(`Icon "${name}" is missing`);
  }

  const renderData = iconToSVG(iconData, {});

  const svg = iconToHTML(replaceIDs(renderData.body), renderData.attributes);

  return svg;
};
