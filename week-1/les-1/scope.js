const message = "Hello";
function sayHello() {
  const message = "Goodbye";
  function say() {
    const newMessage = "Yolo";
    console.log(message);
  }
  //   console.log(newMessage);
  console.log(message);
}

sayHello();
console.log(message);
