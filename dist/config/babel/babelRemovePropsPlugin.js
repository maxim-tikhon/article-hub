export default function () {
    return {
        visitor: {
            Program: function (path, state) {
                var forbidden = state.opts.props || [];
                path.traverse({
                    JSXIdentifier: function (current) {
                        var nodeName = current.node.name;
                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
