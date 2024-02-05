const req = require('request');
request(process.argv[2], function (error, response, body) {
    if (!error) {
        const todos = JSON.parse(body);
        let completedtasks = {};
        todos.forEach((todo) => {
            if (todo.completedtasks && completedtasks[todo.userId] === undefined) {
                completedtasks[todo.userId] = 1;
            } else if (todo.completedtasks) {
                completedtasks[todo.userId] += 1;
            }
        });
        console.log(completed);
    }
});
   
