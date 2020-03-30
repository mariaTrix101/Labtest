
var resolvedPromise = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    });
};

var rejectedPromise = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ 'error': 'delayed exception!' });
        }, 500);
    });
};

function log_result(result) {
    console.log(result);
}

resolvedPromise()
    .then(log_result)
    .catch(log_result);

rejectedPromise()
    .then(log_result)
    .catch(log_result);
