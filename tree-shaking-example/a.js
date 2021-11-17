function a1() {
  console.log("a1");
}

function a2() {
  // 不引用
  console.log("not_use_a2");
}

export default { a1, a2 };
