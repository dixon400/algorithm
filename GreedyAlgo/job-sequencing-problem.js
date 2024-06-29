// Program to find the maximum profit
// job sequence from a given array
// of jobs with deadlines and profits

// function to schedule the jobs take 2
// arguments array and no of jobs to schedule

function printJobScheduling(arr, t){
	// length of array
	let n = arr.length;

	// Sort all jobs according to
	// decreasing order of profit
	for(let i=0;i<n;i++){ 
        console.log({i});

		for(let j = 0;j<(n - 1 - i);j++){
            console.log("Before",{j});
            console.log({arrj: arr[j][2], cm2: arr[j + 1][2]});
			if(arr[j][2] < arr[j + 1][2]){
                console.log("After");
                console.log({arrj: arr[j][2], cm2: arr[j + 1][2]});
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	// To keep track of free time slots
	let result = [];

	// To store result (Sequence of jobs)
	let job = [];
	for(let i = 0;i<t;i++){
		job[i] = '-1';
		result[i] = false;
	}

	// Iterate through all given jobs
	for(let i= 0;i<arr.length;i++){
		// Find a free slot for this job
		// (Note that we start from the
		// last possible slot)
		for(let j = (t - 1, arr[i][1] - 1);j>=0;j--){
			// Free slot found
			if(result[j] == false){
				result[j] = true;
				job[j] = arr[i][0];
				break;
			}
		}
	}

	// print the sequence
	console.log({job});
}

// Driver COde
arr = [['a', 2, 100], // Job Array
	['b', 1, 19],
	['c', 2, 27],
	['d', 1, 25],
	['e', 3, 15]];

console.log("Following is maximum profit sequence of jobs ");
console.log("<br>");

// Function Call
printJobScheduling(arr, 3) ;
