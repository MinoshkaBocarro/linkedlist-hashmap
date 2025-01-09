/* eslint-disable no-use-before-define */
import { LinkedListForHashMap } from './linked-list';

function createHashMap() {
  const LOAD_FACTOR = 0.75;
  let capacity = 16;
  let size = 0;

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

    size += 1;
    if (size >= LOAD_FACTOR * capacity) {
      const entriesArray = entries();
      reHash(entriesArray);
    }
  }

  function get(key) {
    const { bucket } = getBucket(key);

    return bucket.get(key);
  }

  function has(key) {
    const { bucket } = getBucket(key);

    if (bucket.get(key)) {
      return true;
    }
    return false;
  }

  function remove(key) {
    const { bucket } = getBucket(key);

    const index = bucket.find({ key });

    if (index !== null) {
      bucket.removeAt(index);
      size -= 1;
      return true;
    }

    return false;
  }

  function length() {
    return size;
  }

  function clear() {
    hashMap.length = 0;
    hashMap.length = 16;
    size = 0;
    capacity = 16;
  }

  function traverseMap(searchItem) {
    let hashMapArray = [];

    hashMap.forEach((bucket) => {
      if (bucket && bucket.headNode !== null) {
        if (searchItem === 'values') {
          hashMapArray = hashMapArray.concat(bucket.getValuesArray());
        } else {
          hashMapArray = hashMapArray.concat(bucket.getKeysAndValuesArray());
        }
      }
    });

    return hashMapArray;
  }

  function values() {
    return traverseMap('values');
  }

  function entries() {
    return traverseMap('entries');
  }

  function reHash(rehashArray) {
    hashMap.length = 0;
    hashMap.length = capacity * 2;
    size = 0;
    capacity = capacity * 2;

    rehashArray.forEach((pair) => {
      set(pair[0], pair[1]);
    });
  }

  return { set, get, has, remove, length, clear, values, entries, hashMap };
}

export { createHashMap };
