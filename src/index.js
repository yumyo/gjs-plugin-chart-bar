import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import {
  hChartBarRef
} from './consts';

export default grapesjs.plugins.add('gjs-chart-bar', (editor, opts = {}) => {
  let c = opts;

  let defaults = {
    blocks: [hChartBarRef],
    defaultStyle: 1,
    chartBarClsPfx: 'chart-bar',
    labelChartBar: 'Bar Chart',
    labelChartBarBlock: 'Bar Chart',
    labelChartBarCategory: 'Charts',
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  loadBlocks(editor, c);
  loadComponents(editor, c);
});
