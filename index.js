function receivesAFunction(callback) {
    return callback()
}
function returnsANamedFunction(aNameFunction) {
    return function aNamedFunction() {

    }
}
function returnsAnAnonymousFunction(aFunction) {
    return function(aFunction) {

    }
}