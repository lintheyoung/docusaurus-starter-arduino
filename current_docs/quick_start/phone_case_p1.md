---
id: phone_case_p1
sidebar_position: 5
---

# L0-Arduino语法基础

## 课件下载
- [PDF](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Dedemaker_%E7%A7%91%E5%88%9B%E9%A1%B9%E7%9B%AE/%E7%A7%91%E5%88%9B%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98-%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%AF%BE%E7%A8%8BPDF.pdf)
- [PPT](https://dedemaker-1255717351.cos.ap-nanjing.myqcloud.com/Dedemaker_%E7%A7%91%E5%88%9B%E9%A1%B9%E7%9B%AE/%E7%A7%91%E5%88%9B%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98-%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%AF%BE%E7%A8%8BPPT.pptx)

## 课程使用到的代码
### HelloWorld代码
```arduino title="HelloWorld.ino"
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("Hello World!");
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("Hello");
  Serial.println("in loop in loop in loop"); // 有ln时候，就是会给一次回车，有换行的效果
  delay(500); // ms, 1000ms = 1s
}
```

### 数据类型学习
```arduino title="shujuleixing.ino"
int a_int = 1;
long a_long = 40000;
float a_float = 1.23;
float mouse_and_cat = 1.12234;
double a_double = 1.1212121212;
boolean a_bool = true; //
boolean b_bool = false;
boolean c_bool = 0; // true - 1; false - 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("a_int = ");
  Serial.println(a_int);
  Serial.print("a_long = ");
  Serial.println(a_long);

  Serial.print("a_float = ");
  Serial.println(a_float);
  Serial.print("mouse_and_cat = ");
  Serial.println(mouse_and_cat);

  Serial.print("a_double = ");
  Serial.println(a_double);
  Serial.print("a_bool = ");
  Serial.println(a_bool);

  Serial.print("b_bool = ");
  Serial.println(b_bool);
  Serial.print("c_bool = ");
  Serial.println(c_bool);

  delay(1000);
}
```

### if的使用
```arduino title="ifshiyong.ino"
int a = 3;

void setup() {
  Serial.begin(9600);
}

void loop() {
  if (a == 1) {
    Serial.println("a is equal to 1");
  } else if (a <= 2) {
    Serial.println("a is equal to 2");
  } else {
    Serial.println("a is not equal to 2 and 1");
  }

  delay(1000);
}
```

### for的使用
```arduino title="forshiyong.ino"
int a = 1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int cat = 0;
  for (cat = 10; cat >= 0; cat = cat - 1) {
    Serial.println(cat);
    delay(500);
  }

  Serial.println("for end");
}
```

### while的使用
```arduino title="whileshiyong.ino"
int a = 1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  a = 1;
  Serial.println("begin");
  while (a <= 4) {
    a = a + 1;
    Serial.println("I am in while");
    delay(1000);
  }

  Serial.println("end");
}
```

### 函数的使用
```arduino title="hanshushiyong.ino"
int a = 1;

// y = kx;
int fun_cat_y(int x) {
  x = x + 1;
  return x;
}

void fun_y_no_output(int x) {
  a = x;
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(a);
  fun_y_no_output(5);
  Serial.println(a);
  delay(1000);
}
```

### 最后的DEMO
一个简单的温度监测程序，通过串口监测环境温度，如果温度超过某个阈值，将触发一个警报！
```arduino title="demo.ino"
// 一个简单的温度监测程序，通过串口监测环境温度，如果温度超过某个阈值，将触发一个警报！
int temperatureThreshold = 25; // 温度阈值

void setup() {
  Serial.begin(9600); // 初始化我们的串口，波特率是9600
}

void loop() {
  int temperature = readTemperatue(); // 读取我们的环境温度值

  Serial.print("当前温度");
  Serial.println(temperature);

  if (temperature > temperatureThreshold) {
    tiggerAlarm(); // 温度超过阈值，触发警报
  }

  delay(1000);
}

// 获取环境温度值
int readTemperatue() {
  int temperature = random(101); // 会产生一个从0~100之间的int类型的数值
  return temperature;
}

// 触发警报
void tiggerAlarm() {
  Serial.println("温度过高！触发警报");
}
```

## 与ChatGPT的对话内容
> 什么是arduino ide，它的IDE是什么意思呢？

Arduino IDE是指Arduino集成开发环境（Integrated Development Environment），是一种用于编写、上传和调试Arduino板上程序的软件工具。它提供了一个用户友好的界面，方便开发人员编写和管理Arduino的代码。

IDE是"Integrated Development Environment"的缩写，翻译为中文是"集成开发环境"。它是一种软件工具，提供了一个集成的环境，用于开发、编码、调试和部署软件应用程序。IDE通常包含源代码编辑器、编译器、调试器和其他辅助工具，使开发人员能够在一个统一的界面中完成整个开发过程。Arduino IDE提供了这样的环境，专门用于开发Arduino板上的应用程序。

> 是否可以帮助我理解以下的代码呢？ void setup() { // put your setup code here, to run once: Serial.begin(9600); Serial.println("Hello World!"); } void loop() { // put your main code here, to run repeatedly: Serial.print("Hello"); Serial.println("in loop in loop in loop"); // 有ln时候，就是会给一次回车，有换行的效果 delay(500); // ms, 1000ms = 1s }

当我们阅读这段代码时，可以分为两个函数：`setup()`和`loop()`。

`setup()`函数在程序开始时只运行一次，它用于初始化设置。在这段代码中，`Serial.begin(9600)`用于初始化串口通信，将波特率设置为9600。`Serial.println("Hello World!")`会向串口输出打印一条消息："Hello World!"。这段代码的目的是在串口监视器上显示一条初始消息。

`loop()`函数是一个无限循环，它会不断地重复运行其中的代码。在这段代码中，`Serial.print("Hello")`会向串口输出打印一条消息："Hello"。接着，`Serial.println("in loop in loop in loop")`会向串口输出打印一条消息："in loop in loop in loop"，并在末尾添加一个换行符，这样下一次的输出将会另起一行。然后，`delay(500)`函数会使程序暂停500毫秒（0.5秒），以使输出之间有一定的延迟。

因此，当你将这段代码上传到Arduino板上运行时，它会在串口监视器上不断地打印出"Hello"和"in loop in loop in loop"，每次之间间隔0.5秒。


> 什么是波特率

波特率（Baud Rate）是衡量数据传输速度的单位，表示每秒传输的比特数（bits per second，简写为bps）。它用于衡量在串口通信中每秒传输的数据位数。

在串口通信中，发送和接收设备必须以相同的波特率进行通信，以确保数据能够正确地传输和解析。如果发送和接收设备的波特率不匹配，数据传输可能会出现错误或乱码。

常见的波特率值包括9600、19200、38400、57600、115200等。较低的波特率可以在较长的距离上提供更可靠的通信，而较高的波特率可以实现更快的数据传输速度，但可能对通信质量要求更高。

在Arduino中，通过调用`Serial.begin()`函数并指定特定的波特率参数来初始化串口通信的速度，确保与其他设备或计算机的通信速度一致。例如，`Serial.begin(9600)`将设置波特率为9600，表示每秒传输9600个比特的数据。

> delay的单位是什么

`delay()`函数是Arduino编程中用于暂停程序执行的函数。它使程序暂停指定的时间量，以毫秒（milliseconds，简写为ms）为单位。

在Arduino中，使用`delay()`函数可以指定程序暂停的时间长度。例如，`delay(500)`表示程序将暂停500毫秒（0.5秒）。这样可以在程序执行过程中创建延迟，以便控制程序的执行速度或实现时间相关的操作。

需要注意的是，`delay()`函数会阻塞程序的执行，即在延迟期间，程序无法执行其他任务。因此，如果需要同时执行多个任务或实现更精确的时间控制，可以使用非阻塞的延迟方法，例如使用`millis()`函数和计时器来实现时间控制。

> 在arduino中，int类型是什么呢？

在Arduino中，`int`是一种数据类型，用于表示整数（整型）。`int`是"integer"的缩写，它可以存储有符号的整数值。

`int`类型在Arduino中通常占用2个字节（16位），范围从-32,768到32,767。这意味着`int`类型可以表示从负数到正数的整数值。

例如，以下代码声明了一个名为`myVariable`的变量，类型为`int`，并赋值为10：

arduino

```arduino
int myVariable = 10;
```

你可以使用`int`类型的变量进行数学运算、逻辑判断和存储整数值。需要注意的是，`int`类型的变量在占用存储空间方面比较大，如果你只需要存储较小范围的整数，可以考虑使用更小的数据类型，例如`byte`或`short`。


> 那long的类型是什么呢？


在Arduino中，`long`是一种数据类型，用于表示长整数（长整型）。`long`可以存储更大范围的整数值，相比于`int`类型，它占用更多的存储空间。

`long`类型在Arduino中通常占用4个字节（32位），范围从-2,147,483,648到2,147,483,647。这意味着`long`类型可以表示更大的整数值。

以下是一个声明一个名为`myLongVariable`的`long`类型变量的示例：

arduino

```arduino
long myLongVariable = 1234567890;
```

你可以使用`long`类型的变量进行更大范围的数学运算和存储整数值。

需要注意的是，如果你只需要存储较小范围的整数，可以使用更小的数据类型来节省存储空间，例如`int`或`byte`。`long`类型在占用存储空间方面相对较大，因此在选择数据类型时需要根据需求权衡存储空间和所需数值范围。

> long占用的空间相比于int是多少倍

在Arduino中，`long`类型占用的存储空间相比于`int`类型要多两倍。具体而言，`int`类型通常占用2个字节（16位），而`long`类型通常占用4个字节（32位）。

换句话说，`long`类型使用的存储空间是`int`类型的两倍。这是因为`long`类型需要更多的位数来存储更大范围的整数值。通过增加存储空间，`long`类型可以表示更大的整数范围。

然而，需要注意的是，不同的平台和编译器可能会有所不同。上述提到的存储空间大小是Arduino平台上常见的情况，但在其他平台或编译器中，`int`和`long`的存储空间可能会有所不同。因此，在特定的开发环境中，最好查阅相关文档或参考指南来确定数据类型的存储空间大小。

> float类型和double类型代表什么，它们两个有什么区别呢？


在Arduino中，`float`和`double`都是用于表示浮点数（浮点型）的数据类型。

`float`是单精度浮点数类型，通常占用4个字节（32位）的存储空间。它可以用于存储较小范围的浮点数，大约可以表示6到7位有效数字。例如，`float`可以表示小数点后6位或7位的精度。

`double`是双精度浮点数类型，通常占用8个字节（64位）的存储空间。它可以用于存储更大范围和更高精度的浮点数，大约可以表示15位有效数字。因此，相比于`float`，`double`提供了更高的精度和更大的数值范围。

区别：

1.  存储空间：`float`占用4个字节，`double`占用8个字节。
2.  精度：`float`提供约6到7位有效数字，而`double`提供约15位有效数字。
3.  数值范围：由于`double`使用更多的位数来表示浮点数，所以它可以表示更大范围的数值。

在选择使用`float`还是`double`时，需要根据具体的需求权衡精度和存储空间。如果你需要高精度或需要处理较大的浮点数值范围，可以选择`double`类型。而如果你的应用对精度要求不高，或者需要节省存储空间，可以选择`float`类型。

> 是否可以给一些float和double的例子呢

当涉及到浮点数时，以下是一些使用`float`和`double`类型的示例：

使用`float`类型的示例：

arduino

```arduino
float temperature = 25.5;
float distance = 3.14159;
float voltage = 4.75;
```

使用`double`类型的示例：

arduino

```arduino
double pi = 3.14159265358979;
double largeNumber = 1234567890.123456789;
double acceleration = 9.81;
```

在这些示例中，我们使用`float`类型和`double`类型来存储不同的浮点数值。请注意，这些只是示例，你可以根据自己的需要来选择合适的数据类型和数值。

需要注意的是，对于某些Arduino板和特定的应用场景，使用`float`类型已经足够满足要求，而使用`double`类型可能会占用更多的存储空间和处理时间。因此，在选择数据类型时，应根据具体需求进行权衡和选择。

> 如何从这段代码中学习到arduino的数据类型呢？ int a\_int = 1; long a\_long = 40000; float a\_float = 1.23; float mouse\_and\_cat = 1.12234; double a\_double = 1.1212121212; boolean a\_bool = true; // boolean b\_bool = false; boolean c\_bool = 0; // true - 1; false - 0; void setup(){ Serial.begin(9600); } void loop(){ Serial.print("a\_int = "); Serial.println(a\_int); Serial.print("a\_long = "); Serial.println(a\_long); Serial.print("a\_float = "); Serial.println(a\_float); Serial.print("mouse\_and\_cat = "); Serial.println(mouse\_and\_cat); Serial.print("a\_double = "); Serial.println(a\_double); Serial.print("a\_bool = "); Serial.println(a\_bool); Serial.print("b\_bool = "); Serial.println(b\_bool); Serial.print("c\_bool = "); Serial.println(c\_bool); delay(1000); }


从上述代码中，我们可以学习到Arduino中的不同数据类型的使用方式和特性：

1.  `int`类型：用于存储整数值，例如`int a_int = 1;`。在`Serial.println()`中，`int`类型的值可以通过`Serial.print()`和`Serial.println()`函数来打印。

2.  `long`类型：用于存储较大范围的整数值，例如`long a_long = 40000;`。同样可以使用`Serial.print()`和`Serial.println()`函数来打印`long`类型的值。

3.  `float`类型：用于存储单精度浮点数值，例如`float a_float = 1.23;`。可以通过`Serial.print()`和`Serial.println()`函数来打印`float`类型的值。

4.  `double`类型：用于存储双精度浮点数值，例如`double a_double = 1.1212121212;`。同样可以使用`Serial.print()`和`Serial.println()`函数来打印`double`类型的值。

5.  `boolean`类型：用于存储布尔值，只能取`true`或`false`。例如`boolean a_bool = true;`和`boolean b_bool = false;`。在`Serial.println()`中，布尔值会被转换为相应的整数值进行打印，`true`对应1，`false`对应0。


通过在`setup()`函数中调用`Serial.begin(9600)`，我们初始化了串口通信，并设置波特率为9600。这样就可以使用`Serial.print()`和`Serial.println()`函数将数据发送到串口监视器。

在`loop()`函数中，我们通过`Serial.print()`和`Serial.println()`函数连续打印各个变量的值，并使用`delay(1000)`函数在每次循环之间添加1秒的延迟。

通过观察和分析这段代码，我们可以熟悉不同数据类型的声明、赋值、打印和使用方式，以及理解布尔值在Arduino中的处理方式。

> 是否可以通过这段代码，来教会我使用if呢？ int a = 3; void setup() { Serial.begin(9600); } void loop() { if (a == 1) { Serial.println("a is equal to 1"); }else if(a <= 2){ Serial.println("a is equal to 2"); }else{ Serial.println("a is not equal to 2 and 1"); } delay(1000); }

当你阅读并分析这段代码时，可以学习到如何使用`if`语句来进行条件判断和控制流程。以下是对代码的解释：

1.  在`setup()`函数中，我们初始化串口通信。

2.  在`loop()`函数中，我们使用`if`语句来进行条件判断。根据`a`的值，程序会执行不同的代码块。

3.  第一个`if`语句`if (a == 1)`检查`a`是否等于1。如果条件为真，即`a`等于1，那么程序将执行`if`语句块中的代码，即输出一条消息："a is equal to 1"。

4.  如果第一个条件不满足，程序将执行下一个`else if`语句，即`else if(a <= 2)`。这个条件检查`a`是否小于等于2。如果条件为真，程序将执行`else if`语句块中的代码，即输出一条消息："a is equal to 2"。

5.  如果前两个条件都不满足，即`a`既不等于1也不小于等于2，那么程序将执行`else`语句块中的代码，即输出一条消息："a is not equal to 2 and 1"。

6.  在每次循环结束后，使用`delay(1000)`函数添加1秒的延迟。


通过这段代码，你可以学习到如何使用`if`语句的基本语法结构，包括条件判断、`if`、`else if`和`else`的使用。你可以根据具体的条件和要求，编写自己的`if`语句来控制程序的行为。


> 在arduino代码中i++是什么意思呢？


在Arduino代码中，`i++`是一个简化的递增操作符，用于将变量`i`的值增加1。它是一个自增操作符，也称为后增量操作符。

具体而言，`i++`将变量`i`的值增加1，并返回原始的值作为表达式的结果。这意味着，如果`i`的初始值为5，执行`i++`后，`i`的值将变为6，并且整个表达式的结果为5。

以下是一个示例，演示了如何使用`i++`递增变量`i`的值：

arduino

```arduino
int i = 5;
i++; // 等同于 i = i + 1;
Serial.println(i); // 输出 6
```

在这个例子中，`i++`操作将`i`的值增加1，使其从5变为6。然后，使用`Serial.println()`函数将递增后的值输出到串口监视器。

需要注意的是，`i++`是一个后增量操作符，它会在递增之前返回原始值。如果你希望在递增之后返回新值，可以使用前增量操作符`++i`。例如，`++i`将先将`i`的值增加1，然后返回递增后的值。

总结起来，`i++`用于递增一个变量的值，并在递增前返回原始值。


> 请理解以下这个代码： int a = 1; void setup() { Serial.begin(9600); } void loop() { a = 1; Serial.println("begin"); while(a <= 4){ a = a + 1; Serial.println("I am in while"); delay(1000); } Serial.println("end"); }


这段代码演示了如何使用`while`循环结构在Arduino中进行迭代和条件控制。下面是对代码的解释：

1.  在`setup()`函数中，我们初始化了串口通信。

2.  在`loop()`函数中，我们首先将变量`a`的值设置为1，即`a = 1;`。

3.  然后，在串口监视器中打印一条消息："begin"，通过`Serial.println("begin");`语句。

4.  接下来，进入`while`循环。`while(a <= 4)`表示只要`a`小于等于4，就会一直执行循环内的代码块。

5.  在循环内部，首先将`a`的值增加1，即`a = a + 1;`。这样每次循环都会使`a`的值递增。

6.  然后，通过`Serial.println("I am in while");`打印一条消息："I am in while"。

7.  使用`delay(1000);`函数添加1秒的延迟。

8.  当`a`的值大于4时，`while`循环结束，程序继续执行下一行代码。

9.  最后，在串口监视器中打印一条消息："end"，通过`Serial.println("end");`语句。

10.  然后，程序再次回到`loop()`函数的开始处，继续执行，进入下一个循环。


通过这段代码，你可以学习到使用`while`循环结构在特定条件下重复执行代码块的方法。在每次循环中，我们递增`a`的值，并在满足条件时执行相应的代码。这个例子中的循环将执行4次，每次循环间隔1秒。


> 在外面的int a = 1和在loop里面的a = 1有什么区别呢？


在这段代码中，有两个地方出现了变量`a`的赋值操作。

1.  外部的`int a = 1;`是在全局作用域下声明并初始化了一个名为`a`的整型变量。这意味着该变量在整个程序中都可见，包括`setup()`函数和`loop()`函数。在此处初始化`a`为1后，它的值将保持不变，直到被重新赋值。

2.  在`loop()`函数内部的`a = 1;`是在局部作用域下对变量`a`进行赋值操作。这个赋值语句会在每次循环开始时执行。它将变量`a`的值重新设置为1，覆盖了之前的值。


所以，主要的区别在于作用域和执行时机：

*   外部的`int a = 1;`在全局作用域下初始化`a`变量，并且只执行一次。其作用范围包括整个程序。
*   内部的`a = 1;`在`loop()`函数内部，每次循环开始时都会执行。它会覆盖之前的值，将`a`重新设置为1。

这样，每次`loop()`函数被执行时，变量`a`都会被重新设置为1，然后进入后续的循环逻辑。

> 函数的意思是什么呢？


函数是一段完成特定任务的可重复使用的代码块。它封装了一系列的操作或算法，接收输入参数（可选）并返回一个结果（可选）。函数可以被调用多次，以实现相同的功能或执行相同的计算，提高代码的可维护性和重用性。

函数由函数名、参数列表、函数体和返回值组成。当调用函数时，传递给函数的参数值将被传递到函数的参数列表中。函数体中包含了具体的代码逻辑和算法，它会执行一系列操作，可能会修改输入参数的值，计算结果，并返回一个值作为函数的输出结果。

函数的使用可以使代码模块化，提高代码的可读性和可维护性。它可以将复杂的问题分解为更小的子任务，使代码更易于理解和管理。通过将相关操作封装在函数中，我们可以提高代码的重用性，减少代码冗余，以及更方便地进行代码的测试和调试。

在Arduino编程中，函数在`setup()`和`loop()`之外定义，可以在程序中的任何位置调用。Arduino提供了一些常用的函数，如`Serial.begin()`和`analogRead()`，同时你也可以自定义函数来执行你需要的任务。函数的使用可以让你更高效地编写和组织代码，并实现所需的功能。

> 请理解以下代码： int a = 1; // y = kx; int fun\_cat\_y(int x){ x = x + 1; return x; } void fun\_y\_no\_output(int x){ a = x; } void setup() { Serial.begin(9600); } void loop() { Serial.println(a); fun\_y\_no\_output(5); Serial.println(a); delay(1000); }


这段代码演示了函数的定义和调用。以下是对代码的解释：

1.  在全局作用域下，我们声明并初始化了一个整型变量 `a`，其初始值为 1。

2.  接下来，定义了两个函数：

    *   `fun_cat_y(int x)` 是一个带有一个整型参数 `x` 的函数。在函数体中，将 `x` 的值增加 1，并将结果返回。

    *   `fun_y_no_output(int x)` 是一个带有一个整型参数 `x` 的函数。在函数体中，将全局变量 `a` 的值设为 `x`。

3.  在 `setup()` 函数中，我们初始化了串口通信。

4.  在 `loop()` 函数中，我们连续执行了以下操作：

    *   使用 `Serial.println(a);` 打印全局变量 `a` 的值。

    *   调用 `fun_y_no_output(5);` 函数，并传入参数值 5。这个函数将全局变量 `a` 的值设为 5。

    *   使用 `Serial.println(a);` 再次打印全局变量 `a` 的值。

    *   使用 `delay(1000);` 函数添加 1 秒的延迟。


通过这段代码，你可以学习到函数的定义和调用的基本语法结构。你可以根据自己的需求编写函数，并在程序中多次调用这些函数，以实现特定的任务和功能。在 `loop()` 函数中，我们不断地打印全局变量 `a` 的值，然后通过调用函数 `fun_y_no_output()` 修改 `a` 的值，再次打印出新的值。这样就展示了函数对于代码重用和封装的作用。

> 为什么前面定义的int fun\_cat\_y(int x)代码，并没有在loop之前运行呢？


在这段代码中，`int fun_cat_y(int x)`函数的定义是在`loop()`函数之后的全局作用域内。在Arduino中，函数的定义可以放在函数调用之后，因为编译器会在代码执行之前对函数进行预处理。

在Arduino中，程序的执行从`setup()`函数开始，然后进入`loop()`函数，不会直接跳到函数定义的位置。函数定义的作用是提供函数的实现，以供调用时使用。因此，函数的定义可以放在调用它的位置之后。

在这段代码中，我们在`loop()`函数中调用了`fun_y_no_output(5)`函数，而函数定义位于`loop()`函数之后。这是因为编译器会先预处理函数的定义，然后才会执行到`loop()`函数并调用相应的函数。

总结起来，函数的定义可以放在调用位置之后，因为编译器会先进行预处理。这样，即使函数的定义位于调用位置之后，也不会影响函数的正确运行。

> 是否可以用大白话解释一下呢？不要解释太复杂


当编写代码时，函数的定义可以放在函数调用之后，因为编译器会先读取和处理函数的定义，然后再执行代码中的函数调用部分。所以，函数定义放在调用之后也是可以的，不会出错。编译器会知道函数的定义，并在需要时使用它。

这意味着我们可以在程序中的任何位置调用一个函数，只要该函数在之前的代码中已经定义过。函数的定义相当于给计算机一个指令集，告诉它如何执行特定的任务。当我们调用函数时，计算机会根据定义中的指令执行相应的任务。

所以，在这段代码中，尽管函数`fun_cat_y()`的定义位于`loop()`函数之后，但编译器会在执行`loop()`函数之前处理函数的定义，并在调用时使用它。这样，我们可以在`loop()`函数中调用`fun_cat_y()`函数，让它执行相应的任务，而不会出现错误。


> 请仔细的帮我理解这个代码？ // 一个简单的温度监测程序，通过串口监测环境温度，如果温度超过某个阈值，将触发一个警报！ int temperatureThreshold = 25; // 温度阈值 void setup(){ Serial.begin(9600); // 初始化我们的串口，波特率是9600 } void loop(){ int temperature = readTemperatue(); // 读取我们的环境温度值 Serial.print("当前温度"); Serial.println(temperature); if(temperature > temperatureThreshold){ tiggerAlarm(); // 温度超过阈值，触发警报 } delay(1000); } // 获取环境温度值 int readTemperatue(){ int temperature = random(101); // 会产生一个从0~100之间的int类型的数值 return temperature; } // 触发警报 void tiggerAlarm(){ Serial.println("温度过高！触发警报"); }


这段代码是一个简单的温度监测程序，使用Arduino通过串口监测环境温度，并在温度超过预设阈值时触发警报。让我们逐行解释代码的功能：

1.  `int temperatureThreshold = 25;` 声明并初始化一个整型变量 `temperatureThreshold`，用于存储温度的阈值。在此例中，阈值被设置为25。

2.  `void setup()` 是一个特殊的函数，在程序开始时运行一次，用于初始化设置。在这里，我们调用 `Serial.begin(9600)` 初始化串口通信，设置波特率为9600。

3.  `void loop()` 是另一个特殊的函数，在 `setup()` 函数运行后会不断地循环执行其中的代码。在这里，我们进行以下操作：

    *   `int temperature = readTemperature();` 调用 `readTemperature()` 函数读取环境温度值，并将其存储在整型变量 `temperature` 中。

    *   `Serial.print("当前温度");` 使用 `Serial.print()` 打印出一个文本消息："当前温度"。

    *   `Serial.println(temperature);` 使用 `Serial.println()` 打印出环境温度值 `temperature`。

    *   `if (temperature > temperatureThreshold)` 使用 `if` 语句进行条件判断，检查环境温度是否超过阈值。如果温度超过阈值，执行下面的代码块。

    *   `tiggerAlarm();` 调用 `tiggerAlarm()` 函数，触发警报。

    *   `delay(1000);` 使用 `delay()` 函数添加一个1秒的延迟，控制循环的速度。

4.  `int readTemperature()` 是一个自定义函数，用于获取环境温度值。在这个例子中，我们使用 `random(101)` 生成一个0到100之间的随机整数，并将其存储在 `temperature` 变量中，然后将其返回。

5.  `void tiggerAlarm()` 是另一个自定义函数，用于触发警报。在这里，我们使用 `Serial.println()` 打印出一条警报消息："温度过高！触发警报"。


通过这段代码，你可以学习到如何使用串口进行数据传输和打印，以及如何使用函数来模块化代码，实现温度监测和触发警报的功能。

> random函数要怎么使用呢？


`random()`函数是Arduino编程中用于生成随机数的函数。它可以生成指定范围内的随机整数。

`random()`函数有几种使用方式，下面是两种常见的用法：

1.  `random(max)`: 这种用法将生成一个从0到`max-1`之间的随机整数。例如，如果你调用`random(10)`，它将生成一个0到9之间的随机整数。

    arduino

    ```arduino
    int randomNumber = random(10);  // 生成0到9之间的随机整数
    ```

2.  `random(min, max)`: 这种用法将生成一个从`min`到`max-1`之间的随机整数。例如，如果你调用`random(5, 10)`，它将生成一个5到9之间的随机整数。

    arduino

    ```arduino
    int randomNumber = random(5, 10);  // 生成5到9之间的随机整数
    ```


在使用`random()`函数之前，还需要在程序的`setup()`函数中调用 `randomSeed()` 函数来初始化随机数生成器。可以使用不变的值（如`analogRead(0)`）或模拟引脚上的变化输入作为参数。这样可以确保每次运行程序时生成的随机数序列是不同的。

以下是一个使用`random()`函数生成随机数的示例：

arduino

```arduino
void setup() {
  Serial.begin(9600);
  randomSeed(analogRead(0));  // 初始化随机数生成器
}

void loop() {
  int randomNumber = random(10);  // 生成0到9之间的随机整数
  Serial.println(randomNumber);
  delay(1000);
}
```

在这个例子中，我们在`setup()`函数中初始化了随机数生成器，并在`loop()`函数中生成一个0到9之间的随机整数，并通过串口输出到监视器。每秒钟生成一个随机数并输出。