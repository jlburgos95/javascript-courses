/* class SuperObject {
  static isObject(subject) {
    return typeof subject == "object";
  }

  static isArray(subject) {
    return Array.isArray(subject);
  }
  static deepCopy(subject) {
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
} */

function isObject(subject) {
  return typeof subject == "object" && !Array.isArray(subject);
}

function isArray(subject) {
  return Array.isArray(subject);
}

function SuperObject() {}
SuperObject.isObject = function isObject(subject) {
  return typeof subject == "object" && !Array.isArray(subject);
};
SuperObject.deepCopy = function deepCopy(subject) {
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
};
