(function(){
	var dataPicker = {};
	dataPicker.getMonthData = function(year, month){
		//定义一个数组用于返回结果
		var ret = [];
		//如果没有获取到年份，没有获取到月份
		if(!year || !month){
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth();
		}
		
		//获取当月的第一天
		var firstDay = new Date(year, month - 1, 1);
		//获取当月的第一天是星期几
		var firstDayWeekday = firstDay.getDay();
		if (firstDayWeekday === 0) {
			firstDayWeekday = 7;
		}
		//获取上个月的最后一天
		var lastDayOfLastMonth = new Date(year, month - 1 , 0);
		// 获取上个月的最后一天是几号
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

		// 获取上一个月在这个月的天数
		var preMonthDayCount = firstDayWeekday - 1;
		// 获取当月的最后一天
		var lastDay = new Date(year, month, 0);

		// 获取当月的最后一天是几号
		var lastDate = lastDay.getDate();
		for (var i = 0; i < 7*6; i++) {
			// date表示在当月的日期是几号
			var date = i - preMonthDayCount + 1;
			var showDate = date;
			var thisMonth = month;
			// date <= 0表示上个月的日期
			if (date <= 0) {
				showDate = lastDateOfLastMonth + date;
				thisMonth = month - 1;
			}
			else if(date > lastDate){//下一个月
				thisMonth = month + 1;
				showDate = date - lastDate;
				if (thisMonth === 0) {
					thisMonth = 12;
				}
				if(thisMonth === 13){
					thisMonth = 1;
				}
			}
			ret.push({
					month:thisMonth,
					date:date,
					showDate:showDate
				});
			
		}


		return ret;
	};
	
	window.dataPicker = dataPicker;
})();