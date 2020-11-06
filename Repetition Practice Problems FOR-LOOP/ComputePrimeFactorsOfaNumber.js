let number = 420;
for (let j = 2; j <= number; j++) {
    let flag = true;
    for (let i = 2; i <= j / 2; i++) {
        if (j % i == 0 ) {
            flag = false;
            break;
        }
    }
    if (flag == true && number % j ==0)
        console.log(j);
}