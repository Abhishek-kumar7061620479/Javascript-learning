let employee

 emp_Name = "Abhishek"
 emp_Id = 2401713
 emp_Status = true
 emp_project = null
//  emp_Manager ; // this gives error because we cannot set the value for this.

 console.table([(emp_Name) , (emp_Id) , (emp_Status) , (emp_project)]);

 console.log(typeof(emp_Name));
 console.log(typeof(emp_Id));
 console.log(typeof(emp_Status));
 console.log(typeof(emp_project));
 // console.log(typeof(emp_Manager));

 let score = "33abc"

 /* 33 => 33
    "33" =>33
    "33abc" => NaN - Not a number !!
    null => 0
    true => 1
    false => 0

 */
  

 let valueNumber = Number(score);

 console.log(valueNumber); // gives output NaN 

 
 