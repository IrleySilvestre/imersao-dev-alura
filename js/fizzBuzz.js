function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if (((i % 3)==0) && ((i % 5)==0)){
                console.log('FizBuzz')
        } else {
        if (((i % 3)==0) || ((i % 5)==0)) {
            if ((i % 3)==0) {
                console.log('Fizz')
            } else {
                console.log('Buzz')
            }
            } else {
                console.log(i)
            }
        }
    }

}

fizzBuzz(15)
