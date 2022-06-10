//წინა დავალება

// function Car(make, model, year){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.getCarInfo = function(){
//         document.write(this.make + ' ' + this.model + ' released in ' + this.year + '<br>')
//     };
// }


// function Person(name,age){
//     this.name = name,
//     this.age = age,
//     this.personInfo = function(){
//         document.write(this.name + ' is ' + this.age + ' years old and drives ' + car.make + ' ' + car.model + ' released in ' + car.year + '<br>' );
//     }
// }

// var tom = new Person('Tom', 26);
// var car = new Car('Tesla', 'ModelS', '2022');


// car.getCarInfo();
// tom.personInfo();






// why undefined?!

// function Car(make, model, year){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.getCarInfo = function(){
//         document.write(this.make + ' ' + this.model + ' released in ' + this.year + '<br>')
//     };
// }


// function Person(name,age){
//     this.name = name,
//     this.age = age,
//     this.personInfo = function(){
//         document.write(this.name + ' is ' + this.age + ' years old and drives ' + Car.make + ' ' + Car.model + ' released in ' + Car.year + '<br>' );
//     }
// }

// var Tom = new Person('Tom', 26);
// var Tesla = new Car('Tesla', 'ModelS', '2022');


// Tesla.getCarInfo();
// Tom.personInfo();







//CLASSWORK


// Current Date

// var currentDate = new Date();

// document.write(currentDate); 



// mileseconds from 1970

// var myDate = new Date(100);
// document.write(myDate);


// var constDate = new Date('3 june 2022');
// document.write(constDate);


// const d = new Date();
// let day = d.getDate();   
// document.write(day);



// var days = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი', 'კვირა'];
// var month = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტ'];

// var myDate = new Date();

// var fullDate = 'დღეს ' + myDate.getFullYear() + ' წლის ' +  myDate.getDate() + ' ' + month[myDate.getMonth()] + ' ' + days[myDate.getDay()];

// document.write(fullDate);




//    ALARM


// var welcome;

// var myDate = new Date();

// var hour = myDate.getHours();

// var minute = myDate.getMinutes();

// var second = myDate.getSeconds();

// if (minute < 10) { 
//     second = '0' + minute;
// }
// if(hour < 12){
//     welcome = 'goodmorning';
// }
// else if (hour < 18) {
//     welcome = 'good afternoon'
// }
// else { 
//     welcome = 'goodnight'
// }

// document.write(welcome + ' its ' + hour + '.' + minute + ':' + second);



//  abs()    აბრუნებს აბსოლიტურ მნიშვნელობას

// var x = -25;
// document.write(Math.abs(x));


// Math.max გამოაქს უდიდესი მნიშვნელობა
// var max = Math.max(19,45);
// document.write(max);


//math.min გამოაქვს უმცირესი
// var min = Math.min(19,45);
// document.write(min);


// var z = Math.floor(9.2) //9

// var y = Math.ceil(9.2) // 10

// var q = Math.round(9.2) //9

// var r = Math.random();
// document.write(r); // ბეჭდავს რენდომ ელემენტს


// var test = Math.pow(2,4);
// document.write(test);     // დაბეჭდავს 2ის 4ე ხარისხს


// var sqr = Math.sqrt(121);
// document.write(sqr);        // დაბეჭდავს ფესვს 121დან



// var user = new Array('tom', 'bill', 'ann');
// var people = ['tom', 'bill', 'ann'];

// console.log(user);
// console.log(people);


// var users = new Array();
// users [0] = 'ann';
// users [1] = 'tom';
// users [2] = 'bill';

// document.write(users.length);
// for ( var i = 0; i < users.length; i++)

//     document.write(users[i]);




//         .push();  ამატებს ელემენტს მასივის ბოლოში
// var fruit = ['apple', 'peach', 'banana'];

// fruit.push('orange');

// document.write(fruit.length);
// document.write(fruit);




// //    .pop();    შლის მასივის ბოლო ელემენტს

// var fruit1 = ['apple', 'peach', 'banana'];

// var lastFruit = fruit1.pop();
// document.write(fruit1);




//Homework Fruit Pop/Push;

// var fruit = ['ვაშლი', 'მსხალი', 'ატამი'];

// fruit.pop('ატამი');
// fruit.pop('მსხალი');
// fruit.pop('ვაშლი');
// fruit.push('ატამი');
// fruit.push('მსხალი');
// fruit.push('ვაშლი');

// document.write(fruit);






// Homework Season periods

// var welcome;
// var month = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
// var day = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];

// var time = new Date();
// var month = time.getMonth();
// var day = time.getDay();

// if (month < 4){
//     welcome = 'ძალიან ცივა';
// }
// else if (month<9){
//     welcome = 'საზღვაო ამინდია'
// }
// if(month>=1 && month<=4 && day>4){
//     welcome = 'მივდივართ სათხილამუროოოოოოდ'
// }
// else{
//     welcome = 'ზღვაზე მივდივართ'
// };

// document.write(welcome + ' ' +  month + ' ' +  day);



//Homework Button Click Counter

// var button = document.getElementById('clickme');

// count = 0;
// button.onclick = function(){
//     count += 1;
//     button.innerHTML = 'clickme : ' + count;
// }
 

var button = document.getElementById('clickme');

count = 0;

button.onclick = function(){
    if ( count<10){
        count += 1;
    }
    else{
        count -= 1; 
    }
    button.innerHTML = 'clickme : ' + count;
}
 
 