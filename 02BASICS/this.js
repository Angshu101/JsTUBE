console.log(this);
//if its a normal/regukar function call this will return global or the window context run it on browser console to get better understanding
var user = {
  firstName: "Hitesh",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this);
    }
    sayHello();
  },
};

user.getCourseCount();
