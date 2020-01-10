import {
  hChartBarRef,
  chartBarRef
} from './consts';

export default (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;
  const chartBarPfx = c.chartBarClsPfx || 'chart-bar';

  if (c.blocks.indexOf(hChartBarRef) >= 0) {
    bm.add(hChartBarRef, {
      label: `
        <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px;" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><rect x="15" y="55.001" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="29.999"/><rect x="35" y="15" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="70"/><rect x="74.999" y="25.001" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10.001" height="59.999"/><rect x="55" y="44.999" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="40.001">
        <div class="gjs-block-label">${c.labelChartBarBlock}</div>`,
      category: c.labelChartBarCategory,
      content: `
        <div class="${chartBarPfx}" data-gjs-droppable="false" data-gjs-custom-name="${c.labelChartBar}" data-gjs="${chartBarRef}">

            <div data-gjs-droppable="false" data-gjs-draggable="false"
            data-gjs-removable="false" data-gjs-copyable="false" data-gjs-highlightable="false"
            data-gjs-type="zing-chart-donut">
              <div class="chart"></div>
            </div>

          </div>
        </div>
      `,
    });
  }
}
