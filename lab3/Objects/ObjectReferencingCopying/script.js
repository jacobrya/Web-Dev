let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);
  
  alert(clone.name); // John
  alert(clone.age); // 30