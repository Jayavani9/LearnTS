interface Rectangle {
    height: number,
    width: number
  }
  
  const rect1: Rectangle = {
    height: 20,
    width: 10
  };

  const rect2: Rectangle = {
    height: 30,
    width: 20
  }
  console.log(rect2);
  console.log(rect1.width);

  //Interface extending
  interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };