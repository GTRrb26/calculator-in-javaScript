
// console.log("hllo");
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '⇆':
                display.innerText = display.innerText.slice(0, -1);
                break;

            case '=':  
            try{
                display.innerText = eval(display.innerText);

            }catch{
                display.innerText = 'L-O-L';
            }
                display.innerText = eval(display.innerText);
                break;



            default:
                display.innerText += e.target.innerText;
        }


    });


});




// import java.util.Scanner;

// public class Calculator {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         double value;
//         System.out.print("Please select the operator(+,-,*,/) : ");
//         char operator1 = sc.next().charAt(0);

//         System.out.print("Enter number 1 : ");
//         double num1 = sc.nextDouble();
//         System.out.print("Enter number 2 : ");
//         double num2 = sc.nextDouble();

//         switch (operator1){
//             case '+':
//                 value = num1+num2;
//                 System.out.println("num1 + num2 value is " + value);
//                 break;
//             case '-':
//                 value = num1-num2;
//                 System.out.println("num1 - num2 value is " + value);
//                 break;
//             case '*':
//                 value = num1*num2;
//                 System.out.println("num1 * num2 value is " + value);
//                 break;
//             case '/':
//                 value = num1/num2;
//                 System.out.println("num1 / num2 value is " + value);
//                 break;
//             default:
//                 System.out.println("Invalid input! Please try again.");
//                 break;
//         }
//     }
// }