
() => 123

() => { return 123; }


var func1 = () => {
  this.hi = 1;

  var func2 = () => {
    console.log(this.hi);
  }

  func2();
}

func1();
