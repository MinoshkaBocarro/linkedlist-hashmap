import { LinkedListForHashMap } from './linked-list';

function createHashMap() {
  const LOAD_FACTOR = 0.75;
  let capacity = 16;
  let length = 0;

  const hashMap = new Array(16);

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function getBucket(key) {
    const hashCode = hash(key);

    if (hashCode < 0 || hashCode >= capacity) {
      throw new Error('Trying to access index out of bounds');
    }

    const bucket = hashMap[hashCode];

    return { hashCode, bucket };
  }

  function set(key, value) {
    const { hashCode, bucket } = getBucket(key);

    if (bucket) {
      if (!bucket.replace({ key, value })) {
        bucket.append({ key, value });
      }
    } else {
      hashMap[hashCode] = new LinkedListForHashMap();
      hashMap[hashCode].append({ key, value });
    }

    length += 1;
    if (length >= LOAD_FACTOR * capacity) {
      const extendArray = new Array(capacity);
      hashMap.push(...extendArray);
      // rehash here
      capacity = hashMap.length;
    }
  }

  return { set };
}

export { createHashMap };
