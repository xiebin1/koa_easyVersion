function Stack() {
    var items = [];

    this.push = function (item) {
        items.push(item)
    }

    this.pop = function () {
        return items.pop()
    }

    this.top = function () {
        return items[items.length-1]
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.size = function () {
        return items.length
    }

    this.clear = function () {
        items = []
    }
}


//判断字符串括号是否合法
function is_leagl_brackets(string) {
    var stack = new Stack();

    for (let i = 0; i < string.length; i++) {
        var item = string[i];
        //遇到左括号 压入栈中
        if(item === '(') {
            stack.push(item)
        }
        //遇到右括号 先判断栈是否为空
        else if(item === ')') {
            //如果为空 返回false 不合法
            if(stack.isEmpty()) {
                return false
            }
            else {
                //否则将栈顶元素弹出/删除
                stack.pop();
            }
        }   
    }
    //最后判断栈是否为空
    return stack.isEmpty()
}

// console.log(is_leagl_brackets("sdf(ds(ew(we)rw)rwqq)asdws"))



//后缀表达式(逆波兰表达式)

function calc_exp(exp) {
    var stack = new Stack();

    for (let i = 0; i < exp.length; i++) {
        const item = exp[i];
        if(["+", "-", "*", "/"].indexOf(item) >= 0){
            var value_1 = stack.pop();
            var value_2 = stack.pop();
            var exp_str = value_2 + item + value_1;
            //计算并取整
            var res = parseInt(eval(exp_str));
            //计算结果放入栈中
            stack.push(res.toString());
        }else {
            stack.push(item)
        }
    }
    return stack.pop()
}

// console.log(calc_exp(["5","13", "2", "/", "+"]))

function MinStack() {
    var data_stack = new Stack();
    var min_stack = new Stack();

    this.push = function (item) {
        data_stack.push(item);

        if(min_stack.isEmpty() || item < min_stack.top()) {
            min_stack.push(item)
        }
        else {
            min_stack.push(min_stack.top())
        }
    }

    this.pop = function() {
        data_stack.pop()
        min_stack.pop()
    }

    this.min = function() {
        return min_stack.top()
    }
}