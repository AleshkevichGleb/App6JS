"use strict";

//task1
{
    let str = 'aaa@bbb@ccc'; 
    let newStr = str.replace(/@/g, '!',);
    console.log(newStr);
    console.log('\n');
}

//task2
{
   let date = '2025-12-31';
   console.log(date);
   date = date.replace(/-/g, '');
   console.log(date.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1'));
   console.log('\n');
}

//task3 
{
    let str = 'Я учу JavaScript';
    console.log(str.substring(2,5));
    console.log(str.substr(2,3));
    console.log(str.slice(2,5));
    console.log('\n');
}

//task4
{
    let sum = 0;
    let array = [4,2,5,19,13,0,10];
    for(let elem of array){
        sum += Math.pow(elem,3);
    }   
    console.log("квадратный корень из суммы кубов элементов = ", Math.sqrt(sum).toFixed(2));
    console.log('\n');
}


//task5
{
    let getMinus = (a,b) => Math.abs(a-b);

    console.log(getMinus(3,5));
    console.log(getMinus(6,1));

    console.log('\n');
}

//task6
{
    let date = new Date();

    const addZeroInDate = number => {
        if(number < 10) return number = '0' + number;
        else return number;
    }

    console.log(addZeroInDate(date.getHours())+':'+addZeroInDate(date.getMinutes())+':'+addZeroInDate(date.getSeconds())+' '
                +addZeroInDate(date.getDate())+'.'+addZeroInDate(date.getMonth())+'.'+date.getFullYear());

    console.log('\n');
}

//task7
{
    let str = 'aa aba abba abbba abca abea';
    console.log(str);

    let regex = (/ab*a/g);
    console.log(str.match(regex));

    console.log('\n');
}

//task8
{
    let checkPhoneNumber = number => {
        let regex = /^\+?\d{3}\s?\(?\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/g;
        return number +' - ' + regex.test(number);
    }

    console.log(checkPhoneNumber('375292015633'));
    console.log(checkPhoneNumber('+375 (29) 201-56-33'));

    console.log('\n');
}


//task9
{
    let checkEmail = (email) => {
        let regex = /^\w{2,}@[a-z]{2,11}.[a-z]{2,11}$/g;
        return email +' - '+regex.test(email);
    }

    console.log(checkEmail('mkcz_s32a@sdsdsd.aadsa'));

    console.log('\n');
}


//task10 не уверен в правильности
{
    let getParamsLink = link => {
        console.log(link)
        let domen = /^https?:\/\/[a-zA-Z.]*/g;
        let partWithoutParams = /\/\d{4}[\/\d\w-]*/g;
        let params = /u[\w=&_\d]*/g;
        let hesh = /#\w*$/g;
        console.log("Адрес доменного имени: "+link.match(domen));
        console.log("Остальная часть адреса без параметров: " + link.match(partWithoutParams));
        console.log("Параметры: " + link.match(params));
        console.log("Хеш "+ link.match(hesh));
    }   
    getParamsLink('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');
}