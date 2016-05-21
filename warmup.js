var number = [2,1,2,3,1,1,2]

//takes in an array and a value to be removed
function remove(array,num){

	for(var i = 0; i < array.length; i++){
		//checking to see if the value at teh current index 
		// is equal the item to be removed
		if(array[i] === num)
		{
			array.splice(i,1);
			// however splice will skip over the next duplicate
			// if they are continous// we decrement by one to keep the index what it is before it entererd the check
			i--;
		}
	}

	return array;
}


function min(array){

	var min = number.POSITIVE_INFINITY;

	for(var i = 0; i < array.length; i++)
	{
		if(array[i] < min)
		{
			min = array[i]
		}
	}
	return min;
}


//Write a function squareAll that takes an array of numbers as a parameter and returns a new array of the input numbers squared

function sqaureAll(array)
{
	var newarray = [];
	for(i = 0; i < array.length; i++)
	{
        newarray.push(array[i]*array[i]);
	}

	return newarray;
}


//Write a function addArrays that takes 2 arrays of numbers as parameters and returns a new array where
//elements at same index position are added together. For example: addArrays([1,2,3], [4,3,2,1]); // => [5,5,5,1]

function addArrays(array1,array2)
{ 
   var newarray = [];

   // if array.lenth is equal // just add them
   if(array1.length == array2.length)
   {
   	for(i = 0 ; i < array1.length; i++)
   	{
       newarray.push(array1[i] + array2[i]);
   	}
   }
   else if(array1.length != array2.length) //check if the array.length is not equal
   {
       if(array1.length > array2.length) // check which array is greater
       {
          for(i=0; i < array2.length; i++)  // loop through the smaller array and add arrays
          {
          	var array1left = array1.length - array2.length; //  check the difference between the array
          	newarray.push(array1[i] + array2[i]);
          	
          }
          for(j=0; j < array1left; j++)
          	{
          		newarray.push(array1[array2.length+j]);   // 
          		//array1.pop();
          	}
       }
       else
       {
          for(i=0; i < array1.length; i++)
          {
          	var array2left = array2.length - array1.length;
          	newarray.push(array1[i] + array2[i]);
          	
          }
          for(k=0 ; k < array2left; k++)
          	{         		
          		newarray.push(array2[array1.length+k]);
          		//array2.pop();
          	}
       }
   }

   return newarray;
   
}

// do it recurrsion



function addArray(arr1, arr2) {
    var arrNew = [];
    if(arr1.length === arr2.length) {
        for(var i = 0; i<arr1.length; i++) {
            arrNew.push(arr1[i] + arr2[i]);
        }

        return arrNew;
    }
    else if(arr1.length < arr2.length) {
        arr1.push(0);
        return addArray(arr1, arr2);
    }
    else if(arr2.length < arr1.length) {
        arr2.push(0);
        return addArray(arr1, arr2);
    }
}