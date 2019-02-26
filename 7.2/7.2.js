window.onload = function() {
    function count_elements(root, previous_count = []) {
        for (var i = 0; i < root.children.length; i++) {
            var child = root.children[i]

            if(previous_count[child.nodeName] == null)
                previous_count[child.nodeName] = 0

            previous_count[child.nodeName]++

            count_elements(child, previous_count)
        }

        return previous_count
    }

    console.log(count_elements(document.body))
}