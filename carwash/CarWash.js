const history = [];
const payments = {
    "+998901234567": [
        {amount: 30, is_paid: false}
    ]
};
const car_types = {
    sedan: 30,
    truck: 100,
    pick_up: 50
}
const clients = {
                "+998901234567":{
                    name:"Alex",
                    uses:0
                }
            }




const steps =  {
				drive_in_1: function () {
                    console.log("driving in ..")
                },
				close_windows_2: function () {
                    console.log("closing windows...")
                },
				wash_with_pure_water_3: function () {
                    console.log("washing_with_pure water ...")
                },
				soap_4: function () {
                    console.log("soaping...")
                },
				wash_with_pure_water_5: function () {
                    console.log("washing with pure water ...")
                },
				vosk_6: function () {},
				cleaning_with_micro_fiber_7: function () {
                    console.log("cleaning with micro fiber....")
                },
				driving_out_8: function () {
                    console.log("driving out ....")
                },
			}
			
		


function register (phone, name) {
            if(clients[phone]) {
                console.log("EXISTING_CLIENT");
                console.log("INCREASE_COUNT");
                clients[phone]["uses"]++;
                console.log("USES_INCREASED");
                return clients[phone]
            } else {
                console.log("UNEXISTING_CLIENT");
                console.log("INSERTING_NEW_CLIENT");
                clients[phone] = {
                    name,
                    uses:1
                }
                console.log("SETTING_PAYMENT_DATA")
                payments[phone] = []
                console.log("NEW_CLIENT_ADDED")

                return clients[phone]
            }
            }

console.log("CALL_1")
console.log(register("+998000000000","muzaffar"))
// console.log("CALL_2")
// console.log(register("+998000000000","muzaffar"))


function execute_steps () {
        for(let i of Object.keys(steps)) {
            const cur_func = steps[i]
            cur_func()
        }
}
console.log(payments)
execute_steps()

function set_bill (phone,car_type) {
    payments[phone].push({amount: car_types[car_type], is_paid: false})
    console.log("BILL_SET")
    console.log(payments[phone][payments[phone].length-1])
    console.log(payments)

} 
set_bill("+998000000000","sedan")

function pay (phone,amount) {
    
    const current_payment =payments[phone][payments[phone].length-1]

    if(current_payment.amount == amount) {
        payments[phone][payments[phone].length-1]["is_paid"] = true;
    } else {
        console.log("Incorrect amount paid")
        return;
    }
    console.log(payments)
}

console.log(pay("+998000000000",29))