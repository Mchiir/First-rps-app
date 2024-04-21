      $(document).ready(function() {
        const wish = $('img');
        wish.click(function(){
            const alt_val = $(this).attr('alt');
            var res = Confirm(alt_val);
            // console.log(res);
            var result_div = $('#result');
            result_div.empty();
             var res = Confirm(alt_val);
                    if (res !== undefined) {
                        for(var values in res){
                            $('#result').append(res[values] +'<br>');
                        }
                        $('input[type="radio"]').prop('checked', false); // Clear all radio buttons
                        // window.location.reload();
                    }
        });
            function Confirm(choice) {
                var rock = $('img[alt="Rock"]').attr('alt');
                var paper = $('img[alt="Paper"]').attr('alt');
                var scissor = $('img[alt="Scissors"]').attr('alt');
                switch (choice) {
                    case rock:
                        console.log(choice);
                        var machine = Math.floor(Math.random() * 3) + 1;
                        if (machine === 1) {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt1 = 'Game tied';
                            return {input1: input1, input2: input2, txt1: txt1};
                        } else if (machine === 2) {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt2 = 'Machine wins';
                            return {input1: input1, input2: input2, txt2: txt2};
                        } else {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt3 = 'User wins';
                            return {input1: input1, input2: input2, txt3: txt3};
                        }
                        break;
                    case paper:
                    console.log(choice);
                        var machine = Math.floor(Math.random() * 3) + 1;
                        if (machine === 1) {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt1 = 'User wins';
                            return {input1: input1, input2: input2, txt1: txt1};
                        } else if (machine === 2) {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt2 = 'Game tied';
                            return {input1: input1, input2: input2, txt2: txt2};
                        } else {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt3 = 'Machine wins';
                            return {input1: input1, input2: input2, txt3: txt3};
                        }
                        break;
                    case scissor:
                    console.log(choice);
                        var machine = Math.floor(Math.random() * 3) + 1;
                        if (machine === 1) {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt1 = 'Machine wins';
                            return {input1: input1, input2: input2, txt1: txt1};
                        } else if (machine === 2) {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt2 = 'User wins';
                            return {input1: input1, input2: input2, txt2: txt2};
                        } else {
                            var input1 = 'User: '+ choice;
                            var input2 = 'Machine: Rock';
                            var txt3 = 'Game tied';
                            return {input1: input1, input2: input2, txt3: txt3};
                        }
                        break;

                    default:
                        console.log('Undefined inputs');
                }
            }
        });