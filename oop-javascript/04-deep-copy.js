const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    editD(newD) {
      this.d = newD;
    },
    e: {
      f: "f",
      g: "g",
    },
  },
  editA(newA) {
    this.a = newA;
  },
  h: [1, 2, 3, 4, 5, 6],
};

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    const keyIsArray = isArray(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (keyIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

const obj2 = deepCopy(obj1);
console.log({ obj1, obj2 });
