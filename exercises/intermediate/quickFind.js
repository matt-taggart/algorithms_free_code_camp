let arr = setArray(10);

function setArray(n) {
  let id = [];

  for (let i = 0, len = 10; i < len; i++) {
      id[i] = i;
  }

  return id;
}

function connected(x, y) {
  return (arr[x] === arr[y]);
}

function union(p, q) {
  let pid = arr[p];
  let qid = arr[q];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === pid) arr[i] = qid;
  }
}
