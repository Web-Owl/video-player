function add(list: string[], item: string) {
  list.push(item);
  localStorage.setItem('products', JSON.stringify(list));
}

function remove(list: string[], id: number): void;
function remove(list: string[], id: string): void;

function remove(list: string[], id: string | number) {
  if (typeof id === "number") {
    list.splice(id, 1);
  } else if (typeof id === "string") {
    list.splice(+id, 1);
  } else {
    list.splice(+id, 1);
  }

  localStorage.setItem('products', JSON.stringify(list));
}

export {
  add,
  remove,
}