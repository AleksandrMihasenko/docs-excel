import {$} from '@core/Dom';

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $resizer.data.resize;
    let value;

    $resizer.css({ opacity: 1 });

    document.onmousemove = (e) => {
      if (type === 'col') {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;

        $resizer.css({
          right: -delta + 'px',
          top: 0, bottom: 0,
          height: '3000px',
        });
      } else {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;

        $resizer.css({
          bottom: -delta + 'px',
          left: 0, right: 0,
          width: '3000px',
        });
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type === 'col') {
        $parent.css({width: value + 'px'});
        $root
            .findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => el.style.width = value + 'px');
        $resizer.css({ opacity: 0, right: '-2px' });
      } else {
        $parent.css({ height: value + 'px' });
        $resizer.css({ opacity: 0, bottom: '-2px'});
      }

      resolve({
        value,
        id: type === 'col' ? $parent.data.col : null,
      });
    };
  });
}
