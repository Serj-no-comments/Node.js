const colors=require('colors');

const numb=process.argv.slice(2);

for(let i=0;i<numb.length;i++){
    if(isNaN(numb[i])){
        console.log("we have a trator");
        break;
    }else if(numb[i]%2==0){
        console.log(colors.red('WARNING!We need only simple numbers.'));
        break;
    } else {
        if(i==0){
            console.log(colors.red(numb[i]))
            i++;
        }else if(i==1){
            console.log(colors.yellow(numb[i]))
        }else if(i==2){
            console.log(colors.green(numb[i]))
        }  
    }
}
// Не отображается второая переменная массива.Помогите разобраться,пожалуйста