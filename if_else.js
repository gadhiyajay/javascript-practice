function btn(){
        let age = prompt("Enter your age :")
        if (age > 18 && age < 100){
            alert("Congratulations! You are eligible for Driving License")
        }
        else if(age>100){
            alert("Sorry! You are very old to drive so, you are not eligible for Driving License")
        }
        else{
            alert("Sorry! You are not eligible for Driving License")        
        }
}

function time(){
    now = prompt("Please Enter the time in 24hr format!")
    if (now>=5 && now<12){
        alert("GOOD MORNING")
    }
    else if (now>12 && now<15){
        alert("GOOD AFTERNOON")
    }
    else if (now>15 && now<19){
        alert("GOOD EVENING")
    }
    else{
        alert("GOOD NIGHT")
    }
}

function day(){
    day = prompt("Enter the no. of day(0 for Sunday, 7 for Saturday!)")
    switch(day){
        case '0':
            alert("Sunday")
            break;
        case '1':
                alert("Sunday")
                break;

                case '2':
                    alert("Monday")
                    break;
                    case '3':
            alert("Tuesday")
            break;
            case '4':
            alert("Wednesday")
            break;
            case '5':
            alert("Thrusday")
            break;
            case '6':
            alert("Friday")
            break;
            case '7':
            alert("Saturday")
            break;
            default:
                alert("Please Enter the number from the given range!")
            
    }
}