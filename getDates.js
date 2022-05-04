function getDates(weekDay='', startDate, period=1, dateFormat=1, direction=1){
            try {
                let date = new Date(startDate);
                let endMonth = new Date(startDate);

                const arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                if(! arr.includes(weekDay)) {throw "Week day is not specified properly! should be one of: " + arr;}
                while(date.getDay() != arr.indexOf(weekDay)) {date.setDate(date.getDate() + 1);}    

                let days = [];
                let m;
                let d;
                let y;

                if(direction == -1){    // passing dates
                    endMonth.setMonth(date.getMonth() - period);  
                    endMonth = endMonth.getMonth();

                    if(dateFormat == 1){
                        while (date.getMonth() != endMonth) {
                            m = date.getMonth() + 1;
                            d = date.getDate();
                            y = date.getFullYear();
                    
                            days.push(
                            y + '-' +
                            (m < 10 ? '0' + m : m) + '-' +
                            (d < 10 ? '0' + d : d)
                            );
                            date.setDate(date.getDate() - 7);
                        }
                    }else if(dateFormat == 2){
                        while (date.getMonth() != endMonth) {
                            m = date.getMonth() + 1;
                            d = date.getDate();
                            y = date.getFullYear();
                    
                            days.push(
                            y + '/' +
                            (m < 10 ? '0' + m : m) + '/' +
                            (d < 10 ? '0' + d : d)
                            );
                            date.setDate(date.getDate() - 7);
                        }
                    }else{
                        while (date.getMonth() != endMonth) {
                            m = date.toLocaleString('default', { month: 'short' });
                            d = date.getDate();
                            y = date.getFullYear();
                    
                            days.push(
                            y + ' ' +
                            (m < 10 ? '0' + m : m) + ' ' +
                            (d < 10 ? '0' + d : d)
                            );
                            date.setDate(date.getDate() - 7);
                        }
                    }


                }else{      // coming dates
                    endMonth.setMonth(date.getMonth() + period);  
                    endMonth = endMonth.getMonth() + 1;

                    if(dateFormat == 1){
                        while (date.getMonth() != endMonth) {
                            m = date.getMonth() + 1;
                            d = date.getDate();
                            y = date.getFullYear();
                    
                            days.push(
                            y + '-' +
                            (m < 10 ? '0' + m : m) + '-' +
                            (d < 10 ? '0' + d : d)
                            );
                            date.setDate(date.getDate() + 7);
                        }
                    }else if(dateFormat == 2){
                        while (date.getMonth() != endMonth) {
                            m = date.getMonth() + 1;
                            d = date.getDate();
                            y = date.getFullYear();
                    
                            days.push(
                            y + '/' +
                            (m < 10 ? '0' + m : m) + '/' +
                            (d < 10 ? '0' + d : d)
                            );
                            date.setDate(date.getDate() + 7);
                        }            
                    }else{
                        while (date.getMonth() != endMonth) {
                            m = date.toLocaleString('default', { month: 'short' });
                            d = date.getDate();
                            y = date.getFullYear();
                    
                            days.push(
                            y + ' ' +
                            (m < 10 ? '0' + m : m) + ' ' +
                            (d < 10 ? '0' + d : d)
                            );
                            date.setDate(date.getDate() + 7);
                        }      
                    }

                }


                return days;
            } catch (err) {
                console.log(err)
            }
          
        }
