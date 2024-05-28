type ChangeCursorType = {
  type: 'default' | 'pointer';
};

export function changeCursor({ type }: ChangeCursorType) {
  document.documentElement.style.cursor = type;
}
