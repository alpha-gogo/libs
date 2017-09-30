console.log("arrSort.js --> OK");

// 冒泡排序
function bubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				var tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	return arr;
}

// 封装选择排序
function choseSort(arr, flag) {
	for (var i = 0;i < arr.length - 1;i++) {
		for (var j = i + 1;j < arr.length;j++) {
			if (flag) {
				if (arr[i] > arr[j]) {  // 升序
				var temp;
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				}
			} else {
				if (arr[i] < arr[j]) {  // 降序
					var temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
	}
	return arr;
}

// 封装选择排序的方法
function choseSort1(arr, flag) {
	for (var i = 0;i < arr.length;i++) {
		var max = arr[i];
		for (var j = i + 1;j < arr.length;j++) {
			var index = i;  // 最大值的位置；
			if (flag) {
				if (arr[j] > max) {
					max = arr[j];
					index = j;
					var temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
			} else {
				if (arr[j] < max) {
					max = arr[j];
					index = j;
					var temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
			}
		}
	}
	return arr;
}

