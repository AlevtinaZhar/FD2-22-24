// Объект для тестирования

const complexObject = {
  name: "Test Object",
  age: 42,
  isActive: true,
  scores: [95, 88, 76, 100],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
    geo: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  tags: ["test", "example", "sample"],
  metadata: {
    version: 1.0,
    contributors: [
      { name: "Alice", role: "Author" },
      { name: "Bob", role: "Reviewer" },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
    preferences: {
      language: "en",
      timezone: "UTC",
    },
  },
  preferences: {
    colorScheme: "light",
    fontSize: 14,
    layout: {
      header: "fixed",
      footer: "static",
    },
  },
  history: [
    { event: "created", timestamp: "2023-10-01T10:00:00Z" },
    { event: "updated", timestamp: "2023-10-02T12:00:00Z" },
  ],
};

function primitiveData(obj) {
  return (
    obj === null ||
    obj === undefined ||
    typeof obj === "number" ||
    typeof obj === "string" ||
    typeof obj === "boolean"
  );
}

function arrayData(obj) {
  return Array.isArray(obj);
}

function objectData(obj) {
  return obj != null && typeof obj === "object";
}

function deepClone(obj) {
  if (primitiveData(obj)) {
    return obj;
  } else if (arrayData(obj)) {
    return obj.map((val) => {
      return deepClone(val);
    });
  } else if (objectData(obj)) {
    let result = {};
    for (let key in obj) {
        result[key] = deepClone(obj[key]);
    }
    return result;
  }
}

const obj2 = deepClone(complexObject);

console.log(obj2);
