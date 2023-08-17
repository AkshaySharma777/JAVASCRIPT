     var a = 12;
     const b = 33;
     let c = 44;
     var d = 50;
     document.write(`<p>a = ${a}</p>`)
     document.write(`<p>b = ${b}</p>`)
     document.write(`<p>c = ${c}</p>`)
     document.write(`<p>d = ${d}</p><hr>`)
     if(d>20){
      document.write(`<p>a = ${a}</p>`)
      document.write(`<p>b = ${b}</p>`)
      document.write(`<p>c = ${c}</p>`)
      document.write(`<p>d = ${d}</p><hr>`)

      var x = 100;
      let y = 200;
      const z = 300;

      document.write(`<p>x = ${x}</p>`)
      document.write(`<p>y = ${y}</p>`)
      document.write(`<p>z = ${z}</p><hr>`)
     }
      document.write(`<p>x = ${x}</p>`)
    //   document.write(`<p>y = ${y}</p>`)
    //   document.write(`<p>z = ${z}</p><hr>`)

    var isAdmin = false;
    document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
    document.write(`<p>isAdmin = ${isAdmin}</p>`);

    var title = "Welcome to JS";
    document.write(`<p>title = ${typeof(title)}</p>`);
    document.write(`<p>title = ${title}</p>`);

    var xx = 12342;
    document.write(`<p>xx = ${typeof(xx)}</p>`);
    document.write(`<p>xx = ${xx}</p>`);

    var yy = 34.343;
    document.write(`<p>yy = ${typeof(yy)}</p>`);
    document.write(`<p>yy = ${yy}</p>`);

    var colors = ["orange", "blue", "red", "green", 100, true, 500.5]
    document.write(`<p>colors = ${typeof(colors)}</p>`);
    document.write(`<p>colors = ${colors}</p>`);

    var user = {
        name: "Ramesh",
        email: "ramesh@gmail.com"
    };
    document.write(`<p>user = ${typeof(user)}</p>`);
    document.write(`<p>user = ${user}</p>`)

    function defaultFun(){
        document.write(`<p>This is a Default Function</p>`);
    }
    defaultFun();

    function parameterFun(name, email){
        document.write(`<p>This is a Parameterized Function</p>`);
        document.write(`<p>First Parameter is : ${name}</p>`);
        document.write(`<p>Second Parameter is : ${email}</p>`);
    }
    parameterFun("JavaScript", "admin@javascript.com");