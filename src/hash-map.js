import { LinkedListForHashMap } from './linked-list';

function createHashMap() {
  const LOAD_FACTOR = 0.75;
  let capacity = 16;

  const hashMap = new Array(16);

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const hashCode = hash(key);

    if (hashCode < 0 || hashCode >= hashMap.length) {
      throw new Error('Trying to access index out of bounds');
    }

    let bucket = hashMap[hashCode];

    if (bucket) {
      if (!bucket.replace({ key, value })) {
        bucket.append({ key, value });
      }
    } else {
      bucket = new LinkedListForHashMap();
    }
    // check array length
    // if length increase capacity, increase capacity
  }

  return { set };
}
