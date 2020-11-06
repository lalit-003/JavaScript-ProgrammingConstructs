let number = 50;
for (let j = 2; j <= number; j++) {
    let flag = true;
    for (let i = 2; i <= j / 2; i++) {
        if (j % i == 0 ) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(j);
}
