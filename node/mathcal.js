/**
 * Created with JetBrains WebStorm.
 * User: C-Jarrick.Miao
 * Date: 11/16/12
 * Time: 12:57 PM
 * To change this template use File | Settings | File Templates.
 */
var match = function () {
    return{
        add:function () {
            var total=0, len = arguments.length;
            for (var i = 0; i < len; i++) {
                total += arguments[i];
                console.log(arguments[i]+'\n');
            }
            return total;
        },
        minus:function () {
            return "minus";
        }
    }
}
exports.match =new match();
