const myFunction1 = function (x, y) {
    return {
        merge: function () {
            return x + " " + y;
        },
    };
};

const myFunction2 = function (x, y) {
    return {
        merge: function () {
            return x + " " + y;
        },
    };
};

module.exports = { myFunction1, myFunction2 };
