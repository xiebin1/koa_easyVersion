function queueStack() {
    
    var queue1 = new Queue()
    var queue2 = new Queue()
    var data_queue = null;
    var empty_queue = null;

    var init_queue = function () {
        if(queue1.isEmpty() && queue2.isEmpty()) {
            data_queue = queue1;
            empty_queue = queue2;
        }
        else if(queue1.isEmpty()) {
            data_queue = queue2;
            empty_queue = queue1;
        }
        else {
            data_queue = queue1;
            empty_queue = queue2;
        }
    }
    this.push = function(item) {
        init_queue();
        data_queue.enqueue(item)
    }

}