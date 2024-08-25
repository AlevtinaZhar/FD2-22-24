// Функция для парсинга элемента в объект
function parseElement(element) {
    const obj = {
      tagName: element.tagName.toLowerCase(),
      attributes: {},
      children: Array.from(element.children).map(child => parseElement(child)),
    };
  
    Array.from(element.attributes).forEach(attr => {
      obj.attributes[attr.name] = attr.value;
    });
  
    return obj;
  }
  
  // Функция для создания списка из объекта
  function createList(obj) {
    const ul = document.createElement("ul");
  
    // Добавляем элемент с тегом
    const liTag = document.createElement("li");
    liTag.textContent = obj.tagName;
    ul.appendChild(liTag);
  
    // Добавляем атрибуты
    Object.entries(obj.attributes).forEach(([key, value]) => {
      const attrLi = document.createElement("li");
      attrLi.textContent = `${key}: ${value}`;
      ul.appendChild(attrLi);
    });
  
    // Добавляем дочерние элементы
    obj.children.forEach(child => {
      ul.appendChild(createList(child));
    });
  
    return ul;
  }
  
  // Получаем элемент, который нужно парсить
  const contentDiv = document.querySelector(".content");
  const parsedData = parseElement(contentDiv);
  
  // Выводим результат
  const outputDiv = document.getElementById("output");
  outputDiv.appendChild(createList(parsedData));